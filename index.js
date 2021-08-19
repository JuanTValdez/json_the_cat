const { fetchBreedDescription } = require("./breedFetcher");

const args = process.argv;
const breedName = args.slice(2, args.length);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});
