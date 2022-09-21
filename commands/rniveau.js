const { SlashCommandBuilder } = require('@discordjs/builders');
const { category_id } = require('../config.json');
const db = require('../db/db.js');
const { MessageEmbed } = require('discord.js');
const bouton = require('../modules/bouton.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rniveau')
        .setDescription('Ajoute un niveau à la recherche.')
        .addStringOption(option =>
            option.setName('niveau')
            .setDescription('Entrez le niveau.')
            .setRequired(true)),
    async execute(client,interaction) {
        await interaction.deferReply({ ephemeral: false });
        if (interaction.channel.parent.id !== category_id.service){
            interaction.editReply({ content: `⚠️ ${interaction.member}, vous devez être dans un salon pour créer une recherche de développeur pour exécuter cette commande !`, ephemeral: true});
        }else{
            let lvl = interaction.options.getString('niveau');
            let id = interaction.channel.name.substring(10)
            const database = db(client);
            database.connect();
            await database.query(`UPDATE recherche SET lvl="${lvl}" WHERE id=${id}`, async function(err, results) {
                if (err) {
                    console.log(err);
                    database.end();
                    interaction.editReply("Une erreur est survenu ! Contactez un membre de l'administration !")
                    return;
                };
                const annuler = bouton('annuler','Annuler','DANGER',null,null,false);
                interaction.editReply({ components: [annuler] ,content: `>>> Votre recherche est finie. Voici le résultat :` });
                await database.query(`SELECT descript,price,lvl FROM recherche WHERE id = ${id}`, async (err, results) => {
                    if (err) {
                        console.log(err);
                        database.end();
                        interaction.editReply("Une erreur est survenu ! Contactez un membre de l'administration !")
                        return;
                    };
                    const valider = bouton('rvalider','Valider l\'annonce','SUCCESS',null,null,false);
                    const recommencer = bouton('recommencer','Recommencer','DANGER',null,null,false);
                    let resultat = new MessageEmbed()
                        .setColor('#36393F')
                        .setTitle(`${interaction.member.displayName}`)
                        .setDescription(`${results[0].descript}`)
                        .addFields(
                            { name: 'Prix :', value: `${results[0].price}`, inline: true },
                            { name: 'Niveau :', value: `${results[0].lvl}`, inline: true },
                        )
                    await interaction.channel.send({embeds: [resultat], components: [valider, recommencer] });
                });
                database.end();
            });
        };
    },
};