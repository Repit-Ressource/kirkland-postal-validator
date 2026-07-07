export default async function handler(req, res) {
  // CORS pour Fillout
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { postal, mode } = req.query;

  if (!postal) {
    return res.status(400).json({ 
      error: 'Code postal requis',
      isKirkland: false 
    });
  }

  // Nettoyer le code postal (enlever espaces, majuscules)
  const cleanPostal = postal.replace(/\s/g, '').toUpperCase();

  // Valider le format canadien (A1A1A1)
  const canadianPostalRegex = /^[A-Z]\d[A-Z]\d[A-Z]\d$/;
  if (!canadianPostalRegex.test(cleanPostal))
