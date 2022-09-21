# **bot-discord-terminal-des-devs**

## **DESCRIPTION :**
Terminal des devs bot discord

## **PREREQUISITES :**

- **node 16** *(minimum)*
- **screen**
- **discord js v13**

## **CHANGELOG :**

 ### **1.0.0 :** 
 - *Bot - Discord Py*

 ### **2.0.0 :** 
 - *Role system available. The member can take the role that want.*
 - *Security system available. The member must accept a rule to have access to the server.*
 - *Possibility to create a ticket as well as to delete it, to add a member or to remove one.*
 - *Possibility to create a advert for a developper research.*
 - *Members can be warned by admin. Some words and links can be blacklisted with command. Warns and the blacklist are stored in a database.
 - *Migration of the bot to Discord JS.*

## **HOW TO CONFIGURE :**
- *Write `sudo apt-get install nodejs npm` in the terminal*
- *Write `npm init` in the terminal*
- *Write `npm install discord.js@13` in the terminal*
- *Write `npm install @discordjs/builders` in the terminal*
- *Write `npm install @discordjs/rest` in the terminal*
- *Write `npm install discord-api-types` in the terminal*
- *Configure the `config.json`*

## **HOW TO LAUNCH :**
- *Create a screen : `screen -S sv`*
- *Load the commands by typing in the terminal : : `node deploy-commands.js`*
- *Start the script : `node index.js` or `node .`*

## **FEATURE :**
- *Welcome system*
- *Security system*
- *Ticket system : create, remove, add member and remove member*
- *Logs system : Security logs, Bot logs*
- *Clear message*
- *Developper research system*
- *Warn system*
- *Blacklist system*

## **COMMANDS :**
- **/add_member {target member}** *(Add a member to a ticket)*
- **/remove_member {target member}** *(Remove a member from a ticket)*
- **/clear {number}** *(Delete messages from a channel)*
- **/warn {target member} {reason}** *(Warn a member)*
- **/reccord {target member}** *(Display member's warns)*
- **/remove_warn {id warn}** *(Remove a warn by id)*
- **/add_word {word}** *(Add a blacklist word to the database)*
- **/add_link {link}** *(Add a blacklist link to the database)*
- **/rdesc {description}** *(Set the developper research descritpion)*
- **/rprix {price}** *(Set the developper research price)*
- **/rniveau {level}** *(Set the developper research level)*
