import { pushSocketIdArray, emitNotifyToArray, removeSocketIdToArry } from "./../../helpers/socketHeplers";


let approveResquesContactRecieved = (io) => {
  let client = {};
  io.on("connection", (socket) => {
    client = pushSocketIdArray(client, socket.request.user._doc._id, socket.id);
    // console.log(client);
    // console.log(socket.id);
    socket.on("approve-request-contact-received", (data) => {

      // console.log(data);
      // console.log(socket.request.user)
      let currentUser = {
        id: socket.request.user._doc._id,
        userName: socket.request.user._doc.userName,
        avatar: socket.request.user._doc.avatar,
        address: (socket.request.user._doc.address !== null) ? socket.request.user._doc.address : "",
      };
      //goit thong bao emit
      if (client[data.contactId]) {
        emitNotifyToArray(client, data.contactId, io, "req-approve-request-contact-received", currentUser);
      }
      // io.sockets.emit("req-add-new-contact", currentUser);

    });

    //xu li f5;
    socket.on("disconnect", () => {
      client = removeSocketIdToArry(client, socket.request.user._doc._id, socket);
    })
    // console.log(client);
  })
}
module.exports = approveResquesContactRecieved;