const args = process.argv;
const array = args.slice(2, args.length);
const request = require("request");

// const name = array;
console.log(array[0]);
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${array[0]}`,
  (error, response, body) => {
    const data = JSON.parse(body);

    console.log("error:", error);
    console.log("statusCode:", response && response.status);
    console.log(
      "\n                   ********   Cat Description   ********\n \n",
      data[0].description + "\n"
    );
    // console.log(typeof data);
  }
);
