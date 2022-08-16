// npm i peer
// http://localhost:9000/
const { PeerServer } = require("peer");
const peerServer = PeerServer({
  port: 9000,
  path: "/"
});
