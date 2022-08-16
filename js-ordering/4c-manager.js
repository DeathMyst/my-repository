// (A) HANDSHAKE WITH PEER SERVER
const peer = new Peer("MANAGER", {
  host: "localhost",
  port: 9000,
  path: "/"
});

// (B) ON RECEIVING MESSAGE FROM OTHER PEERS
peer.on("connection", (conn) => {
  conn.on("data", (data) => {
    // (B1) GENERATE NEW HTML ORDER
    let order = document.createElement("table");
    order.className = "order";
    order.onclick = () => { order.remove(); };

    // (B2) ADD ITEMS
    data = JSON.parse(data);
    for (let [pid, qty] of Object.entries(data)) {
      let row = order.insertRow();
      let cell = row.insertCell();
      cell.innerHTML = qty;
      cell = row.insertCell();
      cell.innerHTML = products[pid]["name"];
    }

    // (B3) ADD ORDER TO HTML LIST
    document.getElementById("orders-list").appendChild(order);

    // (B4) DONE!
    conn.close();
  });
});
