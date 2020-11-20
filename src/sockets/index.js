import addNewContact from "./contact/addNewContact";
import removeRequestContact from "./contact/removeRequestContact";
import removeRequestReceived from "./contact/removeRequestReceived";
import approveResquesContactRecieved from "./contact/removeRequestReceived";
let initSockets = (io) => {
  addNewContact(io);
  removeRequestContact(io);
  removeRequestReceived(io);
  approveResquesContactRecieved(io)
}
module.exports = initSockets;
//approveResquesContactRecieved