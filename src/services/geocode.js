// PAL-SAST-004: SSRF via axios on caller URL.
const axios = require("axios");

async function geocode(url) {
  const r = await axios.get(url, { timeout: 5000 });
  return r.data;
}

module.exports = { geocode };
