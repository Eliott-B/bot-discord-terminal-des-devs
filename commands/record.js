const { SlashCommandBuilder } = require('@discordjs/builders');
const embed = require('../modules/embed.js');
const { info } = require('../config.json');
const db = require('../db/db.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('record')
        .setDescription("Récupérer tous les avertissements d'un membre.")
        .addUserOption(option =>
            option.setName('target')
            .setDescription('Selectionnez un membre.')
            .setRequired(true)),
    async execute(client,interaction) {
        await interaction.deferReply({ ephemeral: false });
        let user = interaction.options.getUser('target');
        const database = db(client);
        database.connect();
        await database.query(`SELECT id,reason,author_id,DATE_FORMAT(date, "%d/%m/%Y") AS date FROM warn WHERE user_id = ${user.id}`, async (err, results) => {
            var record  = ""
            let count = results.length;
            for (let i = 0; i < count; i++) {
                // let user = interaction.guild.users.get(`${results[i].author_id}`).displayName;
                record += "▫️ [" + results[i].id + "] " + results[i].reason + " - " + results[i].author_id + " (" + results[i].date + ")\n";
            };
            let records = embed('Casier','#FFC300',`${user} a été warn ${count} fois pour :\n**${record}**`,null,info.name,info.logo_link);
            await interaction.editReply({embeds: [records] });
        });
        database.end();
    },
};