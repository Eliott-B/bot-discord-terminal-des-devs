const embed = require('../modules/embed.js');
const bouton = require('../modules/bouton.js');
const { role_id, channel_id, category_id, info } = require('../config.json');
const db = require('../db/db.js');
const { MessageEmbed } = require('discord.js');

module.exports = async (client, interaction) => {

    const logs = interaction.member.guild.channels.cache.get(channel_id.logs);          

    if (interaction.isCommand()){
        let command = client.commands.get(interaction.commandName);
	    try {
		    await command.execute(client, interaction);
	    } catch (error) {
		    console.error(error);
		    try{
                await interaction.reply({ content: 'Error ! Contact the administrator of the bot.', ephemeral: true });
            } catch {
                await interaction.editReply({ content: 'Error ! Contact the administrator of the bot.' });
            } 
	    }
    };

    
	if (interaction.customId === "regle") {
        await interaction.deferReply({ ephemeral: true });
        const role = interaction.member.guild.roles.cache.find(r => r.id === role_id.member);
        if (interaction.member.roles.cache.some(role => role.id === role_id.member)) {
            await interaction.editReply({ content: `:red_circle: ${interaction.member}, vous avez déjà accepté le règlement !`, ephemeral: true });
        } else {
            await interaction.member.roles.add(role);
            await interaction.editReply({ content: `:green_circle: ${interaction.member}, merci d'avoir prit connaissance du règlement ! Bienvenue dans la communauté !`, ephemeral: true });
            let regle = embed('Règlement accepté','#66EB27',`${interaction.member} a accepté le règlement !`,null,'Logs - Règlement accepté',info.logo_link);
            await logs.send({embeds: [regle]});
        };
    };


    if (interaction.customId === "pro") {
        await interaction.deferReply({ ephemeral: true });
        const professionel = interaction.member.guild.roles.cache.find(r => r.id === role_id.professionel);
        if (interaction.member.roles.cache.some(role => role.id === role_id.professionel)) {
            await interaction.member.roles.remove(professionel);
            await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Professionel\` vous a été retiré !`, ephemeral: true });
        } else {
            await interaction.member.roles.add(professionel);
            await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Professionel\` vous a été ajouté !`, ephemeral: true });
        };
    };


    if (interaction.customId === "langage") {
        await interaction.deferReply({ ephemeral: true });
        if (interaction.values[0] === "htmlcss"){
            const htmlcss = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.htmlcss);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.htmlcss)) {
                await interaction.member.roles.remove(htmlcss);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`HTML / CSS\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(htmlcss);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`HTML / CSS\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "py"){
            const py = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.py);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.py)) {
                await interaction.member.roles.remove(py);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Python\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(py);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Python\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "js"){
            const js = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.js);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.js)) {
                await interaction.member.roles.remove(js);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`JavaScript\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(js);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`JavaScript\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "java"){
            const java = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.java);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.java)) {
                await interaction.member.roles.remove(java);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Java\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(java);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Java\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "lua"){
            const lua = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.lua);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.lua)) {
                await interaction.member.roles.remove(lua);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`LUA\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(lua);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`LUA\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "php"){
            const php = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.php);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.php)) {
                await interaction.member.roles.remove(php);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`PHP\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(php);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`PHP\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "sql"){
            const sql = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.sql);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.sql)) {
                await interaction.member.roles.remove(sql);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`SQL\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(sql);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`SQL\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "bash"){
            const bash = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.bash);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.bash)) {
                await interaction.member.roles.remove(bash);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Bash\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(bash);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Bash\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "cpp"){
            const cpp = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.cpp);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.cpp)) {
                await interaction.member.roles.remove(cpp);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`C / C++ / C#\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(cpp);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`C / C++ / C#\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "swift"){
            const swift = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.swift);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.swift)) {
                await interaction.member.roles.remove(swift);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Swift\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(swift);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Swift\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "ocaml"){
            const ocaml = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.ocaml);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.ocaml)) {
                await interaction.member.roles.remove(ocaml);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`oCaml\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(ocaml);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`oCaml\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "golang"){
            const golang = interaction.member.guild.roles.cache.find(r => r.id === role_id.lang.golang);
            if (interaction.member.roles.cache.some(role => role.id === role_id.lang.golang)) {
                await interaction.member.roles.remove(golang);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Golang\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(golang);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Golang\` vous a été ajouté !`, ephemeral: true });
            };
        };
        await interaction.message.edit();
    };

    if (interaction.customId === "os") {
        await interaction.deferReply({ ephemeral: true });
        if (interaction.values[0] === "windows"){
            const windows = interaction.member.guild.roles.cache.find(r => r.id === role_id.os.windows);
            if (interaction.member.roles.cache.some(role => role.id === role_id.os.windows)) {
                await interaction.member.roles.remove(windows);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Windows\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(windows);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Windows\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "linux"){
            const linux = interaction.member.guild.roles.cache.find(r => r.id === role_id.os.linux);
            if (interaction.member.roles.cache.some(role => role.id === role_id.os.linux)) {
                await interaction.member.roles.remove(linux);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Linux\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(linux);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Linux\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "macos"){
            const macos = interaction.member.guild.roles.cache.find(r => r.id === role_id.os.macos);
            if (interaction.member.roles.cache.some(role => role.id === role_id.os.macos)) {
                await interaction.member.roles.remove(macos);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`MacOS\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(macos);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`MacOS\` vous a été ajouté !`, ephemeral: true });
            };
        };
        await interaction.message.edit();
    };

    if (interaction.customId === "domain") {
        await interaction.deferReply({ ephemeral: true });
        if (interaction.values[0] === "fullstack"){
            const fullstack = interaction.member.guild.roles.cache.find(r => r.id === role_id.domain.fullstack);
            if (interaction.member.roles.cache.some(role => role.id === role_id.domain.fullstack)) {
                await interaction.member.roles.remove(fullstack);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Full Stack\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(fullstack);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Full Stack\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "frontend"){
            const frontend = interaction.member.guild.roles.cache.find(r => r.id === role_id.domain.frontend);
            if (interaction.member.roles.cache.some(role => role.id === role_id.domain.frontend)) {
                await interaction.member.roles.remove(frontend);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Front-End\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(frontend);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Front-End\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "backend"){
            const backend = interaction.member.guild.roles.cache.find(r => r.id === role_id.domain.backend);
            if (interaction.member.roles.cache.some(role => role.id === role_id.domain.backend)) {
                await interaction.member.roles.remove(backend);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Back-End\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(backend);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Back-End\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "system"){
            const system = interaction.member.guild.roles.cache.find(r => r.id === role_id.domain.system);
            if (interaction.member.roles.cache.some(role => role.id === role_id.domain.system)) {
                await interaction.member.roles.remove(system);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`System Operating\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(system);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`System Operating\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "cyber"){
            const cyber = interaction.member.guild.roles.cache.find(r => r.id === role_id.domain.cyber);
            if (interaction.member.roles.cache.some(role => role.id === role_id.domain.cyber)) {
                await interaction.member.roles.remove(cyber);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Cyber-Security\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(cyber);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Cyber-Security\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "devops"){
            const devops = interaction.member.guild.roles.cache.find(r => r.id === role_id.domain.devops);
            if (interaction.member.roles.cache.some(role => role.id === role_id.domain.devops)) {
                await interaction.member.roles.remove(devops);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`DevOps\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(devops);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`DevOps\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "mobile"){
            const mobile = interaction.member.guild.roles.cache.find(r => r.id === role_id.domain.mobile);
            if (interaction.member.roles.cache.some(role => role.id === role_id.domain.mobile)) {
                await interaction.member.roles.remove(mobile);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Mobile\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(mobile);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Mobile\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "game"){
            const game = interaction.member.guild.roles.cache.find(r => r.id === role_id.domain.game);
            if (interaction.member.roles.cache.some(role => role.id === role_id.domain.game)) {
                await interaction.member.roles.remove(game);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Game\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(game);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Game\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "beta"){
            const beta = interaction.member.guild.roles.cache.find(r => r.id === role_id.domain.beta);
            if (interaction.member.roles.cache.some(role => role.id === role_id.domain.beta)) {
                await interaction.member.roles.remove(beta);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Bêta testeur\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(beta);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Bêta testeur\` vous a été ajouté !`, ephemeral: true });
            };
        };
        await interaction.message.edit();
    };

    if (interaction.customId === "secteur") {
        await interaction.deferReply({ ephemeral: true });
        if (interaction.values[0] === "info"){
            const info = interaction.member.guild.roles.cache.find(r => r.id === role_id.secteur.info);
            if (interaction.member.roles.cache.some(role => role.id === role_id.secteur.info)) {
                await interaction.member.roles.remove(info);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Informatique\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(info);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Informatique\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "rt"){
            const rt = interaction.member.guild.roles.cache.find(r => r.id === role_id.secteur.rt);
            if (interaction.member.roles.cache.some(role => role.id === role_id.secteur.rt)) {
                await interaction.member.roles.remove(rt);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Réseau & télécommunication\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(rt);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Réseau & télécommunication\` vous a été ajouté !`, ephemeral: true });
            };
        };
        if (interaction.values[0] === "bdd"){
            const bdd = interaction.member.guild.roles.cache.find(r => r.id === role_id.secteur.bdd);
            if (interaction.member.roles.cache.some(role => role.id === role_id.secteur.bdd)) {
                await interaction.member.roles.remove(bdd);
                await interaction.editReply({ content: `:red_circle: ${interaction.member}, le rôle \`Base de donnée\` vous a été retiré !`, ephemeral: true });
            } else {
                await interaction.member.roles.add(bdd);
                await interaction.editReply({ content: `:green_circle: ${interaction.member}, le rôle \`Base de donnée\` vous a été ajouté !`, ephemeral: true });
            };
        };
        await interaction.message.edit();
    };


    const role_staff = interaction.guild.roles.cache.find(r => r.id === role_id.staff);
    if (interaction.customId === "ticketopen") {
        await interaction.deferReply({ ephemeral: true });
        const database = db(client);
        database.connect();
        await database.query(`INSERT INTO tickets (user) VALUES (${interaction.member.id})`);
        await database.query(`SELECT LAST_INSERT_ID() AS id FROM tickets`, async (err, results) => {
            let category = interaction.guild.channels.cache.find(cat=> cat.id === category_id.ticket);
            interaction.guild.channels.create(`ticket-${results[0].id}`, {
                type: 'GUILD_TEXT',
                parent: category,
                reason: `Ticket de ${interaction.member.displayName}`,
                topic: `Member id : ${interaction.member.id}`,
                permissionOverwrites: [{
                    id: interaction.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: interaction.member.id,
                    allow: ['VIEW_CHANNEL'],
                },
                {
                    id: role_staff.id,
                    allow: ['VIEW_CHANNEL'],
                }]
            }).then(async (channel)=> {
                const ticket = embed('Support Discord','#5865F2',"*Un membre du support va venir vous renseigner. Afin de gagner du temps écriver votre question directement.*",null,'Merci de décrire le problème, la question au maximum.',info.logo_link);
                const lock = bouton('lock','Fermer le ticket','DANGER',null,null,false);
                const tran = bouton('transcript','Sauvegarder le ticket','PRIMARY',null,null,false);
                await channel.send({embeds: [ticket], components: [lock, tran]});
                await interaction.editReply({ content: `${interaction.member}, ton ticket a été créé : ${channel}`, ephemeral: true });
            });
        });
        database.end();
    };

    if (interaction.customId === "lock"){
        await interaction.deferReply({ ephemeral: true });
        if (interaction.member.roles.cache.some(role => role.id === role_staff.id)){
            const database = db(client);
            database.connect();
            let id = interaction.channel.name.substring(7)
            await database.query(`UPDATE tickets SET actif='0' WHERE id='${id}'`);
            let lock = embed('Ticket fermé','#DD3232',`${interaction.member} a fermé le ticket \`${interaction.channel.name}\` !`,null,'Logs - Ticket fermé',info.logo_link);
            await logs.send({ embeds: [lock] })
            await interaction.channel.delete();
            database.end();
        }else{
            await interaction.editReply({ content: `⚠️ ${interaction.member}, cette action est réservée aux membres du support !`, ephemeral: true });
        };
    };

    if (interaction.customId === "transcript"){
        await interaction.deferReply({ ephemeral: true });
        await interaction.editReply({content: 'En développement', ephemeral: true});
    };

    if (interaction.customId === "recherche") {
        await interaction.deferReply({ ephemeral: true });
        const annonce = interaction.member.guild.roles.cache.find(r => r.id === role_id.annonce);
        await interaction.member.roles.add(annonce);
        const database = db(client);
        database.connect();
        await database.query(`INSERT INTO recherche (user) VALUES (${interaction.member.id})`);
        await database.query(`SELECT LAST_INSERT_ID() AS id FROM recherche`, async (err, results) => {
            let category = interaction.guild.channels.cache.find(cat=> cat.id === category_id.service);
            interaction.guild.channels.create(`recherche-${results[0].id}`, {
                type: 'GUILD_TEXT',
                parent: category,
                reason: `Recherche de devs de ${interaction.member.displayName}`,
                topic: `Member id : ${interaction.member.id}`,
                permissionOverwrites: [{
                    id: interaction.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: interaction.member.id,
                    allow: ['VIEW_CHANNEL'],
                }]
            }).then(async (channel)=> {
                const annuler = bouton('annuler','Annuler','DANGER',null,null,false);
                await channel.send({ components: [annuler] ,content: `>>> ${interaction.member}, écrivez la description de votre demande avec la commande : \n\`/rdesc <votre-description>\`\n*Pour retourner à la ligne faite \`\\n\`.*\n*Il vous sera demander après le prix que vous voulez mettre et le niveau attendu.*` });
                await interaction.editReply({ content: `${interaction.member}, ton salon pour la création de ta recherche a été créé : ${channel}`, ephemeral: true });
            });
        });
        database.end();
    };

    if (interaction.customId === "annuler"){
        await interaction.deferReply({ ephemeral: true });
        const database = db(client);
        database.connect();
        let id = interaction.channel.name.substring(10)
        await database.query(`DELETE FROM recherche WHERE id='${id}'`);
        database.end();
        const annonce = interaction.member.guild.roles.cache.find(r => r.id === role_id.annonce);
        await interaction.member.roles.remove(annonce);
        await interaction.channel.delete();
    };

    if (interaction.customId === "recommencer"){
        await interaction.deferReply({ ephemeral: true });
        const database = db(client);
        database.connect();
        let id = interaction.channel.name.substring(10)
        await database.query(`DELETE FROM recherche WHERE id='${id}'`);
        await interaction.channel.delete();
        await database.query(`INSERT INTO recherche (user) VALUES (${interaction.member.id})`);
        await database.query(`SELECT LAST_INSERT_ID() AS id FROM recherche`, async (err, results) => {
            let category = interaction.guild.channels.cache.find(cat=> cat.id === category_id.service);
            interaction.guild.channels.create(`recherche-${results[0].id}`, {
                type: 'GUILD_TEXT',
                parent: category,
                reason: `Recherche de devs de ${interaction.member.displayName}`,
                topic: `Member id : ${interaction.member.id}`,
                permissionOverwrites: [{
                    id: interaction.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: interaction.member.id,
                    allow: ['VIEW_CHANNEL'],
                }]
            }).then(async (channel)=> {
                const annuler = bouton('annuler','Annuler','DANGER',null,null,false);
                await channel.send({ components: [annuler] ,content: `>>> ${interaction.member}, écrivez la description de votre demande avec la commande : \n\`/rdesc <votre-description>\`\n*Pour retourner à la ligne faite \`\\n\`.*\n*Il vous sera demander après le prix que vous voulez mettre et le niveau attendu.*` });
                });
        });
        database.end();
    };

    if (interaction.customId === "rvalider"){
        await interaction.deferReply({ ephemeral: true });
        const database = db(client);
        database.connect();
        let id = interaction.channel.name.substring(10)
        await database.query(`SELECT descript,price,lvl FROM recherche WHERE id = ${id}`, async (err, results) => {
            const poster = bouton('recherche','Poster une annonce','PRIMARY',null,null,false);
            const recherche = interaction.member.guild.channels.cache.get(channel_id.recherche);
            let resultat = new MessageEmbed()
                .setColor('#36393F')
                .setTitle(`${interaction.member.displayName}`)
                .setDescription(`${results[0].descript}`)
                .addFields(
                    { name: 'Prix :', value: `${results[0].price}`, inline: true },
                    { name: 'Niveau :', value: `${results[0].lvl}`, inline: true },
                )
            await recherche.send({ content: `${interaction.member}`, embeds: [resultat], components: [poster] });
        });
        database.end();
        const annonce = interaction.member.guild.roles.cache.find(r => r.id === role_id.annonce);
        await interaction.member.roles.remove(annonce);
        await interaction.channel.delete();
    };

};