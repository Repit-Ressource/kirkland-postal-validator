const KIRKLAND_CODES = new Set(["H9J0A1","H9J0A2","H9J0A3","H9J1A1","H9J1A2","H9J1A3","H9J1A4","H9J1A5","H9J1A6","H9J1A7","H9J1A8","H9J1A9","H9J1B1","H9J1B2","H9J1B3","H9J1B4","H9J1B5","H9J1B6","H9J1B7","H9J1B8","H9J1B9","H9J1C1","H9J1C2","H9J1C3","H9J1C4","H9J1C5","H9J1C6","H9J1C7","H9J1C8","H9J1C9","H9J1E1","H9J1E2","H9J1E3","H9J1E4","H9J1E5","H9J1E6","H9J1E7","H9J1E8","H9J1E9","H9J1G1","H9J1G2","H9J1G3","H9J1G4","H9J1G5","H9J1G6","H9J1G7","H9J1G8","H9J1G9","H9J1H1","H9J1H2","H9J1H3","H9J1H4","H9J1H5","H9J1H6","H9J1H7","H9J1H8","H9J1H9","H9J1J1","H9J1J2","H9J1J3","H9J1J4","H9J1J5","H9J1J6","H9J1J7","H9J1J8","H9J1J9","H9J1K1","H9J1K2","H9J1K3","H9J1K4","H9J1K5","H9J1K6","H9J1K7","H9J1K8","H9J1K9","H9J1L1","H9J1L2","H9J1L3","H9J1L4","H9J1L5","H9J1L6","H9J1L7","H9J1L8","H9J1L9","H9J1M1","H9J1M4","H9J1M5","H9J1M6","H9J1M7","H9J1M8","H9J1M9","H9J1N1","H9J1N2","H9J1N3","H9J1N4","H9J1N5","H9J1N6","H9J1N7","H9J1N8","H9J1N9","H9J1P1","H9J1P2","H9J1P3","H9J1P4","H9J1P5","H9J1P6","H9J1P7","H9J1P8","H9J1P9","H9J1R1","H9J1R2","H9J1R3","H9J1R4","H9J1R5","H9J1R6","H9J1R7","H9J1R8","H9J1R9","H9J1S1","H9J1S2","H9J1S3","H9J1S4","H9J1S5","H9J1S6","H9J1S7","H9J1S8","H9J1S9","H9J1T1","H9J1T2","H9J1T3","H9J1T4","H9J1T5","H9J1T6","H9J1T7","H9J1T8","H9J1T9","H9J1V1","H9J1V2","H9J1V3","H9J1V4","H9J1V5","H9J1V6","H9J1V7","H9J1V8","H9J1V9","H9J1W1","H9J1W2","H9J1W3","H9J1W4","H9J1W5","H9J1W6","H9J1W7","H9J1W8","H9J1W9","H9J1X1","H9J1X2","H9J1X3","H9J1X4","H9J1X5","H9J1X6","H9J1X7","H9J1X8","H9J1X9","H9J1Y1","H9J1Y2","H9J1Y3","H9J1Y4","H9J1Y5","H9J1Y6","H9J1Y7","H9J1Y8","H9J1Y9","H9J1Z1","H9J1Z2","H9J1Z3","H9J1Z4","H9J1Z5","H9J1Z6","H9J1Z7","H9J1Z8","H9J1Z9","H9J2A1","H9J2A2","H9J2A3","H9J2A4","H9J2A5","H9J2A6","H9J2A7","H9J2A8","H9J2A9","H9J2B1","H9J2B2","H9J2B3","H9J2B4","H9J2B5","H9J2B6","H9J2B7","H9J2B8","H9J2B9","H9J2C1","H9J2C2","H9J2C3","H9J2C4","H9J2C5","H9J2C6","H9J2C7","H9J2C8","H9J2C9","H9J2E1","H9J2E2","H9J2E3","H9J2E4","H9J2E5","H9J2E6","H9J2E7","H9J2E8","H9J2E9","H9J2F6","H9J2G1","H9J2G2","H9J2G3","H9J2G4","H9J2G5","H9J2G6","H9J2G7","H9J2G8","H9J2G9","H9J2H1","H9J2H2","H9J2H3","H9J2H4","H9J2H5","H9J2H6","H9J2H7","H9J2H8","H9J2H9","H9J2J1","H9J2J2","H9J2J3","H9J2J4","H9J2J5","H9J2J6","H9J2J7","H9J2J8","H9J2J9","H9J2K1","H9J2K2","H9J2K3","H9J2K4","H9J2K5","H9J2K6","H9J2K7","H9J2K8","H9J2K9","H9J2L1","H9J2L2","H9J2L3","H9J2L5","H9J2L6","H9J2L7","H9J2L8","H9J2L9","H9J2M1","H9J2M2","H9J2M3","H9J2M4","H9J2M5","H9J2M6","H9J2M7","H9J2M8","H9J2M9","H9J2N1","H9J2N2","H9J2N3","H9J2N4","H9J2N5","H9J2N6","H9J2N7","H9J2N8","H9J2N9","H9J2P1","H9J2P2","H9J2P3","H9J2P4","H9J2P5","H9J2P6","H9J2P7","H9J2P8","H9J2P9","H9J2R1","H9J2R2","H9J2R3","H9J2R4","H9J2R5","H9J2R6","H9J2R8","H9J2S1","H9J2S2","H9J2S3","H9J2S4","H9J2S5","H9J2S6","H9J2S7","H9J2S8","H9J2S9","H9J2T1","H9J2T2","H9J2T3","H9J2T4","H9J2T5","H9J2T6","H9J2T7","H9J2T8","H9J2T9","H9J2V1","H9J2V2","H9J2V3","H9J2V4","H9J2V5","H9J2V6","H9J2V7","H9J2V8","H9J2V9","H9J2W1","H9J2W2","H9J2W3","H9J2W4","H9J2W5","H9J2W6","H9J2W7","H9J2W8","H9J2W9","H9J2X1","H9J2X2","H9J2X3","H9J2X4","H9J2X5","H9J2X6","H9J2X7","H9J2X8","H9J2X9","H9J2Y1","H9J2Y2","H9J2Y3","H9J2Y4","H9J2Y5","H9J2Y6","H9J2Y7","H9J2Y8","H9J2Y9","H9J2Z1","H9J2Z2","H9J2Z3","H9J2Z4","H9J2Z5","H9J2Z6","H9J2Z7","H9J2Z8","H9J2Z9","H9J3A1","H9J3A2","H9J3A3","H9J3A4","H9J3A5","H9J3A6","H9J3A8","H9J3A9","H9J3B1","H9J3B2","H9J3B3","H9J3B4","H9J3B5","H9J3B6","H9J3B8","H9J3B9","H9J3C1","H9J3C2","H9J3C3","H9J3C4","H9J3C5","H9J3C6","H9J3C7","H9J3C8","H9J3E1","H9J3E2","H9J3E3","H9J3E4","H9J3E9","H9J3G1","H9J3G5","H9J3H2","H9J3H7","H9J3H8","H9J3J5","H9J3J8","H9J3J9","H9J3K1","H9J3K3","H9J3K4","H9J3K5","H9J3K6","H9J3K7","H9J3K8","H9J3K9","H9J3L1","H9J3L2","H9J3L3","H9J3L4","H9J3L5","H9J3L6","H9J3L7","H9J3L8","H9J3L9","H9J3M1","H9J3M2","H9J3M3","H9J3M4","H9J3M5","H9J3M6","H9J3M7","H9J3M8","H9J3M9","H9J3N1","H9J3N2","H9J3N3","H9J3N4","H9J3N5","H9J3N6","H9J3N7","H9J3N8","H9J3N9","H9J3P1","H9J3P2","H9J3P3","H9J3P4","H9J3P5","H9J3P6","H9J3P7","H9J3P8","H9J3P9","H9J3R1","H9J3R2","H9J3R3","H9J3R4","H9J3R5","H9J3R6","H9J3R7","H9J3R8","H9J3R9","H9J3S1","H9J3S2","H9J3S3","H9J3S4","H9J3S5","H9J3S6","H9J3S7","H9J3S8","H9J3S9","H9J3T1","H9J3T2","H9J3T3","H9J3T4","H9J3T5","H9J3T6","H9J3T7","H9J3T8","H9J3T9","H9J3V1","H9J3V2","H9J3V3","H9J3V4","H9J3V5","H9J3V6","H9J3V7","H9J3V8","H9J3V9","H9J3W1","H9J3W2","H9J3W3","H9J3W4","H9J3W5","H9J3W6","H9J3W7","H9J3W8","H9J3W9","H9J3X1","H9J3X2","H9J3X3","H9J3X4","H9J3X5","H9J3X6","H9J3X7","H9J3X8","H9J3X9","H9J3Y1","H9J3Y2","H9J3Y3","H9J3Y4","H9J3Y5","H9J3Y6","H9J3Y7","H9J3Y8","H9J3Y9","H9J3Z1","H9J3Z2","H9J3Z3","H9J3Z4","H9J3Z5","H9J3Z6","H9J3Z7","H9J3Z8","H9J3Z9","H9J4A1","H9J4A2","H9J4A3","H9J4A4","H9J4A5","H9J4A6","H9J4A7","H9J4A8","H9J4A9","H9J4B1","H9J4B2","H9J4B3","H9J4B4","H9J4B5","H9J4B6","H9J4B7","H9J4B8","H9J4B9","H9J4C1","H9J4C2","H9J4C3","H9J4C4","H9J4C5","H9J4C6","H9J4C7","H9J4C8","H9J4C9","H9J4E1","H9J4E2"]);

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
    const response = await fetch(
      `https://geocoder.ca/?postal=${cleanPostal}&geoit=xml&json=1&showcountry=1&showcity=1`,
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    );
    const data = await response.json();

    if (data.success === false) {
      // API throttlée — on utilise la liste statique comme filet de secours
      const isKirkland = KIRKLAND_CODES.has(cleanPostal);
      return res.status(200).json({
        postal: cleanPostal,
        isKirkland: isKirkland,
        source: 'static_fallback'
      });
    }

    const city = (data.standard?.city || data.city || '').toLowerCase().trim();
    const isKirkland = city === 'kirkland';

    return res.status(200).json({
      postal: cleanPostal,
      city: data.standard?.city || data.city || 'Inconnu',
      province: data.standard?.prov || data.prov || 'Inconnu',
      isKirkland: isKirkland,
      source: 'api'
    });

  } catch (error) {
    const isKirkland = KIRKLAND_CODES.has(cleanPostal);
    return res.status(200).json({
      postal: cleanPostal,
      isKirkland: isKirkland,
      source: 'static_fallback',
      error: error.message
    });
  }
};
