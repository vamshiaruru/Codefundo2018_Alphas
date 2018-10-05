const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const userRoutes=require("./routes/userRoutes");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
// you don't need to use bodyparser seperately. It is included with express.
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use("/", userRoutes);

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