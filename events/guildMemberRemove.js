const { channel_id } = require('../config.json');

module.exports = (client, member) => {
    setTimeout(function(){
        const members = `Membres : ${member.guild.memberCount}`;
        const compter = member.guild.channels.cache.get(channel_id.member);
        if (members === compter.name) return;
        compter.setName(members);
    },300000);
};
