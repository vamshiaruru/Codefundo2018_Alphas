const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const google = require("./routes/google");
const userRoutes=require("./routes/userRoutes");
const multer = require("multer")();
const expressSession = require("express-session");
const credentials = require("./config/auth");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));

// app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(multer.array());
app.use(expressSession({
    secret: credentials.cookie.secret
}));

app.use(express.static(path.join(__dirname, "public")));
app.use("/", userRoutes);
app.use("/google", google);
app.use((req, res, next) => {
  next(createError(404));
});

app.use( (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status||500);
    res.render('error');
});

module.exports = app;