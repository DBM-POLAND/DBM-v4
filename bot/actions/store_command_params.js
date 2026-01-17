module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Command Only
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  commandOnly: true,

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Store Command Params",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Other Stuff",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    const infoSources = [
      "One Parameter",
      "Multiple Parameters",
      "Mentioned Member",
      "Mentioned Role",
      "Mentioned Channel",
      "Mentionable",
      "Attachment",
    ];
    return `${infoSources[parseInt(data.info, 10)]} #${data.infoIndex}`;
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Meta Data
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  meta: {
    version: "4.0.0",
    modVersion: "1.0.0",
    preciseCheck: true,
    author: "Shadow",
    help: "https://dc.dbm-poland.site",
    authorUrl: "https://github.com/shadoow051",
    downloadUrl:
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/store_command_params.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "None";
    switch (info) {
      case 0:
      case 1:
        dataType = "Text";
        break;
      case 2:
        dataType = "Server Member";
        break;
      case 3:
        dataType = "Role";
        break;
      case 4:
        dataType = "Channel";
        break;
      case 5:
        dataType = "Mentionable";
        break;
      case 6:
        dataType = "Attachment";
        break;
    }
    return [data.varName, dataType];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["info", "infoIndex", "storage", "varName"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<div>
	<div style="float: left; width: 35%;">
		<span class="dbminputlabel">Source Info</span><br>
		<select id="info" class="round" onchange="glob.onSourceInfoChanged(this)">
			<option value="0" selected>One Parameter</option>
			<option value="1">Multiple Parameters</option>
			<option value="2">Mentioned Member</option>
			<option value="3">Mentioned Role</option>
			<option value="4">Mentioned Channel</option>
            <option value="5">Mentionable</option>
            <option value="6">Attachment</option>
		</select>
	</div>
	<div style="float: right; width: 60%;">
		<span class="dbminputlabel" id="infoCountLabel">Parameter Number:</span>
		<input id="infoIndex" class="round" type="text" value="1"><br>
	</div>
</div>
<br><br><br>
<store-in-variable style="padding-top: 8px;" dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></store-in-variable>`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const { glob, document } = this;
    glob.onSourceInfoChanged = function (event) {
      const value = parseInt(event.value, 10);
      const infoCountLabel = document.getElementById("infoCountLabel");
      switch (value) {
        case 0:
          infoCountLabel.innerHTML = "Parameter Number";
          break;
        case 1:
          infoCountLabel.innerHTML = "Starting From Parameter Number";
          break;
        case 2:
          infoCountLabel.innerHTML = "Member Mention Number";
          break;
        case 3:
          infoCountLabel.innerHTML = "Role Mention Number";
          break;
        case 4:
          infoCountLabel.innerHTML = "Channel Mention Number";
          break;
        case 5:
          infoCountLabel.innerHTML = "Mentionable Number";
          break;
        case 6:
          infoCountLabel.innerHTML = "Attachment Number";
          break;
        default:
          infoCountLabel.innerHTML = "";
          break;
      }
    };
    glob.onSourceInfoChanged(document.getElementById("info"));
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  action(cache) {
    const data = cache.actions[cache.index];
    const msg = cache.msg;
    const { ApplicationCommandOptionType } = require("discord.js");
    const interactionOptions = cache.interaction?.options ?? null;
    if (!msg && !interactionOptions) {
      return this.callNextAction(cache);
    }

    const { Bot, Files } = this.getDBM();
    const infoType = parseInt(data.info, 10);
    const index = parseInt(this.evalMessage(data.infoIndex, cache), 10) - 1;

    let separator;
    let content = null;
    const getContent = () => {
      if (content === null) {
        separator = Files.data.settings.separator || "\\s+";
        Bot.populateTagRegex();
        content = msg.content
          ?.replace(Bot.tagRegex, "")
          .replace(Bot.checkTag(msg.content), "")
          .trimStart();
      }
      return content;
    };

    let source;
    switch (infoType) {
      case 0: {
        if (interactionOptions) {
          const result = this.getParameterFromParameterData(
            interactionOptions.data[index],
          );
          if (result) {
            source = result;
          }
        } else if (msg && getContent()) {
          const params = content.split(new RegExp(separator));
          source = params[index] || "";
        }
        break;
      }

      case 1: {
        if (interactionOptions) {
          const result = [];
          for (let i = 0; i < index; i++) {
            const r = this.getParameterFromParameterData(
              interactionOptions.data[i],
            );
            if (r) {
              result.push(r);
            }
          }
          if (result.length > 0) {
            source = result;
          }
        } else if (msg && getContent()) {
          const params = content.split(new RegExp(separator));
          source = "";
          for (let i = 0; i < index; i++) {
            source += params[i] + " ";
          }
          const location = content.indexOf(source);
          if (location === 0) {
            source = content.substring(source.length);
          }
        }
        break;
      }

      case 2: {
        if (interactionOptions) {
          const options = interactionOptions.data.filter(
            (option) => option.type === ApplicationCommandOptionType.User,
          );
          if (options[index]) {
            source = options[index].member ?? options[index].user;
          }
        } else if (msg.mentions.members.size) {
          const members = [...msg.mentions.members.values()];
          if (members[index]) {
            source = members[index];
          }
        }
        break;
      }

      case 3: {
        if (interactionOptions) {
          const options = interactionOptions.data.filter(
            (option) => option.type === ApplicationCommandOptionType.Role,
          );
          if (options[index]) {
            source = options[index].role;
          }
        } else if (msg.mentions.roles.size) {
          const roles = [...msg.mentions.roles.values()];
          if (roles[index]) {
            source = roles[index];
          }
        }
        break;
      }

      case 4: {
        if (interactionOptions) {
          const options = interactionOptions.data.filter(
            (option) => option.type === ApplicationCommandOptionType.Channel,
          );
          if (options[index]) {
            source = options[index].channel;
          }
        } else if (msg.mentions.channels.size) {
          const channels = [...msg.mentions.channels.values()];
          if (channels[index]) {
            source = channels[index];
          }
        }
        break;
      }

      case 5: {
        if (interactionOptions) {
          const options = interactionOptions.data.filter(
            (option) =>
              option.type === ApplicationCommandOptionType.Mentionable,
          );
          if (options[index]) {
            source =
              options[index].member ??
              options[index].user ??
              options[index].role ??
              null;
          }
        } else if (msg) {
          const mentionables = [
            ...msg.mentions.members.values(),
            ...msg.mentions.roles.values(),
          ];
          if (mentionables[index]) {
            source = mentionables[index];
          }
        }
        break;
      }

      case 6: {
        if (interactionOptions) {
          const options = interactionOptions.data.filter(
            (option) => option.type === ApplicationCommandOptionType.Attachment,
          );
          if (options[index]) {
            source = options[index].attachment;
          }
        } else if (msg && msg.attachments.size) {
          const attachments = [...msg.attachments.values()];
          if (attachments[index]) {
            source = attachments[index];
          }
        }
        break;
      }

      default: {
        break;
      }
    }

    if (source) {
      const storage = parseInt(data.storage, 10);
      const varName = this.evalMessage(data.varName, cache);
      this.storeValue(source, storage, varName, cache);
    }

    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
