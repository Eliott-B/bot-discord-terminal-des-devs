const { Client, Collection } = require('discord.js');
const intents = ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_BANS"];
const client = new Client({intents: intents, ws:{intents: intents}});
const { config } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

// Slash Commands
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
};
// End of Slash Commands

// Events
client.on("ready", () => require("./events/ready.js")(client));
client.on("guildMemberAdd", member => require("./events/guildMemberAdd.js")(client, member));
client.on("guildMemberRemove", member => require("./events/guildMemberRemove.js")(client, member));
client.on("message", message => require("./events/message.js")(client, message));
client.on("interactionCreate", interaction => require("./events/interactionCreate.js")(client, interaction));
// client.on("guildBanAdd", ban => require("./events/guildBanAdd.js")(client, ban));

// Console log
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));

client.login(config.token);