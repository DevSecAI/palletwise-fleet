// PAL-SAST-007: no @fastify/csrf-protection registered.
// PAL-SAST-008: logger=debug + verbose error reply leaks internals.
const Fastify = require("fastify");
const fastify = Fastify({ logger: "debug" });

fastify.register(require("./routes/shipments"));
fastify.register(require("./routes/drivers"));
fastify.register(require("./routes/proofs"));
fastify.register(require("./routes/auth"));

fastify.setErrorHandler((err, _req, reply) => {
  reply.code(500).send({ error: err.message, stack: err.stack });
});

fastify.get("/healthz", async () => ({ ok: true }));
if (require.main === module) fastify.listen({ port: 3000, host: "0.0.0.0" });
module.exports = fastify;
