const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })
const { connectMongodb } = require("./connection");
const userRouter = require("./routes/users.routes");
const FAQrouter = require("./routes/faqs.router");
const GlobalQuiz = require("./routes/globalQuiz.router");
const cookieParser = require('cookie-parser');
const sendingmail = require("./sendmail");


app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

app.post('/sendmail', sendingmail);
app.use("/user", userRouter);
app.use("/faq", FAQrouter);
app.use("/gquiz", GlobalQuiz);

connectMongodb();
app.get("/", (req, res) => { res.send("<h1>Hemang baldha</h1>") });
app.listen(8000, () => {
	console.log("Server Started succesfully on PORT : 8000");
});