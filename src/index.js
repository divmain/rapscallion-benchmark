import fs from "fs";
import path from "path";
import { Transform } from "stream";

import React, { Component } from "react";
import express from "express";
import { render, template } from "rapscallion";
import { Route, StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

import App from "./components/app";


process.env.NODE_ENV = "production";
const handler = process.env.HANDLER;

const app = express();

const css = fs.readFileSync(path.join(__dirname, "main.css"));

app.get("/main.css", (req, res) => {
  res.type("text/css");
  res.send(css);
  res.end();
})

const rapscallionHandler = (req, res) => {
  const context = {};

  const component = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const application = render(component);

  const html = template`<!doctype html><html>
    <head>
      <title>Test</title>
      <link rel="stylesheet" href="/main.css">
    </head>
    <body>
      <div id="root">${application}</div>
    </body>
  </html>`

  res.type("text/html");
  html
    .tuneAsynchronicity(1000)
    .toStream()
    .pipe(res);
};

const reactHandler = (req, res) => {
  const context = {};

  const component = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const application = renderToString(component);

  const html = `<!doctype html><html>
    <head>
      <title>Test</title>
      <link rel="stylesheet" href="/main.css">
    </head>
    <body>
      <div id="root">${application}</div>
    </body>
  </html>`

  res.type("text/html");
  res.send(html);
  res.end();
};


switch (handler) {
  case "react":
    console.log("Using the renderToString handler...");
    app.get("/landing", reactHandler);
    handler = ;
    break;
  case "rapscallion-cached":
    console.log("Using the Rapscallion handler with caching...");
    app.get("/landing", rapscallionHandler);
    break;
  default:
    console.log("Using the Rapscallion handler...");
    app.get("/landing", rapscallionHandler);
}


app.listen(3000, () => {
  console.log("App listening on port 3000...");
});
