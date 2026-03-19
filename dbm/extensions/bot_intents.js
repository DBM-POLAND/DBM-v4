//---------------------------------------------------------------------
// Defining global array of intents so they are not repeated later on.
//---------------------------------------------------------------------

const PRIVILEGED = ["GuildPresences", "GuildMembers", "MessageContent"];
const INTENTS = [
  "Guilds",
  "GuildMembers",
  "GuildModeration",
  "GuildBans",
  "GuildExpressions",
  "GuildEmojisAndStickers",
  "GuildIntegrations",
  "GuildWebhooks",
  "GuildInvites",
  "GuildVoiceStates",
  "GuildPresences",
  "GuildMessages",
  "GuildMessageReactions",
  "GuildMessageTyping",
  "DirectMessages",
  "DirectMessageReactions",
  "DirectMessageTyping",
  "MessageContent",
  "GuildScheduledEvents",
  "AutoModerationConfiguration",
  "AutoModerationExecution",
  "GuildMessagePolls",
  "DirectMessagePolls",
];

module.exports = {
  //---------------------------------------------------------------------
  // Editor Extension Name
  //---------------------------------------------------------------------

  name: "Bot Intents",

  //---------------------------------------------------------------------
  // Is Editor Extension
  //---------------------------------------------------------------------

  isEditorExtension: true,

  //---------------------------------------------------------------------
  // Save Button Text
  //---------------------------------------------------------------------

  saveButtonText: "Save Intents",

  //---------------------------------------------------------------------
  // Extension Fields
  //---------------------------------------------------------------------

  fields: [],

  //---------------------------------------------------------------------
  // Default Fields
  //---------------------------------------------------------------------

  defaultFields: {
    intents: -2,
  },

  //---------------------------------------------------------------------
  // Extension Dialog Size
  //---------------------------------------------------------------------

  size: function () {
    return { width: 550, height: 480 };
  },

  //---------------------------------------------------------------------
  // Extension HTML
  //---------------------------------------------------------------------

  html: function (data) {
    if (data.intents === null || data.intents === undefined) {
      data.intents = -2;
    }
    let intents = 0;
    if (Array.isArray(data.intents)) {
      intents = data.intents.reduce((mask, name) => {
        const i = INTENTS.indexOf(name);
        if (i !== -1) mask |= 1 << i;
        return mask;
      }, 0);
    } else if (typeof data.intents === "number") {
      if (data.intents === -1) {
        intents = (1 << INTENTS.length) - 1;
      } else if (data.intents === -2) {
        intents = PRIVILEGED.reduce(
          (mask, name) => mask | (1 << INTENTS.indexOf(name)),
          0
        );
      } else if (data.intents >= 0) {
        intents = data.intents;
      }
    }

    return `
		<div style="padding: 10px 10px 10px 10px;">
			<input type="radio" id="All" name="RatioButton" value="All" ${
        data.intents === -1 ? "checked" : ""
      }>
			<label for="All">All Intents</label><br>

      <input type="radio" id="Privileged" name="RatioButton" value="Privileged" ${
        data.intents === -2 ? "checked" : ""
      }>
			<label for="Privileged">Privileged***</label><br>

			<input type="radio" id="NonPrivileged" name="RatioButton" value="NonPrivileged" ${
        data.intents === -3 ? "checked" : ""
      }>
			<label for="NonPrivileged">Non-Privileged</label><br>

			<input type="radio" id="Custom" name="RatioButton" value="Custom" ${
        Array.isArray(data.intents) ? "checked" : ""
      }>
			<label for="Custom">Custom</label><br>

      <br>
			<hr>
      <br>

    <div style="display: flex; gap: 20px;">
     <div style="flex: 1;">
     
			<input type="checkbox" id="Guilds" name="Guilds" value="Guilds" ${
        intents & (1 << 0) ? "checked" : ""
      }><label for="Guilds">Guilds</label><br>
      <input type="checkbox" id="GuildMembers" name="GuildMembers" value="GuildMembers" ${
        intents & (1 << 1) ? "checked" : ""
      }><label for="GuildMembers">Guild Members***</label><br>
      <input type="checkbox" id="GuildBans" name="GuildBans" value="GuildBans" ${
        intents & (1 << 2) ? "checked" : ""
      }><label for="GuildBans">Guild Bans</label><br>
      <input type="checkbox" id="GuildEmojisAndStickers" name="GuildEmojisAndStickers" value="GuildEmojisAndStickers" ${
        intents & (1 << 3) ? "checked" : ""
      }><label for="GuildEmojisAndStickers">Guild Emojis & Stickers</label><br>
      <input type="checkbox" id="GuildIntegrations" name="GuildIntegrations" value="GuildIntegrations" ${
        intents & (1 << 4) ? "checked" : ""
      }><label for="GuildIntegrations">Guild Integrations</label><br>
      <input type="checkbox" id="GuildWebhooks" name="GuildWebhooks" value="GuildWebhooks" ${
        intents & (1 << 5) ? "checked" : ""
      }><label for="GuildWebhooks">Guild Webhooks</label><br>
      <input type="checkbox" id="GuildInvites" name="GuildInvites" value="GuildInvites" ${
        intents & (1 << 6) ? "checked" : ""
      }><label for="GuildInvites">Guild Invites</label><br>
      <input type="checkbox" id="GuildVoiceStates" name="GuildVoiceStates" value="GuildVoiceStates" ${
        intents & (1 << 7) ? "checked" : ""
      }><label for="GuildVoiceStates">Guild Voice States</label><br>
      <input type="checkbox" id="GuildPresences" name="GuildPresences" value="GuildPresences" ${
        intents & (1 << 8) ? "checked" : ""
      }><label for="GuildPresences">Guild Presences***</label><br>
      <input type="checkbox" id="GuildMessages" name="GuildMessages" value="GuildMessages" ${
        intents & (1 << 9) ? "checked" : ""
      }><label for="GuildMessages">Guild Messages</label><br>
      <input type="checkbox" id="GuildMessageReactions" name="GuildMessageReactions" value="GuildMessageReactions" ${
        intents & (1 << 10) ? "checked" : ""
      }><label for="GuildMessageReactions">Guild Message Reactions</label><br>
      <input type="checkbox" id="GuildMessageTyping" name="GuildMessageTyping" value="GuildMessageTyping" ${
        intents & (1 << 11) ? "checked" : ""
      }><label for="GuildMessageTyping">Guild Message Typing</label>
     </div>
     <div style="flex: 1;">
     <input type="checkbox" id="DirectMessages" name="DirectMessages" value="DirectMessages" ${
       intents & (1 << 12) ? "checked" : ""
     }><label for="DirectMessages">Direct Messages</label><br>
      <input type="checkbox" id="DirectMessageReactions" name="DirectMessageReactions" value="DirectMessageReactions" ${
        intents & (1 << 13) ? "checked" : ""
      }><label for="DirectMessageReactions">Direct Message Reactions</label><br>
      <input type="checkbox" id="DirectMessageTyping" name="DirectMessageTyping" value="DirectMessageTyping" ${
        intents & (1 << 14) ? "checked" : ""
      }><label for="DirectMessageTyping">Direct Message Typing</label><br>
      <input type="checkbox" id="MessageContent" name="MessageContent" value="MessageContent" ${
        intents & (1 << 15) ? "checked" : ""
      }><label for="MessageContent">Message Content***</label><br>
      <input type="checkbox" id="GuildScheduledEvents" name="GuildScheduledEvents" value="GuildScheduledEvents" ${
        intents & (1 << 16) ? "checked" : ""
      }><label for="GuildScheduledEvents">Guild Scheduled Events</label><br>
      <input type="checkbox" id="AutoModerationConfiguration" name="AutoModerationConfiguration" value="AutoModerationConfiguration" ${
        intents & (1 << 17) ? "checked" : ""
      }><label for="AutoModerationConfiguration">Auto Moderation Configuration</label><br>
      <input type="checkbox" id="AutoModerationExecution" name="AutoModerationExecution" value="AutoModerationExecution" ${
        intents & (1 << 18) ? "checked" : ""
      }><label for="AutoModerationExecution">Auto Moderation Execution</label><br>
      <input type="checkbox" id="GuildMessagePolls" name="GuildMessagePolls" value="GuildMessagePolls" ${
        intents & (1 << 19) ? "checked" : ""
      }><label for="GuildMessagePolls">Guild Message Polls</label><br>
      <input type="checkbox" id="DirectMessagePolls" name="DirectMessagePolls" value="DirectMessagePolls" ${
        intents & (1 << 20) ? "checked" : ""
      }><label for="DirectMessagePolls">Direct Message Polls</label><br>
     </div>
    </div>

      <br>
			<hr>
      <br>

			<label>*** These require your bot to have them enabled in the developer portal. Furthermore, they can only be enabled if your bot is in less than 100 servers or is whitelisted. If you enable them without turning them on in the portal, your bot will crash!</label>
		</div>`;
  },

  //---------------------------------------------------------------------
  // Extension Dialog Init Code
  //---------------------------------------------------------------------

  init: function (document, globalObject) {
    const data = globalObject.data;
    function enableAll(enable) {
      for (let i = 0; i < INTENTS.length; i++) {
        const el = document.getElementById(INTENTS[i]);
        if (el) el.disabled = !enable;
      }
    }
    const allRadio = document.getElementById("All");
    if (allRadio) {
      allRadio.onclick = function () {
        enableAll(true);
        for (let i = 0; i < INTENTS.length; i++) {
          const el = document.getElementById(INTENTS[i]);
          if (el) el.checked = true;
        }
        enableAll(false);
      };
    }
    const privRadio = document.getElementById("Privileged");
    if (privRadio) {
      privRadio.onclick = function () {
        enableAll(true);
        for (let i = 0; i < INTENTS.length; i++) {
          const el = document.getElementById(INTENTS[i]);
          if (el) el.checked = PRIVILEGED.indexOf(INTENTS[i]) !== -1;
        }
        enableAll(false);
      };
    }
    const nonPrivRadio = document.getElementById("NonPrivileged");
    if (nonPrivRadio) {
      nonPrivRadio.onclick = function () {
        enableAll(true);
        for (let i = 0; i < INTENTS.length; i++) {
          const el = document.getElementById(INTENTS[i]);
          if (el) el.checked = PRIVILEGED.indexOf(INTENTS[i]) === -1;
        }
        enableAll(false);
      };
    }
    const customRadio = document.getElementById("Custom");
    if (customRadio) {
      customRadio.onclick = function () {
        enableAll(true);
        let mask = 0;
        if (Array.isArray(data.intents)) {
          mask = data.intents.reduce((m, name) => {
            const i = INTENTS.indexOf(name);
            if (i !== -1) m |= 1 << i;
            return m;
          }, 0);
        } else if (typeof data.intents === "number" && data.intents >= 0) {
          mask = data.intents;
        }

        for (let i = 0; i < INTENTS.length; i++) {
          const el = document.getElementById(INTENTS[i]);
          if (el) el.checked = !!(mask & (1 << i));
        }
      };
    }
    if (allRadio && allRadio.checked) allRadio.onclick();
    else if (privRadio && privRadio.checked) privRadio.onclick();
    else if (nonPrivRadio && nonPrivRadio.checked) nonPrivRadio.onclick();
    else if (customRadio && customRadio.checked) customRadio.onclick();
    else {
      if (customRadio) customRadio.onclick();
    }
  },

  //---------------------------------------------------------------------
  // Extension Dialog Close Code
  //---------------------------------------------------------------------

  close: function (document, data, globalObject) {
    const selectedMode = document.querySelector(
      "input[name='RatioButton']:checked"
    ).value;
    if (selectedMode === "All") {
      data.intents = -1;
      return;
    }
    if (selectedMode === "Privileged") {
      data.intents = -2;
      return;
    }
    if (selectedMode === "NonPrivileged") {
      data.intents = -3;
      return;
    }
    const selectedIntents = [];
    INTENTS.forEach((name) => {
      const cb = document.getElementById(name);
      if (cb && cb.checked) selectedIntents.push(name);
    });
    data.intents = selectedIntents;
  },

  //---------------------------------------------------------------------
  // Editor Extension Bot Mod
  //---------------------------------------------------------------------

  mod: function (DBM) {
    DBM.Bot.intents = function () {
      const intentData = DBM.Files?.data.settings?.["Bot Intents"];
      const intents = intentData?.customData?.["Bot Intents"]?.intents;
      if (!intentData || typeof intents === "undefined")
        return DBM.Bot.NON_PRIVILEGED_INTENTS; // Non-Privileged
      if (intents === -1) {
        return DBM.Bot.ALL_INTENTS; // All Intents
      }
      if (intents === -2) {
        return DBM.Bot.PRIVILEGED_INTENTS; // Privileged***
      }
      if (intents === -3) {
        return DBM.Bot.NON_PRIVILEGED_INTENTS; // Non-Privileged
      } else {
        return intents; // Custom
      }
    };
  },
};
