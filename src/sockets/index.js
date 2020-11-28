import addNewContact from "./contact/addNewContact";
import removeRequestContact from "./contact/removeRequestContact";
import removeRequestReceived from "./contact/removeRequestReceived";
import approveResquesContactRecieved from "./contact/removeRequestReceived";
import removeContact from "./contact/removeContact";
let initSockets = (io) => {
  addNewContact(io);
  removeRequestContact(io);
  removeRequestReceived(io);
  approveResquesContactRecieved(io);
  removeContact(io);
}
module.exports = initSockets;
//approveResquesContactRecieved