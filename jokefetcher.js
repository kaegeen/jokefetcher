// jokeFetcher.js
const https = require("https");

function fetchJoke() {
  const url = "https://official-joke-api.appspot.com/random_joke";

  https.get(url, (res) => {
    let data = "";

    // Collect data chunks
    res.on("data", (chunk) => {
      data += chunk;
    });

    // Parse and display once response ends
    res.on("end", () => {
      try {
        const joke = JSON.parse(data);
        console.log("\nHere’s a random joke for you:");
        console.log(`${joke.setup}\n${joke.punchline}\n`);
      } catch (err) {
        console.error("Error parsing joke:", err.message);
      }
    });
  }).on("error", (err) => {
    console.error("Error fetching joke:", err.message);
  });
}

fetchJoke();
