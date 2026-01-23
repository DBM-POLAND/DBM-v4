//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// * Discord Bot Maker Bot
// * Version 4.0.0
// * Shadow (1409504484270276699)
// * Help: https://discord.gg/9HYB4n3Dz4
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

global.DBM = {};
DBM.version = "4.0.0";

DBM.v14Config = {
  BotWelcomeLog: {
    enabled: true, // display welcome log? (true/false)
    content: "Bot is Ready!", // content of the welcome log
  },
  Events: {
    IgnoreBotsOnAnyMessageEvent: true, // should I ignore bots in any message events? (true/false)
  },
};

const fs = require("fs");
const path = require("path");

const requiredDjsVersion = "14.25.1";
let DiscordJS;
try {
  DiscordJS = DBM.DiscordJS = require("discord.js");
} catch (err) {
  const { execSync } = require("child_process");
  console.log(`Module "discord.js" is not installed! Installing...`);
  try {
    execSync(`npm install discord.js@${requiredDjsVersion}`, {
      stdio: "inherit",
    });
    DiscordJS = DBM.DiscordJS = require("discord.js");
  } catch (err) {
    console.error(err);
  }
}
if (
  requiredDjsVersion.localeCompare(DiscordJS.version, {
    numeric: true,
    sensitivity: "base",
  }) > 0
) {
  console.log(
    `This version of Discord Bot Maker requires discord.js ${requiredDjsVersion}+.
It is currently ${DiscordJS.version}.
Please use "Project > Module Manager" and update to discord.js ${requiredDjsVersion}.\n\n`,
  );
  throw new Error(`Need discord.js ${requiredDjsVersion} to run!!!`);
}

const noop = () => void 0;

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Output Messages
// Gathered all the output messages in single place for easier translation.
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

const CreateEnum = (obj) =>
  Object.fromEntries(Object.keys(obj).map((k, i) => [k, i]));

const MsgType = CreateEnum({
  MISSING_ACTION: true,
  DATA_PARSING_ERROR: true,
  MISSING_ACTIONS: true,

  DUPLICATE_SLASH_COMMAND: true,
  INVALID_SLASH_NAME: true,
  DUPLICATE_USER_COMMAND: true,
  DUPLICATE_MESSAGE_COMMAND: true,
  DUPLICATE_SLASH_PARAMETER: true,
  INVALID_SLASH_PARAMETER_NAME: true,
  INVALID_SLASH_COMMAND_SERVER_ID: true,
  DUPLICATE_BUTTON_ID: true,
  DUPLICATE_SELECT_ID: true,
  TOO_MANY_SPACES_SLASH_NAME: true,
  SUB_COMMAND_ALREADY_EXISTS: true,
  SUB_COMMAND_GROUP_ALREADY_EXISTS: true,
  ERROR_RELOADING_COMMANDS: true,

  MISSING_APPLICATION_COMMAND_ACCESS: true,
  MISSING_MUSIC_MODULES: true,

  MUTABLE_VOLUME_DISABLED: true,
  MUTABLE_VOLUME_NOT_IN_CHANNEL: true,
  ERROR_GETTING_YT_INFO: true,
  ERROR_CREATING_AUDIO: true,

  MISSING_MEMBER_INTENT_FIND_USER_ID: true,
  CANNOT_FIND_USER_BY_ID: true,

  SERVER_MESSAGE_INTENT_REQUIRED: true,
  CHANNEL_PARTIAL_REQUIRED: true,

  ERROR_READING_FILE: true,
  ERROR_WRITING_FILE: true,
  ERROR_FILE_NOT_FOUND: true,
  ERROR_DELETING_FILE: true,

  ERROR_PINNING_MESSAGE: true,
  ERROR_SENDING_MESSAGE: true,

  SERVER_NOT_FOUND: true,
  MEMBER_NOT_FOUND: true,
  ROLE_NOT_FOUND: true,
});

function PrintError(type, ...args) {
  switch (type) {
    case MsgType.MISSING_ACTION: {
      console.error(`${args[0]} does not exist!`);
      break;
    }
    case MsgType.DATA_PARSING_ERROR: {
      console.error(`There was issue parsing ${args[0]}!`);
      break;
    }
    case MsgType.MISSING_ACTIONS: {
      console.error(
        `[Missing Actions]\nPlease copy the "Actions" folder from the Discord Bot Maker directory to this bot\'s directory: \n${args[0]}`,
      );
      break;
    }
    case MsgType.DUPLICATE_SLASH_COMMAND: {
      console.warn(
        `[Duplicate Slash Command]\nSlash command with name "${args[0]}" already exists!\nThis duplicate will be ignored.\n`,
      );
      break;
    }
    case MsgType.TOO_MANY_SPACES_SLASH_NAME: {
      console.warn(
        `[Too Many Spaces in Slash Name]\nSlash command with name "${args[0]}" has too many spaces!\nSlash command names may only contain a maximum of three different words.\n`,
      );
      break;
    }
    case MsgType.SUB_COMMAND_ALREADY_EXISTS: {
      console.warn(
        `[Sub-Command Already Exists]\nSlash command with name "${args[0]}" cannot exist.\nIt requires the creation of a "sub-command group" called "${args[1]}",\nbut there\'s already a command with that name.`,
      );
      break;
    }
    case MsgType.SUB_COMMAND_GROUP_ALREADY_EXISTS: {
      console.warn(
        `[Sub-Command Group Already Exists]\nSlash command with name "${args[0]}" cannot exist.\nThere is already a "sub-command group" with that name.\nThe "sub-command group" exists because of a command named something like: "${args[0]} _____"`,
      );
      break;
    }
    case MsgType.ERROR_RELOADING_COMMANDS: {
      console.warn(`Error reloading commands: ${args[0]}`);
      break;
    }
    case MsgType.INVALID_SLASH_NAME: {
      console.error(
        `[Invalid Slash Command Name]\nSlash command has invalid name: "${args[0]}".\nSlash command names cannot have spaces and must only contain letters, numbers, underscores, and dashes!\nThis command will be ignored.`,
      );
      break;
    }
    case MsgType.DUPLICATE_USER_COMMAND: {
      console.warn(
        `[Duplicate User Command]\nUser command with name "${args[0]}" already exists!\nThis duplicate will be ignored.\n`,
      );
      break;
    }
    case MsgType.DUPLICATE_MESSAGE_COMMAND: {
      console.warn(
        `[Duplicate Message Command]\nMessage command with name "${args[0]}" already exists!\nThis duplicate will be ignored.\n`,
      );
      break;
    }
    case MsgType.DUPLICATE_SLASH_PARAMETER: {
      console.warn(
        `[Duplicate Slash Command]\nSlash command "${args[0]}" parameter #${args[1]} ("${args[2]}") has a name that\'s already being used!\nThis duplicate will be ignored.\n`,
      );
      break;
    }
    case MsgType.INVALID_SLASH_PARAMETER_NAME: {
      console.error(
        `[Invalid Slash Parameter Name]\nSlash command "${args[0]}" parameter #${args[1]} has invalid name: "${args[2]}".\nSlash command parameter names cannot have spaces and must only contain letters, numbers, underscores, and dashes!\nThis parameter will be ignored.\n`,
      );
      break;
    }
    case MsgType.INVALID_SLASH_COMMAND_SERVER_ID: {
      console.error(
        `Invalid Server ID "${args[0]}" listed in "Slash Command Options -> Server IDs for Slash Commands"!\n`,
      );
      break;
    }
    case MsgType.DUPLICATE_BUTTON_ID: {
      console.warn(
        `Button interaction with unique id "${args[0]}" already exists!\nThis duplicate will be ignored.\n`,
      );
      break;
    }
    case MsgType.DUPLICATE_SELECT_ID: {
      console.warn(
        `Select menu interaction with unique id "${args[0]}" already exists!\nThis duplicate will be ignored.\n`,
      );
      break;
    }
    case MsgType.MISSING_APPLICATION_COMMAND_ACCESS: {
      console.warn(
        `Slash commands cannot be provided to server: ${args[0]} (ID: ${args[1]}).\nPlease re-invite the bot to this server using the invite link found in "Settings -> Bot Settings".\nAlternatively, you can switch to using Global Slash Commands in "Settings -> Slash Command Settings -> Slash Command Creation Preference". However, please note global commands take a long time to update (~1 hour).`,
      );
      break;
    }
    case MsgType.MISSING_MUSIC_MODULES: {
      console.warn(
        `Could not load audio-related Node modules.\nPlease run "File -> Music Capabilities -> Update Music Libraries" to ensure they are installed.`,
      );
      break;
    }
    case MsgType.MUTABLE_VOLUME_DISABLED: {
      console.warn(
        `[Mutable Volume Disabled]\nTried setting volume but "Mutable Volume" is disabled.`,
      );
      break;
    }
    case MsgType.MUTABLE_VOLUME_NOT_IN_CHANNEL: {
      console.warn(
        "[Mutable Volume Not in Channel]\nTried setting volume but the bot is not in a voice channel.",
      );
      break;
    }
    case MsgType.ERROR_GETTING_YT_INFO: {
      console.warn(`Error getting YouTube info.\n${args[0]}`);
      break;
    }
    case MsgType.ERROR_CREATING_AUDIO: {
      console.warn(`Error creating audio resource.\n${args[0]}`);
      break;
    }
    case MsgType.MISSING_MEMBER_INTENT_FIND_USER_ID: {
      console.warn(
        ` - DBM Warning - \nFind User (by Name/ID) may freeze or error because\nthe bot has not enabled the Guild Members Intent.`,
      );
      break;
    }
    case MsgType.CANNOT_FIND_USER_BY_ID: {
      console.warn(
        `[Cannot Find User by ID]\nCannot find user by id: ${args[0]}`,
      );
      break;
    }
    case MsgType.SERVER_MESSAGE_INTENT_REQUIRED: {
      console.warn(
        `[Message Content Intent Required]\n${args[0]} commands found that require the "Message Content" intent.\nThese commands require the bot to be able to read messages from Discord servers.\nTo enable this behavior, first ensure the "MESSAGE CONTENT INTENT" is enabled in the "Bot" section on the Discord Developer Portal (the same page you got your bot token from).\nSecondly, in Discord Bot Maker, select Extensions -> Bot Intents from the title menu bar, and in this dialog, make sure "Message Content" is checked.`,
      );
      break;
    }
    case MsgType.CHANNEL_PARTIAL_REQUIRED: {
      console.warn(
        `[Channel Partial Required]\n${args[0]} commands are set to "DMs Only", but the Channel partial is not enabled.\nTo allow the bot to read messages from DMs, do the following: In Discord Bot Maker, on the title menu bar, go to Extensions -> Bot Partials.\nIn the dialog that appears, select "Custom" and then make sure "Channel (Enables DMs)" is checked.`,
      );
      break;
    }
    case MsgType.ERROR_READING_FILE: {
      console.error(`Error reading file from path: "${args[0]}"`);
      break;
    }
    case MsgType.ERROR_WRITING_FILE: {
      console.error(`Error saving file to path: "${args[0]}"`);
      break;
    }
    case MsgType.ERROR_DELETING_FILE: {
      console.error(`Error deleting file from path: "${args[0]}"`);
      break;
    }
    case MsgType.ERROR_PINNING_MESSAGE: {
      console.error(`Error while pinning message: "${args[0]}"`);
      break;
    }
    case MsgType.ERROR_SENDING_MESSAGE: {
      console.error(`Error sending message: "${args[0]}"`);
      break;
    }
    case MsgType.SERVER_NOT_FOUND: {
      console.error(`Could not find server: "${args[0]}"`);
      break;
    }
    case MsgType.MEMBER_NOT_FOUND: {
      console.error(`Could not find member: "${args[0]}"`);
      break;
    }
    case MsgType.ROLE_NOT_FOUND: {
      console.error(`Could not find role: "${args[0]}"`);
      break;
    }
  }
}

DBM.PrintError = PrintError;
DBM.MsgType = MsgType;

function GetActionErrorText(location, index, dataName) {
  return (
    "Error with the " +
    location +
    (dataName ? ` - Action #${index} (${dataName})` : "")
  );
}

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Bot
// Contains functions for controlling the bot.
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

const Bot = (DBM.Bot = {});

Bot.$slash = {}; // Slash commands
Bot.$user = {}; // User commands
Bot.$msge = {}; // Message commands

Bot.$button = {}; // Button interactions
Bot.$select = {}; // Select interactions

Bot.$cmds = {}; // Normal commands
Bot.$icds = []; // Includes word commands
Bot.$regx = []; // Regular Expression commands
Bot.$anym = []; // Any message commands

Bot.$other = {}; // Manual commands

Bot.$evts = {}; // Events

Bot.bot = null;
Bot.applicationCommandData = [];

Bot.PRIVILEGED_INTENTS =
  DiscordJS.GatewayIntentBits.GuildMembers |
  DiscordJS.GatewayIntentBits.GuildPresences |
  DiscordJS.GatewayIntentBits.MessageContent;

Bot.NON_PRIVILEGED_INTENTS =
  DiscordJS.GatewayIntentBits.Guilds |
  DiscordJS.GatewayIntentBits.GuildBans |
  DiscordJS.GatewayIntentBits.GuildEmojisAndStickers |
  DiscordJS.GatewayIntentBits.GuildIntegrations |
  DiscordJS.GatewayIntentBits.GuildWebhooks |
  DiscordJS.GatewayIntentBits.GuildInvites |
  DiscordJS.GatewayIntentBits.GuildVoiceStates |
  DiscordJS.GatewayIntentBits.GuildMessages |
  DiscordJS.GatewayIntentBits.GuildMessageReactions |
  DiscordJS.GatewayIntentBits.GuildMessageTyping |
  DiscordJS.GatewayIntentBits.DirectMessages |
  DiscordJS.GatewayIntentBits.DirectMessageReactions |
  DiscordJS.GatewayIntentBits.DirectMessageTyping |
  DiscordJS.GatewayIntentBits.GuildScheduledEvents |
  DiscordJS.GatewayIntentBits.AutoModerationConfiguration |
  DiscordJS.GatewayIntentBits.AutoModerationExecution |
  DiscordJS.GatewayIntentBits.GuildMessagePolls |
  DiscordJS.GatewayIntentBits.DirectMessagePolls;

Bot.ALL_INTENTS = Bot.PRIVILEGED_INTENTS | Bot.NON_PRIVILEGED_INTENTS;

Bot.init = function () {
  this.initBot();
  this.setupBot();
  this.reformatData();
  this.checkForCommandErrors();
  this.initEvents();
  this.login();
};

Bot.initBot = function () {
  const options = this.makeClientOptions();
  options.intents = this.intents();
  if (this.usePartials()) {
    options.partials = this.partials();
  }
  this.hasMemberIntents =
    (options.intents & DiscordJS.GatewayIntentBits.GuildMembers ||
      "GuildMembers") !== 0;
  this.hasMessageContentIntents =
    (options.intents & DiscordJS.GatewayIntentBits.MessageContent ||
      "MessageContent") !== 0;
  this.bot = new DiscordJS.Client(options);
};

Bot.makeClientOptions = function () {
  return {};
};

Bot.intents = function () {
  return this.NON_PRIVILEGED_INTENTS;
};

Bot.usePartials = function () {
  return false;
};

Bot.partials = function () {
  return [];
};

Bot.setupBot = function () {
  this.bot.on("raw", this.onRawData);
};

Bot.onRawData = function (packet) {
  if (
    packet.t !== "MESSAGE_REACTION_ADD" ||
    packet.t !== "MESSAGE_REACTION_REMOVE"
  )
    return;

  const client = Bot.bot;
  const channel = client.channels.resolve(packet.d.channel_id);
  if (channel?.messages.cache.has(packet.d.message_id)) return;

  channel.messages
    .fetch(packet.d.message_id)
    .then((message) => {
      const emoji = packet.d.emoji.id
        ? `${packet.d.emoji.name}:${packet.d.emoji.id}`
        : packet.d.emoji.name;
      const reaction = message.reactions.resolve(emoji);
      if (packet.t === "MESSAGE_REACTION_ADD") {
        client.emit(
          "messageReactionAdd",
          reaction,
          client.users.resolve(packet.d.user_id),
        );
      }
      if (packet.t === "MESSAGE_REACTION_REMOVE") {
        client.emit(
          "messageReactionRemove",
          reaction,
          client.users.resolve(packet.d.user_id),
        );
      }
    })
    .catch(noop);
};

Bot.reformatData = function () {
  this.reformatCommands();
  this.reformatEvents();
};

Bot.reformatCommands = function () {
  const data = Files.data.commands;
  if (!data) return;
  this._hasTextCommands = false;
  this._textCommandCount = 0;
  this._dmTextCommandCount = 0;
  this._caseSensitive = Files.data.settings.case === "true";
  for (let i = 0; i < data.length; i++) {
    const com = data[i];
    if (com) {
      this.prepareActions(com.actions);

      if (com.comType <= "3") {
        this._textCommandCount++;
        if (com.restriction === "3") {
          this._dmTextCommandCount++;
        }
      }

      switch (com.comType) {
        case "0": {
          this._hasTextCommands = true;
          if (this._caseSensitive) {
            this.$cmds[com.name] = com;
            if (com._aliases) {
              const aliases = com._aliases;
              for (let j = 0; j < aliases.length; j++) {
                this.$cmds[aliases[j]] = com;
              }
            }
          } else {
            this.$cmds[com.name.toLowerCase()] = com;
            if (com._aliases) {
              const aliases = com._aliases;
              for (let j = 0; j < aliases.length; j++) {
                this.$cmds[aliases[j].toLowerCase()] = com;
              }
            }
          }
          break;
        }
        case "1": {
          this.$icds.push(com);
          break;
        }
        case "2": {
          this.$regx.push(com);
          break;
        }
        case "3": {
          this.$anym.push(com);
          break;
        }
        case "4": {
          const names = this.validateSlashCommandName(com.name);
          if (names) {
            if (names.length > 3) {
              PrintError(MsgType.TOO_MANY_SPACES_SLASH_NAME, com.name);
            } else {
              const keyName = names.join(" ");
              if (this.$slash[keyName]) {
                PrintError(MsgType.DUPLICATE_SLASH_COMMAND, keyName);
              } else {
                this.$slash[keyName] = com;
                if (names.length === 1) {
                  this.applicationCommandData.push(
                    this.createApiJsonFromCommand(com, keyName),
                  );
                } else {
                  this.mergeSubCommandIntoCommandData(
                    names,
                    this.createApiJsonFromCommand(com, names[names.length - 1]),
                  );
                }
              }
            }
          } else {
            PrintError(MsgType.INVALID_SLASH_NAME, com.name);
          }
          break;
        }
        case "5": {
          const name = com.name;
          if (this.$user[name]) {
            PrintError(MsgType.DUPLICATE_USER_COMMAND, name);
          } else {
            this.$user[name] = com;
            this.applicationCommandData.push(
              this.createApiJsonFromCommand(com, name),
            );
          }
          break;
        }
        case "6": {
          const name = com.name;
          if (this.$msge[name]) {
            PrintError(MsgType.DUPLICATE_MESSAGE_COMMAND, name);
          } else {
            this.$msge[name] = com;
            this.applicationCommandData.push(
              this.createApiJsonFromCommand(com, name),
            );
          }
          break;
        }
        default: {
          this.$other[com._id] = com;
          break;
        }
      }
    }
  }
};

Bot.createApiJsonFromCommand = function (com, name) {
  const result = {
    name: name ?? com.name,
    description: this.generateSlashCommandDescription(com),
  };
  switch (com.comType) {
    case "4": {
      result.type = DiscordJS.ApplicationCommandType.ChatInput;
      break;
    }
    case "5": {
      result.type = DiscordJS.ApplicationCommandType.User;
      break;
    }
    case "6": {
      result.type = DiscordJS.ApplicationCommandType.Message;
      break;
    }
  }
  if (com.comType === "4" && com.parameters && Array.isArray(com.parameters)) {
    const convertedParams = com.parameters.map(
      this.convertGuiParameterToDiscord.bind(this),
    );
    result.options = this.validateSlashCommandParameters(
      convertedParams,
      result.name,
    );
  }
  return result;
};

Bot.convertGuiParameterToDiscord = function (param) {
  const TypeMap = {
    STRING: DiscordJS.ApplicationCommandOptionType.String,
    INTEGER: DiscordJS.ApplicationCommandOptionType.Integer,
    BOOLEAN: DiscordJS.ApplicationCommandOptionType.Boolean,
    NUMBER: DiscordJS.ApplicationCommandOptionType.Number,
    USER: DiscordJS.ApplicationCommandOptionType.User,
    CHANNEL: DiscordJS.ApplicationCommandOptionType.Channel,
    ROLE: DiscordJS.ApplicationCommandOptionType.Role,
    MENTIONABLE: DiscordJS.ApplicationCommandOptionType.Mentionable,
    ATTACHMENT: DiscordJS.ApplicationCommandOptionType.Attachment,
  };
  const converted = { ...param };
  if (typeof converted.type === "string") {
    converted.type = TypeMap[converted.type.toUpperCase()];
  }
  if (Array.isArray(converted.choices)) {
    converted.choices = converted.choices.map((choice) => ({
      name: choice.name,
      value: choice.value,
    }));
  }
  return converted;
};

Bot.mergeSubCommandIntoCommandData = function (names, data) {
  data.type = DiscordJS.ApplicationCommandOptionType.Subcommand;

  const baseName = names[0];
  let baseCommand =
    this.applicationCommandData.find((data) => data.name === baseName) ?? null;
  if (baseCommand === null) {
    baseCommand = {
      name: baseName,
      description: this.getNoDescriptionText(),
      options: [],
    };
    this.applicationCommandData.push(baseCommand);
  }

  if (names.length === 2) {
    if (!baseCommand.options) {
      baseCommand.options = [];
    }
    if (
      baseCommand.options.find(
        (d) =>
          d.name === data.name &&
          d.type === DiscordJS.ApplicationCommandOptionType.SubcommandGroup,
      )
    ) {
      PrintError(MsgType.SUB_COMMAND_GROUP_ALREADY_EXISTS, names.join(" "));
    } else {
      baseCommand.options.push(data);
    }
  } else if (names.length >= 3) {
    if (!baseCommand.options) {
      baseCommand.options = [];
    }

    const groupName = names[1];
    let baseGroup =
      baseCommand.options.find((option) => option.name === groupName) ?? null;
    if (baseGroup === null) {
      baseGroup = {
        name: groupName,
        description: this.getNoDescriptionText(),
        type: DiscordJS.ApplicationCommandOptionType.SubcommandGroup,
        options: [],
      };
      baseCommand.options.push(baseGroup);
    } else if (
      baseGroup.type === DiscordJS.ApplicationCommandOptionType.Subcommand
    ) {
      PrintError(
        MsgType.SUB_COMMAND_ALREADY_EXISTS,
        names.join(" "),
        `${names[0]} ${names[1]}`,
      );
      return;
    }

    baseGroup.options.push(data);
  }
};

Bot.validateSlashCommandName = function (name) {
  if (!name) {
    return false;
  }

  const names = name
    .split(/\s+/)
    .map((name) => this.validateSlashCommandParameterName(name))
    .filter((name) => typeof name === "string");

  return names.length > 0 ? names : false;
};

Bot.validateSlashCommandParameterName = function (name) {
  if (!name) {
    return false;
  }
  if (name.length > 32) {
    name = name.substring(0, 32);
  }
  if (name.match(/^[\p{L}\w-]{1,32}$/iu)) {
    return name.toLowerCase();
  }
  return false;
};

Bot.generateSlashCommandDescription = function (com) {
  const desc = com.description;
  if (com.comType !== "4") {
    return "";
  }
  return this.validateSlashCommandDescription(desc);
};

Bot.validateSlashCommandDescription = function (desc) {
  if (desc?.length > 100) {
    return desc.substring(0, 100);
  }
  return desc || this.getNoDescriptionText();
};

Bot.getNoDescriptionText = function () {
  return Files.data.settings.noDescriptionText ?? "(no description)";
};

Bot.validateSlashCommandParameters = function (parameters, commandName) {
  const requireParams = [];
  const optionalParams = [];
  const existingNames = {};
  for (let i = 0; i < parameters.length; i++) {
    const paramsData = parameters[i];
    const name = this.validateSlashCommandParameterName(paramsData.name);
    if (name) {
      if (!existingNames[name]) {
        existingNames[name] = true;
        paramsData.name = name;
        paramsData.description = this.validateSlashCommandDescription(
          paramsData.description,
        );
        if (paramsData.required) {
          requireParams.push(paramsData);
        } else {
          optionalParams.push(paramsData);
        }
      } else {
        PrintError(MsgType.DUPLICATE_SLASH_PARAMETER, commandName, i + 1, name);
      }
    } else {
      PrintError(
        MsgType.INVALID_SLASH_PARAMETER_NAME,
        commandName,
        i + 1,
        paramsData.name,
      );
    }
  }
  return requireParams.concat(optionalParams);
};

Bot.reformatEvents = function () {
  const data = Files.data.events;
  if (!data) return;
  for (let i = 0; i < data.length; i++) {
    const com = data[i];
    if (com) {
      this.prepareActions(com.actions);
      const type = com["event-type"];
      if (!this.$evts[type]) this.$evts[type] = [];
      this.$evts[type].push(com);
    }
  }
};

Bot.prepareActions = function (actions) {
  if (actions) {
    const customData = {};
    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      if (action?.name && Actions.modInitReferences[action.name]) {
        Actions.modInitReferences[action.name].call(
          this,
          action,
          customData,
          i,
        );
      }
    }
    if (Object.keys(customData).length > 0) {
      actions._customData = customData;
    }
  }
};

Bot.registerButtonInteraction = function (interactionId, data) {
  if (interactionId) {
    if (!this.$button[interactionId]) {
      this.$button[interactionId] = data;
    } else {
      PrintError(MsgType.DUPLICATE_BUTTON_ID, interactionId);
    }
  }
};

Bot.registerSelectMenuInteraction = function (interactionId, data) {
  if (interactionId) {
    if (!this.$select[interactionId]) {
      this.$select[interactionId] = data;
    } else {
      PrintError(MsgType.DUPLICATE_SELECT_ID, interactionId);
    }
  }
};

Bot.checkForCommandErrors = function () {
  if (this._textCommandCount > 0 && !this.hasMessageContentIntents) {
    PrintError(MsgType.SERVER_MESSAGE_INTENT_REQUIRED, this._textCommandCount);
  }
  if (
    this._dmTextCommandCount > 0 &&
    (!this.usePartials() || !this.partials().includes("CHANNEL"))
  ) {
    PrintError(MsgType.CHANNEL_PARTIAL_REQUIRED, this._dmTextCommandCount);
  }
};

Bot.initEvents = function () {
  this.bot.on("clientReady", this.onReady.bind(this));
  this.bot.on("guildCreate", this.onServerJoin.bind(this));
  this.bot.on("messageCreate", this.onMessage.bind(this));
  this.bot.on("interactionCreate", this.onInteraction.bind(this));
  Events.registerEvents(this.bot);
};

Bot.login = function () {
  this.bot.login(Files.data.settings.token);
};

Bot.onReady = async function () {
  process.send?.("BotReady");
  if (DBM.v14Config.BotWelcomeLog.enabled) {
    console.log(DBM.v14Config.BotWelcomeLog.content || "Bot is ready!"); // Tells editor to start!
  }
  this.restoreVariables();
  this.registerApplicationCommands();
  this.preformInitialization();
};

Bot.restoreVariables = function () {
  Files.restoreServerVariables();
  Files.restoreGlobalVariables();
};

Bot.registerApplicationCommands = function () {
  let slashType = Files.data.settings.slashType ?? "auto";

  if (slashType === "auto") {
    const serverCount = this.bot.guilds.cache.size;
    if (serverCount <= 15) {
      slashType = "all";
    } else {
      slashType = "global";
    }
  }

  this._slashCommandCreateType = slashType;
  this._slashCommandServerList =
    Files.data.settings?.slashServers?.split?.(/[\n\r]+/) ?? [];

  switch (slashType) {
    case "all": {
      this.setAllServerCommands(this.applicationCommandData);
      this.setGlobalCommands([]);
      break;
    }
    case "global": {
      this.setAllServerCommands([], false);
      this.setGlobalCommands(this.applicationCommandData);
      break;
    }
    case "manual": {
      this.setCertainServerCommands(
        this.applicationCommandData,
        this._slashCommandServerList,
      );
      this.setGlobalCommands([]);
      break;
    }
    case "manualglobal": {
      this.setCertainServerCommands(
        this.applicationCommandData,
        this._slashCommandServerList,
      );
      this.setGlobalCommands(this.applicationCommandData);
      break;
    }
  }
};

Bot.onServerJoin = function (guild) {
  this.initializeCommandsForNewServer(guild);
};

Bot.initializeCommandsForNewServer = function (guild) {
  switch (this._slashCommandCreateType) {
    case "all":
    case "manual":
    case "manualglobal": {
      if (
        this._slashCommandCreateType === "all" ||
        this._slashCommandServerList.includes(guild.id)
      ) {
        this.setCommandsForServer(guild, this.applicationCommandData, true);
      }
      break;
    }
  }
};

Bot.shouldPrintAnyMissingAccessError = function () {
  return !(Files.data.settings.ignoreCommandScopeErrors ?? false);
};

Bot.clearUnspecifiedServerCommands = function () {
  return Files.data.settings.clearUnlistedServers ?? false;
};

Bot.setGlobalCommands = function (commands) {
  this.bot.application?.commands
    ?.set?.(commands)
    .then(function () {})
    .catch(function (err) {
      console.error(err);
    });
};

Bot.setCommandsForServer = function (guild, commands, printMissingAccessError) {
  if (guild?.commands?.set) {
    guild.commands
      .set(commands)
      .then(function () {})
      .catch((err) => {
        if (err.code === 50001) {
          if (
            this.shouldPrintAnyMissingAccessError() &&
            printMissingAccessError
          ) {
            PrintError(
              MsgType.MISSING_APPLICATION_COMMAND_ACCESS,
              guild.name,
              guild.id,
            );
          }
        } else {
          console.error(err);
        }
      });
  }
};

Bot.setAllServerCommands = function (commands, printMissingAccessError = true) {
  this.bot.guilds.cache.forEach((key, value) => {
    this.bot.guilds
      .fetch(key)
      .then((guild) => {
        this.setCommandsForServer(guild, commands, printMissingAccessError);
      })
      .catch(function (err) {
        console.error(err);
      });
  });
};

Bot.setCertainServerCommands = function (commands, serverIdList) {
  if (this.clearUnspecifiedServerCommands()) {
    this.bot.guilds.cache.forEach((key, value) => {
      this.bot.guilds
        .fetch(key)
        .then((guild) => {
          if (serverIdList.includes(guild.id)) {
            this.setCommandsForServer(guild, commands, true);
          } else {
            this.setCommandsForServer(guild, [], true);
          }
        })
        .catch(function (err) {
          console.error(err);
        });
    });
  } else {
    for (let i = 0; i < serverIdList.length; i++) {
      this.bot.guilds
        .fetch(serverIdList[i])
        .then((guild) => {
          this.setCommandsForServer(guild, commands, true);
        })
        .catch(function (err) {
          PrintError(MsgType.INVALID_SLASH_COMMAND_SERVER_ID, serverIdList[i]);
        });
    }
  }
};

Bot.preformInitialization = function () {
  const bot = this.bot;
  if (this.$evts["1"]) {
    Events.onInitialization(bot);
  }
  if (this.$evts["48"]) {
    Events.onInitializationOnce(bot);
  }
  if (this.$evts["3"]) {
    Events.setupIntervals(bot);
  }
};

Bot.onMessage = function (msg) {
  if (DBM.v14Config.Events.IgnoreBotsOnAnyMessageEvent && msg.author.bot)
    return;
  try {
    if (!this.checkCommand(msg)) {
      this.onAnyMessage(msg);
    }
  } catch (e) {
    console.error(e);
  }
};

Bot.checkCommand = function (msg) {
  if (!this._hasTextCommands) return false;
  let command = this.checkTag(msg.content);
  if (!command) return false;
  if (!this._caseSensitive) {
    command = command.toLowerCase();
  }
  const cmd = this.$cmds[command];
  if (cmd) {
    Actions.preformActionsFromMessage(msg, cmd);
    return true;
  }
  return false;
};

Bot.escapeRegExp = function (text) {
  return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

Bot.generateTagRegex = function (tag, allowPrefixSpace) {
  return new RegExp(
    `^${this.escapeRegExp(tag)}${allowPrefixSpace ? "\\s*" : ""}`,
  );
};

Bot.populateTagRegex = function () {
  if (this.tagRegex) return;
  const tag = Files.data.settings.tag;
  const allowPrefixSpace = Files.data.settings.allowPrefixSpace === "true";
  this.tagRegex = this.generateTagRegex(tag, allowPrefixSpace);
  return this.tagRegex;
};

Bot.checkTag = function (content) {
  const allowPrefixSpace = Files.data.settings.allowPrefixSpace === "true";
  const tag = Files.data.settings.tag;
  this.populateTagRegex();
  const separator = Files.data.settings.separator || "\\s+";
  if (content.startsWith(tag)) {
    if (allowPrefixSpace && this.tagRegex.test(content)) {
      content = content.replace(this.tagRegex, "");
      return content.split(new RegExp(separator))[0];
    } else {
      content = content.split(new RegExp(separator))[0];
      return content.substring(tag.length);
    }
  }
  return null;
};

Bot.onAnyMessage = function (msg) {
  this.checkIncludes(msg);
  this.checkRegExps(msg);
  if (!msg.author.bot) {
    if (this.$evts["2"]) {
      Events.callEvents("2", 1, 0, 2, false, "", msg);
    }
    const anym = this.$anym;
    for (let i = 0; i < anym.length; i++) {
      if (anym[i]) {
        Actions.preformActionsFromMessage(msg, anym[i]);
      }
    }
  }
};

Bot.checkIncludes = function (msg) {
  const text = msg.content;
  if (!text) return;
  const icds = this.$icds;
  const icds_len = icds.length;
  for (let i = 0; i < icds_len; i++) {
    if (!icds[i]?.name) continue;
    if (icds[i]._aliases) {
      const words = [icds[i].name].concat(icds[i]._aliases);
      if (text.match(new RegExp("\\b(?:" + words.join("|") + ")\\b", "i"))) {
        Actions.preformActionsFromMessage(msg, icds[i]);
      }
    } else if (text.match(new RegExp("\\b" + icds[i].name + "\\b", "i"))) {
      Actions.preformActionsFromMessage(msg, icds[i]);
    }
  }
};

Bot.checkRegExps = function (msg) {
  const text = msg.content;
  if (!text) return;
  const regx = this.$regx;
  const regx_len = regx.length;
  for (let i = 0; i < regx_len; i++) {
    if (regx[i]?.name) {
      if (text.match(new RegExp(regx[i].name, "i"))) {
        Actions.preformActionsFromMessage(msg, regx[i]);
      } else if (regx[i]._aliases) {
        const aliases = regx[i]._aliases;
        const aliases_len = aliases.length;
        for (let j = 0; j < aliases_len; j++) {
          if (text.match(new RegExp("\\b" + aliases[j] + "\\b", "i"))) {
            Actions.preformActionsFromMessage(msg, regx[i]);
            break;
          }
        }
      }
    }
  }
};

Bot.onInteraction = function (interaction) {
  if (interaction.isCommand() && !interaction.isContextMenuCommand()) {
    return this.onSlashCommandInteraction(interaction);
  }
  if (interaction.isContextMenuCommand()) {
    return this.onContextMenuInteraction(interaction);
  }
  if (interaction.isModalSubmit()) {
    return Actions.checkModalSubmitResponses(interaction);
  }
  if (interaction.componentType === 2) {
    interaction._button = interaction.component;
  } else if (interaction.componentType === 3) {
    interaction._select = interaction.component;
  }
  if (!Actions.checkTemporaryInteractionResponses(interaction)) {
    if (interaction.isButton()) return this.onButtonInteraction(interaction);
    else if (
      interaction.isStringSelectMenu() ||
      interaction.isUserSelectMenu() ||
      interaction.isRoleSelectMenu() ||
      interaction.isMentionableSelectMenu() ||
      interaction.isChannelSelectMenu()
    )
      return this.onSelectMenuInteraction(interaction);
  }
};

Bot.onSlashCommandInteraction = function (interaction) {
  let interactionName = interaction.commandName;
  const group = interaction.options.getSubcommandGroup(false);
  if (group) {
    interactionName += " " + group;
  }
  const sub = interaction.options.getSubcommand(false);
  if (sub) {
    interactionName += " " + sub;
  }
  if (this.$slash[interactionName]) {
    Actions.preformActionsFromInteraction(
      interaction,
      this.$slash[interactionName],
      true,
    );
  }
};

Bot.onContextMenuInteraction = function (interaction) {
  const cmdType = interaction.command?.type;
  if (cmdType === 5 || interaction.targetUser) {
    return this.onUserContextMenuInteraction(interaction);
  }
  if (cmdType === 6 || interaction.targetMessage) {
    return this.onMessageContextMenuInteraction(interaction);
  }
};

Bot.onUserContextMenuInteraction = function (interaction) {
  const interactionName = interaction.commandName;
  if (this.$user[interactionName]) {
    if (interaction.guild) {
      interaction.guild.members
        .fetch(interaction.targetId)
        .then((member) => {
          interaction._targetMember = member;
          Actions.preformActionsFromInteraction(
            interaction,
            this.$user[interactionName],
            true,
          );
        })
        .catch(console.error);
    } else {
      interaction._targetMember = interaction.targetUser;
      Actions.preformActionsFromInteraction(
        interaction,
        this.$user[interactionName],
        true,
      );
    }
  }
};

Bot.onMessageContextMenuInteraction = function (interaction) {
  const interactionName = interaction.commandName;
  if (this.$msge[interactionName]) {
    const msg = interaction.targetMessage;
    if (!(msg instanceof DiscordJS.Message) && interaction.channel) {
      interaction.channel.messages
        .fetch(interaction.targetId)
        .then((message) => {
          interaction._targetMessage = message;
          Actions.preformActionsFromInteraction(
            interaction,
            this.$msge[interactionName],
            true,
          );
        })
        .catch(console.error);
    } else {
      interaction._targetMessage = msg;
      Actions.preformActionsFromInteraction(
        interaction,
        this.$msge[interactionName],
        true,
      );
    }
  }
};

Bot.onButtonInteraction = function (interaction) {
  const interactionId = interaction.customId;
  if (this.$button[interactionId]) {
    Actions.preformActionsFromInteraction(
      interaction,
      this.$button[interactionId],
    );
  } else {
    const response = Actions.getInvalidButtonResponseText();
    if (!interactionId.includes("msg-button-")) return;
    if (response) {
      interaction.reply({ content: response, flags: 64 });
    }
  }
};

Bot.onSelectMenuInteraction = function (interaction) {
  const interactionId = interaction.customId;
  if (this.$select[interactionId]) {
    Actions.preformActionsFromSelectInteraction(
      interaction,
      this.$select[interactionId],
    );
  } else {
    const response = Actions.getInvalidSelectResponseText();
    if (!interactionId.includes("msg-select-")) return;
    if (response) {
      interaction.reply({ content: response, flags: 64 });
    }
  }
};

Bot.getSettings = async function () {
  let result = Files.data.settings;
  if (!result) {
    return JSON.parse(
      await fs.promises.readFile(path.join(__dirname, "data", "settings.json")),
    );
  }
};

Bot.installModule = function (moduleName, version) {
  return new Promise((resolve) => {
    try {
      require("child_process").execSync(
        `npm i ${version ? `${moduleName}@${version}` : moduleName}`,
      );
      return resolve(require(moduleName));
    } catch (error) {
      return console.log(
        `The required module "${
          version ? `${moduleName}@${version}` : moduleName
        }" has been installed. Please restart your bot.`,
      );
    }
  });
};

Bot.require = function (moduleName, version) {
  try {
    return require(moduleName);
  } catch (e) {
    this.installModule(moduleName, version);
    return require(moduleName);
  }
};

Bot._isReloadingCommands = false;
Bot.reloadCommands = async function () {
  if (this._isReloadingCommands) return;
  this._isReloadingCommands = true;
  try {
    this.$slash = {};
    this.$user = {};
    this.$msge = {};
    this.$cmds = {};
    this.$icds = [];
    this.$regx = [];
    this.$anym = [];
    this.$other = {};
    this.applicationCommandData = [];
    Files.readData(() => {
      this.reformatCommands();
      this.checkForCommandErrors();
      this.registerApplicationCommands();
      this._isReloadingCommands = false;
    });
    return true;
  } catch (error) {
    PrintError(MsgType.ERROR_RELOADING_COMMANDS, error);
    this._isReloadingCommands = false;
    return false;
  }
};

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Actions
// Contains functions for bot actions.
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

const Actions = (DBM.Actions = {});

Actions.actionsLocation = null;
Actions.eventsLocation = null;
Actions.extensionsLocation = null;

Actions.server = {};
Actions.global = {};

Actions.timeStamps = [];

const ActionsCache = (Actions.ActionsCache = class ActionsCache {
  constructor(actions, server, options = {}) {
    this.actions = actions;
    this.server = server;
    this.index = options.index ?? -1;
    this.temp = options.temp ?? {};
    this.msg = options.msg ?? null;
    this.interaction = options.interaction ?? null;
    this.isSubCache = options.isSubCache ?? false;
    this.meta = options.meta ?? { isEvent: false, name: "" };
  }

  onCompleted() {
    if (!this.isSubCache) {
      this.onMainCacheCompleted();
    }
  }

  onMainCacheCompleted() {
    if (this.interaction) {
      if (!this.interaction.replied) {
        const replyData = {
          flags: 64,
          content: Actions.getDefaultResponseText(),
        };
        if (this.interaction.deferred) {
          this.interaction
            .editReply(replyData)
            .catch((err) => Actions.displayError(null, this, err));
        } else {
          this.interaction
            .reply(replyData)
            .catch((err) => Actions.displayError(null, this, err));
        }
      }
    }
  }

  getUser() {
    return this.interaction?.user ?? this.msg?.author;
  }

  getMessage() {
    const { msg, interaction } = this;
    if (msg) {
      return msg;
    } else if (interaction) {
      if (interaction.message) {
        return interaction.message;
      } else if (interaction._targetMessage) {
        return interaction._targetMessage;
      }
    }
    return null;
  }

  goToAnchor(anchorName) {
    const index = this.actions?._customData?.anchors?.[anchorName];
    if (typeof index === "number" && this.actions[index]) {
      this.index = index - 1;
      Actions.callNextAction(this);
    }
  }

  toString() {
    let result = `${this.meta.isEvent ? "Event" : "Command"} "${
      this.meta.name
    }"`;
    if (this.interaction?.isButton()) {
      result +=
        ", Button" +
        (this.interaction._button
          ? ` "${this.interaction._button.label}"`
          : "");
    } else if (
      this.interaction?.isStringSelectMenu() ||
      this.interaction?.isUserSelectMenu() ||
      this.interaction?.isRoleSelectMenu() ||
      this.interaction?.isMentionableSelectMenu() ||
      this.interaction?.isChannelSelectMenu()
    ) {
      result +=
        ", Select Menu" +
        (this.interaction._select
          ? ` "${this.interaction._select.placeholder}"`
          : "");
    }
    return result;
  }

  static extend(other, actions) {
    return new ActionsCache(actions, other.server, {
      isSubCache: true,
      temp: other.temp,
      msg: other.msg,
      interaction: other.interaction,
      meta: other.meta,
    });
  }
});

Actions.exists = function (action) {
  if (!action) return false;
  return typeof this[action] === "function";
};

Actions.getLocalFile = function (url) {
  return require("path").join(process.cwd(), url);
};

Actions.getDBM = function () {
  return DBM;
};

Actions.getClient = function () {
  return DBM.Bot.bot;
};

Actions.getClientUser = function () {
  return DBM.Bot.bot.user;
};

Actions.callListFunc = function (list, funcName, args) {
  return new Promise((resolve) => {
    const max = list.length;
    let curr = 0;
    function callItem() {
      if (curr === max) {
        resolve.apply(this, arguments);
        return;
      }
      const item = list[curr++];
      if (typeof item?.[funcName] === "function") {
        item[funcName].apply(item, args).then(callItem).catch(callItem);
      } else {
        callItem();
      }
    }
    callItem();
  });
};

Actions.getActionVariable = function (name, defaultValue) {
  if (this[name] === undefined && defaultValue !== undefined) {
    this[name] = defaultValue;
  }
  return this[name];
};

Actions.getSlashParameter = function (interaction, name, defaultValue) {
  if (!interaction) {
    return defaultValue ?? null;
  }

  if (interaction.__originalInteraction) {
    const result = this.getParameterFromInteraction(
      interaction.__originalInteraction,
      name,
    );
    if (result !== null) {
      return result;
    }
  }

  const result = this.getParameterFromInteraction(interaction, name);
  if (result !== null) {
    return result;
  }

  return defaultValue !== undefined ? defaultValue : result;
};

Actions._letterEmojis =
  "🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿".split(" ");

Actions.convertTextToEmojis = function (text, useRegional = true) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const code = text.toUpperCase().charCodeAt(i) - 65;
    if (code >= 0 && code <= 26) {
      result += useRegional
        ? ":regional_indicator_" + text[i].toLowerCase() + ":"
        : "\\" + this._letterEmojis[code];
    } else {
      result += text[i];
    }
  }
  return result;
};

Actions.convertTimeToTimestamp = function (time) {
  if (!time) return 0;
  time = time.toString().toLowerCase().trim();
  const units = {
    w: 7 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    weeks: 7 * 24 * 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000,
    h: 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    hours: 60 * 60 * 1000,
    m: 60 * 1000,
    minute: 60 * 1000,
    minutes: 60 * 1000,
    s: 1000,
    second: 1000,
    seconds: 1000,
  };
  let total = 0;
  const regex =
    /(?:(\d+)\s*(w|week|weeks|d|day|days|h|hour|hours|m|minute|minutes|s|second|seconds)|\b(w|week|weeks|d|day|days|h|hour|hours|m|minute|minutes|s|second|seconds)\s*(\d+)\b)/gi;
  let match;
  while ((match = regex.exec(time)) !== null) {
    let num, unit;
    if (match[1] && match[2]) {
      num = parseInt(match[1], 10);
      unit = match[2];
    } else if (match[3] && match[4]) {
      num = parseInt(match[4], 10);
      unit = match[3];
    }
    if (!isNaN(num) && units[unit]) {
      total += num * units[unit];
    }
  }
  return total;
};

Actions.convertTimestampToTime = function (timestamp, convertTo, type = 1) {
  if (!timestamp || isNaN(timestamp)) return "0";
  const units = {
    w: 7 * 24 * 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
    h: 60 * 60 * 1000,
    m: 60 * 1000,
    s: 1000,
  };
  const unitNames = {
    w: ["w", "week", "weeks"],
    d: ["d", "day", "days"],
    h: ["h", "hour", "hours"],
    m: ["m", "minute", "minutes"],
    s: ["s", "second", "seconds"],
  };
  convertTo = convertTo.toLowerCase();
  if (!units[convertTo]) return "0";
  let value = timestamp / units[convertTo];
  value = Math.round(value * 100) / 100;
  if (type === 0) {
    return value.toString();
  } else if (type === 1) {
    return `${value}${unitNames[convertTo][0]}`;
  } else if (type === 2) {
    let unitName =
      value === 1 ? unitNames[convertTo][1] : unitNames[convertTo][2];
    return `${value} ${unitName}`;
  }
  return value.toString();
};

Actions.getFlagEmoji = function (flagName) {
  if (flagName.startsWith("flag_")) {
    flagName = flagName.substring(5);
  }
  flagName = flagName.toUpperCase();
  return (
    this._letterEmojis[flagName.charCodeAt(0) - 65] +
    this._letterEmojis[flagName.charCodeAt(1) - 65]
  );
};

Actions.getCustomEmoji = function (nameOrId) {
  return (
    Bot.bot.emojis.cache.get(nameOrId) ??
    Bot.bot.emojis.cache.find((e) => e.name === nameOrId)
  );
};

Actions.eval = function (content, cache, logError = true) {
  if (!content) return false;
  const DBM = this.getDBM();
  const tempVars = this.getActionVariable.bind(cache.temp);
  let serverVars = null;
  if (cache.server) {
    serverVars = this.getActionVariable.bind(this.server[cache.server.id]);
  }
  const globalVars = this.getActionVariable.bind(this.global);
  const slashParams = this.getSlashParameter.bind(this, cache.interaction);
  const customEmoji = this.getCustomEmoji.bind(this);
  const msg = cache.msg;
  const interaction = cache.interaction;
  const button = interaction?._button ?? "";
  const select = interaction?._select ?? "";
  const server = cache.server;
  const client = DBM.Bot.bot;
  const bot = DBM.Bot.bot;
  const me = server?.members.me ?? null;
  let user = "",
    member = "",
    channel = "",
    mentionedUser = "",
    mentionedChannel = "",
    defaultChannel = "";
  if (msg) {
    user = msg.author;
    member = msg.member;
    channel = msg.channel;
    mentionedUser = msg.mentions.users.first() ?? "";
    mentionedChannel = msg.mentions.channels.first() ?? "";
  }
  if (interaction) {
    user = interaction.user;
    member = interaction.member;
    channel = interaction.channel;
    if (interaction.options) {
      mentionedUser = interaction.options.resolved?.users?.first?.() ?? "";
      mentionedChannel =
        interaction.options.resolved?.channels?.first?.() ?? "";
    }
  }
  if (server) {
    defaultChannel = server.getDefaultChannel();
  }
  try {
    if (content.startsWith("${") && content.endsWith("}")) {
      content = content.slice(2, -1);
    }
    return eval(content);
  } catch (e) {
    if (logError) console.error(e);
    return false;
  }
};

Actions.evalMessage = function (content, cache) {
  if (!content) return "";
  if (!content.match(/\$\{.*\}/im)) return content;
  return this.eval("`" + content.replace(/`/g, "\\`") + "`", cache);
};

Actions.evalIfPossible = function (content, cache) {
  this.__cachedText ??= {};
  if (content in this.__cachedText) return content;
  let result = this.eval(content, cache, false);
  if (result === false) result = this.evalMessage(content, cache);
  if (result === false) {
    this.__cachedText[content] = true;
    result = content;
  }
  return result;
};

Actions.parseBool = function (value) {
  return value === true || value === "true";
};

/*
Actions.initMods = async function () {
  this.modInitReferences = {};
  this.modDirectories().forEach((dir) => {
    fs.readdirSync(dir).forEach((file) => {
      if (!/\.js/i.test(file)) return;
      const action = require(path.join(dir, file));
      if (action.action) {
        this[action.name] = action.action;
      }
      if (action.modInit) {
        this.modInitReferences[action.name] = action.modInit;
      }
      if (action.mod) {
        try {
          action.mod(DBM);
        } catch (e) {
          console.error(e);
        }
      }
    });
  });
};
*/

Actions.initMods = async function () {
  this.modInitReferences = {};
  const dirs = await this.modDirectories();
  for (const dir of dirs) {
    try {
      const files = await fs.promises.readdir(dir);
      for (const file of files) {
        if (!/\.js$/i.test(file)) continue;
        try {
          const action = require(path.join(dir, file));
          if (action.action) this[action.name] = action.action;
          if (action.modInit)
            this.modInitReferences[action.name] = action.modInit;
          if (action.mod) {
            try {
              action.mod(DBM);
            } catch (e) {
              console.error(e);
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
    } catch (e) {
      // PrintError(MsgType.MISSING_ACTIONS, dir);
    }
  }
};

Actions.modDirectories = async function () {
  const result = [this.actionsLocation];
  if (await Files.verifyDirectory(Actions.eventsLocation)) {
    result.push(this.eventsLocation);
  }
  if (await Files.verifyDirectory(Actions.extensionsLocation)) {
    result.push(this.extensionsLocation);
  }
  return result;
};

Actions.preformActionsFromMessage = function (msg, cmd) {
  if (
    this.checkConditions(msg.guild, msg.member, msg.author, cmd) &&
    this.checkTimeRestriction(msg.author, msg, cmd)
  ) {
    this.invokeActions(msg, cmd.actions, cmd);
  }
};

Actions.preformActionsFromInteraction = function (
  interaction,
  cmd,
  meta = null,
  initialTempVars = null,
) {
  const invalidPermissions = this.getInvalidPermissionsResponse();
  const invalidCooldown = this.getInvalidCooldownResponse();
  if (
    this.checkConditions(
      interaction.guild,
      interaction.member,
      interaction.user,
      cmd,
    )
  ) {
    const timeRestriction = this.checkTimeRestriction(
      interaction.user,
      interaction,
      cmd,
      true,
    );
    if (timeRestriction === true) {
      this.invokeInteraction(
        interaction,
        cmd.actions,
        initialTempVars,
        meta === true ? cmd : meta,
      );
    } else if (invalidCooldown) {
      const { format } = require("util");
      const content =
        typeof timeRestriction === "string"
          ? format(invalidCooldown, timeRestriction)
          : invalidCooldown;
      interaction.reply({ content: content, flags: 64 });
    }
  } else if (invalidPermissions) {
    interaction.reply({ content: invalidPermissions, flags: 64 });
  }
};

Actions.preformActionsFromSelectInteraction = function (
  interaction,
  select,
  meta = null,
  initialTempVars = null,
) {
  const tempVars = initialTempVars ?? {};
  if (typeof select.tempVarName === "string") {
    const values = interaction.values;
    tempVars[select.tempVarName] =
      !values || values.length === 0
        ? 0
        : values.length === 1
          ? values[0]
          : values;
  }
  this.preformActionsFromInteraction(interaction, select, meta, tempVars);
};

Actions.checkConditions = function (guild, member, user, cmd) {
  const isServer = Boolean(guild && member);
  const restriction = parseInt(cmd.restriction, 10);
  switch (restriction) {
    case 0:
    case 1: {
      if (isServer) {
        return (
          this.checkPermissions(member, cmd.permissions) &&
          this.checkPermissions(member, cmd.permissions2)
        );
      }
      return restriction === 0;
    }
    case 2:
      return isServer && guild.ownerId === member.id;
    case 3:
      return !isServer;
    case 4:
      return (
        Files.data.settings.ownerId && user.id === Files.data.settings.ownerId
      );
    default:
      return true;
  }
};

Actions.checkTimeRestriction = function (
  user,
  msgOrInteraction,
  cmd,
  returnTimeString = false,
) {
  if (!cmd._timeRestriction) return true;
  if (!user) return false;
  const mid = user.id;
  const cid = cmd._id;
  if (!this.timeStamps[cid]) {
    this.timeStamps[cid] = [];
    this.timeStamps[cid][mid] = Date.now();
    return true;
  } else if (!this.timeStamps[cid][mid]) {
    this.timeStamps[cid][mid] = Date.now();
    return true;
  } else {
    const time = Date.now();
    const diff = time - this.timeStamps[cid][mid];
    if (cmd._timeRestriction <= Math.floor(diff / 1000)) {
      this.timeStamps[cid][mid] = time;
      return true;
    } else {
      const remaining = cmd._timeRestriction - Math.floor(diff / 1000);
      const timeString = this.generateTimeString(remaining);
      Events.callEvents(
        "38",
        1,
        3,
        2,
        false,
        "",
        msgOrInteraction?.member,
        timeString,
      );
      return returnTimeString ? timeString : false;
    }
  }
};

Actions.generateTimeString = function (milliseconds) {
  let remaining = milliseconds;
  const times = [];

  const days = Math.floor(remaining / 60 / 60 / 24);
  if (days > 0) {
    remaining -= days * 60 * 60 * 24;
    times.push(days + (days === 1 ? " day" : " days"));
  }
  const hours = Math.floor(remaining / 60 / 60);
  if (hours > 0) {
    remaining -= hours * 60 * 60;
    times.push(hours + (hours === 1 ? " hour" : " hours"));
  }
  const minutes = Math.floor(remaining / 60);
  if (minutes > 0) {
    remaining -= minutes * 60;
    times.push(minutes + (minutes === 1 ? " minute" : " minutes"));
  }
  const seconds = Math.floor(remaining);
  if (seconds > 0) {
    remaining -= seconds;
    times.push(seconds + (seconds === 1 ? " second" : " seconds"));
  }

  let result = "";
  if (times.length === 1) {
    result = times[0];
  } else if (times.length === 2) {
    result = times[0] + " and " + times[1];
  } else if (times.length === 3) {
    result = times[0] + ", " + times[1] + ", and " + times[2];
  } else if (times.length === 4) {
    result = times[0] + ", " + times[1] + ", " + times[2] + ", and " + times[3];
  }
  return result;
};

Actions.checkPermissions = function (member, permissions) {
  if (!permissions) return true;
  if (!member) return false;
  if (permissions === "NONE") return true;
  if (member.guild?.ownerId === member.id) return true;
  return member.permissions.has(permissions);
};

Actions.invokeActions = function (msg, actions, cmd = null) {
  if (actions.length > 0) {
    this.callNextAction(
      new ActionsCache(actions, msg.guild, {
        msg,
        meta: {
          name: cmd?.name,
          isEvent: false,
        },
      }),
    );
  }
};

Actions.invokeInteraction = function (
  interaction,
  actions,
  initialTempVars,
  meta = null,
) {
  const cacheData = {
    interaction,
    temp: initialTempVars || {},
  };
  if (meta) {
    cacheData.meta = {
      name: meta?.name,
      isEvent: false,
    };
  }
  const cache = new ActionsCache(actions, interaction.guild, cacheData);
  this.callNextAction(cache);
};

Actions.invokeEvent = function (event, server, temp) {
  const actions = event.actions;
  if (actions.length > 0) {
    const cache = new ActionsCache(actions, server, {
      temp: { ...temp },
      meta: {
        name: event.name,
        isEvent: true,
      },
    });
    this.callNextAction(cache);
  }
};

Actions.callNextAction = function (cache) {
  cache.index++;
  const index = cache.index;
  const actions = cache.actions;
  const act = actions[index];
  if (!act) {
    this.endActions(cache);
    return;
  }
  if (this.exists(act.name)) {
    try {
      this[act.name](cache);
    } catch (e) {
      this.displayError(act, cache, e);
    }
  } else {
    PrintError(MsgType.MISSING_ACTION, act.name);
    this.callNextAction(cache);
  }
};

Actions.endActions = function (cache) {
  cache.callback?.();
  cache.onCompleted?.();
};

Actions.getInvalidButtonResponseText = function () {
  return (
    Files.data.settings.invalidButtonText ?? "Button response no longer valid."
  );
};

Actions.getInvalidSelectResponseText = function () {
  return (
    Files.data.settings.invalidSelectText ??
    "Select menu response no longer valid."
  );
};

Actions.getDefaultResponseText = function () {
  return Files.data.settings.autoResponseText ?? "Command successfully run!";
};

Actions.getInvalidPermissionsResponse = function () {
  return Files.data.settings.invalidPermissionsText ?? "Invalid permissions!";
};

Actions.getInvalidUserResponse = function () {
  return Files.data.settings.invalidUserText ?? "Invalid user!";
};

Actions.getInvalidCooldownResponse = function () {
  return (
    Files.data.settings.invalidCooldownText ??
    "Must wait %s before using this action."
  );
};

Actions.getErrorString = function (data, cache) {
  const location = cache.toString();
  return GetActionErrorText(location, cache.index + 1, data?.name);
};

Actions.displayError = function (data, cache, err) {
  if (!data) data = cache.actions[cache.index];
  const dbm = this.getErrorString(data, cache);
  console.error(dbm + ":\n" + (err.stack ?? err));
  Events.onError(dbm, err.stack ?? err, cache);
};

Actions.getParameterFromInteraction = function (interaction, name) {
  if (interaction.__originalInteraction) {
    const result = this.getParameterFromInteraction(
      interaction.__originalInteraction,
      name,
    );
    if (result !== null) {
      return result;
    }
  }
  if (interaction?.options?.get) {
    const option = interaction.options.get(name.toLowerCase());
    return this.getParameterFromParameterData(option);
  }
  return null;
};

Actions.getParameterFromParameterData = function (option) {
  if (typeof option !== "object" || option == null) return null;

  switch (option.type) {
    case DiscordJS.ApplicationCommandOptionType.String: // 3 (string)
    case DiscordJS.ApplicationCommandOptionType.Integer: // 4 (integer)
    case DiscordJS.ApplicationCommandOptionType.Boolean: // 5 (boolean)
    case DiscordJS.ApplicationCommandOptionType.Number: // 10 (number)
      return option.value;
    case DiscordJS.ApplicationCommandOptionType.User: // 6 (user)
      return option.member ?? option.user;
    case DiscordJS.ApplicationCommandOptionType.Channel: // 7 (channel)
      return option.channel;
    case DiscordJS.ApplicationCommandOptionType.Role: // 8 (role)
      return option.role;
    case DiscordJS.ApplicationCommandOptionType.Mentionable: // 9 (mentionable)
      return option.member ?? option.user ?? option.role ?? option.channel;
    case DiscordJS.ApplicationCommandOptionType.Attachment: // 11 (attachment)
      return option.attachment?.url ?? "";
    default:
      return null;
  }
};

Actions.findMemberOrUserFromName = async function (name, server) {
  if (!Bot.hasMemberIntents) {
    PrintError(MsgType.MISSING_MEMBER_INTENT_FIND_USER_ID);
  }
  const user = Bot.bot.users.cache.find((user) => user.username === name);
  if (user) {
    const result = await server.members.fetch(user);
    if (result) {
      return result;
    }
  } else if (server) {
    const allMembers = await server.members.fetch();
    const member = allMembers.find((user) => user.username === name);
    if (member) {
      return member;
    }
  }
  return null;
};

Actions.findMemberOrUserFromID = async function (id, server) {
  if (!Bot.hasMemberIntents) {
    PrintError(MsgType.MISSING_MEMBER_INTENT_FIND_USER_ID);
  }
  if (id) {
    const result = await Bot.bot.users.fetch(id);
    if (result) {
      return result;
    }
  } else {
    PrintError(MsgType.CANNOT_FIND_USER_BY_ID, id);
  }
  return null;
};

Actions.getTargetFromVariableOrParameter = function (varType, varName, cache) {
  switch (varType) {
    case 0:
      return cache.temp[varName];
    case 1:
      const server = cache.server;
      if (server && this.server[server.id]) {
        return this.server[server.id][varName];
      }
      break;
    case 2:
      return this.global[varName];
    case 3:
      const interaction = cache.interaction;
      const result = this.getParameterFromInteraction(interaction, varName);
      if (result !== null) {
        return result;
      }
      break;
    default:
      break;
  }
  return null;
};

Actions.getSendTargetFromData = async function (typeData, varNameData, cache) {
  return await this.getSendTarget(
    parseInt(typeData, 10),
    this.evalMessage(varNameData, cache),
    cache,
  );
};

Actions.getSendTarget = async function (type, varName, cache) {
  const { interaction, msg, server } = cache || {};
  switch (type) {
    case 0:
      if (interaction) {
        return interaction.channel;
      } else if (msg) {
        return msg.channel;
      }
      break;
    case 1:
      if (interaction) {
        return interaction.user;
      } else if (msg) {
        return msg.author;
      }
      break;
    case 2: {
      const users =
        interaction?.options?.resolved?.users ?? msg?.mentions?.users;
      if (users?.size) {
        return users.first();
      }
      break;
    }
    case 3: {
      const channels =
        interaction?.options?.resolved?.channels ?? msg?.mentions?.channels;
      if (channels?.size) {
        return channels.first();
      }
      break;
    }
    case 4:
      if (server) {
        return server.getDefaultChannel();
      }
      break;
    case 9:
      if (interaction?._targetMember) {
        return interaction._targetMember;
      }
      break;
    case 10:
      if (server) {
        return server.publicUpdatesChannel;
      }
      break;
    case 11:
      if (server) {
        return server.rulesChannel;
      }
      break;
    case 12:
      if (server) {
        return server.systemChannel;
      }
      break;
    case 100: {
      const searchValue = this.evalMessage(varName, cache);
      const result = await this.findMemberFromName(searchValue, cache.server);
      if (result) {
        return result;
      }
      break;
    }
    case 101: {
      const searchValue = this.evalMessage(varName, cache);
      const result = await this.findMemberFromID(searchValue, cache.server);
      if (result) {
        return result;
      }
      break;
    }
    case 102: {
      const searchValue = this.evalMessage(varName, cache);
      const result = Bot.bot.channels.cache.find(
        (channel) => channel.name === searchValue,
      );
      if (result) {
        return result;
      }
      break;
    }
    case 103: {
      const searchValue = this.evalMessage(varName, cache);
      const result = Bot.bot.channels.cache.get(searchValue);
      if (result) {
        return result;
      }
      break;
    }
    default:
      return this.getTargetFromVariableOrParameter(type - 5, varName, cache);
  }
  return null;
};

Actions.getSendReplyTarget = async function (type, varName, cache) {
  const { interaction, msg, server } = cache;
  switch (type) {
    case 13:
      const msg = cache.getMessage();
      if (msg) {
        return msg;
      }
      break;
    default:
      return await this.getSendTarget(type, varName, cache);
  }
  return null;
};

Actions.getMemberFromData = async function (typeData, varNameData, cache) {
  return await this.getMember(
    parseInt(typeData, 10),
    this.evalMessage(varNameData, cache),
    cache,
  );
};

Actions.getMember = async function (type, varName, cache) {
  const { interaction, msg } = cache;
  switch (type) {
    case 0: {
      const members =
        interaction?.options?.resolved?.members ?? msg?.mentions?.members;
      if (members?.size) {
        return members.first();
      }
      break;
    }
    case 1:
      if (interaction) {
        return interaction.member ?? interaction.user;
      } else if (msg) {
        return msg.member ?? msg.author;
      }
      break;
    case 6:
      if (interaction?._targetMember) {
        return interaction._targetMember;
      }
      break;
    case 100: {
      const searchValue = this.evalMessage(varName, cache);
      const result = await this.findMemberOrUserFromName(
        searchValue,
        cache.server,
      );
      if (result) {
        return result;
      }
      break;
    }
    case 101: {
      const searchValue = this.evalMessage(varName, cache);
      const result = await this.findMemberOrUserFromID(
        searchValue,
        cache.server,
      );
      if (result) {
        return result;
      }
      break;
    }
    default:
      return this.getTargetFromVariableOrParameter(type - 2, varName, cache);
  }
  return null;
};

Actions.getMessageFromData = async function (typeData, varNameData, cache) {
  return await this.getMessage(
    parseInt(typeData, 10),
    this.evalMessage(varNameData, cache),
    cache,
  );
};

Actions.getMessage = async function (type, varName, cache) {
  switch (type) {
    case 0:
      const msg = cache.getMessage();
      if (msg) {
        return msg;
      }
      break;
    default:
      return this.getTargetFromVariableOrParameter(type - 1, varName, cache);
  }
  return null;
};

Actions.getServerFromData = async function (typeData, varNameData, cache) {
  return await this.getServer(
    parseInt(typeData, 10),
    this.evalMessage(varNameData, cache),
    cache,
  );
};

Actions.getServer = async function (type, varName, cache) {
  const server = cache.server;
  switch (type) {
    case 0:
      if (server) {
        return server;
      }
      break;
    case 100: {
      const searchValue = this.evalMessage(varName, cache);
      const result = Bot.bot.guilds.cache.find(
        (guild) => guild.name === searchValue,
      );
      if (result) {
        return result;
      }
      break;
    }
    case 101: {
      const searchValue = this.evalMessage(varName, cache);
      const result = Bot.bot.guilds.cache.get(searchValue);
      if (result) {
        return result;
      }
      break;
    }
    default:
      return this.getTargetFromVariableOrParameter(type - 1, varName, cache);
  }
  return null;
};

Actions.getRoleFromData = async function (typeData, varNameData, cache) {
  return await this.getRole(
    parseInt(typeData, 10),
    this.evalMessage(varNameData, cache),
    cache,
  );
};

Actions.getRole = async function (type, varName, cache) {
  const { interaction, msg, server } = cache;
  switch (type) {
    case 0: {
      const roles =
        interaction?.options?.resolved?.roles ?? msg?.mentions?.roles;
      if (roles?.size) {
        return roles.first();
      }
      break;
    }
    case 1: {
      const member = interaction?.member ?? msg?.member;
      if (member?.roles?.cache?.size) {
        return msg.member.roles.cache.first();
      }
      break;
    }
    case 2: {
      if (server?.roles?.cache?.size) {
        return server.roles.cache.first();
      }
      break;
    }
    case 100: {
      if (server) {
        const searchValue = this.evalMessage(varName, cache);
        const result = server.roles.cache.find(
          (role) => role.name === searchValue,
        );
        if (result) {
          return result;
        }
      }
      break;
    }
    case 101: {
      if (server) {
        const searchValue = this.evalMessage(varName, cache);
        const result = server.roles.cache.get(searchValue);
        if (result) {
          return result;
        }
      }
      break;
    }
    default:
      return this.getTargetFromVariableOrParameter(type - 3, varName, cache);
  }
  return null;
};

Actions.getChannelFromData = async function (typeData, varNameData, cache) {
  return await this.getChannel(
    parseInt(typeData, 10),
    this.evalMessage(varNameData, cache),
    cache,
  );
};

Actions.getChannel = async function (type, varName, cache) {
  const { interaction, msg, server } = cache;
  switch (type) {
    case 0:
      if (interaction) {
        return interaction.channel;
      } else if (msg) {
        return msg.channel;
      }
      break;
    case 1: {
      const channels =
        interaction?.options?.resolved?.channels ?? msg?.mentions?.channels;
      if (channels?.size) {
        return channels.first();
      }
      break;
    }
    case 2:
      if (server) {
        return server.getDefaultChannel();
      }
      break;
    case 7:
      if (server) {
        return server.publicUpdatesChannel;
      }
      break;
    case 8:
      if (server) {
        return server.rulesChannel;
      }
      break;
    case 9:
      if (server) {
        return server.systemChannel;
      }
      break;
    case 100: {
      const searchValue = this.evalMessage(varName, cache);
      const result = Bot.bot.channels.cache.find(
        (channel) => channel.name === searchValue,
      );
      if (result) {
        return result;
      }
      break;
    }
    case 101: {
      const searchValue = this.evalMessage(varName, cache);
      const result = Bot.bot.channels.cache.get(searchValue);
      if (result) {
        return result;
      }
      break;
    }
    default:
      return this.getTargetFromVariableOrParameter(type - 3, varName, cache);
  }
  return null;
};

Actions.getVoiceChannelFromData = async function (
  typeData,
  varNameData,
  cache,
) {
  return await this.getVoiceChannel(
    parseInt(typeData, 10),
    this.evalMessage(varNameData, cache),
    cache,
  );
};

Actions.getVoiceChannel = async function (type, varName, cache) {
  const { interaction, msg, server } = cache;
  switch (type) {
    case 0: {
      const member = interaction?.member ?? msg?.member;
      if (member) {
        return member.voice?.channel;
      }
      break;
    }
    case 1: {
      const members =
        interaction?.options?.resolved?.members ?? msg?.mentions?.members;
      if (members?.size) {
        const member = members.first();
        if (member) {
          return member.voice?.channel;
        }
      }
      break;
    }
    case 2:
      if (server) {
        return server.getDefaultVoiceChannel();
      }
      break;
    case 7:
      if (server) {
        return server.afkChannel;
      }
      break;
    case 100: {
      const searchValue = this.evalMessage(varName, cache);
      const result = Bot.bot.channels.cache.find(
        (channel) => channel.name === searchValue,
      );
      if (result) {
        return result;
      }
      break;
    }
    case 101: {
      const searchValue = this.evalMessage(varName, cache);
      const result = Bot.bot.channels.cache.get(searchValue);
      if (result) {
        return result;
      }
      break;
    }
    default:
      return this.getTargetFromVariableOrParameter(type - 3, varName, cache);
  }
  return null;
};

Actions.getAnyChannel = async function (type, varName, cache) {
  switch (type) {
    case 10:
      return await this.getVoiceChannel(0, varName, cache);
    case 11:
      return await this.getVoiceChannel(1, varName, cache);
    case 12:
      return await this.getVoiceChannel(7, varName, cache);
    case 13:
      return await this.getVoiceChannel(2, varName, cache);
    default:
      return await this.getChannel(type, varName, cache);
  }
  return null;
};

Actions.getListFromData = async function (typeData, varNameData, cache) {
  return await this.getList(
    parseInt(typeData, 10),
    this.evalMessage(varNameData, cache),
    cache,
  );
};

Actions.getList = async function (type, varName, cache) {
  const { interaction, msg, server } = cache;
  switch (type) {
    case 0:
      if (server) {
        return [...server.members.cache.values()];
      }
      break;
    case 1:
      if (server) {
        return [...server.channels.cache.values()];
      }
      break;
    case 2:
      if (server) {
        return [...server.roles.cache.values()];
      }
      break;
    case 3:
      if (server) {
        return [...server.emojis.cache.values()];
      }
      break;
    case 4:
      return [...Bot.bot.guilds.cache.values()];
    case 5: {
      const members =
        interaction?.options?.resolved?.members ?? msg?.mentions?.members;
      if (members?.size) {
        return [...members.first().roles.cache.values()];
      }
      break;
    }
    case 6: {
      const member = interaction?.member ?? msg?.member;
      if (member) {
        return [...member.roles.cache.values()];
      }
      break;
    }
    default:
      return this.getTargetFromVariableOrParameter(type - 7, varName, cache);
  }
};

Actions.getVariable = function (type, varName, cache) {
  return this.getTargetFromVariableOrParameter(type - 1, varName, cache);
};

Actions.sendOrReplyOrEditMessage = async function (
  target,
  message,
  cache,
  options = {
    reply: true,
    msgToEdit: null,
    pinMsgAfterSend: false,
    isEdit: false,
    editMessage: 0,
    callback: null,
  },
) {
  let resultMsg;
  if (options.isEdit === true) {
    if (options.editMessage === "intUpdate" && cache.interaction) {
      options.msgToEdit = cache.interaction.message;
      if (options.reply) {
        resultMsg = await cache.interaction.update(message);
        cache.interaction.replied = true;
      } else {
        resultMsg = await options.msgToEdit.edit(message);
      }
    } else if (options.editMessage === "deferUpdate" && cache.interaction) {
      resultMsg = await cache.interaction.editReply(message);
    } else if (options.editMessage === "replyUpdate") {
      resultMsg = await cache.interaction.editReply(message);
    } else {
      options.msgToEdit = options.msgToEdit || cache.msg;
      resultMsg = await options.msgToEdit.edit(message);
    }
  } else if (options.isEdit === false) {
    if (cache.interaction) {
      if (target === cache.interaction.channel) {
        if (options.reply === true) {
          try {
            if (cache.interaction.replied || cache.interaction.deferred) {
              resultMsg = await cache.interaction.followUp(message);
            } else {
              const response = await cache.interaction.reply({
                ...message,
                withResponse: true,
              });
              resultMsg = response.resource.message;
            }
          } catch {
            resultMsg = await target.send(message);
          }
        } else {
          resultMsg = await target.send(message);
        }
      } else {
        resultMsg = await target.send(message);
      }
    } else if (typeof target?.send === "function") {
      if (cache.msg && target.id === cache.msg.channel.id) {
        if (options.reply === true) {
          try {
            resultMsg = await cache.msg.reply(message);
          } catch {
            resultMsg = await target.send(message);
          }
        } else {
          resultMsg = await target.send(message);
        }
      } else {
        resultMsg = await target.send(message);
      }
    } else {
      resultMsg = await target.send(message);
    }
  }
  if (options.pinMsgAfterSend && resultMsg && resultMsg.pin) {
    try {
      await resultMsg.pin();
    } catch {
      PrintError(MsgType.ERROR_PINNING_MESSAGE, resultMsg);
    }
  }
  if (typeof options.callback === "function") {
    await options.callback(cache.interaction, resultMsg);
  }
  return resultMsg;
};

Actions.storeValue = function (value, type, varName, cache) {
  const server = cache.server;
  switch (type) {
    case 1:
      cache.temp[varName] = value;
      break;
    case 2:
      if (server) {
        this.server[server.id] ??= {};
        this.server[server.id][varName] = value;
      }
      break;
    case 3:
      this.global[varName] = value;
      break;
    default:
      break;
  }
};

Actions.executeResults = function (result, data, cache) {
  const type = parseInt(result ? data.iftrue : data.iffalse, 10);
  switch (type) {
    case 0: {
      this.callNextAction(cache);
      break;
    }
    case 1: {
      this.endActions(cache);
      break;
    }
    case 2: {
      const val = parseInt(
        this.evalMessage(result ? data.iftrueVal : data.iffalseVal, cache),
        10,
      );
      const index = Math.max(val - 1, 0);
      if (cache.actions[index]) {
        cache.index = index - 1;
        this.callNextAction(cache);
      }
      break;
    }
    case 3: {
      const amount = parseInt(
        this.evalMessage(result ? data.iftrueVal : data.iffalseVal, cache),
        10,
      );
      const index2 = cache.index + amount + 1;
      if (cache.actions[index2]) {
        cache.index = index2 - 1;
        this.callNextAction(cache);
      }
      break;
    }
    case 4: {
      const anchorName = this.evalMessage(
        result ? data.iftrueVal : data.iffalseVal,
        cache,
      );
      cache.goToAnchor(anchorName);
      break;
    }
    case 99: {
      this.executeSubActionsThenNextAction(
        result ? data.iftrueActions : data.iffalseActions,
        cache,
      );
      break;
    }
    default:
      break;
  }
};

Actions.executeSubActionsThenNextAction = function (actions, cache) {
  return this.executeSubActions(actions, cache, () =>
    this.callNextAction(cache),
  );
};

Actions.executeSubActions = function (actions, cache, callback = null) {
  if (!actions) {
    callback?.();
    return false;
  }
  const newCache = this.generateSubCache(cache, actions);
  newCache.callback = () => callback?.();
  this.callNextAction(newCache);
  return true;
};

Actions.generateSubCache = function (cache, actions) {
  return ActionsCache.extend(cache, actions);
};

Actions.resolveAttachmentUrl = async function (
  attachment,
  filesArray,
  options = { name: "", description: "", spoiler: false },
) {
  if (!attachment) return undefined;
  if (attachment instanceof DiscordJS.AttachmentBuilder) {
    if (filesArray) filesArray.push(attachment);
    return `attachment://${attachment.name}`;
  } else if (Buffer.isBuffer(attachment)) {
    if (!options.name) options.name = "file";
    const attach = new DiscordJS.AttachmentBuilder(attachment)
      .setName(options.name)
      .setDescription(options.description)
      .setSpoiler(options.spoiler);
    if (filesArray) filesArray.push(attach);
    return `attachment://${attach.name}`;
  } else if (
    attachment instanceof ArrayBuffer ||
    attachment instanceof Uint8Array
  ) {
    if (!options.name) options.name = "file";
    const attach = new DiscordJS.AttachmentBuilder(Buffer.from(attachment))
      .setName(options.name)
      .setDescription(options.description)
      .setSpoiler(options.spoiler);
    if (filesArray) filesArray.push(attach);
    return `attachment://${attach.name}`;
  } else if (typeof attachment === "string") {
    if (attachment.startsWith("attachment://")) return attachment;
    try {
      new URL(attachment).href;
      return attachment;
    } catch {
      if (fs.existsSync(attachment)) {
        const attach = new DiscordJS.AttachmentBuilder(
          await fs.promises.readFile(attachment),
        )
          .setName(options.name || path.basename(attachment))
          .setDescription(options.description)
          .setSpoiler(options.spoiler);
        if (filesArray) filesArray.push(attach);
        return `attachment://${attach.name}`;
      }
    }
  }
  return attachment;
};

Actions.resolveAttachment = async function (
  attachment,
  options = { name: "", description: "", spoiler: false },
) {
  if (!attachment) return undefined;
  if (attachment instanceof DiscordJS.AttachmentBuilder) {
    return attachment;
  } else if (Buffer.isBuffer(attachment)) {
    if (!options.name) options.name = "file";
    const attach = new DiscordJS.AttachmentBuilder(attachment)
      .setName(options.name)
      .setDescription(options.description)
      .setSpoiler(options.spoiler);
    return attach;
  } else if (
    attachment instanceof ArrayBuffer ||
    attachment instanceof Uint8Array
  ) {
    if (!options.name) options.name = "file";
    const attach = new DiscordJS.AttachmentBuilder(Buffer.from(attachment))
      .setName(options.name)
      .setDescription(options.description)
      .setSpoiler(options.spoiler);
    return attach;
  } else if (typeof attachment === "string") {
    if (attachment.startsWith("attachment://")) {
      return attachment;
    } else {
      try {
        return new URL(attachment).href;
      } catch {
        const attach = new DiscordJS.AttachmentBuilder(
          await fs.promises.readFile(attachment),
        )
          .setName(options.name || path.basename(attachment))
          .setDescription(options.description)
          .setSpoiler(options.spoiler);
        return attach;
      }
    }
  }
  return attachment;
};

Actions.generatePoll = function (
  options = {
    question: { text: null },
    answers: [],
    allowMultiselect: null,
    duration: null,
  },
  cache,
) {
  const question = this.evalMessage(options.question.text, cache);
  const answers = options.answers;
  const allowMultiselect =
    this.evalMessage(options.allowMultiselect, cache) || false;
  const duration = this.evalMessage(options.duration, cache) || "24";
  if (!question) return;
  if (
    !Array.isArray(options.answers) ||
    options.answers.length < 1 ||
    options.answers.length > 10
  )
    return;
  const poll = {
    question: { text: question },
    answers: answers,
    allowMultiselect: allowMultiselect,
    duration: duration,
  };
  return poll;
};

Actions.generatePollAnswer = function (
  options = {
    text: null,
    emoji: null,
  },
  cache,
) {
  const text = this.evalMessage(options.text, cache) || null;
  const emoji = this.evalMessage(options.emoji, cache) || null;
  const answer = { text: text };
  if (emoji) answer.emoji = emoji;
  return answer;
};

Actions.generateEmbed = function (
  options = {
    author: {
      name: null,
      iconURL: null,
      url: null,
    },
    color: null,
    description: null,
    fields: null,
    footer: {
      text: null,
      iconURL: null,
    },
    image: null,
    thumbnail: null,
    timestamp: null,
    title: "embed",
    url: null,
  },
  cache,
) {
  const author = {
    name: this.evalMessage(options.author.name, cache) || null,
    iconURL: this.evalMessage(options.author.iconURL, cache) || null,
    url: this.evalMessage(options.author.url, cache) || null,
  };
  const color = this.evalMessage(options.color, cache) || null;
  const description = this.evalMessage(options.description, cache) || null;
  const fields =
    Array.isArray(options.fields) && options.fields.length > 0
      ? options.fields
      : null;
  const footer = {
    text: this.evalMessage(options.footer.text, cache) || null,
    iconURL: this.evalMessage(options.footer.iconURL, cache) || null,
  };
  const image = this.evalMessage(options.image, cache) || null;
  const thumbnail = this.evalMessage(options.thumbnail, cache) || null;
  const timestamp =
    parseInt(this.evalMessage(options.timestamp, cache), 10) || null;
  const title = this.evalMessage(options.title, cache) || null;
  const url = this.evalMessage(options.url, cache) || null;
  const embed = new DiscordJS.EmbedBuilder();
  if (author.name) embed.setAuthor(author);
  if (color) embed.setColor(color);
  if (description) embed.setDescription(description);
  if (fields) embed.setFields(fields);
  if (footer.text) embed.setFooter(footer);
  if (image) embed.setImage(image);
  if (thumbnail) embed.setThumbnail(thumbnail);
  if (timestamp) embed.setTimestamp(timestamp);
  if (title) embed.setTitle(title);
  if (url) embed.setURL(url);
  return embed;
};

Actions.generateEmbedField = function (
  options = {
    name: null,
    value: null,
    inline: null,
  },
  cache,
) {
  const name = this.evalMessage(options.name, cache) || null;
  const value = this.evalMessage(options.value, cache) || null;
  const inline =
    this.parseBool(this.evalMessage(options.inline, cache)) || false;
  const field = {
    name: name,
    value: value,
    inline: inline,
  };
  return field;
};

Actions.generateButton = function (
  options = {
    customId: Date.now(),
    disabled: false,
    emoji: "🗿",
    label: "button",
    skuId: null,
    style: DiscordJS.ButtonStyle.Primary,
    url: "https://www.google.com",
  },
  cache,
) {
  const customId = this.evalMessage(String(options.customId), cache);
  const disabled = this.parseBool(options.disabled);
  const emoji = this.evalMessage(options.emoji, cache);
  const label = this.evalMessage(options.label, cache);
  const skuId = this.evalMessage(options.skuId, cache);
  const style = this.evalMessage(options.style, cache);
  const url = this.evalMessage(options.url, cache);
  const button = new DiscordJS.ButtonBuilder();
  if (style === "1") {
    button.setStyle(DiscordJS.ButtonStyle.Primary);
    button.setCustomId(customId);
    button.setDisabled(disabled);
    if (emoji) button.setEmoji(emoji);
    if (label) button.setLabel(label);
  } else if (style === "2") {
    button.setStyle(DiscordJS.ButtonStyle.Secondary);
    button.setCustomId(customId);
    button.setDisabled(disabled);
    if (emoji) button.setEmoji(emoji);
    if (label) button.setLabel(label);
  } else if (style === "3") {
    button.setStyle(DiscordJS.ButtonStyle.Success);
    button.setCustomId(customId);
    button.setDisabled(disabled);
    if (emoji) button.setEmoji(emoji);
    if (label) button.setLabel(label);
  } else if (style === "4") {
    button.setStyle(DiscordJS.ButtonStyle.Danger);
    button.setCustomId(customId);
    button.setDisabled(disabled);
    if (emoji) button.setEmoji(emoji);
    if (label) button.setLabel(label);
  } else if (style === "5") {
    button.setStyle(DiscordJS.ButtonStyle.Link);
    button.setURL(url);
    button.setDisabled(disabled);
  } else if (style === "6") {
    button.setStyle(DiscordJS.ButtonStyle.Premium);
    button.setSKUId(skuId);
    button.setDisabled(disabled);
  }
  return button;
};

Actions.convertSelectMenuTypeToNumber = function (type) {
  if (typeof type === "number") return type;
  if (typeof type === "string") {
    if (!Number.isNaN(Number(type))) {
      return Number(type);
    }
    const map = {
      stringselectmenu: 0,
      userselectmenu: 1,
      roleselectmenu: 2,
      mentionableselectmenu: 3,
      channelselectmenu: 4,
    };
    return map[type.toLowerCase()];
  }
  return undefined;
};

Actions.generateAnySelectMenu = function (
  type,
  config = {
    customId: Date.now(),
    defaultValues: null,
    channelTypes: null,
    disabled: false,
    minValues: 1,
    maxValues: 1,
    options: [],
    placeholder: null,
    required: null,
  },
  cache,
) {
  // Select Menu Types:
  //
  // StringSelectMenu = 0
  // UserSelectMenu = 1
  // RoleSelectMenu = 2
  // MentionableSelectMenu = 3
  // ChannelSelectMenu = 4
  type = Actions.convertSelectMenuTypeToNumber(type);
  let selectMenu;
  const customId = config.customId;
  const defaultValues = config.defaultValues;
  const channelTypes = config.channelTypes;
  const disabled = config.disabled === true;
  const minValues = config.minValues;
  const maxValues = config.maxValues;
  const options = [];
  const placeholder = config.placeholder;
  const required = config.required;
  if (type === 0) {
    for (const o of config.options) {
      const option = this.generateStringSelectMenuOption(
        {
          default: o.default,
          description: o.description,
          emoji: o.emoji,
          label: o.label,
          value: o.value,
        },
        cache,
      );
      options.push(option);
    }
    selectMenu = this.generateStringSelectMenu(
      {
        customId: customId,
        disabled: disabled,
        minValues: minValues,
        maxValues: maxValues,
        options: options,
        placeholder: placeholder,
        required: required,
      },
      cache,
    );
  } else if (type === 1) {
    selectMenu = this.generateUserSelectMenu(
      {
        customId: customId,
        defaultUsers: defaultValues,
        disabled: disabled,
        minValues: minValues,
        maxValues: maxValues,
        placeholder: placeholder,
        required: required,
      },
      cache,
    );
  } else if (type === 2) {
    selectMenu = this.generateRoleSelectMenu(
      {
        customId: customId,
        defaultRoles: defaultValues,
        disabled: disabled,
        minValues: minValues,
        maxValues: maxValues,
        placeholder: placeholder,
        required: required,
      },
      cache,
    );
  } else if (type === 3) {
    selectMenu = this.generateMentionableSelectMenu(
      {
        customId: customId,
        defaultValues: defaultValues,
        disabled: disabled,
        minValues: minValues,
        maxValues: maxValues,
        placeholder: placeholder,
        required: required,
      },
      cache,
    );
  } else if (type === 4) {
    selectMenu = this.generateChannelSelectMenu(
      {
        customId: customId,
        channelTypes: channelTypes,
        defaultChannels: defaultValues,
        disabled: disabled,
        minValues: minValues,
        maxValues: maxValues,
        placeholder: placeholder,
        required: required,
      },
      cache,
    );
  }
  return selectMenu;
};

Actions.generateStringSelectMenu = function (
  options = {
    customId: Date.now(),
    disabled: false,
    minValues: 1,
    maxValues: 1,
    options: [],
    placeholder: null,
    required: null,
  },
  cache,
) {
  const customId = this.evalMessage(String(options.customId), cache);
  const disabled = this.parseBool(options.disabled) || false;
  const minValues =
    parseInt(this.evalMessage(options.minValues, cache), 10) || 1;
  const maxValues =
    parseInt(this.evalMessage(options.maxValues, cache), 10) || 1;
  const selectOptions = options.options;
  const placeholder = this.evalMessage(options.placeholder, cache);
  const required = this.parseBool(options.required) || false;
  const selectMenu = new DiscordJS.StringSelectMenuBuilder();
  selectMenu.setCustomId(customId);
  if (disabled) selectMenu.setDisabled(disabled);
  selectMenu.setMinValues(minValues);
  selectMenu.setMaxValues(maxValues);
  selectMenu.setOptions(selectOptions);
  if (placeholder) selectMenu.setPlaceholder(placeholder);
  if (required) selectMenu.setRequired(required);
  return selectMenu;
};

Actions.generateStringSelectMenuOption = function (
  options = {
    default: false,
    description: null,
    emoji: null,
    label: "...",
    value: "...",
  },
  cache,
) {
  const oDefault = this.parseBool(options.default) || false;
  const oDescription = this.evalMessage(options.description, cache) || null;
  const oEmoji = this.evalMessage(options.emoji, cache) || null;
  const oLabel = this.evalMessage(options.label, cache);
  const oValue = this.evalMessage(String(options.value), cache);
  const option = new DiscordJS.StringSelectMenuOptionBuilder();
  if (oDefault) option.setDefault(oDefault);
  if (oDescription) option.setDescription(oDescription);
  if (oEmoji) option.setEmoji(oEmoji);
  option.setLabel(oLabel);
  option.setValue(oValue);
  return option;
};

Actions.generateUserSelectMenu = function (
  options = {
    customId: null,
    defaultUsers: null,
    disabled: null,
    minValues: null,
    maxValues: null,
    placeholder: null,
    required: null,
  },
  cache,
) {
  const customId = this.evalMessage(String(options.customId), cache);
  const defaultUsers = null;
  const disabled = this.parseBool(options.disabled) || false;
  const minValues =
    parseInt(this.evalMessage(options.minValues, cache), 10) || 1;
  const maxValues =
    parseInt(this.evalMessage(options.maxValues, cache), 10) || 1;
  const placeholder = this.evalMessage(options.placeholder, cache) || null;
  const required = this.parseBool(options.required) || false;
  const selectMenu = new DiscordJS.UserSelectMenuBuilder();
  selectMenu.setCustomId(customId);
  if (defaultUsers) selectMenu.setDefaultUsers(defaultUsers);
  if (disabled) selectMenu.setDisabled(disabled);
  selectMenu.setMinValues(minValues);
  selectMenu.setMaxValues(maxValues);
  if (placeholder) selectMenu.setPlaceholder(placeholder);
  if (required) selectMenu.setRequired(required);
  return selectMenu;
};

Actions.generateRoleSelectMenu = function (
  options = {
    customId: null,
    defaultRoles: null,
    disabled: null,
    minValues: null,
    maxValues: null,
    placeholder: null,
    required: null,
  },
  cache,
) {
  const customId = this.evalMessage(String(options.customId), cache);
  const defaultRoles = null;
  const disabled = this.parseBool(options.disabled) || false;
  const minValues =
    parseInt(this.evalMessage(options.minValues, cache), 10) || 1;
  const maxValues =
    parseInt(this.evalMessage(options.maxValues, cache), 10) || 1;
  const placeholder = this.evalMessage(options.placeholder, cache) || null;
  const required = this.parseBool(options.required) || false;
  const selectMenu = new DiscordJS.RoleSelectMenuBuilder();
  selectMenu.setCustomId(customId);
  if (defaultRoles) selectMenu.setDefaultRoles(defaultRoles);
  if (disabled) selectMenu.setDisabled(disabled);
  selectMenu.setMinValues(minValues);
  selectMenu.setMaxValues(maxValues);
  if (placeholder) selectMenu.setPlaceholder(placeholder);
  if (required) selectMenu.setRequired(required);
  return selectMenu;
};

Actions.generateMentionableSelectMenu = function (
  options = {
    customId: null,
    defaultValues: null,
    disabled: null,
    minValues: null,
    maxValues: null,
    placeholder: null,
    required: null,
  },
  cache,
) {
  const customId = this.evalMessage(String(options.customId), cache);
  const defaultValues = null;
  const disabled = this.parseBool(options.disabled) || false;
  const minValues =
    parseInt(this.evalMessage(options.minValues, cache), 10) || 1;
  const maxValues =
    parseInt(this.evalMessage(options.maxValues, cache), 10) || 1;
  const placeholder = this.evalMessage(options.placeholder, cache) || null;
  const required = this.parseBool(options.required) || false;
  const selectMenu = new DiscordJS.MentionableSelectMenuBuilder();
  selectMenu.setCustomId(customId);
  if (defaultValues) selectMenu.setDefaultValues(defaultValues);
  if (disabled) selectMenu.setDisabled(disabled);
  selectMenu.setMinValues(minValues);
  selectMenu.setMaxValues(maxValues);
  if (placeholder) selectMenu.setPlaceholder(placeholder);
  if (required) selectMenu.setRequired(required);
  return selectMenu;
};

Actions.generateChannelSelectMenu = function (
  options = {
    customId: null,
    channelTypes: null,
    defaultChannels: null,
    disabled: null,
    minValues: null,
    maxValues: null,
    placeholder: null,
    required: null,
  },
  cache,
) {
  const customId = this.evalMessage(String(options.customId), cache);
  const channelTypes = options.channelTypes;
  const defaultChannels = JSON.parse(
    this.evalMessage(options.defaultChannels, cache) || "[]",
  );
  const disabled = this.parseBool(options.disabled) || false;
  const minValues =
    parseInt(this.evalMessage(options.minValues, cache), 10) || 1;
  const maxValues =
    parseInt(this.evalMessage(options.maxValues, cache), 10) || 1;
  const placeholder = this.evalMessage(options.placeholder, cache) || null;
  const required = this.parseBool(options.required) || false;
  const selectMenu = new DiscordJS.ChannelSelectMenuBuilder();
  selectMenu.setCustomId(customId);
  if (channelTypes) selectMenu.setChannelTypes(channelTypes);
  if (defaultChannels) selectMenu.setDefaultChannels(defaultChannels);
  if (disabled) selectMenu.setDisabled(disabled);
  selectMenu.setMinValues(minValues);
  selectMenu.setMaxValues(maxValues);
  if (placeholder) selectMenu.setPlaceholder(placeholder);
  if (required) selectMenu.setRequired(required);
  return selectMenu;
};

Actions.addButtonToActionRowArray = function (
  array,
  rowText,
  buttonData,
  cache,
) {
  let row = 0;
  if (!rowText) {
    let found = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i].length < 5) {
        if (array[i].length === 0 || array[i][0].data?.type === 2) {
          found = true;
          row = i;
          break;
        }
      }
    }
    if (!found && array.length !== 0) {
      row = array.length - 1;
      if (array[row].length >= 5) {
        row++;
      }
    }
  } else {
    row = parseInt(rowText, 10) - 1;
  }
  if (row >= 0 && row < 5) {
    while (array.length <= row + 1) {
      array.push([]);
    }
    if (array[row].length >= 5) {
      this.displayError(
        null,
        cache,
        "Action row #" + row + " exceeded the maximum of 5 buttons!",
      );
    } else {
      array[row].push(buttonData);
    }
  } else {
    this.displayError(null, cache, 'Invalid action row: "' + rowText + '".');
  }
};

Actions.addSelectToActionRowArray = function (
  array,
  rowText,
  selectData,
  cache,
) {
  let row = 0;
  if (!rowText) {
    if (array.length !== 0) {
      row = array.length - 1;
      if (array[row].length >= 5) {
        row++;
      }
    }
  } else {
    row = parseInt(rowText, 10) - 1;
  }
  if (row >= 0 && row < 5) {
    while (array.length <= row + 1) {
      array.push([]);
    }
    if (array[row].length >= 1) {
      this.displayError(
        null,
        cache,
        `Action row #${row} cannot have a select menu when there are any buttons on it!`,
      );
    } else {
      array[row].push(selectData);
    }
  } else {
    this.displayError(null, cache, `Invalid action row: '${rowText}'.`);
  }
};

Actions.convertComponentsArrayToActionRows = function (componentsArr) {
  if (componentsArr.length > 0) {
    const components = componentsArr
      .filter((comps) => comps.length > 0)
      .map(function (comps) {
        return new DiscordJS.ActionRowBuilder().setComponents(comps);
      });
    return components;
  }
  return [];
};

Actions.checkTemporaryInteractionResponses = function (interaction) {
  const customId = interaction.customId;
  const messageId = interaction.message?.id;
  if (this._temporaryInteractions?.[messageId]) {
    const interactions = this._temporaryInteractions[messageId];
    for (let i = 0; i < interactions.length; i++) {
      const interData = interactions[i];
      const usersMatch =
        !interData.userId || interData.userId === interaction.user.id;
      if (interData.customId === customId) {
        if (usersMatch) {
          interData.callback?.(interaction);
        } else {
          const invalidUserText = this.getInvalidUserResponse();
          if (invalidUserText) {
            interaction.reply({ content: invalidUserText, flags: 64 });
          }
        }
        return true;
      }
    }
  }
  return false;
};

Actions.registerTemporaryInteraction = function (
  messageId,
  time,
  customId,
  userId,
  multi,
  interactionCallback,
) {
  this._temporaryInteractionIdMax ??= 0;
  this._temporaryInteractions ??= {};
  this._temporaryInteractions[messageId] ??= [];

  const uniqueId = this._temporaryInteractionIdMax++;
  let removed = false;

  const removeInteraction = () => {
    if (!removed) removed = true;
    else return;
    this.removeTemporaryInteraction(messageId, uniqueId);
  };

  const callback = (interaction) => {
    interactionCallback?.(interaction);
    if (!multi) {
      removeInteraction();
    }
  };

  this._temporaryInteractions[messageId].push({
    customId,
    userId,
    callback,
    uniqueId,
  });
  if (time > 0) {
    require("timers").setTimeout(removeInteraction, time).unref();
  }
};

Actions.removeTemporaryInteraction = function (messageId, uniqueOrCustomId) {
  const interactions = this._temporaryInteractions?.[messageId];
  if (interactions) {
    let i = 0;
    for (; i < interactions.length; i++) {
      if (
        (typeof uniqueOrCustomId === "string" &&
          interactions[i].customId === uniqueOrCustomId) ||
        interactions[i].uniqueId === uniqueOrCustomId
      ) {
        break;
      }
    }
    if (i < interactions.length) interactions.splice(i, 1);
  }
};

Actions.clearTemporaryInteraction = function (messageId, customId) {
  if (this._temporaryInteractions?.[messageId]) {
    this.removeTemporaryInteraction(messageId, customId);
  }
};

Actions.clearAllTemporaryInteractions = function (messageId) {
  if (this._temporaryInteractions?.[messageId]) {
    this._temporaryInteractions[messageId] = null;
    delete this._temporaryInteractions[messageId];
  }
};

Actions.registerModalSubmitResponses = function (interactionId, callback) {
  this._temporaryInteractions ??= {};
  this._temporaryInteractions[interactionId] = callback;

  // clear up interaction after a while
  require("node:timers")
    .setTimeout(
      () => {
        this.clearAllTemporaryInteractions(interactionId);
      },
      60 * 60 * 1000,
    )
    .unref();
};

Actions.checkModalSubmitResponses = function (interaction) {
  const interactionId = interaction.customId;
  if (this._temporaryInteractions?.[interactionId]) {
    this._temporaryInteractions[interactionId](interaction);
    this.clearAllTemporaryInteractions(interactionId);
  }
};

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Events
// Handles the various events that occur.
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

const Events = (DBM.Events = {});

let $evts = null;

Events.generateData = function () {
  return [
    [],
    [],
    [],
    [],
    ["guildCreate", 0, 0, 1],
    ["guildDelete", 0, 0, 1],
    ["guildMemberAdd", 1, 0, 2],
    ["guildMemberRemove", 1, 0, 2],
    [
      "channelCreate",
      1,
      0,
      2,
      true,
      (arg1) => arg1.type === DiscordJS.ChannelType.GuildText,
    ],
    [
      "channelDelete",
      1,
      0,
      2,
      true,
      (arg1) => arg1.type === DiscordJS.ChannelType.GuildText,
    ],
    ["roleCreate", 1, 0, 2],
    ["roleDelete", 1, 0, 2],
    ["guildBanAdd", 200, 0, 2],
    ["guildBanRemove", 200, 0, 2],
    [
      "channelCreate",
      1,
      0,
      2,
      true,
      (arg1) => arg1.type === DiscordJS.ChannelType.GuildVoice,
    ],
    [
      "channelDelete",
      1,
      0,
      2,
      true,
      (arg1) => arg1.type === DiscordJS.ChannelType.GuildVoice,
    ],
    ["emojiCreate", 1, 0, 2],
    ["emojiDelete", 1, 0, 2],
    ["messageDelete", 1, 0, 2, true],
    ["guildUpdate", 1, 3, 3],
    ["guildMemberUpdate", 1, 3, 4],
    ["presenceUpdate", 1, 3, 4],
    ["voiceStateUpdate", 1, 3, 4],
    ["channelUpdate", 1, 3, 4, true],
    ["channelPinsUpdate", 1, 0, 2, true],
    ["roleUpdate", 1, 3, 4],
    ["messageUpdate", 1, 3, 4, true, (arg1, arg2) => !!arg2.content],
    ["emojiUpdate", 1, 3, 4],
    [],
    [],
    ["messageReactionRemoveAll", 1, 0, 2, true],
    ["guildMemberAvailable", 1, 0, 2],
    ["guildMembersChunk", 1, 0, 3],
    ["guildMemberSpeaking", 1, 3, 2],
    [],
    [],
    ["guildUnavailable", 1, 0, 1],
    [],
    [],
    [
      "channelCreate",
      1,
      0,
      2,
      true,
      (arg1) =>
        arg1.type !== DiscordJS.ChannelType.GuildText &&
        arg1.type !== DiscordJS.ChannelType.GuildVoice,
    ],
    [
      "channelDelete",
      1,
      0,
      2,
      true,
      (arg1) =>
        arg1.type !== DiscordJS.ChannelType.GuildText &&
        arg1.type !== DiscordJS.ChannelType.GuildVoice,
    ],
    ["stickerCreate", 1, 0, 2, true],
    ["stickerDelete", 1, 0, 2, true],
    ["threadCreate", 1, 0, 2, true],
    ["threadDelete", 1, 0, 2, true],
    ["stickerUpdate", 1, 3, 4, true],
    ["threadUpdate", 1, 3, 4, true],
    ["threadMemberUpdate", 1, 3, 100, true],
    [],
    ["inviteCreate", 1, 0, 2],
    ["inviteDelete", 1, 0, 2],
  ];
};

Events.data = Events.generateData();

Events.registerEvents = function (bot) {
  $evts = Bot.$evts;
  for (let i = 0; i < this.data.length; i++) {
    const d = this.data[i];
    if (d.length > 0 && $evts[String(i)]) {
      bot.on(
        d[0],
        this.callEvents.bind(this, String(i), d[1], d[2], d[3], !!d[4], d[5]),
      );
    }
  }
  if ($evts["28"])
    bot.on("messageReactionAdd", this.onReaction.bind(this, "28"));
  if ($evts["29"])
    bot.on("messageReactionRemove", this.onReaction.bind(this, "29"));
  if ($evts["34"]) bot.on("typingStart", this.onTyping.bind(this, "34"));
};

Events.callEvents = function (
  id,
  temp1,
  temp2,
  server,
  mustServe,
  condition,
  arg1,
  arg2,
) {
  if (mustServe && ((temp1 > 0 && !arg1.guild) || (temp2 > 0 && !arg2.guild)))
    return;
  if (condition && !condition(arg1, arg2)) return;
  const events = $evts[id];
  if (!events) return;
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const temp = {};
    if (event.temp) temp[event.temp] = this.getObject(temp1, arg1, arg2);
    if (event.temp2) temp[event.temp2] = this.getObject(temp2, arg1, arg2);
    Actions.invokeEvent(event, this.getObject(server, arg1, arg2), temp);
  }
};

Events.getObject = function (id, arg1, arg2) {
  switch (id) {
    case 1:
      return arg1;
    case 2:
      return arg1.guild;
    case 3:
      return arg2;
    case 4:
      return arg2.guild;
    case 100:
      return arg1.guildMember.guild;
    case 200:
      return arg1.user;
  }
};

Events.onInitialization = function (bot) {
  const events = $evts["1"];
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    for (const server of bot.guilds.cache.values()) {
      Actions.invokeEvent(event, server, {});
    }
  }
};

Events.onInitializationOnce = function (bot) {
  const events = $evts["48"];
  const server = bot.guilds.cache.first();
  for (let i = 0; i < events.length; i++) {
    Actions.invokeEvent(events[i], server, {});
  }
};

Events.setupIntervals = function (bot) {
  const events = $evts["3"];
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const time = event.temp ? parseFloat(event.temp) : 60;
    setInterval(() => {
      for (const server of bot.guilds.cache.values()) {
        Actions.invokeEvent(event, server, {});
      }
    }, time * 1e3).unref();
  }
};

Events.onReaction = function (id, reaction, user) {
  const events = $evts[id];
  if (!events) return;
  const server = reaction.message?.guild;
  const member = server?.members.resolve(user);
  if (!member) return;
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const temp = {};
    if (event.temp) temp[event.temp] = reaction;
    if (event.temp2) temp[event.temp2] = member;
    Actions.invokeEvent(event, server, temp);
  }
};

Events.onTyping = function (id, channel, user) {
  const events = $evts[id];
  if (!events) return;
  const server = channel.guild;
  const member = server?.members.resolve(user);
  if (!member) return;
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const temp = {};
    if (event.temp) temp[event.temp] = channel;
    if (event.temp2) temp[event.temp2] = member;
    Actions.invokeEvent(event, server, temp);
  }
};

Events.onError = function (text, text2, cache) {
  const events = $evts["37"];
  if (!events) return;
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const temp = {};
    if (event.temp) temp[event.temp] = text;
    if (event.temp2) temp[event.temp2] = text2;
    Actions.invokeEvent(event, cache.server, temp);
  }
};

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Files
// Contains functions for file management.
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

const Files = (DBM.Files = {});

Files.data = {};
Files.writers = {};
Files.crypto = require("crypto");
Files.dataFiles = [
  "commands.json",
  "events.json",
  "settings.json",
  "players.json",
  "servers.json",
  "messages.json",
  "channels.json",
  "globals.json",
  "serverVars.json",
  "globalVars.json",
  "invites.json",
];

Files.startBot = async function () {
  Actions.actionsLocation = path.join(__dirname, "actions");
  Actions.eventsLocation = path.join(__dirname, "events");
  Actions.extensionsLocation = path.join(__dirname, "extensions");
  if (await this.verifyDirectory(Actions.actionsLocation)) {
    await Actions.initMods();
    this.readData(Bot.init.bind(Bot));
  } else {
    PrintError(MsgType.MISSING_ACTIONS, Actions.actionsLocation);
  }
};

Files.verifyDirectory = async function (dir) {
  if (typeof dir !== "string") return false;
  try {
    await fs.promises.access(dir);
    return true;
  } catch {
    return false;
  }
};

Files.readData = function (callback) {
  let max = this.dataFiles.length;
  let cur = 0;
  for (let i = 0; i < max; i++) {
    const filePath = path.join(process.cwd(), "data", this.dataFiles[i]);
    const filename = this.dataFiles[i].slice(0, -5);
    const setData = (data) => {
      this.data[filename] = data;
      if (++cur === max) {
        callback();
      }
    };
    if (!fs.existsSync(filePath)) {
      setData({});
    } else {
      fs.readFile(filePath, (_error, content) => {
        let data;
        try {
          if (typeof content !== "string" && content.toString)
            content = content.toString();
          data = JSON.parse(this.decrypt(content));
        } catch {
          PrintError(MsgType.DATA_PARSING_ERROR, this.dataFiles[i]);
          return;
        }
        setData(data);
      });
    }
  }
};

Files.saveData = function (file, callback) {
  const filePath = path.join(process.cwd(), "data", file + ".json");
  const data = this.encrypt(JSON.stringify(this.data[file], null, 2));
  fs.writeFile(filePath, data, (err) => {
    PrintError(MsgType.ERROR_WRITING_FILE, err);
    if (callback) callback();
  });
};

Files.initEncryption = function () {
  try {
    this.password = require("discord-bot-maker");
  } catch {
    this.password = "";
  }
};

Files.encrypt = function (text) {
  if (this.password.length === 0) return text;
  const cipher = this.crypto.createCipher("aes-128-ofb", this.password);
  return cipher.update(text, "utf8", "hex") + cipher.final("hex");
};

Files.decrypt = function (text) {
  if (this.password.length === 0) return text;
  const decipher = this.crypto.createDecipher("aes-128-ofb", this.password);
  return decipher.update(text, "hex", "utf8") + decipher.final("utf8");
};

Files.db = {};
Files.db.data = {};
Files.db.enabled = true;

Files.db.prepareDB = function (db, memoryKey) {
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS data (
      key TEXT NOT NULL,
      dataName TEXT NOT NULL,
      value REAL,
      PRIMARY KEY (key, dataName)
    )
  `,
  ).run();
  db._updateMemory = () => {
    const rows = db.prepare(`SELECT key, dataName, value FROM data`).all();
    const obj = {};
    for (const row of rows) {
      if (!obj[row.key]) obj[row.key] = {};
      obj[row.key][row.dataName] = row.value;
    }
    Files.db.data[memoryKey] = obj;
  };
  db.setData = (key, dataName, value) => {
    db.prepare(
      `
      INSERT INTO data (key, dataName, value)
      VALUES (?, ?, ?)
      ON CONFLICT(key, dataName)
      DO UPDATE SET value = excluded.value
    `,
    ).run(key, dataName, value);
    db._updateMemory();
  };
  db.addData = (key, dataName, value) => {
    db.prepare(
      `
      INSERT INTO data (key, dataName, value)
      VALUES (?, ?, ?)
      ON CONFLICT(key, dataName)
      DO UPDATE SET value = value + excluded.value
    `,
    ).run(key, dataName, value);
    db._updateMemory();
  };
  db.subtractData = (key, dataName, value) => {
    db.prepare(
      `
      INSERT INTO data (key, dataName, value)
      VALUES (?, ?, ?)
      ON CONFLICT(key, dataName)
      DO UPDATE SET value = value - excluded.value
    `,
    ).run(key, dataName, value);
    db._updateMemory();
  };
  db.getData = (key, dataName, defaultValue = 0, debugMode = false) => {
    const row = db
      .prepare(
        `
      SELECT value FROM data WHERE key = ? AND dataName = ?
    `,
      )
      .get(key, dataName);
    const result = row?.value ?? defaultValue;
    if (debugMode) console.log(result);
    return result;
  };
  db.getAllData = (key, dataName, defaultValue = 0, debugMode = false) => {
    if (key && dataName) {
      return db.getData(key, dataName, defaultValue, debugMode);
    } else if (key && !dataName) {
      const rows = db
        .prepare(`SELECT dataName, value FROM data WHERE key = ?`)
        .all(key);
      const obj = {};
      for (const row of rows) obj[row.dataName] = row.value;
      if (debugMode) console.log(obj);
      return obj;
    } else if (!key && !dataName) {
      const rows = db.prepare(`SELECT key, dataName, value FROM data`).all();
      const obj = {};
      for (const row of rows) {
        if (!obj[row.key]) obj[row.key] = {};
        obj[row.key][row.dataName] = row.value;
      }
      if (debugMode) console.log(obj);
      return obj;
    } else {
      return defaultValue;
    }
  };
  db.clearData = (key, dataName) => {
    db.prepare(
      `
      DELETE FROM data WHERE key = ? AND dataName = ?
    `,
    ).run(key, dataName);
    db._updateMemory();
  };
  db._updateMemory();
  return db;
};

Files.db.initDataBase = function () {
  try {
    const Database = require("better-sqlite3");
    Files.db.DataBase = {
      channels: Files.db.prepareDB(
        new Database(path.join(__dirname, "data/channels.db")),
        "channels",
      ),
      globals: Files.db.prepareDB(
        new Database(path.join(__dirname, "data/globals.db")),
        "globals",
      ),
      messages: Files.db.prepareDB(
        new Database(path.join(__dirname, "data/messages.db")),
        "messages",
      ),
      players: Files.db.prepareDB(
        new Database(path.join(__dirname, "data/players.db")),
        "players",
      ),
      servers: Files.db.prepareDB(
        new Database(path.join(__dirname, "data/servers.db")),
        "servers",
      ),
    };
  } catch {
    Files.db.DataBase = {};
    Files.db.data = {};
    Files.db.enabled = false;
  }
};

Files.convertItem = function (item) {
  if (Array.isArray(item)) {
    const result = [];
    const length = item.length;
    for (let i = 0; i < length; i++) {
      result[i] = this.convertItem(item[i]);
    }
    return result;
  } else if (typeof item !== "object") {
    let result = "";
    try {
      result = JSON.stringify(item);
    } catch {}
    if (result !== "{}") {
      return item;
    }
  } else if (item.convertToString) {
    return item.convertToString();
  }
  return null;
};

Files.saveServerVariable = function (serverId, varName, item) {
  this.data.serverVars[serverId] ??= {};
  const strItem = this.convertItem(item);
  if (strItem !== null) {
    this.data.serverVars[serverId][varName] = strItem;
  }
  this.saveData("serverVars");
};

Files.restoreServerVariables = function () {
  const keys = Object.keys(this.data.serverVars);
  for (let i = 0; i < keys.length; i++) {
    const varNames = Object.keys(this.data.serverVars[keys[i]]);
    for (let j = 0; j < varNames.length; j++) {
      this.restoreVariable(
        this.data.serverVars[keys[i]][varNames[j]],
        2,
        varNames[j],
        keys[i],
      );
    }
  }
};

Files.saveGlobalVariable = function (varName, item) {
  const strItem = this.convertItem(item);
  if (strItem !== null) {
    this.data.globalVars[varName] = strItem;
  }
  this.saveData("globalVars");
};

Files.restoreGlobalVariables = function () {
  const keys = Object.keys(this.data.globalVars);
  for (let i = 0; i < keys.length; i++) {
    this.restoreVariable(this.data.globalVars[keys[i]], 3, keys[i]);
  }
};

Files.restoreVariable = function (value, type, varName, serverId) {
  const cache = {};
  if (serverId) {
    cache.server = { id: serverId };
  }
  if (typeof value === "string" || Array.isArray(value)) {
    this.restoreValue(value, Bot.bot)
      .then((finalValue) => {
        if (finalValue) {
          Actions.storeValue(finalValue, type, varName, cache);
        }
      })
      .catch(noop);
  } else {
    Actions.storeValue(value, type, varName, cache);
  }
};

Files.restoreValue = function (value, bot) {
  return new Promise((resolve, reject) => {
    if (typeof value === "string") {
      if (value.startsWith("mem-")) {
        return resolve(this.restoreMember(value, bot));
      } else if (value.startsWith("msg-")) {
        return this.restoreMessage(value, bot).then(resolve).catch(reject);
      } else if (value.startsWith("tc-")) {
        return resolve(this.restoreTextChannel(value, bot));
      } else if (value.startsWith("vc-")) {
        return resolve(this.restoreVoiceChannel(value, bot));
      } else if (value.startsWith("r-")) {
        return resolve(this.restoreRole(value, bot));
      } else if (value.startsWith("s-")) {
        return resolve(this.restoreServer(value, bot));
      } else if (value.startsWith("e-")) {
        return resolve(this.restoreEmoji(value, bot));
      } else if (value.startsWith("usr-")) {
        return resolve(this.restoreUser(value, bot));
      }
      resolve(value);
    } else if (Array.isArray(value)) {
      const result = [];
      const length = value.length;
      let curr = 0;
      for (let i = 0; i < length; i++) {
        this.restoreValue(value[i], bot)
          .then((item) => {
            result[i] = item;
            if (++curr >= length) {
              resolve(result);
            }
          })
          .catch(() => {
            if (++curr >= length) {
              resolve(result);
            }
          });
      }
    } else {
      resolve(value);
    }
  });
};

Files.restoreMember = function (value, bot) {
  const split = value.split("_");
  const memId = split[0].slice(4);
  const serverId = split[1].slice(2);
  const server = bot.guilds.get(serverId);
  if (server) {
    return server.members.resolve(memId);
  }
  return null;
};

Files.restoreMessage = function (value, bot) {
  const split = value.split("_");
  const msgId = split[0].slice(4);
  const channelId = split[1].slice(2);
  const channel = bot.channels.resolve(channelId);
  if (channel) {
    return channel.messages.fetch(msgId);
  }
  return null;
};

Files.restoreTextChannel = function (value, bot) {
  const channelId = value.slice(3);
  return bot.channels.resolve(channelId);
};

Files.restoreVoiceChannel = function (value, bot) {
  const channelId = value.slice(3);
  return bot.channels.resolve(channelId);
};

Files.restoreRole = function (value, bot) {
  const split = value.split("_");
  const roleId = split[0].slice(2);
  const serverId = split[1].slice(2);
  const server = bot.guilds.resolve(serverId);
  if (server?.roles) {
    return server.roles.resolve(roleId);
  }
  return null;
};

Files.restoreServer = function (value, bot) {
  const serverId = value.slice(2);
  return bot.guilds.resolve(serverId);
};

Files.restoreEmoji = function (value, bot) {
  const emojiId = value.slice(2);
  return bot.emojis.resolve(emojiId);
};

Files.restoreUser = function (value, bot) {
  const userId = value.slice(4);
  return bot.users.resolve(userId);
};

Files.initEncryption();

Files.db.initDataBase();

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Audio
// Contains functions for voice channel stuff.
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

const Audio = (DBM.Audio = {});

Audio.voice = null;
try {
  Audio.voice = require("@discordjs/voice");
} catch (e) {
  Audio.voice = null;
}

Audio.davey = null;
try {
  Audio.davey = require("@snazzah/davey");
} catch (e) {
  Audio.davey = null;
}

Audio.youtubei = null;
try {
  Audio.youtubei = require("youtubei");
  const { Client } = Audio.youtubei;
  Audio.youtubeiClient = new Client();
} catch (e) {
  Audio.youtubei = null;
}

Audio.ytdl = null;
try {
  Audio.ytdl = require("@distube/ytdl-core");
} catch (e) {
  Audio.ytdl = null;
}

Audio.ytpl = null;
try {
  Audio.ytpl = require("@distube/ytpl");
} catch (e) {
  Audio.ytpl = null;
}

Audio.Type = {
  File: "file",
  URL: "url",
  YouTube: "yt",
  Spotify: "spotify",
};

Audio.Subscription = class {
  constructor(voiceConnection) {
    this.voiceConnection = voiceConnection;
    this.audioPlayer = Audio.voice.createAudioPlayer();
    this.history = [];
    this.queue = [];
    this.volume = 0.5;
    this.bitrate = 96;

    this.voiceConnection.on("stateChange", async (_, newState) => {
      if (newState.status === Audio.voice.VoiceConnectionStatus.Disconnected) {
        if (
          newState.reason ===
            Audio.voice.VoiceConnectionDisconnectReason.WebSocketClose &&
          newState.closeCode === 4014
        ) {
          try {
            // Probably moved voice channel
            await Audio.voice.entersState(
              this.voiceConnection,
              Audio.voice.VoiceConnectionStatus.Connecting,
              5_000,
            );
          } catch {
            // Probably removed from voice channel
            if (
              this.voiceConnection.state.status !==
              Audio.voice.VoiceConnectionStatus.Destroyed
            ) {
              this.voiceConnection.destroy();
            }
          }
        } else if (this.voiceConnection.rejoinAttempts < 5) {
          setTimeout((this.voiceConnection.rejoinAttempts + 1) * 5_000);
          this.voiceConnection.rejoin();
        } else {
          this.voiceConnection.destroy();
        }
      } else if (
        newState.status === Audio.voice.VoiceConnectionStatus.Destroyed
      ) {
        this.stop();
      } else if (
        !this.readyLock &&
        (newState.status === Audio.voice.VoiceConnectionStatus.Connecting ||
          newState.status === Audio.voice.VoiceConnectionStatus.Signalling)
      ) {
        this.readyLock = true;
        try {
          await Audio.voice.entersState(
            this.voiceConnection,
            Audio.voice.VoiceConnectionStatus.Ready,
            20_000,
          );
        } catch {
          if (
            this.voiceConnection.state.status !==
            Audio.voice.VoiceConnectionStatus.Destroyed
          ) {
            this.voiceConnection.destroy();
          }
        } finally {
          this.readyLock = false;
        }
      }
    });

    this.audioPlayer.on("stateChange", (oldState, newState) => {
      if (
        newState.status === Audio.voice.AudioPlayerStatus.Idle &&
        oldState.status !== Audio.voice.AudioPlayerStatus.Idle
      ) {
        void this.processQueue();
      }
    });

    this.audioPlayer.on("error", console.error);

    voiceConnection.subscribe(this.audioPlayer);
  }

  enqueue(track, beginning = false) {
    if (beginning) this.queue.unshift(track);
    else this.queue.push(track);
    void this.processQueue();
  }

  stop() {
    this.queueLock = true;
    this.queue = [];
    this.audioPlayer.stop(true);
  }

  async processQueue() {
    if (
      this.queueLock ||
      this.audioPlayer.state.status !== Audio.voice.AudioPlayerStatus.Idle
    ) {
      return;
    }

    if (this.queue.length === 0) {
      const leaveVoiceTimeout = Files.data.settings.leaveVoiceTimeout ?? "0";
      let seconds = parseInt(leaveVoiceTimeout, 10);

      if (isNaN(seconds) || seconds < 0) seconds = 0;
      if (leaveVoiceTimeout === "" || !isFinite(seconds)) return;

      require("node:timers")
        .setTimeout(async () => {
          let guild = null;
          try {
            guild = await Bot.bot.guilds.resolve(
              this.voiceConnection.joinConfig.guildId,
            );
          } catch (e) {
            console.error(e);
          }
          if (guild) {
            Audio.disconnectFromVoice(guild);
          }
        }, seconds * 1e3)
        .unref();
      return;
    }

    this.queueLock = true;

    if (this.audioPlayer.state.resource?.metadata) {
      this.history.push(this.audioPlayer.state.resource.metadata);
    }

    const nextTrack = this.queue.shift();
    try {
      const resource = await nextTrack.createAudioResource();
      if (Audio.inlineVolume && typeof resource?.volume?.volume === "number") {
        resource.volume.volume = this.volume ?? 0.5;
      }
      // resource.encoder.setBitrate(this.bitrate * 1e3);
      this.audioPlayer.play(resource);
      this.queueLock = false;
    } catch (e) {
      if (e.toString().includes("opus.node")) {
        console.warn(`-- DBM Error Note --
If you're seeing an error here, it's likely that the version of
NodeJS/NPM or the operating system used to install @discordjs/opus
is different from the NodeJS/NPM/OS running this bot.
Try deleting "node_modules" and running "npm install" to resolve the issue.
`);
      }
      console.error(e);
      this.queueLock = false;
      return this.processQueue();
    }
  }
};

Audio.Track = class {
  constructor({ url, title }) {
    this.url = url;
    this.title = title;
  }

  async createAudioResource() {
    const stream = await Audio.ytdl.stream(this.url);
    const probe = await Audio.voice.demuxProbe(stream.stream);
    return Audio.voice.createAudioResource(probe.stream, {
      metadata: this,
      inlineVolume: !!Audio.inlineVolume,
      inputType: probe.type,
    });
  }

  static async from(url) {
    let info = null;
    try {
      info = await Audio.ytdl.video_info(url);
    } catch (e) {
      PrintError(MsgType.ERROR_GETTING_YT_INFO, e.stack.toString());
    }
    return new Audio.Track({ url, title: info.video_details.title });
  }
};

Audio.BasicTrack = class {
  /**
   * @param {Object} options
   * @param {String} options.url
   */
  constructor({ url }) {
    this.url = url;
  }

  createAudioResource() {
    return Audio.voice.createAudioResource(this.url, {
      inlineVolume: !!Audio.inlineVolume,
      inputType: Audio.voice.StreamType.Arbitrary,
    });
  }
};

Audio.subscriptions = new Map();

Audio.connectToVoice = function (voiceChannel) {
  if (!Audio.voice) {
    return PrintError(MsgType.MISSING_MUSIC_MODULES);
  }

  Audio.inlineVolume ??=
    (Files.data.settings.mutableVolume ?? "true") === "true";

  const existingSubscription = this.subscriptions.get(voiceChannel?.guild?.id);
  if (existingSubscription) {
    const status = existingSubscription.voiceConnection?.state?.status;
    if (status === Audio.voice.VoiceConnectionStatus.Disconnected) {
      existingSubscription.voiceConnection.destroy();
      existingSubscription = null;
    } else if (status === Audio.voice.VoiceConnectionStatus.Destroyed) {
      existingSubscription = null;
    }

    if (
      existingSubscription?.voiceConnection?.joinConfig?.channelId ===
      voiceChannel.id
    ) {
      return;
    }
  }

  const subscription = new this.Subscription(
    this.voice.joinVoiceChannel({
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      channelId: voiceChannel.id,
      guildId: voiceChannel.guildId,
      selfDeaf: (Files.data.settings.autoDeafen ?? "true") === "true",
    }),
  );

  this.subscriptions.set(voiceChannel.guildId, subscription);

  return subscription;
};

Audio.getSubscription = function (guild) {
  const subscription = this.subscriptions.get(guild?.id);
  if (!subscription) {
    const voiceChannel = guild?.members?.me?.voice?.channel;
    if (voiceChannel) {
      return this.connectToVoice(voiceChannel);
    }
  }
  return subscription;
};

Audio.disconnectFromVoice = function (guild) {
  if (!guild) return;
  const subscription = this.getSubscription(guild);
  if (!subscription) return;
  subscription.voiceConnection.destroy();
  this.subscriptions.delete(guild?.id);
};

Audio.setVolume = function (volume, cache) {
  const guild = cache.server;
  if (Audio.inlineVolume === false)
    return PrintError(MsgType.MUTABLE_VOLUME_DISABLED);
  if (!guild) return;
  const subscription = this.getSubscription(guild);
  if (!subscription) return PrintError(MsgType.MUTABLE_VOLUME_NOT_IN_CHANNEL);
  subscription.volume = volume;
  if (
    subscription.audioPlayer.state.status ===
    this.voice.AudioPlayerStatus.Playing
  ) {
    subscription.audioPlayer.state.resource.volume.volume = volume;
  }
};

Audio.pause = function (cache) {
  const guild = cache.server;
  const subscription = this.getSubscription(guild);
  if (!subscription) return PrintError(MsgType.NOT_IN_VOICE_CHANNEL);
  subscription.audioPlayer.pause();
};

Audio.unpause = function (cache) {
  const guild = cache.server;
  const subscription = this.getSubscription(guild);
  if (!subscription) return PrintError(MsgType.NOT_IN_VOICE_CHANNEL);
  subscription.audioPlayer.unpause();
};

Audio.stop = function (cache) {
  const guild = cache.server;
  const subscription = this.getSubscription(guild);
  if (!subscription) return PrintError(MsgType.NOT_IN_VOICE_CHANNEL);
  subscription.stop();
};

Audio.skip = function (cache) {
  const guild = cache.server;
  const subscription = this.getSubscription(guild);
  if (!subscription) return PrintError(MsgType.NOT_IN_VOICE_CHANNEL);
  subscription.audioPlayer.stop();
};

Audio.previous = async function (cache) {
  const guild = cache.server;
  const subscription = this.getSubscription(guild);
  if (!subscription) return PrintError(MsgType.NOT_IN_VOICE_CHANNEL);
  if (!subscription.history || subscription.history.length === 0) return;
  const currentResource = subscription.audioPlayer.state.resource;
  if (currentResource?.metadata) {
    subscription.queue.unshift(currentResource.metadata);
  }
  const previousTrack = subscription.history.pop();
  await subscription.enqueue(previousTrack, true);
  subscription.audioPlayer.stop(true);
};

Audio.setBitrate = function (bitrate, cache) {
  const guild = cache.server;
  const subscription = this.getSubscription(guild);
  if (!subscription) return PrintError(MsgType.NOT_IN_VOICE_CHANNEL);
  subscription.bitrate = bitrate;
  const resource = subscription.audioPlayer.state.resource;
  if (resource?.encoder?.setBitrate) {
    resource.encoder.setBitrate(bitrate * 1_000);
  }
};

Audio.addAudio = async function (info, guild, isQueue) {
  if (!guild) return;
  if (isQueue) {
    await Audio.addToQueue(info, guild);
  } else {
    await Audio.playImmediately(info, guild);
  }
};

Audio.addToQueue = async function ([type, options, url], guild) {
  if (!guild) return;
  const id = guild.id;
  const subscription = this.getSubscription(guild);
  if (!subscription) return;
  if (typeof options.volume !== "undefined")
    this.setVolume(options.volume, guild);
  if (typeof options.bitrate !== "undefined")
    subscription.bitrate = options.bitrate;
  let track = null;
  try {
    track = await this.getTrack(url, type);
  } catch (e) {
    PrintError(MsgType.ERROR_CREATING_AUDIO, e.stack.toString());
  }
  if (track !== null) {
    subscription.enqueue(track);
  }
};

Audio.playImmediately = async function ([type, options, url], guild) {
  if (!guild) return;
  const subscription = this.getSubscription(guild);
  if (!subscription) return;
  if (typeof options.volume !== "undefined")
    this.setVolume(options.volume, guild);
  if (typeof options.bitrate !== "undefined")
    subscription.bitrate = options.bitrate;
  let track = null;
  try {
    track = await this.getTrack(url, type);
  } catch (e) {
    PrintError(MsgType.ERROR_CREATING_AUDIO, e.stack.toString());
  }
  if (track !== null) {
    subscription.enqueue(track, true);
  }
  subscription.audioPlayer.stop(true);
};

Audio.clearQueue = function (cache) {
  if (!cache.server) return;
  const subscription = this.getSubscription(cache.server);
  if (!subscription) return;
  subscription.queue = [];
};

Audio.getTrack = async function (url, type) {
  switch (type) {
    case "file":
      return new this.BasicTrack({ url: Actions.getLocalFile(url) });
    case "url":
      return new this.BasicTrack({ url });
    case "yt":
      return this.Track.from(url);
  }
};

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Images
// Contains functions for image management.
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

const Images = (DBM.Images = {});

Images.JIMP = null;
try {
  Images.JIMP = require("jimp");
} catch {
  Images.JIMP = null;
}

Images.getImage = async function (url) {
  if (!url.startsWith("http")) url = Actions.getLocalFile(url);
  return await this.JIMP.Jimp.read(url);
};

Images.getFont = async function (url) {
  return await this.JIMP.loadFont(Actions.getLocalFile(url));
};

Images.isImage = function (obj) {
  if (!Images.JIMP) {
    return false;
  }
  return obj instanceof Images.JIMP.Jimp;
};

Images.createBuffer = async function (image, format = "image/png") {
  return await image.getBuffer(format);
};

Images.drawImageOnImage = function (img1, img2, x, y) {
  for (let i = 0; i < img2.bitmap.width; i++) {
    for (let j = 0; j < img2.bitmap.height; j++) {
      const pos = i * (img2.bitmap.width * 4) + j * 4;
      const pos2 = (i + y) * (img1.bitmap.width * 4) + (j + x) * 4;
      const target = img1.bitmap.data;
      const source = img2.bitmap.data;
      for (let k = 0; k < 4; k++) {
        target[pos2 + k] = source[pos + k];
      }
    }
  }
};

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Giveaways
// Contains functions for giveaways management.
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

const Giveaways = (DBM.Giveaways = {});

Giveaways.DiscordGiveaways = null;
try {
  Giveaways.DiscordGiveaways = require("@shdm/discord-giveaways");
} catch {
  Giveaways.DiscordGiveaways = null;
}

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Invites
// Contains functions for invites management.
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

const Invites = (DBM.Invites = {});

Invites.InviteLogger = null;

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Custom Structures
// Contains functions for file management.
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

//---------------------------------------------------------------------
// GuildMember
//---------------------------------------------------------------------

Reflect.defineProperty(DiscordJS.GuildMember.prototype, "unban", {
  value(server, reason) {
    return server.bans.remove(this.id, reason);
  },
});

Reflect.defineProperty(DiscordJS.GuildMember.prototype, "data", {
  value(name, defaultValue) {
    return DiscordJS.User.prototype.data.apply(this, arguments);
  },
});

Reflect.defineProperty(DiscordJS.GuildMember.prototype, "setData", {
  value(name, value) {
    return DiscordJS.User.prototype.setData.apply(this, arguments);
  },
});

Reflect.defineProperty(DiscordJS.GuildMember.prototype, "addData", {
  value(name, value) {
    return DiscordJS.User.prototype.addData.apply(this, arguments);
  },
});

Reflect.defineProperty(DiscordJS.GuildMember.prototype, "subtractData", {
  value(name, value) {
    return DiscordJS.User.prototype.subtractData.apply(this, arguments);
  },
});

Reflect.defineProperty(DiscordJS.GuildMember.prototype, "clearData", {
  value(name) {
    return DiscordJS.User.prototype.clearData.apply(this, arguments);
  },
});

Reflect.defineProperty(DiscordJS.GuildMember.prototype, "convertToString", {
  value() {
    return `mem-${this.id}_s-${this.guild.id}`;
  },
});

//---------------------------------------------------------------------
// User
//---------------------------------------------------------------------

Reflect.defineProperty(DiscordJS.User.prototype, "data", {
  value(name, defaultValue) {
    const id = this.id;
    const data = Files.data.players;
    if (data[id] === undefined) {
      if (defaultValue === undefined) {
        return null;
      } else {
        data[id] = {};
      }
    }
    if (data[id][name] === undefined && defaultValue !== undefined) {
      data[id][name] = defaultValue;
    }
    return data[id][name];
  },
});

Reflect.defineProperty(DiscordJS.User.prototype, "setData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.players;
    if (data[id] === undefined) {
      data[id] = {};
    }
    data[id][name] = value;
    Files.saveData("players");
  },
});

Reflect.defineProperty(DiscordJS.User.prototype, "addData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.players;
    if (data[id] === undefined) {
      data[id] = {};
    }
    if (data[id][name] === undefined) {
      this.setData(name, value);
    } else {
      this.setData(name, this.data(name) + value);
    }
  },
});

Reflect.defineProperty(DiscordJS.User.prototype, "subtractData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.players;
    if (data[id] === undefined) {
      data[id] = {};
    }
    if (data[id][name] === undefined) {
      this.setData(name, -value);
    } else {
      this.setData(name, this.data(name) - value);
    }
  },
});

Reflect.defineProperty(DiscordJS.User.prototype, "clearData", {
  value(name) {
    const id = this.id;
    const data = Files.data.players;
    if (data[id] !== undefined) {
      if (typeof name === "string") {
        if (data[id][name] !== undefined) {
          delete data[id][name];
          Files.saveData("players");
        }
      } else {
        delete data[id];
        Files.saveData("players");
      }
    }
  },
});

Reflect.defineProperty(DiscordJS.User.prototype, "convertToString", {
  value() {
    return `usr-${this.id}`;
  },
});

//---------------------------------------------------------------------
// Guild
//---------------------------------------------------------------------

Reflect.defineProperty(DiscordJS.Guild.prototype, "getDefaultChannel", {
  value() {
    let channel = this.channels.resolve(this.id);
    if (!channel) {
      [...this.channels.cache.values()].forEach((c) => {
        if (
          c
            .permissionsFor(DBM.Bot.bot.user)
            ?.has(DiscordJS.PermissionFlagsBits.SendMessages) &&
          (c.type === DiscordJS.ChannelType.GuildText ||
            c.type === DiscordJS.ChannelType.GuildAnnouncement)
        ) {
          if (!channel || channel.position > c.position) {
            channel = c;
          }
        }
      });
    }
    return channel;
  },
});

Reflect.defineProperty(DiscordJS.Guild.prototype, "getDefaultVoiceChannel", {
  value() {
    let channel = this.channels.resolve(this.id);
    if (!channel) {
      [...this.channels.cache.values()].forEach((c) => {
        if (
          c
            .permissionsFor(DBM.Bot.bot.user)
            ?.has(DiscordJS.PermissionFlagsBits.SendMessages) &&
          c.type === DiscordJS.ChannelType.GuildVoice
        ) {
          if (!channel || channel.position > c.position) {
            channel = c;
          }
        }
      });
    }
    return channel;
  },
});

Reflect.defineProperty(DiscordJS.Guild.prototype, "data", {
  value(name, defaultValue) {
    const id = this.id;
    const data = Files.data.servers;
    if (data[id] === undefined) {
      if (defaultValue === undefined) {
        return null;
      } else {
        data[id] = {};
      }
    }
    if (data[id][name] === undefined && defaultValue !== undefined) {
      data[id][name] = defaultValue;
    }
    return data[id][name];
  },
});

Reflect.defineProperty(DiscordJS.Guild.prototype, "setData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.servers;
    if (data[id] === undefined) {
      data[id] = {};
    }
    data[id][name] = value;
    Files.saveData("servers");
  },
});

Reflect.defineProperty(DiscordJS.Guild.prototype, "addData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.servers;
    if (data[id] === undefined) {
      data[id] = {};
    }
    if (data[id][name] === undefined) {
      this.setData(name, value);
    } else {
      this.setData(name, this.data(name) + value);
    }
  },
});

Reflect.defineProperty(DiscordJS.Guild.prototype, "subtractData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.servers;
    if (data[id] === undefined) {
      data[id] = {};
    }
    if (data[id][name] === undefined) {
      this.setData(name, -value);
    } else {
      this.setData(name, this.data(name) - value);
    }
  },
});

Reflect.defineProperty(DiscordJS.Guild.prototype, "clearData", {
  value(name) {
    const id = this.id;
    const data = Files.data.servers;
    if (data[id] !== undefined) {
      if (typeof name === "string") {
        if (data[id][name] !== undefined) {
          delete data[id][name];
          Files.saveData("servers");
        }
      } else {
        delete data[id];
        Files.saveData("servers");
      }
    }
  },
});

Reflect.defineProperty(DiscordJS.Guild.prototype, "convertToString", {
  value() {
    return `s-${this.id}`;
  },
});

//---------------------------------------------------------------------
// Message
//---------------------------------------------------------------------

Reflect.defineProperty(DiscordJS.Message.prototype, "data", {
  value(name, defaultValue) {
    const id = this.id;
    const data = Files.data.messages;
    if (data[id] === undefined) {
      if (defaultValue === undefined) {
        return null;
      } else {
        data[id] = {};
      }
    }
    if (data[id][name] === undefined && defaultValue !== undefined) {
      data[id][name] = defaultValue;
    }
    return data[id][name];
  },
});

Reflect.defineProperty(DiscordJS.Message.prototype, "setData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.messages;
    if (data[id] === undefined) {
      data[id] = {};
    }
    data[id][name] = value;
    Files.saveData("messages");
  },
});

Reflect.defineProperty(DiscordJS.Message.prototype, "addData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.messages;
    if (data[id] === undefined) {
      data[id] = {};
    }
    if (data[id][name] === undefined) {
      this.setData(name, value);
    } else {
      this.setData(name, this.data(name) + value);
    }
  },
});

Reflect.defineProperty(DiscordJS.Message.prototype, "subtractData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.messages;
    if (data[id] === undefined) {
      data[id] = {};
    }
    if (data[id][name] === undefined) {
      this.setData(name, -value);
    } else {
      this.setData(name, this.data(name) - value);
    }
  },
});

Reflect.defineProperty(DiscordJS.Message.prototype, "clearData", {
  value(name) {
    const id = this.id;
    const data = Files.data.messages;
    if (data[id] !== undefined) {
      if (typeof name === "string") {
        if (data[id][name] !== undefined) {
          delete data[id][name];
          Files.saveData("messages");
        }
      } else {
        delete data[id];
        Files.saveData("messages");
      }
    }
  },
});

Reflect.defineProperty(DiscordJS.Message.prototype, "convertToString", {
  value() {
    return `msg-${this.id}_c-${this.channel.id}`;
  },
});

//---------------------------------------------------------------------
// Globals
//---------------------------------------------------------------------

const Globals = (DBM.Globals = {});

Reflect.defineProperty(Globals, "data", {
  value(name, defaultValue) {
    const data = Files.data.globals;
    if (!data[name]) {
      if (defaultValue === undefined) return null;
      data[name] = defaultValue;
    }
    return data[name];
  },
});

Reflect.defineProperty(Globals, "setData", {
  value(name, value) {
    const data = Files.data.globals;
    data[name] = value;
    Files.saveData("globals");
  },
});

Reflect.defineProperty(Globals, "addData", {
  value(name, value) {
    const data = Files.data.globals;
    if (!data[name]) this.setData(name, value);
    else this.setData(name, this.data(name) + value);
  },
});

Reflect.defineProperty(Globals, "subtractData", {
  value(name, value) {
    const data = Files.data.globals;
    if (!data[name]) this.setData(name, -value);
    else this.setData(name, this.data(name) - value);
  },
});

Reflect.defineProperty(Globals, "clearData", {
  value(name) {
    const data = Files.data.globals;
    if (typeof name === "string") {
      if (data[name] !== undefined) {
        delete data[name];
        Files.saveData("globals");
      }
    } else {
      for (const key in data) delete data[key];
      Files.saveData("globals");
    }
  },
});

Reflect.defineProperty(Globals, "convertToString", {
  value() {
    return "globals";
  },
});

//---------------------------------------------------------------------
// GuildChannel
//---------------------------------------------------------------------

Reflect.defineProperty(DiscordJS.GuildChannel.prototype, "data", {
  value(name, defaultValue) {
    const id = this.id;
    const data = Files.data.channels;
    if (!data[id]) {
      if (defaultValue === undefined) return null;
      data[id] = {};
    }
    if (data[id][name] === undefined && defaultValue !== undefined) {
      data[id][name] = defaultValue;
    }
    return data[id][name];
  },
});

Reflect.defineProperty(DiscordJS.GuildChannel.prototype, "setData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.channels;
    if (!data[id]) data[id] = {};
    data[id][name] = value;
    Files.saveData("channels");
  },
});

Reflect.defineProperty(DiscordJS.GuildChannel.prototype, "addData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.channels;
    if (!data[id]) data[id] = {};
    if (data[id][name] === undefined) this.setData(name, value);
    else this.setData(name, this.data(name) + value);
  },
});

Reflect.defineProperty(DiscordJS.GuildChannel.prototype, "subtractData", {
  value(name, value) {
    const id = this.id;
    const data = Files.data.channels;
    if (!data[id]) data[id] = {};
    if (data[id][name] === undefined) this.setData(name, -value);
    else this.setData(name, this.data(name) - value);
  },
});

Reflect.defineProperty(DiscordJS.GuildChannel.prototype, "clearData", {
  value(name) {
    const id = this.id;
    const data = Files.data.channels;
    if (!data[id]) return;
    if (typeof name === "string") {
      if (data[id][name] !== undefined) {
        delete data[id][name];
        Files.saveData("channels");
      }
    } else {
      delete data[id];
      Files.saveData("channels");
    }
  },
});

Reflect.defineProperty(DiscordJS.GuildChannel.prototype, "convertToString", {
  value() {
    return `ch-${this.id}`;
  },
});

//---------------------------------------------------------------------
// TextChannel
//---------------------------------------------------------------------

Reflect.defineProperty(DiscordJS.TextChannel.prototype, "startThread", {
  value(options) {
    return this.threads.create(options);
  },
});

Reflect.defineProperty(DiscordJS.TextChannel.prototype, "convertToString", {
  value() {
    return `tc-${this.id}`;
  },
});

//---------------------------------------------------------------------
// VoiceChannel
//---------------------------------------------------------------------

Reflect.defineProperty(DiscordJS.VoiceChannel.prototype, "convertToString", {
  value() {
    return `vc-${this.id}`;
  },
});

//---------------------------------------------------------------------
// Role
//---------------------------------------------------------------------

Reflect.defineProperty(DiscordJS.Role.prototype, "convertToString", {
  value() {
    return `r-${this.id}_s-${this.guild.id}`;
  },
});

//---------------------------------------------------------------------
// Emoji
//---------------------------------------------------------------------

Reflect.defineProperty(DiscordJS.GuildEmoji.prototype, "convertToString", {
  value() {
    return `e-${this.id}`;
  },
});

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Start Bot
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

(async () => {
  await Files.startBot();
})();
