//#region Requires
const http = require("http");
const fs = require("fs");
//#endregion

//#region Reading Data
var mainHTML = "";
fs.readFile("../Client-Side/Pages/main.html", "utf-8", (err, data) => {
  if (err) {
    console.log("7asal Error");
  } else {
    mainHTML = data;
  }
});
var StyleCSS = "";
fs.readFile("../Client-Side/Styles/style.css", "utf-8", (err, data) => {
  if (err) {
    console.log("7asal Error");
  } else {
    StyleCSS = data;
  }
});

var flightImg = "";
fs.readFile("../Client-Side/Images/flight.jpg", (err, data) => {
  if (err) {
    console.log("7asal Error");
  } else {
    flightImg = data;
  }
});
var IconFav = "";
fs.readFile("../Client-Side/Icons/favicon.ico", (err, data) => {
  if (err) {
    console.log("7asal Error");
  } else {
    IconFav = data;
  }
});
//#endregion

http
  .createServer((req, res) => {
    //#region GET
    if (req.method == "GET") {
      switch (req.url) {
        case "/":
        case "/main.html":
        case "/Pages/main.html":
        case "/Client-Side/Pages/main.html":
          res.write(mainHTML);
          break;
        case "/style.css":
        case "/Styles/style.css":
        case "/styles/style.css":
        case "/Client-Side/Styles/style.css":
          res.write(StyleCSS);
          break;

        case "/2.jpg":
        case "/Images/flight.jpg":
        case "/Client-Side/Images/flight.jpg":
          res.write(flightImg);
          break;
        case "/favicon.ico":
        case "/Icons/favicon.ico":
        case "/Client-Side/Icons/favicon.ico":
          res.write(IconFav);
          break;
      }
      res.end();
    }

    //#endregion
  })
  .listen(7000, () => {
    console.log("http://localhost:7000/");
  });
