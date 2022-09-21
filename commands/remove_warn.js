const { SlashCommandBuilder } = require('@discordjs/builders');
const embed = require('../modules/embed.js');
const { info, channel_id } = require('../config.json');
const db = require('../db/db.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove_warn')
        .setDescription("Retire un avertissement d'un member.")
        .addIntegerOption(option =>
            option.setName('id')
            .setDescription("Entrez l'identifiant du warn.")
            .setRequired(true)),
    async execute(client,interaction) {
        await interaction.deferReply({ ephemeral: false });
        let id = interaction.options.getInteger('id');
        const channel = client.channels.cache.get(channel_id.logs);
        const database = db(client);
        database.connect();
        await database.query(`SELECT user_id,reason FROM warn WHERE id = ${id}`, async (err, results) => {
            let user = client.users.cache.find(user => user.id === `${results[0].user_id}`)
            let unwarn = embed('Remove warn','#44B25A',`Le warn de ${user} ci-dessous a été supprimé :\n**${results[0].reason}**`,null,info.name,info.logo_link);
            await database.query(`DELETE FROM dwarn WHERE id = ${id}`);
            await interaction.editReply({embeds: [unwarn] });
            channel.send({embeds: [unwarn]});
        });
        database.end();
    },
};
