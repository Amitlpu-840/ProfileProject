const Express = require("express");
const bodyParser = require("body-parser");

const app = Express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //   res.send(`
  //   <h1>harsha's profile... welcome!</h1>
  //    <a href="/contact" ><button>contact</button> </a>
  //   `);

  res.sendFile(__dirname + "/index.html");
});
app.get("/contact", (req, res) => {
  res.send(`<h1>contact harsha at mob. no. 984124142</h1>
  <a href="/" ><button>home</button> </a>
  `);
});

app.post("/", (req, res) => {
  // console.log(req.body);
  res.send("hello "+ req.body.name1+ "year = " + req.body.year);
});

app.listen(port, () => {
  console.log("server listening on port no. " + port);
});
