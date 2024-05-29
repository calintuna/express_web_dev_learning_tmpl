import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var data = {
  thisYear: new Date().getFullYear(),
};

// Web control start ===================================
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// Web control end =====================================

// helper function start ===============================
// helper function end =================================

// router start ========================================
app.get("/", async (req, res) => {
  console.log(data);
  res.render("index.pug", data);
});
// router end ==========================================

// Startup web server ===================================-
app.listen(port, () => {
  console.log(`server started on ${port}.`);
});
