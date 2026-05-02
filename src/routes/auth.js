// PAL-SAST-010: /login has no rate limiting.
module.exports = async function (fastify) {
  fastify.post("/login", async (req) => {
    const { email, password } = req.body || {};
    // contrived check; the point is no rate limit / lockout.
    return { ok: email === "ops@palletwise.example" && password === "Pallet2024!" };
  });
};
