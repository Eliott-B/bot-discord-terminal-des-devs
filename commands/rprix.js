const { SlashCommandBuilder } = require('@discordjs/builders');
const { category_id } = require('../config.json');
const db = require('../db/db.js');
const bouton = require('../modules/bouton.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rprix')
        .setDescription('Ajoute un prix à la recherche.')
        .addStringOption(option =>
            option.setName('prix')
            .setDescription('Entrez votre prix.')
            .setRequired(true)),
    async execute(client,interaction) {
        await interaction.deferReply({ ephemeral: false });
        if (interaction.channel.parent.id !== category_id.service){
            interaction.editReply({ content: `⚠️ ${interaction.member}, vous devez être dans un salon pour créer une recherche de développeur pour exécuter cette commande !`, ephemeral: true});
        }else{
            let prix = interaction.options.getString('prix');
            let id = interaction.channel.name.substring(10)
            const database = db(client);
            database.connect();
            await database.query(`UPDATE recherche SET price="${prix}" WHERE id=${id}`, function(err, results) {
                if (err) {
                    console.log(err);
                    database.end();
                    interaction.editReply("Une erreur est survenu ! Contactez un membre de l'administration !")
                    return;
                };
                database.end();
                const annuler = bouton('annuler','Annuler','DANGER',null,null,false);
                const recommencer = bouton('recommencer','Recommencer','PRIMARY',null,null,false);
                interaction.editReply({ components: [annuler, recommencer] ,content: `>>> Votre prix a été enregistré. Rentrez le niveau attendu avec la commande : \n\`/rniveau <votre-niveau>\`` });
            });  
        };
    },
};