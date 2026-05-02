// PAL-SAST-009: command injection via tracking number.
const { exec } = require("child_process");

function generateLabel(trackingNumber) {
  return new Promise((resolve, reject) => {
    exec(`/opt/palletwise/bin/print-label --track ${trackingNumber}`, (err, stdout) => {
      if (err) return reject(err);
      resolve(stdout);
    });
  });
}

module.exports = { generateLabel };
