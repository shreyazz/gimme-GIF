const discord = require("discord.js");
const client = new discord.Client();
const fetch = require("node-fetch");
require("dotenv").config();

client.on("ready", () => {
  console.log(`${client.user.tag} is up and ready!`);
});

client.on("message", async (msg) => {
  let query = msg.content.split(" ");
  if (query[0] == "!gif") {
    let url = `https://g.tenor.com/v1/search?q=${query[1]}&key=${process.env.TENOR}`;
    let response = await fetch(url);
    let data = await response.json();
    let random = Math.floor(Math.random() * data.results.length);
    msg.channel.send(data.results[random].url);
  }
});

try {
  client.login(process.env.TOKEN_FOR_MEME_BOT);
} catch (error) {
  console.log(`There is some error in token ${error}`);
}
