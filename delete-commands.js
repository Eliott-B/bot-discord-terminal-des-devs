const { config } = require('./config.json');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

// SUPPRIMER LES COMMANDES RELOUS
// client.api.applications(client_id).commands("991643961598939178").delete()

// SUPPRIMER TOUTES LES COMMANDES
const rest1 = new REST({ version: '9' }).setToken(config.token);
rest1.get(Routes.applicationGuildCommands(config.client_id, config.guild_id))
    .then(data => {
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationGuildCommands(client_id, guild_id)}/${command.id}`;
            promises.push(rest1.delete(deleteUrl));
        }
        return Promise.all(promises);
    });