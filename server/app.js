const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user")
const userResumeRouter = require("./routes/userResume");
const imageRouter = require("./routes/images")
const testAPIRouter = require("./routes/testAPI");

const app = express();

const fs = require('fs');

// Read the private key file
// const privateKey = fs.readFileSync('./config/private-key.json', 'utf8');

// // Encode the private key to base64
// const encodedPrivateKey = Buffer.from(privateKey).toString('base64');

// console.log(encodedPrivateKey);


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/userResume", userResumeRouter);
app.use("/testAPI", testAPIRouter);
app.use("/image", imageRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});



module.exports = app;
