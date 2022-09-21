const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Supprime un nombre de message dans le salon.')
        .addIntegerOption(option =>
            option.setName('number')
            .setDescription('Entrez le nombre de message. (100max)')
            .setRequired(true)),
    async execute(client,interaction) {
        let number = interaction.options.getInteger('number');
        await interaction.channel.bulkDelete(number, true);
        await interaction.reply(`>>> *${number} messages ont bien été supprimés !*`);
        await wait(3000);
        await interaction.deleteReply();
    },
};