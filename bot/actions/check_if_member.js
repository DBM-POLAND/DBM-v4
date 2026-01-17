module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Check If Member",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Conditions",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    const info = [
      "Is Bot?",
      "Is Bannable?",
      "Is Kickable?",
      "Is In Voice Channel?",
      "Is User Manageable?",
      "Is Bot Owner?",
      "Is Muted?",
      "Is Deafened?",
      "Is Command Author?",
      "Is Current Server Owner?",
      "Is Boosting Current Server?",
      "Is in timeout?",
      "Is Online?",
      "Is Idle?",
      "Is DND?",
      "Is Offline?",
      "Is Invisible?",
      "Is Streaming?",
      "Is Playing?",
      "Is Listening?",
      "Is Watching?",
      "Is Competing?",
      "Is Custom Status?",
    ];
    return `${presets.getMemberText(data.member, data.varName)} - ${
      info[parseInt(data.info, 10)]
    }`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/check_if_member.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["member", "varName", "info", "branch"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html() {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<member-input dropdownLabel="Member" selectId="member" variableContainerId="varNameContainer" variableInputId="varName"></member-input>
<br><br><br>
<span class="dbminputlabel">Check If Member</span>
<select id="info" class="round">
  <optgroup label="Default">
    <option value="0" selected>Is Bot?</option>
    <option value="1">Is Bannable?</option>
    <option value="2">Is Kickable?</option>
    <option value="3">Is In Voice Channel?</option>
    <option value="4">Is User Manageable?</option>
    <option value="5">Is Bot Owner?</option>
    <option value="6">Is Muted?</option>
    <option value="7">Is Deafened?</option>
    <option value="8">Is Command Author?</option>
    <option value="9">Is Current Server Owner?</option>
    <option value="10">Is Boosting Current Server?</option>
    <option value="11">Is in timeout?</option>
  </optgroup>
  <optgroup label="Status">
    <option value="12">Is Online?</option>
    <option value="13">Is Idle?</option>
    <option value="14">Is DND?</option>
    <option value="15">Is Offline?</option>
<!--<option value="16">Is Invisible?</option>-->
  </optgroup>
  <optgroup label="Activity">
    <option value="17">Is Streaming?</option>
    <option value="18">Is Playing?</option>
    <option value="19">Is Listening?</option>
    <option value="20">Is Watching?</option>
    <option value="21">Is Competing?</option>
    <option value="22">Is Custom Status?</option>
  </optgroup>
</select>
<br><br>
<hr class="subtlebar">
<br>
<conditional-input id="branch"></conditional-input>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {},

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    const data = cache.actions[cache.index];
    const { Files } = this.getDBM();
    const { ActivityType, PresenceUpdateStatus, User } = require("discord.js");
    const { msg, interaction, server } = cache;
    const memberOrUser = await this.getMemberFromData(
      data.member,
      data.varName,
      cache,
    );
    let member;
    if (memberOrUser instanceof User) {
      try {
        member = server.members.cache.get(memberOrUser.id);
      } catch {
        member = await server.members.fetch(memberOrUser.id);
      }
    } else {
      member = memberOrUser;
    }

    const info = parseInt(data.info, 10);
    let result = false;
    switch (info) {
      case 0:
        // is bot?
        result = member.user.bot;
        break;
      case 1:
        // is banable?
        result = member.bannable;
        break;
      case 2:
        // is kickable?
        result = member.kickable;
        break;
      case 3:
        // is in voice channel?
        result = Boolean(member.voice?.channel);
        break;
      case 4:
        // is user manageable?
        result = member.manageable;
        break;
      case 5:
        // is bot owner?
        const botOwner = Files.data.settings.ownerId;
        if (member.id === botOwner) result = true;
        else result = false;
        break;
      case 6:
        // is muted?
        result = Boolean(member.voice?.mute);
        break;
      case 7:
        // is deafened?
        result = Boolean(member.voice?.deaf);
        break;
      case 8:
        // is command author?
        const commandAuthorId = interaction?.user?.id ?? msg?.author?.id;
        if (member.id === commandAuthorId) result = true;
        else result = false;
        break;
      case 9:
        // is current server owner?
        result = member.id === member.guild?.ownerId;
        break;
      case 10:
        // is boosting current server?
        result = Boolean(member.premiumSince);
        break;
      case 11:
        // is in timeout?
        result = member.isCommunicationDisabled();
        break;
      case 12:
        // is online?
        result = member.presence?.status === PresenceUpdateStatus.Online;
        break;
      case 13:
        // is idle?
        result = member.presence?.status === PresenceUpdateStatus.Idle;
        break;
      case 14:
        // is dnd?
        result = member.presence?.status === PresenceUpdateStatus.DoNotDisturb;
        break;
      case 15:
        // is offline?
        result = member.presence?.status === PresenceUpdateStatus.Offline;
        break;
      case 16:
        // is invisible?
        result = member.presence?.status === PresenceUpdateStatus.Invisible;
        break;
      case 17:
        // is streaming?
        result =
          member.presence?.activities?.some(
            (a) => a.type === ActivityType.Streaming,
          ) ?? false;
        break;
      case 18:
        // is playing?
        result =
          member.presence?.activities?.some(
            (a) => a.type === ActivityType.Playing,
          ) ?? false;
        break;
      case 19:
        // is listening?
        result =
          member.presence?.activities?.some(
            (a) => a.type === ActivityType.Listening,
          ) ?? false;
        break;
      case 20:
        // is watching?
        result =
          member.presence?.activities?.some(
            (a) => a.type === ActivityType.Watching,
          ) ?? false;
        break;
      case 21:
        // is competing?
        result =
          member.presence?.activities?.some(
            (a) => a.type === ActivityType.Competing,
          ) ?? false;
        break;
      case 22:
        // is custom status?
        result =
          member.presence?.activities?.some(
            (a) => a.type === ActivityType.Custom,
          ) ?? false;
        break;
      default:
        // default
        result = false;
        break;
    }
    this.executeResults(result, data.branch, cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod Init
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  modInit(data) {
    this.prepareActions(data.branch?.iftrueActions);
    this.prepareActions(data.branch?.iffalseActions);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
