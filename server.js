const express = require("express");
const { engine } = require ("express-handlebars");
const app = express();

const PORT = 5000;

//ExpressのテンプレートエンジンであるExpress handlebarsを使うための呪文（公式ドキュメントより）
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.get("/", (req, res) => {
    res.render("home");
});

app.post("/", (req, res) => {
    
})

app.listen(PORT, () => console.log("サーバー起動中🚀"))