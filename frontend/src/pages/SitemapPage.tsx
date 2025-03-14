import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { parseString } from 'xml2js';
import { XMLParser } from 'fast-xml-parser';

interface SitemapUrl {
  loc: string;
  [key: string]: string | undefined;
}

const SitemapDisplay: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from URL param
  const [sitemapUrls, setSitemapUrls] = useState<SitemapUrl[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchSitemap = async () => {
        try {
            const response = await fetch(`http://localhost:5000/generated_sitemaps/${id}.xml`);
            if (!response.ok) {
                throw new Error('Sitemap not found');
            }

            const xmlText = await response.text();

            const parser = new XMLParser({
                ignoreAttributes: false,
                attributeNamePrefix: "@_",
                parseTagValue: false, 
            });
          
            const result = parser.parse(xmlText);

            const urls = result.urlset.url || [];
            setSitemapUrls(urls.map((url: any) => ({ loc: url.loc })));

        } catch (error) {
            console.error('Error in fetch or parsing:', error);
            setError(error.message);
        }
    };

    fetchSitemap();
  }, [id]); 

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-lg mb-8">Sitemap {id}</h1>
      {sitemapUrls.length === 0 ? (
        <p>Loading sitemap...</p>
      ) : (
        <ul>
          {sitemapUrls.map((url, index) => (
            <li key={index} className="mb-2">
              <a href={url.loc} target="_blank" rel="noopener noreferrer">
                {url.loc}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SitemapDisplay;
