let removeRequestContact = (io) => {
  let client = {};
  io.on("connection", (socket) => {
    let currentUserId = socket.request.user._doc._id;
    if (client[currentUserId]) {
      client[currentUserId].push(socket.id);
    } else {
      client[currentUserId] = [socket.id];

    }
    // console.log(client);
    // console.log(socket.id);
    socket.on("remove-request-contact", (data) => {
      // console.log(data);
      // console.log(socket.request.user)
      let currentUser = {
        id: socket.request.user._doc._id,
      };
      //goit thong bao emit
      if (client[data.contactId]) {
        client[data.contactId].forEach(socketid => {
          io.sockets.connected[socketid].emit("req-remove-request-contact", currentUser);
        });
      }
      // io.sockets.emit("req-add-new-contact", currentUser);

    });

    //xu li f5;
    socket.on("disconnect", () => {
      client[currentUserId] = client[currentUserId].filter((socketId) => {
        return socketId !== socket.id;
      });
      if (!client[currentUserId].length) {
        delete client[currentUserId];

      }
    })
    // console.log(client);
  })
}
module.exports = removeRequestContact;