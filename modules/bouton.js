const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = (id, label, style, emoji,link, disabled) => {
    if(link != null){
        var bouton = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel(label)
                    .setStyle(style)
	                .setEmoji(emoji)
                    .setURL(link)
                    .setDisabled(disabled)
                );
    }else{
        var bouton = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(id)
                    .setLabel(label)
                    .setStyle(style)
	                .setEmoji(emoji)
                    .setDisabled(disabled)
                );
    }
    return(bouton)
};