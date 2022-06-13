const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);


/**
 * "/"にアクセスがあったらindex.htmlを返却
 */
 app.get("/", (req, res) => {
  //console.log('9');
  res.sendFile(__dirname + "/index.html");
});
app.get("/PR", (req, res) => {
  //console.log('9');
  res.sendFile(__dirname + "/PR.html");
});
app.get("/J1", (req, res) => {
  //console.log('9');
  res.sendFile(__dirname + "/J1.html");
});
app.get("/J2", (req, res) => {
  //console.log('9');
  res.sendFile(__dirname + "/J2.html");
});
app.get("/J3", (req, res) => {
  //console.log('9');
  res.sendFile(__dirname + "/J3.html");
});
app.get("/J4", (req, res) => {
  //console.log('9');
  res.sendFile(__dirname + "/J4.html");
});
app.get("/J5", (req, res) => {
  //console.log('9');
  res.sendFile(__dirname + "/J5.html");
});
app.get("/HJ", (req, res) => {
  //console.log('9');
  res.sendFile(__dirname + "/HJ.html");
});
app.get("/MC", (req, res) => {
  //console.log('9');
  res.sendFile(__dirname + "/MC.html");
});

app.get("/B", (req, res) => {
  //console.log('9');
  res.sendFile(__dirname + "/indexB.html");
});
/**
 * [イベント] ユーザーが接続
 */

var n=0;
io.on("connection", (socket) => {

  var room = '';
  
  n += 1;
  console.log("user connected " , n);

  socket.on("post", (msg) => {
    //console.log(msg);           //  [text: 'xxxx']
    io.to(room).emit("member-post", msg);
  });

  socket.on('disconnect', function () {
    n -= 1;
    console.log('user disconnected ' , n);
  });

  //  room_name を受け取る
  socket.on("c2s_join", (msg) => {
    console.log('71 room_name=', msg.text);           //  [text: 'xxxx']
    room = msg.text;
    socket.join(msg.text);

    //io.emit("c2s_join", msg);
  });
  
  
});

/**
 * 3000番でサーバを起動する     起動時だけ
 */
//http.listen(3000, () => {
http.listen( process.env.PORT || 3000, () => {

    console.log("listening on *:3000 " );
});