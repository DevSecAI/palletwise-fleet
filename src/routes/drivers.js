// PAL-SAST-002: mass assignment via Object.assign(doc, req.body).
const mongoose = require("mongoose");
const Driver = mongoose.model("Driver", new mongoose.Schema({}, { strict: false }));

module.exports = async function (fastify) {
  fastify.patch("/drivers/:id", async (req) => {
    const d = await Driver.findById(req.params.id);
    Object.assign(d, req.body);  // PAL-SAST-002: role / verified flags can be set
    await d.save();
    return d;
  });
};
