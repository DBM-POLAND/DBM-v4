module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Store Server Info",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Server Control",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    const info = [
      "Server Object",
      "Server ID",
      "Server Name",
      "Server Name Acronym",
      "",
      "Server Icon URL",
      "Server Verification Level",
      "Server Default Channel",
      "Server AFK Channel",
      "Server System Channel",
      "Server Default Role",
      "Server Owner Object",
      "Server Bot Member",
      "Server Channels List",
      "Server Roles List",
      "Server Members List",
      "Server Emojis List",
      "Server Member Count",
      "Server Created At",
      "Server AFK Timeout",
      "Server Available",
      "Server Large",
      "Server Joined At",
      "Server Channels Count",
      "Server Emojis Count",
      "Server Embed Enabled",
      "Server Do Not Disturb Members Count",
      "Server Online Members Count",
      "Server Offline Members Count",
      "Server Idle Members Count",
      "Server Bot Count",
      "Server Channels IDs List",
      "Server Roles IDs List",
      "Server Members IDs List",
      "",
      "Server Human Count",
      "",
      "Server Roles Count",
      "Server Text Channels Count",
      "Server Voice Channels Count",
      "Server Verified",
      "Server Bans List",
      "Server Invites List",
      "Server Explicit Content Filter",
      "Server Boosts Count",
      "Server Boost Tier",
      "Server Banner URL",
      "Server Features List",
      "Server Owner ID",
      "Server Vanity URL Code",
      "Server Widget Channel ID",
      "Server Approximate Member Count",
      "Server Approximate Presence Count",
      "Server Description",
      "Server Stickers List",
      "Server Stickers Count",
    ];
    return `${presets.getServerText(data.server, data.varName)} - ${
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/store_server_info.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Unknown Type";
    switch (info) {
      case 0:
        dataType = "Server";
        break;
      case 1:
        dataType = "Server ID";
        break;
      case 2:
      case 3:
      case 5:
        dataType = "Icon URL";
        break;
      case 6:
      case 43:
      case 48:
      case 49:
      case 53:
        dataType = "Text";
        break;
      case 7:
      case 8:
      case 9:
        dataType = "Channel";
        break;
      case 10:
        dataType = "Role";
        break;
      case 11:
      case 12:
        dataType = "Server Member";
        break;
      case 13:
        dataType = "Channels List";
        break;
      case 14:
        dataType = "Roles List";
        break;
      case 15:
        dataType = "Members List";
        break;
      case 16:
        dataType = "Emojis List";
        break;
      case 54:
        dataType = "Stickers List";
        break;
      case 17:
      case 19:
      case 51:
      case 52:
      case 55:
      case 23:
      case 24:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
      case 35:
      case 37:
      case 38:
      case 39:
      case 44:
      case 45:
        dataType = "Number";
        break;
      case 18:
      case 22:
        dataType = "Date";
        break;
      case 20:
      case 21:
      case 25:
      case 40:
        dataType = "Boolean";
        break;
      case 31:
      case 32:
      case 33:
        dataType = "IDs List";
        break;
      case 41:
        dataType = "Bans List";
        break;
      case 42:
        dataType = "Invites List";
        break;
      case 46:
        dataType = "Banner URL";
        break;
      case 47:
        dataType = "Server Features List";
        break;
      case 50:
        dataType = "Channel ID";
        break;
    }
    return [data.varName2, dataType];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["server", "varName", "info", "storage", "varName2"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<server-input dropdownLabel="Source Server" selectId="server" variableContainerId="varNameContainer" variableInputId="varName"></server-input>
<br><br><br>
<div>
	<div style="padding-top: 8px; width: 100%;">
		<span class="dbminputlabel">Source Info</span><br>
		<select id="info" class="round">
            <option value="0">Server Object</options>
            <option value="1">Server ID</options>
            <option value="2">Server Name</options>
            <option value="3">Server Name Acronym</options>
            <option value="17">Server Member Count</options>
       <!-- <option value="4">Server Region (Removed)</options> -->
            <option value="5">Server Icon URL</options>
            <option value="6">Server Verification Level</options>
            <option value="7">Server Default Channel</options>
            <option value="9">Server System Channel</options>
            <option value="43">Server Explicit Content Filter</options>
            <option value="8">Server AFK Channel</options>
            <option value="19">Server AFK Timeout</options>
            <option value="10">Server Default Role</options>
            <option value="48">Server Owner ID</options>
            <option value="11">Server Owner Object</options>
            <option value="12">Server Bot Member</options>
            <option value="18">Server Created At</options>
            <option value="22">Server Joined At</options>
            <option value="20">Server Available</options>
            <option value="21">Server Large</options>
            <option value="40">Server Verified</options>
            <option value="23">Server Channels Count</options>
            <option value="13">Server Channels List</options>
            <option value="31">Server Channels IDs List</options>
            <option value="37">Server Roles Count</options>
            <option value="14">Server Roles List</options>
            <option value="32">Server Roles IDs List</options>
            <option value="30">Server Bot Count</options>
            <option value="35">Server Human Count</options>
            <option value="15">Server Members List</options>
            <option value="33">Server Members IDs List</options>
            <option value="16">Server Emojis List</options>
            <option value="24">Server Emojis Count</options>
            <option value="54">Server Stickers List</options>
            <option value="55">Server Stickers Count</options>
            <option value="25">Server Embed Enabled</options>
            <option value="27">Server Online Members Count</options>
            <option value="29">Server Idle Members Count</options>
            <option value="26">Server Do Not Disturb Members Count</options>
            <option value="28">Server Offline Members Count</options>
            <option value="38">Server Text Channels Count</options>
            <option value="39">Server Voice Channels Count</options>
            <option value="41">Server Bans List</options>
            <option value="42">Server Invites List</options>
            <option value="44">Server Boosts Count</options>
            <option value="45">Server Boost Tier</options>
            <option value="46">Server Banner URL</options>
            <option value="47">Server Features List</options>
            <option value="49">Server Vanity URL Code</options>
            <option value="50">Server Widget Channel ID</options>
            <option value="51">Server Approximate Member Count</options>
            <option value="52">Server Approximate Presence Count</options>
            <option value="53">Server Description</options>
		</select>
	</div>
</div>
<br>
<store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>`
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
    const { PresenceUpdateStatus, ChannelType } = require("discord.js");

    const targetServer = await this.getServerFromData(
      data.server,
      data.varName,
      cache,
    );

    if (!targetServer) {
      return this.callNextAction(cache);
    }

    const fetchMembers = async (withPresences = false) => {
      if (targetServer.memberCount !== targetServer.members.cache.size) {
        await targetServer.members.fetch({ withPresences });
      }
    };

    const info = parseInt(data.info, 10);

    let result;
    switch (info) {
      case 0:
        // server object
        result = targetServer;
        break;
      case 1:
        // server id
        result = targetServer.id;
        break;
      case 2:
        // server name
        result = targetServer.name;
        break;
      case 3:
        // server name acronym
        result = targetServer.nameAcronym;
        break;
      case 4:
        // unknown
        result = "unknown";
        break;
      case 5:
        // server icon url
        result = targetServer.iconURL({
          dynamic: true,
          format: "png",
          size: 4096,
        });
        break;
      case 6:
        // server verification level
        result = targetServer.verificationLevel;
        break;
      case 7:
        // server default channel
        result = targetServer.getDefaultChannel();
        break;
      case 8:
        // server afk channel
        result = targetServer.afkChannel;
        break;
      case 9:
        // server system channel
        result = targetServer.systemChannel;
        break;
      case 10:
        // server default role
        result = targetServer.roles.resolve(targetServer.id);
        break;
      case 11:
        // server owner object
        result = await targetServer.fetchOwner();
        break;
      case 12:
        // server bot member
        result = targetServer.members.me;
        break;
      case 13:
        // server channels list
        result = [...targetServer.channels.cache.values()];
        break;
      case 14:
        // server roles list
        result = [...targetServer.roles.cache.values()];
        break;
      case 15:
        // server members list
        result = [...targetServer.members.cache.values()];
        break;
      case 16:
        // server emojis list
        result = [...targetServer.emojis.cache.values()];
        break;
      case 17:
        // server member count
        result = targetServer.memberCount;
        break;
      case 18:
        // server created at
        result = targetServer.createdAt;
        break;
      case 19:
        // server afk timeout
        result = targetServer.afkTimeout ?? 0;
        break;
      case 20:
        // server available
        result = targetServer.available;
        break;
      case 21:
        // server large
        result = targetServer.large;
        break;
      case 22:
        // server joined at
        result = targetServer.joinedAt;
        break;
      case 23:
        // server channels count
        result = targetServer.channels.cache.size;
        break;
      case 24:
        // server emojis count
        result = targetServer.emojis.cache.size;
        break;
      case 25:
        // server embed enabled
        result = !!targetServer.widgetEnabled;
        break;
      case 26:
        // server do not disturb members count
        await fetchMembers(true);
        result = targetServer.members.cache.filter(
          (m) => m.presence?.status === PresenceUpdateStatus.DoNotDisturb,
        ).size;
        break;
      case 27:
        // server online members count
        await fetchMembers(true);
        result = targetServer.members.cache.filter(
          (m) => m.presence?.status === PresenceUpdateStatus.Online,
        ).size;
        break;
      case 28:
        // server offline members count
        await fetchMembers(true);
        result = targetServer.members.cache.filter(
          (m) =>
            !m.presence || m.presence.status === PresenceUpdateStatus.Offline,
        ).size;
        break;
      case 29:
        // server idle members count
        await fetchMembers(true);
        result = targetServer.members.cache.filter(
          (m) => m.presence?.status === PresenceUpdateStatus.Idle,
        ).size;
        break;
      case 30:
        // server bot count
        result = targetServer.members.cache.filter((m) => m.user?.bot).size;
        break;
      case 31:
        // server channels ids list
        result = [...targetServer.channels.cache.keys()];
        break;
      case 32:
        // server roles ids list
        result = [...targetServer.roles.cache.keys()];
        break;
      case 33:
        // server members ids list
        await fetchMembers();
        result = [...targetServer.members.cache.keys()];
        break;
      case 35:
        // server human count
        try {
          await fetchMembers();
          result = targetServer.members.cache.filter((m) => !m.user?.bot).size;
        } catch {
          result =
            targetServer.approximateMemberCount -
            targetServer.approximatePresenceCount;
        }
        break;
      case 37:
        // server roles count
        result = targetServer.roles.cache.size;
        break;
      case 38:
        // server text channels count
        result = targetServer.channels.cache.filter(
          (c) =>
            c.type === ChannelType.GuildText ||
            c.type === ChannelType.GuildAnnouncement,
        ).size;
        break;
      case 39:
        // server voice channels count
        result = targetServer.channels.cache.filter(
          (c) => c.type === ChannelType.GuildVoice,
        ).size;
        break;
      case 40:
        // server verified
        result = targetServer.verified;
        break;
      case 41:
        // server bans list
        const bans = await targetServer.bans.fetch();
        result = [...bans.values()];
        break;
      case 42:
        // server invites list
        const invites = await targetServer.invites.fetch();
        result = [...invites.values()];
        break;
      case 43:
        // server explicit content filter
        result = targetServer.explicitContentFilter;
        break;
      case 44:
        // server boosts count
        result = targetServer.premiumSubscriptionCount ?? 0;
        break;
      case 45:
        // server boost tier
        result = targetServer.premiumTier;
        break;
      case 46:
        // server banner url
        result = targetServer.bannerURL({ format: "png", size: 4096 });
        break;
      case 47:
        // server features list
        result = targetServer.features;
        break;
      case 48:
        // server owner id
        result = targetServer.ownerId;
        break;
      case 49:
        // server vanity url code
        result = targetServer.vanityURLCode;
        break;
      case 50:
        // server widget channel id
        result = targetServer.widgetChannelId;
        break;
      case 51:
        // server approximate member count
        result =
          targetServer.approximateMemberCount ?? targetServer.memberCount;
        break;
      case 52:
        // server approximate presence count
        result = targetServer.approximatePresenceCount ?? 0;
        break;
      case 53:
        // server description
        result = targetServer.description ?? "";
        break;
      case 54:
        // server stickers list
        result = [...targetServer.stickers.cache.values()];
        break;
      case 55:
        // server stickers count
        result = targetServer.stickers.cache.size;
        break;
      default:
        break;
    }

    if (result !== undefined) {
      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName2, cache);
      this.storeValue(result, storage, varName2, cache);
    }

    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
