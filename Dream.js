const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Hassan_Gamer");


client.on("ready", () => {
let channel =     client.channels.get("515310203357495326")
setInterval(function() {
channel.send(`========`)
}, 25)
})
 
 
client.login("NTE0OTAxMTg0NjIwOTIwODU0.DtdTjw.6C-A1FcO1FM9dQdiAKBOztGT_Nw");