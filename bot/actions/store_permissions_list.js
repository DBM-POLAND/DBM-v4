module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Store Permissions List",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Lists and Loops",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    return `${data.permissions.length || "0"} Permissions on the List`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/store_permissions_list.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    return [data.varName2, "List"];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["permissions", "storage", "varName2"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<div>
  <p>
    <u>Info:</u><br>
    This action is used to create permission lists which can then be used in other actions...
  </p>
</div>
<br>
<dialog-list id="permissions" fields='["permission"]' saveButtonText="Save Permission" dialogTitle="Permission Info" dialogWidth="360" dialogHeight="240" listLabel="Permissions" listStyle="height: 210px;" itemName="Permission" itemCols="1" itemHeight="20px;" itemTextFunction="glob.formatItemPermission(data)" itemStyle="text-align: left; line-height: 20px;">
    <div style="padding: 16px;"><br><br>
        <span class="dbminputlabel">Select Permission</span>
        <select id="permission" class="round">
            <option value="0">Create Instant Invite</option>
            <option value="1">Kick Members</option>
            <option value="2">Ban Members</option>
            <option value="3">Administrator</option>
            <option value="4">Manage Channels</option>
            <option value="5">Manage Guild</option>
            <option value="6">Add Reactions</option>
            <option value="7">View Audit Log</option>
            <option value="8">Priority Speaker</option>
            <option value="9">Stream</option>
            <option value="10">View Channel</option>
            <option value="11">Send Messages</option>
            <option value="12">Send TTS Messages</option>
            <option value="13">Manage Messages</option>
            <option value="14">Embed Links</option>
            <option value="15">Attach Files</option>
            <option value="16">Read Message History</option>
            <option value="17">Mention Everyone</option>
            <option value="18">Use External Emojis</option>
            <option value="19">View Guild Insights</option>
            <option value="20">Connect</option>
            <option value="21">Speak</option>
            <option value="22">Mute Members</option>
            <option value="23">Deafen Members</option>
            <option value="24">Move Members</option>
            <option value="25">Use VAD</option>
            <option value="26">Change Nickname</option>
            <option value="27">Manage Nicknames</option>
            <option value="28">Manage Roles</option>
            <option value="29">Manage Webhooks</option>
            <option value="30">Manage Emojis & Stickers</option>
            <option value="31">Manage Guild Expressions</option>
            <option value="32">Use Application Commands</option>
            <option value="33">Request To Speak</option>
            <option value="34">Manage Events</option>
            <option value="35">Manage Threads</option>
            <option value="36">Create Public Threads</option>
            <option value="37">Create Private Threads</option>
            <option value="38">Use External Stickers</option>
            <option value="39">Send Messages In Threads</option>
            <option value="40">Use Embedded Activities</option>
            <option value="41">Moderate Members</option>
            <option value="42">View Creator Monetization Analytics</option>
            <option value="43">Use Soundboard</option>
            <option value="44">Create Guild Expressions</option>
            <option value="45">Create Events</option>
            <option value="46">Use External Sounds</option>
            <option value="47">Send Voice Messages</option>
            <option value="48">Send Polls</option>
            <option value="49">Use External Apps</option>
            <option value="50">Pin Messages</option>
            <option value="51">Bypass Slowmode</option>
        </select>
    </div>
</dialog-list>
<br>
<store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const { document, glob } = this;
    glob.formatItemPermission = function (data) {
      const permission = parseInt(data.permission, 10);
      const PERMISSIONS = [
        "Create Instant Invite",
        "Kick Members",
        "Ban Members",
        "Administrator",
        "Manage Channels",
        "Manage Guild",
        "Add Reactions",
        "View Audit Log",
        "Priority Speaker",
        "Stream",
        "View Channel",
        "Send Messages",
        "Send TTS Messages",
        "Manage Messages",
        "Embed Links",
        "Attach Files",
        "Read Message History",
        "Mention Everyone",
        "Use External Emojis",
        "View Guild Insights",
        "Connect",
        "Speak",
        "Mute Members",
        "Deafen Members",
        "Move Members",
        "Use VAD",
        "Change Nickname",
        "Manage Nicknames",
        "Manage Roles",
        "Manage Webhooks",
        "Manage Emojis & Stickers",
        "Manage Guild Expressions",
        "Use Application Commands",
        "Request To Speak",
        "Manage Events",
        "Manage Threads",
        "Create Public Threads",
        "Create Private Threads",
        "Use External Stickers",
        "Send Messages In Threads",
        "Use Embedded Activities",
        "Moderate Members",
        "View Creator Monetization Analytics",
        "Use Soundboard",
        "Create Guild Expressions",
        "Create Events",
        "Use External Sounds",
        "Send Voice Messages",
        "Send Polls",
        "Use External Apps",
        "Pin Messages",
        "Bypass Slowmode",
      ];
      return `${PERMISSIONS[permission]}`;
    };
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  action(cache) {
    const data = cache.actions[cache.index];
    const { PermissionsBitField } = require("discord.js");
    const PERMISSIONS_MAP = [
      PermissionsBitField.Flags.CreateInstantInvite,
      PermissionsBitField.Flags.KickMembers,
      PermissionsBitField.Flags.BanMembers,
      PermissionsBitField.Flags.Administrator,
      PermissionsBitField.Flags.ManageChannels,
      PermissionsBitField.Flags.ManageGuild,
      PermissionsBitField.Flags.AddReactions,
      PermissionsBitField.Flags.ViewAuditLog,
      PermissionsBitField.Flags.PrioritySpeaker,
      PermissionsBitField.Flags.Stream,
      PermissionsBitField.Flags.ViewChannel,
      PermissionsBitField.Flags.SendMessages,
      PermissionsBitField.Flags.SendTTSMessages,
      PermissionsBitField.Flags.ManageMessages,
      PermissionsBitField.Flags.EmbedLinks,
      PermissionsBitField.Flags.AttachFiles,
      PermissionsBitField.Flags.ReadMessageHistory,
      PermissionsBitField.Flags.MentionEveryone,
      PermissionsBitField.Flags.UseExternalEmojis,
      PermissionsBitField.Flags.ViewGuildInsights,
      PermissionsBitField.Flags.Connect,
      PermissionsBitField.Flags.Speak,
      PermissionsBitField.Flags.MuteMembers,
      PermissionsBitField.Flags.DeafenMembers,
      PermissionsBitField.Flags.MoveMembers,
      PermissionsBitField.Flags.UseVAD,
      PermissionsBitField.Flags.ChangeNickname,
      PermissionsBitField.Flags.ManageNicknames,
      PermissionsBitField.Flags.ManageRoles,
      PermissionsBitField.Flags.ManageWebhooks,
      PermissionsBitField.Flags.ManageEmojisAndStickers,
      PermissionsBitField.Flags.ManageGuildExpressions,
      PermissionsBitField.Flags.UseApplicationCommands,
      PermissionsBitField.Flags.RequestToSpeak,
      PermissionsBitField.Flags.ManageEvents,
      PermissionsBitField.Flags.ManageThreads,
      PermissionsBitField.Flags.CreatePublicThreads,
      PermissionsBitField.Flags.CreatePrivateThreads,
      PermissionsBitField.Flags.UseExternalStickers,
      PermissionsBitField.Flags.SendMessagesInThreads,
      PermissionsBitField.Flags.UseEmbeddedActivities,
      PermissionsBitField.Flags.ModerateMembers,
      PermissionsBitField.Flags.ViewCreatorMonetizationAnalytics,
      PermissionsBitField.Flags.UseSoundboard,
      PermissionsBitField.Flags.CreateGuildExpressions,
      PermissionsBitField.Flags.CreateEvents,
      PermissionsBitField.Flags.UseExternalSounds,
      PermissionsBitField.Flags.SendVoiceMessages,
      PermissionsBitField.Flags.SendPolls,
      PermissionsBitField.Flags.UseExternalApps,
      PermissionsBitField.Flags.PinMessages,
      PermissionsBitField.Flags.BypassSlowmode,
    ];
    const result = [];
    for (const p of data.permissions) {
      const permNumber = parseInt(p.permission, 10);
      const permValue = PERMISSIONS_MAP[permNumber];
      result.push(permValue);
    }
    const storage = parseInt(data.storage, 10);
    const varName2 = this.evalMessage(data.varName2, cache);
    this.storeValue(result, storage, varName2, cache);
    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
