const embed = require('../modules/embed.js');
const bouton = require('../modules/bouton.js');
const { channel_id, category_id, config, info } = require('../config.json');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const db = require('../db/db.js');

module.exports = async (client, message) => {

    if (message.content === 'regle') {
        if (message.author.bot) return;
        if (message.channel.id != channel_id.regle) return;
        const start = "**__Terminal des devs - Règlement__**\n\n*Pour que ce Discord reste un espace communautaire d'échange et d'entre-aide, merci de respecter les règles suivantes :*";
		const regle = ":small_orange_diamond: **1° Respectez les termes et la charte d'utilisation de Discord.** (https://discord.com/terms) (https://discord.com/guidelines)\n\n:small_orange_diamond: **2° Respectez les autres utilisateurs du serveur.** Aucun harcèlement, sexisme, racisme ou tout autre forme d'irrespect ne sera pas toléré.\n\n:small_orange_diamond: **3° Pas de spam.** Aucune forme de spam ne sera toléré même en message privé.\n\n:small_orange_diamond: **4° Pas d'autopromotion ou de promotion.** Toute forme de publicité n'entrant pas dans le contexte du salon ne sera pas toléré, y compris en message privé.\n\n:small_orange_diamond: **5° Pas de contenu obscène ou soumis à une limite d'âge.** Les contenus oraux ou écrits doivent être tout publique, aucun contenu comportant de la nudité, de l'hyperviolence ou encore étant perturbant ne sera toléré.\n\n:small_orange_diamond: **6° Pas de 'ghost ping'.** Mentionnez un utilisateur et après supprimer le message ne sera toléré. Merci de prévenir en cas d'erreur de mention et de ne pas abuser des mentions.\n\n:small_orange_diamond: **7° Pas d'arnaque.** Toute forme d'arnaque afin de voler le travail d'une personne, d'escroquer une personne ou autre ne sera toléré.\n\n:small_orange_diamond: **8° Pas de demande en message privé.** Des salons sont prévus pour les demandes donc les messages privés dans un contexte équivalent aux salons du Discord ne seront toléré.\n\n:small_orange_diamond: **9° Respectez la vie privée des utilisateurs.** Aucune diffusion des données personnelles sera toléré.\n\n:small_orange_diamond: **10° Respectez les sujets des salons.** Merci de respecter les salons et leur sujet.\n\n:small_orange_diamond: **11° Se renseigner avant de poser des questions.**\n\n:small_orange_diamond: **12° Terminal des devs n'est pas responsable de non payement ou de tout type de problème avec un utilisateur.** L'équipe du terminal des devs s'occupera des sanctions en cas de problème mais n'est en aucun cas responsable d'un non payement.";
        const end = "__Si vous remarquez un contenu ou comportement contraire au règlement, merci d'en informer un modérateur grâce au système ticket.__";
        const accepter = bouton('regle','Accepter le règlement','SUCCESS',null,null,false);
        const terms = bouton('terms','Discord Terms','LINK',null,"https://discord.com/terms",false);
        const guidelines = bouton('guidelines','Discord Guidelines','LINK',null,"https://discord.com/guidelines",false);
        message.channel.send({  content: start });
        message.channel.send({  content: regle });
        message.channel.send({  content: end, components: [accepter,terms,guidelines] });
    };

    if (message.content === 'ticket') {
        if (message.author.bot) return;
        if (message.channel.id != channel_id.ticket) return;
        const ticket = embed(':envelope: Ticket','#36393F','Pour ouvrir un ticket cliquez sur le bouton ci-dessous.\nMerci de développer au maximum votre ticket.',null,"",null);
        const ouvrir = bouton('ticketopen','Ouvrir','PRIMARY',null,null,false);
        message.channel.send({  embeds: [ticket], components: [ouvrir]  });
    };

    if (message.content === 'recherche') {
        if (message.author.bot) return;
        if (message.channel.id != channel_id.recherche) return;
        const recherche = embed(':mag_right: Recherche de développeur','#36393F','Pour poster une recherche de développeur cliquez sur le bouton ci-dessous.',null,"",null);
        const creer = bouton('recherche','Créer une recherche','PRIMARY',null,null,false);
        message.channel.send({  embeds: [recherche], components: [creer]  });
    };

    if (message.content === 'setrole') {
        if (message.author.bot) return;
        if (message.channel.id != channel_id.role) return;
        const embed_langage = embed(':flag_white: Choisissez vos langages !','#36393F','Sélectionnez les langages que vous maitrisez.',null,"",null);
        const embed_os = embed(':computer: Choisissez votre ou vos OS !','#36393F',"Sélectionnez l'OS ou les OS sur les quels vous êtes.",null,"",null);
        const embed_domain = embed(':notepad_spiral: Choisissez votre ou vos domain.s !','#36393F',"Sélectionnez le domain ou les demains où vous travaillez/étudiez.",null,"",null);
        const embed_secteur = embed(':briefcase: Choisissez votre secteur !','#36393F',"Sélectionnez le secteur où vous travaillez/étudiez.",null,"",null);
        const embed_pro = embed(':small_red_triangle: Êtes-vous un développeur professionnel ?','#36393F',"Répondez honnêtement ! Cela n'est absolument pas grâve d'être amateur !\n*Pour rappel, un développeur professionnel est un développeur qui travail dans le développement.*",null,"",null);
        const pro = bouton('pro','Professionnel','DANGER',null,null,false);
        const langage = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('langage')
					.setPlaceholder('Selectionnez un langage')
					.addOptions([
						{
							label: 'HTML / CSS',
							value: 'htmlcss',
                            description: '<h1>Hello world!</h1>',
                            emoji: {
                                name: 'htmlcss',
                                id: '1021087964173967451',
                            },
						},
                        {
							label: 'Python',
							value: 'py',
                            description: 'print("Hello world!")',
                            emoji: {
                                name: 'python',
                                id: '1021087966183047302',
                            },
						},
                        {
							label: 'JavaScript',
							value: 'js',
                            description: 'console.log("Hello world!");',
                            emoji: {
                                name: 'js',
                                id: '1021087975204978819',
                            },
						},
                        {
							label: 'Java',
							value: 'java',
                            description: 'System.out.println("Hello world!");',
                            emoji: {
                                name: 'java',
                                id: '1021087974286434304',
                            },
						},
                        {
							label: 'LUA',
							value: 'lua',
                            description: 'print("Hello world!")',
                            emoji: {
                                name: 'lua',
                                id: '1021087973187538985',
                            },
						},
                        {
							label: 'PHP',
							value: 'php',
                            description: "<?php echo '<p>Hello world!</p>'; ?>",
                            emoji: {
                                name: 'php',
                                id: '1021087972067659896',
                            },
						},
                        {
							label: 'SQL',
							value: 'sql',
                            description: 'SELECT * FROM db WHERE phrase = "Hello world!";',
                            emoji: {
                                name: 'sql',
                                id: '1021087977973235792',
                            },
						},
                        {
							label: 'Bash',
							value: 'bash',
                            description: 'echo "Hello world!"',
                            emoji: {
                                name: 'bash',
                                id: '1021087970738065469',
                            },
						},
                        {
							label: 'C / C++ / C#',
							value: 'cpp',
                            description: 'printf("Hello world!");',
                            emoji: {
                                name: 'c_',
                                id: '1021087968997421193',
                            },
						},
                        {
							label: 'Swift',
							value: 'swift',
                            description: 'print("Hello world!")',
                            emoji: {
                                name: 'swift',
                                id: '1021087982867980308',
                            },
						},
                        {
							label: 'oCaml',
							value: 'ocaml',
                            description: 'print_string "Hello world!\n"',
                            emoji: {
                                name: 'ocaml',
                                id: '1021087967776874546',
                            },
						},
                        {
							label: 'Golang',
							value: 'golang',
                            description: 'fmt.Println("hello world!")',
                            emoji: {
                                name: 'golang',
                                id: '1021087976870117447',
                            },
						},
					]),
			);
            const os = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('os')
					.setPlaceholder('Selectionnez un OS')
					.addOptions([
						{
							label: 'Windows',
							value: 'windows',
                            description: 'By Microsoft',
                            emoji: {
                                name: 'windows',
                                id: '1021087981316092037',
                            },
						},
                        {
							label: 'MacOS',
							value: 'macos',
                            description: 'By Apple',
                            emoji: {
                                name: 'macos',
                                id: '1021087979470585856',
                            },
						},
                        {
							label: 'Linux',
							value: 'linux',
                            description: 'Open source',
                            emoji: {
                                name: 'linux',
                                id: '1021087980527562812',
                            },
						},
					]),
			);
            const domain = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('domain')
					.setPlaceholder('Selectionnez un domain')
					.addOptions([
                        {
							label: 'Full Stack',
							value: 'fullstack',
                            description: 'Full Stack',
                            emoji: '♻️',
						},
						{
							label: 'Front-end',
							value: 'frontend',
                            description: 'Front-End',
                            emoji: {
                                name: 'frontend',
                                id: '1021087958721376338',
                            },
						},
                        {
							label: 'Back-End',
							value: 'backend',
                            description: 'Back-End',
                            emoji: {
                                name: 'backend',
                                id: '1021087962781454397',
                            },
						},
                        {
							label: 'Operating System',
							value: 'system',
                            description: 'Operating System',
                            emoji: {
                                name: 'system',
                                id: '1021087951926603866',
                            },
						},
                        {
							label: 'Cyber-Security',
							value: 'cyber',
                            description: 'Cyber-Security',
                            emoji: {
                                name: 'cyber',
                                id: '1021087954153775125',
                            },
						},
                        {
							label: 'DevOps',
							value: 'devops',
                            description: 'DevOps',
                            emoji: {
                                name: 'devops',
                                id: '1021087985371975784',
                            },
						},
                        {
							label: 'Mobile',
							value: 'mobile',
                            description: 'Mobile',
                            emoji: '📱',
						},
                        {
							label: 'Game Development',
							value: 'game',
                            description: 'Game Development',
                            emoji: '🎮',
						},
                        {
							label: 'Bêta Testeur',
							value: 'beta',
                            description: 'Bêta Testeur',
                            emoji: {
                                name: 'bugs',
                                id: '1021087949770739722',
                            },
						},
					]),
			);
            const secteur = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('secteur')
					.setPlaceholder('Selectionnez un secteur')
					.addOptions([
                        {
							label: 'Informatique',
							value: 'info',
                            description: 'Tout le secteur du développement informatique.',
                            emoji: {
                                name: 'info',
                                id: '1021087983836864554',
                            },
						},
						{
							label: 'Réseau & télécommunication',
							value: 'rt',
                            description: 'Tout le secteur du réseau et de la télécommunication.',
                            emoji: {
                                name: 'rt',
                                id: '1021087960290050118',
                            },
						},
                        {
							label: 'Base de donnée',
							value: 'bdd',
                            description: 'Tout le secteur des bases de données.',
                            emoji: {
                                name: 'bdd',
                                id: '1021087957093978192',
                            },
						},
					]),
			);
        message.channel.send({  embeds: [embed_langage], components: [langage]  });
        message.channel.send({  embeds: [embed_os], components: [os] });
        message.channel.send({  embeds: [embed_domain], components: [domain] });
        message.channel.send({  embeds: [embed_secteur], components: [secteur] });
        message.channel.send({  embeds: [embed_pro], components: [pro] });
    };


    // BLACKLIST
    if (message.author.id === config.client_id) return;
    try{
        if (message.channel.parent.id === category_id.logs || message.channel.parent.id === category_id.staff || message.channel.parent.id === category_id.ticket )return;
    }catch{
        return
    };
    const database = db(client);
    database.connect();
    await database.query(`SELECT term FROM blacklist WHERE type = 'link'`, async (err, results) => {
        for (let i = 0; i < results.length; i++) {
            if (message.content.includes(results[i].term)){
                let link = embed('Message blacklist','#DF1D1D',`${message.author}, ton message contenait un **lien interdit** !`,null,info.name,info.logo_link);
                message.channel.send({embeds: [link] });
                message.delete();
            };
        };
    });
    await database.query(`SELECT term FROM blacklist WHERE type = 'word'`, async (err, results) => {
        for (let i = 0; i < results.length; i++) {
            if (message.content.toLowerCase().includes(results[i].term)){
                let word = embed('Message blacklist','#DF1D1D',`${message.author}, ton message contenait un **mot interdit** !`,null,info.name,info.logo_link);
                message.channel.send({content: `${message.author} :`, embeds: [word] });
                message.delete();
            };
        };
    });
    database.end();

};