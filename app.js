// app.js
const Parser = require('rss-parser');
const parser = new Parser();

(async () => {
  try {
    const feed = await parser.parseURL('https://www.reddit.com/.rss');
    console.log(`Titre du flux : ${feed.title}`);
    console.log('Articles :');
    feed.items.forEach((item, index) => {
      console.log(`\n${index + 1}. ${item.title}`);
      console.log(`   Lien : ${item.link}`);
      console.log(`   Publié le : ${item.pubDate}`);
    });
  } catch (error) {
    console.error('Erreur lors de la récupération du flux RSS :', error);
  }
})();
