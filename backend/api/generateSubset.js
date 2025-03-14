const { XMLParser, XMLBuilder } = require('fast-xml-parser');
const fs = require('fs-extra');
const path = require('path');

// const SITEMAP_DIR = path.join(__dirname, 'public', 'generated_sitemaps');
const SITEMAP_DIR = path.join(process.cwd(), 'public', 'generated_sitemaps');


// Function to determine content type based on URL
function determineContentType(url) {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split('/').filter(Boolean);

  // Common content type indicators
  const contentTypeIndicators = ['locations', 'doctors', 'conditions-and-treatments', 'forms', 'about'];

  for (const part of pathParts) {
    const lowercasePart = part.toLowerCase();
    if (contentTypeIndicators.includes(lowercasePart)) {
      return lowercasePart;
    }
    // Check for plural forms
    if (lowercasePart.endsWith('s') && contentTypeIndicators.includes(lowercasePart.slice(0, -1))) {
      return lowercasePart;
    }
  }

  // If no specific content type is found, use the first part of the path
  return pathParts[0] || 'other';
}

// Function to generate the sitemap subset
async function generateSitemapSubset(sitemapUrl, subsetSize) {
  try {
    // Fetch the sitemap XML from the URL using the native fetch (or node-fetch if needed)
    const response = await fetch(sitemapUrl);
    const xmlData = await response.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_"
    });
    const result = parser.parse(xmlData);

    if (!result.urlset || !Array.isArray(result.urlset.url)) {
      throw new Error('Invalid sitemap format');
    }

    const urls = result.urlset.url.map((url) => typeof url === 'string' ? url : url.loc);

    // Group URLs by content type
    const groupedUrls = {};
    urls.forEach((url) => {
      const contentType = determineContentType(url);
      if (!groupedUrls[contentType]) {
        groupedUrls[contentType] = [];
      }
      groupedUrls[contentType].push(url);
    });

    // Get subset for each group
    const subsetUrls = [];
    Object.entries(groupedUrls).forEach(([contentType, groupUrls]) => {
      const groupSubset = groupUrls.slice(0, subsetSize);
      subsetUrls.push(...groupSubset);
      console.log(`Content type: ${contentType}, Total URLs: ${groupUrls.length}, Subset size: ${groupSubset.length}`);
    });

    // Generate new sitemap XML
    const builder = new XMLBuilder({
      arrayNodeName: "url",
      format: true,
      ignoreAttributes: false,
      suppressEmptyNode: true
    });
    const newSitemap = builder.build({
      '?xml': { '@_version': '1.0', '@_encoding': 'UTF-8' },
      urlset: {
        '@_xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
        url: subsetUrls.map(url => ({ loc: url }))
      }
    });

    // Generate a unique ID for this sitemap
    const sitemapId = Date.now().toString();

    // Ensure the directory exists
    await fs.ensureDir(SITEMAP_DIR);

    // Write the sitemap to a file
    const filePath = path.join(SITEMAP_DIR, `${sitemapId}.xml`);
    await fs.writeFile(filePath, newSitemap);

    return {
      success: true,
      sitemapId,
      totalUrls: urls.length,
      subsetSize: subsetUrls.length
    };
  } catch (error) {
    throw new Error('Failed to process sitemap: ' + error.message);
  }
}

module.exports = generateSitemapSubset;
