const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('hug').setDescription('hug someone').addStringOption(option => option.setName('input').setDescription('The input to echo back').setRequired(true)),
    new SlashCommandBuilder().setName('test').setDescription('its just a test command'),
	new SlashCommandBuilder().setName('botping').setDescription('gets the bots ping'),
	new SlashCommandBuilder().setName('stopbot').setDescription('Runs the command "process.exit()"'),
	new SlashCommandBuilder().setName('buttontest').setDescription('Runs a test command that shows buttons'),
//	new SlashCommandBuilder().setName('pintest').setDescription('Runs the command "process.exit()"'),
	new SlashCommandBuilder().setName('embed').setDescription('does something idk'),


]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
