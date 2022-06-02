const { Client, Intents, TextChannel } = require('discord.js');
const { token } = require('./config.json');
const wait = require('node:timers/promises').setTimeout;
const { MessageActionRow, MessageButton } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { channel } = require('node:diagnostics_channel');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//commands

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'hug') {
		await interaction.reply(`${interaction.user.username} hugged ${interaction.options.getString('input')}`);
	} else if (commandName === 'test') {
		await interaction.reply({ content: '> Gay Line one\n> Gay line 2\n> Gay line 3\n> **Gay line 3 but this text is in bold**', ephemeral: false});
	} else if (commandName === 'botping') {
		await interaction.reply({content: `Bot Ping: ${client.ws.ping}ms.`})
	} else if (commandName === 'stopbot') {
		await interaction.reply({content: `> Bot Stopping,\n> To start the bot, type **"npm run dev"** in the terminal.`})
		await wait(500)
		await process.exit()
		await interaction.editReply({content: `> If you see this message, the bot failed to run **"process.exit()"**.`});

// Buttons

    } else if (commandName === 'buttontest') {
		await interaction.reply({content: `Button Test!`})
		const row = new MessageActionRow()
			.addComponents(
					new MessageButton()
					.setURL('https://twitter.com/jplays_12')
					.setLabel('Twitter')
					.setStyle('LINK')
					.setEmoji('<:twitter:680628155257585704>'),
					new MessageButton()
					.setURL('https://www.tiktok.com/@jakeplays_12')
					.setLabel('Tiktok')
					.setStyle('LINK')
					.setEmoji('<:youtube:977564137045495828>'),
					new MessageButton()
					.setURL('https://www.youtube.com/channel/UC2dh_DhAFeVl-3iNrnmZpew')
					.setLabel('YouTube')
					.setStyle('LINK')
					.setEmoji('<:twitter:680628195808116767>'),
	
			);
					await interaction.editReply({ content: 'WE HAVE BUTTONS!', components: [row] });
// Embeds
			} else if (commandName === 'embed'){
				const testembed = new MessageEmbed()
				.setColor('GOLD')
				.setTitle('Greetings Skade Gaming.')
//				.addField('This is MarioGerms or Evan', 'You may be wondering why on earth i have made a TikTok account especially since ive been very vocal about how much i dislike the app', true)
				.setThumbnail('https://cravatar.eu/helmavatar/MarioGerms/512.png')
				.addFields(
					{ name: 'text1', value: 'text2' },
					{ name: 'text3', value: 'text4', inline: true },
					{ name: 'text5', value: 'text6', inline: true },)
				
				await interaction.reply({ embeds: [testembed]});
			
			
 	 }
	
	});

//start up

client.on('ready', () => {
    console.log('the bot has started successfully.')

    client.user.setActivity('Jake Struggle with coding', {type: "WATCHING"})
})
client.login(token);
