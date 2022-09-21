const { MessageEmbed } = require('discord.js');

module.exports = (title, color, desc, image, footer_msg, footer_logo) => {
    let embed = new MessageEmbed()
                .setColor(color)
                .setTitle(title)
                .setDescription(desc)
                .setImage(image)
                .setFooter({ text: footer_msg, iconURL: footer_logo });
    return(embed)
};