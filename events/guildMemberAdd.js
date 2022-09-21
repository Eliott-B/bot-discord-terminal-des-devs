const { channel_id } = require('../config.json');

module.exports = async (client, member) => {
    const channel = member.guild.channels.cache.get(channel_id.welcome);
    const role = member.guild.channels.cache.get(channel_id.role);
    await channel.send(`${member.user} a rejoint le serveur ! Bienvenue à lui !\n*N'hésite pas à aller récupérer tes rôles dans ${role}.*`).then(async msg => {
        await msg.react('👋');
        });
    setTimeout(function(){
        const members = `Membres : ${member.guild.memberCount}`;
        const compter = member.guild.channels.cache.get(channel_id.member);
        if (members === compter.name) return;
        compter.setName(members);
    },300000);
};