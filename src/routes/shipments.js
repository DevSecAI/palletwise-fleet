// PAL-SAST-001: NoSQL injection via $where with user-supplied JS.
const mongoose = require("mongoose");
const { mongoUrl } = require("../config");

mongoose.connect(mongoUrl);
const Shipment = mongoose.model("Shipment", new mongoose.Schema({ trackingId: String, status: String }, { strict: false }));

module.exports = async function (fastify) {
  fastify.post("/shipments/search", async (req) => {
    // PAL-SAST-001: req.body.q is a JS expression, evaluated on each doc.
    const docs = await Shipment.find({ $where: req.body.q }).limit(50);
    return { shipments: docs };
  });
};
