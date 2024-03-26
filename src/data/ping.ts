import { userMention } from 'discord.js';

export const pingMessage = (helpCommand: string) =>
  `Оваа команда проверува дали ботот ${userMention('1056972602209484923')} е активен или не.\n
  Ако имате било какви прашања, предлози или проблеми, контактирајте нè.`;