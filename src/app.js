// Módulos
const path = require("path");
const express = require("express");
const app = express();
const method = require('method-override'); // para put y delete. Requiere NPM I method-override
const session = require('express-session');
const cookies = require('cookie-parser');

// Server
app.set("port", process.env.PORT ||3000)
app.listen(app.get("port"), () => console.log("Server Start in http://localhost:3000"))

// Configuración
app.use(express.static(path.resolve(__dirname,"../public")));

// Set view Engine. express reconoce ejs)
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname,"./views"));

/* Data Configuration */

app.use(express.urlencoded({extended:false})) // Not fund req.body
app.use(express.json());
app.use(method("_method")) // ?_method=PUT
app.use(session({secret: "Shhh, It's a secret",resave: false,saveUninitialized: false,}));
app.use(cookies());

/* Rutas */
const main = require('./routes/main');
app.use(main);

