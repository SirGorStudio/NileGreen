// const client = require("discord.js");
const client = require('../index') 
const statuses = [
 "Powerful Music",
 "Powerful Moderation",
 "Awesome Music"
]

module.exports.run = (client) => {
  console.log(`✅ Logged on as ${client.user.username}`);
  setInterval(() => {
    const index = Math.floor(Math.random() * (statuses.length - 1) + 1);
    const mainActivity = statuses[index]
    client.user.setActivity(mainActivity, { type: "WATCHING"})
  }, 10000);
};