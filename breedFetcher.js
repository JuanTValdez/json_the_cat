const request = require("request");

request(
  "https://api.thecatapi.com/v1/breeds/search?q=sib",
  (error, response, body) => {
    const data = JSON.parse(body);

    console.log("error:", error);
    console.log("statusCode:", response && response.status);
    console.log("The Data is: \n", data[0].description);
    // console.log(typeof data);
  }
);
