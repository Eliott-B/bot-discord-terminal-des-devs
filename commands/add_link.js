const { SlashCommandBuilder } = require('@discordjs/builders');
const embed = require('../modules/embed.js');
const { info } = require('../config.json');
const db = require('../db/db.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add_link')
        .setDescription('Ajoute un lien interdit.')
        .addStringOption(option =>
            option.setName('lien')
            .setDescription('Entrez le lien interdit.')
            .setRequired(true)),
    async execute(client,interaction) {
        await interaction.deferReply({ ephemeral: false });
        let lien = interaction.options.getString('lien');
        const database = db(client);
        database.connect();
        await database.query(`INSERT INTO blacklist (term,type) VALUES ('${lien}','link')`);  
        database.end();
        let word = embed('Nouveau lien interdit','#36393F',`Le lien **${lien}** a été blacklist du serveur.`,null,info.name,info.logo_link);
        await interaction.editReply({embeds: [word] });
    },
};