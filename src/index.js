import fs from "fs";
import path from "path";

import React, { Component } from "react";
import express from "express";
import { render, template } from "rapscallion";
import { Route, StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

import App from "./components/app";


process.env.NODE_ENV = "production";


const app = express();

const css = fs.readFileSync(path.join(__dirname, "main.css"));

app.get("/main.css", (req, res) => {
  res.type("text/css");
  res.send(css);
  res.end();
})

app.get("/rapscallion", (req, res) => {
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
  html.toStream().pipe(res);
});

app.get("/react-dom", (req, res) => {
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
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
