import express from "express";

// Arrow function
let configViewEngine = (app) => {
    app.use(express.static("./src/public")) // => client co the truy cap
    app.set("view engine", "ejs") // <=> jsp, blade => logic in html
    app.set("views", "./src/views")
}

module.exports = configViewEngine;