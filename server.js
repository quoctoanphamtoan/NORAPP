// console.log('chao tui mat loln'

import express from "express"
let app = express();
let port = 8080;
app.listen(port, (err) => {
  if (err) {
    console.log('dmm tui may');
  } else {
    console.log('ahihi')
  }
})

app.get("/", (req, res) => {
  res.json({ "mes": "dmmm" });
});
///////////////////ahihihi