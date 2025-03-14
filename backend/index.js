const express = require('express');
const app = express();
const path = require('path');
const generateSitemapSubset = require('./api/generateSubset');
const port = 5000;
const cors = require('cors');


app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Search demo backend server.'); 
});

app.use(express.json());


app.post('/api/generate-subset', async (req, res) => {
  const { sitemapUrl, subsetSize } = req.body;
  console.log(res)

  if (!sitemapUrl || !subsetSize) {
    return res.status(400).json({ error: 'Sitemap URL and subset size are required.' });
  }

  try {
    const result = await generateSitemapSubset(sitemapUrl, subsetSize);
    res.status(200).json(result); 
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
});

// Serve static files (make sure the "public" folder is being served)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Backend is running at http://localhost:${port}`);
});
