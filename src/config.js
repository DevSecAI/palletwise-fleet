// PAL-SAST-003: hardcoded MongoDB URL including credentials.
module.exports = {
  mongoUrl: "mongodb://palletwise:Pallet2024!@palletwise-prod.cluster-xyz.docdb.amazonaws.com:27017/palletwise?ssl=false",
  jwtSecret: "palletwise-jwt-prod-9F2B7E1A",
};
