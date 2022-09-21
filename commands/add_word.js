const { SlashCommandBuilder } = require('@discordjs/builders');
const embed = require('../modules/embed.js');
const { info} = require('../config.json');
const db = require('../db/db.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add_word')
        .setDescription('Ajoute un mot interdit.')
        .addStringOption(option =>
            option.setName('mot')
            .setDescription('Entrez le mot interdit.')
            .setRequired(true)),
    async execute(client,interaction) {
        await interaction.deferReply({ ephemeral: false });
        let mot = interaction.options.getString('mot');
        const database = db(client);
        database.connect();
        await database.query(`INSERT INTO blacklist (term,type) VALUES ('${mot}','word')`);  
        database.end();
        let word = embed('Nouveau mot interdit','#36393F',`Le mot **${mot}** a été blacklist du serveur.`,null,info.name,info.logo_link);
        await interaction.editReply({embeds: [word] });
    },
};