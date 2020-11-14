// console.log('chao tui mat loln'
var app = require("express")();
var port = 8080;
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
app.get("/r")