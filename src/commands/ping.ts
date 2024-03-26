import { getPingEmbed } from '../components/commands.js';
import { commandDescriptions } from '../data/commands.js';
import {
  type ChatInputCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js';

const name = 'ping';

export const data = new SlashCommandBuilder()
  .setName(name)
  .setDescription(commandDescriptions[name]);

export const execute = async (interaction: ChatInputCommandInteraction) => {

  const embed = await getPingEmbed();
  await interaction.editReply({
    embeds: [embed],
  });
};