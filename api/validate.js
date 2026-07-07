module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { postal } = req.query;

  if (!postal) {
    return res.status(400).json({ error: 'Code postal requis', isKirkland: false });
  }

  const cleanPostal = postal.replace(/\s/g, '').toUpperCase();

  const canadianPostalRegex = /^[A-Z]\d[A-Z]\d[A-Z]\d$/;
  if (!canadianPostalRegex.test(cleanPostal)) {
    return res.status(200).json({ postal: cleanPostal, isKirkland: false, error: 'Format invalide' });
  }

  try {
    const response = await fetch(`https://geocoder.ca/?postal=${cleanPostal}&json=1`);
    const data = await response.json();
    const city = (data.city || '').toLowerCase().trim();
    const isKirkland = city === 'kirkland';

    return res.status(200).json({
      postal: cleanPostal,
      city: data.city || 'Inconnu',
      province: data.prov || 'Inconnu',
      isKirkland: isKirkland
    });

  } catch (error) {
    return res.status(200).json({
      postal: cleanPostal,
      isKirkland: true,
      error: 'Validation indisponible'
    });
  }
};
