const express = require("express");
const app  = express();
const port = 3000;

//POSTのクエリーを良い感じに処理する
app.use(express.urlencoded({extended: true}))

app.post("/",(req, res) => {
  const name = req.body.name;
  res.send(`君の名は${name}`);//?name=TAKI
  console.log("/ へアクセスがありました");
})

// ルーティングの設定
app.get("/", (req, res) =>{
  //const name = req.query.name;
  res.sendFile(`${__dirname}/public/index.html`);
});
app.get("/image/:file", (req, res) =>{
  const file = req.params.file;
  res.sendFile(`${__dirname}/public/image/${file}`);
  console.log(`/image/${file} へアクセスがありました`);
});
app.get("/json",(req, res) => {
  const data = {
    "message": "Hello world",
    "date": "2020-06-29"
  };
  res.json(data);
})


// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
