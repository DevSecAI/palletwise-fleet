// PAL-SAST-006: Math.random() for invite tokens.
function inviteToken() {
  let s = "";
  for (let i = 0; i < 24; i++) s += Math.floor(Math.random() * 36).toString(36);
  return s;
}
module.exports = { inviteToken };
