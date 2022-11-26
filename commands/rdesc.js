const { SlashCommandBuilder } = require('@discordjs/builders');
const { category_id } = require('../config.json');
const db = require('../db/db.js');
const bouton = require('../modules/bouton.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rdesc')
        .setDescription('Ajoute une description à la recherche.')
        .addStringOption(option =>
            option.setName('description')
            .setDescription('Entrez votre description.')
            .setRequired(true)),
    async execute(client,interaction) {
        await interaction.deferReply({ ephemeral: false });
        if (interaction.channel.parent.id !== category_id.service){
            interaction.editReply({ content: `⚠️ ${interaction.member}, vous devez être dans un salon pour créer une recherche de développeur pour exécuter cette commande !`, ephemeral: false});
        }else{
            let desc = interaction.options.getString('description');
            let id = interaction.channel.name.substring(10)
            const database = db(client);
            database.connect();
            await database.query(`UPDATE recherche SET descript="${desc.replace(/"/g,"'")}" WHERE id=${id}`, function(err, results) {
                if (err) {
                    console.log(err);
                    database.end();
                    interaction.editReply("Une erreur est survenu ! Essayez de mettre votre message sans émoji. Si cela ne marche toujours pas contactez un membre de l'administration !")
                    return;
                };
                database.end();
                const annuler = bouton('annuler','Annuler','DANGER',null,null,false);
                const recommencer = bouton('recommencer','Recommencer','PRIMARY',null,null,false);
                interaction.editReply({ components: [annuler, recommencer] ,content: `>>> Votre description a été enregistré. Rentrez le prix avec la commande : \n\`/rprix <votre-prix>\`\n*Il vous sera demander après le niveau attendu.*` });        
            });
        };
    },
};