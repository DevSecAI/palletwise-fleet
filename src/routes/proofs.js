// PAL-SAST-005: path traversal on PoD attachment download.
const path = require("path");
const fs = require("fs");

const ROOT = "/var/palletwise/pods";

module.exports = async function (fastify) {
  fastify.get("/proofs/:filename", async (req, reply) => {
    const target = path.join(ROOT, req.params.filename);
    if (!fs.existsSync(target)) return reply.code(404).send();
    return reply.send(fs.createReadStream(target));
  });
};
