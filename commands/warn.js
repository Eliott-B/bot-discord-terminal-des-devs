const { SlashCommandBuilder } = require('@discordjs/builders');
const embed = require('../modules/embed.js');
const { info, channel_id } = require('../config.json');
const db = require('../db/db.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warn')
        .setDescription('Averti un membre.')
        .addUserOption(option =>
            option.setName('target')
            .setDescription('Selectionnez un membre.')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
            .setDescription('Donnez une raison.')
            .setRequired(true)),
    async execute(client,interaction) {
        await interaction.deferReply({ ephemeral: false });
        let user = interaction.options.getUser('target');
        let reason = interaction.options.getString('reason');
        let author = interaction.member;
        const channel = client.channels.cache.get(channel_id.logs);
        const database = db(client);
        database.connect();
        await database.query(`INSERT INTO warn (user_id,reason,author_id) VALUES (${user.id},'${reason}',${author.id})`);  
        database.end();
        let warn = embed('Warn','#DF1D1D',`${user} a été warn par ${author} pour :\n**${reason}**`,null,info.name,info.logo_link);
        await interaction.editReply({embeds: [warn] });
        channel.send({embeds: [warn]});
    },
};