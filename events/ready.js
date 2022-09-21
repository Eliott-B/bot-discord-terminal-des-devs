const embed = require('../modules/embed.js');
const { channel_id, info } = require('../config.json');

module.exports = (client) => {
    console.log('The bot is initialized!');
    client.user.setActivity(info.activity, { type: 'PLAYING' });
    const channel = client.channels.cache.get(channel_id.logs);
    const ready = embed('[INFO BOT]','#36393F',`Le bot a été démaré/redémaré !`,null,'Logs - Bot Discord',info.logo_link)
    channel.send({embeds: [ready]})
};