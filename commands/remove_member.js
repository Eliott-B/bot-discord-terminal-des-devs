const embed = require('../modules/embed.js');
const { info,category_id } = require('../config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove_member')
        .setDescription('Retirer un membre du ticket.')
        .addUserOption(option =>
            option.setName('target')
            .setDescription('Selectionnez un membre.')
            .setRequired(true)),
    async execute(client,interaction) {
        await interaction.deferReply({ ephemeral: false });
        if (interaction.channel.parent.id !== category_id.ticket){
            interaction.editReply({ content: `⚠️ ${interaction.member}, vous devez être dans un ticket pour exécuter cette commande !`, ephemeral: true });
        }else{
            let user = interaction.options.getUser('target');
            let remove = embed('Membre retiré','#EB4527',`${user} a été retiré(e) du ticket !`,null,info.name,info.logo_link)
            interaction.channel.permissionOverwrites.edit(user, { 'VIEW_CHANNEL':false });
            interaction.editReply({embeds: [remove] });
        };
    },
};