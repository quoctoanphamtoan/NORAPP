let addNewContact = (io) => {
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
    socket.on("add-new-contact", (data) => {

      // console.log(data);
      // console.log(socket.request.user)
      let currentUser = {
        id: socket.request.user._doc._id,
        userName: socket.request.user._doc.userName,
        avatar: socket.request.user._doc.avatar,
      };
      //goit thong bao emit
      if (client[data.contactId]) {
        client[data.contactId].forEach(socketid => {
          io.sockets.connected[socketid].emit("req-add-new-contact", currentUser);
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
module.exports = addNewContact;