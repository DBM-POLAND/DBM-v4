module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Store Member Info",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Member Control",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    const infoMap = {
      0: "Member Object",
      5: "Profile Accent Color",
      10: "Avatar Decoration Type",
      15: "Avatar Decoration Value",
      20: "Avatar Decoration Color",
      25: "Banner URL",
      30: "Is Bot?",
      35: "Client Object",
      40: "Collectibles Array/Object",
      45: "Created At",
      50: "Created Timestamp",
      55: "Avatar URL",
      60: "Discriminator",
      65: "Display Name",
      70: "DM Channel Object",
      75: "Flags",
      80: "Global Name",
      85: "Hex Accent Color",
      90: "Member ID",
      95: "Activities Array",
      100: "Client Status Object",
      105: "Status",
      110: "Partial",
      115: "Primary Guild Object (Experimental)",
      120: "System",
      125: "Tag",
      130: "Username",
      135: "Server Avatar URL",
      140: "Is Bannable?",
      145: "Communication Disabled Until",
      150: "Communication Disabled Until Timestamp",
      155: "Display Color",
      160: "Display Hex Color",
      165: "Guild Object",
      170: "Joined At",
      175: "Joined Timestamp",
      180: "Kickable",
      185: "Manageable",
      190: "Moderatable",
      195: "Nickname",
      200: "Pending",
      205: "Permissions Object",
      210: "Permissions Array",
      215: "Boosting Since",
      220: "Boosting Since Timestamp",
      225: "Is Owner?",
      230: "Is Muted?",
      235: "Is Deafened?",
      240: "Voice Object",
      245: "Roles Object",
      250: "Roles Collection",
      255: "Highest Role Object",
      260: "Highest Role Color",
      265: "Highest Role Name",
      270: "Highest Role ID",
      275: "Roles Amount",
    };
    const infoText = infoMap[parseInt(data.info, 10)] || "Unknown Info";
    return `${presets.getMemberText(data.member, data.varName2)} - ${infoText}`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/store_member_info.js",
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
        dataType = "Member Object";
        break;
      case 35:
        dataType = "Client Object";
        break;
      case 70:
        dataType = "Channel Object";
        break;
      case 100:
        dataType = "Object";
        break;
      case 110:
        dataType = "Boolean";
        break;
      case 115:
        dataType = "Guild Object";
        break;
      case 10:
      case 15:
      case 20:
      case 60:
      case 65:
      case 80:
      case 90:
      case 105:
      case 125:
      case 130:
        dataType = "Text";
        break;
      case 30:
      case 120:
        dataType = "Boolean";
        break;
      case 5:
      case 85:
        dataType = "Color";
        break;
      case 45:
      case 170:
      case 145:
      case 215:
        dataType = "Date";
        break;
      case 50:
      case 150:
      case 175:
      case 220:
        dataType = "Timestamp";
        break;
      case 40:
        dataType = "Array/Object";
        break;
      case 75:
      case 95:
      case 210:
        dataType = "Array";
        break;
      case 25:
      case 55:
      case 135:
        dataType = "Image URL";
        break;
      case 140:
      case 180:
      case 185:
      case 190:
      case 200:
      case 225:
      case 230:
      case 235:
        dataType = "Boolean";
        break;
      case 155:
        dataType = "Number";
        break;
      case 160:
      case 260:
        dataType = "Color";
        break;
      case 165:
        dataType = "Guild Object";
        break;
      case 205:
        dataType = "Permissions Object";
        break;
      case 240:
        dataType = "Voice Object";
        break;
      case 245:
      case 250:
        dataType = "Roles Object";
        break;
      case 255:
        dataType = "Role Object";
        break;
      case 265:
      case 270:
      case 275:
        dataType = "Text/Number";
        break;
      default:
        dataType = "Unknown Type";
        break;
    }
    return [data.varName3, dataType];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "server",
    "varName",
    "member",
    "varName2",
    "info",
    "storage",
    "varName3",
  ],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<div id="serverInputWrapper">
 <server-input dropdownLabel="Server" selectId="server" variableContainerId="varNameContainer" variableInputId="varName"></server-input>
</div>

<br><br><br>

<member-input dropdownLabel="Source" selectId="member" variableContainerId="varNameContainer2" variableInputId="varName2"></member-input>

<br><br><br><br>

<span class="dbminputlabel">Source Info</span>
<select id="info" class="round">
  <optgroup label="Global Info (User)">
   <option value="0" selected>Member Object</option>
   <option value="5">Profile Accent Color</option>
   <option value="10">Avatar Decoration Type</option>
   <option value="15">Avatar Decoration Value</option>
   <option value="20">Avatar Decoration Color</option>
   <option value="25">Banner URL</option>
   <option value="30">Is Bot?</option>
   <option value="35">Client Object</option>
   <option value="40">Collectibles Array/Object</option>
   <option value="45">Created At</option>
   <option value="50">Created Timestamp</option>
   <option value="55">Avatar URL</option>
   <option value="60">Discriminator</option>
   <option value="65">Display Name</option>
   <option value="70">DM Channel Object</option>
   <option value="75">Flags</option>
   <option value="80">Global Name</option>
   <option value="85">Hex Accent Color</option>
   <option value="90">Member ID</option>
   <option value="95">Activities Array</option>
   <option value="100">Client Status Object</option>
   <option value="105">Status</option>
   <option value="110">Partial</option>
   <option value="115">Primary Guild Object (Experimental)</option>
   <option value="120">System</option>
   <option value="125">Tag</option>
   <option value="130">Username</option>
  </optgroup>
  <optgroup label="Server Info (GuildMember)">
   <option value="135">Server Avatar URL</option>
   <option value="140">Is Bannable?</option>
   <option value="145">Communication Disabled Until</option>
   <option value="150">Communication Disabled Until Timestamp</option>
   <option value="155">Display Color</option>
   <option value="160">Display Hex Color</option>
   <option value="165">Guild Object</option>
   <option value="170">Joined At</option>
   <option value="175">Joined Timestamp</option>
   <option value="180">Kickable</option>
   <option value="185">Manageable</option>
   <option value="190">Moderatable</option>
   <option value="195">Nickname</option>
   <option value="200">Pending</option>
   <option value="205">Permissions Object</option>
   <option value="210">Permissions Array</option>
   <option value="215">Boosting Since</option>
   <option value="220">Boosting Since Timestamp</option>
   <option value="225">Is Owner?</option>
   <option value="230">Is Muted?</option>
   <option value="235">Is Deafened?</option>
   <option value="240">Voice Object</option>
   <option value="245">Roles Object</option>
   <option value="250">Roles Collection</option>
   <option value="255">Highest Role Object</option>
   <option value="260">Highest Role Color</option>
   <option value="265">Highest Role Name</option>
   <option value="270">Highest Role ID</option>
   <option value="275">Roles Amount</option>
  </optgroup>
</select>

<br><br>

<store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer3" variableInputId="varName3"></store-in-variable>`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const infoSelect = document.getElementById("info");
    const wrapper = document.getElementById("serverInputWrapper");
    function updateWrapper() {
      const value = parseInt(infoSelect.value, 10);
      if (value >= 135 && value <= 275) {
        wrapper.style.pointerEvents = "auto";
        wrapper.style.opacity = "1";
      } else {
        wrapper.style.pointerEvents = "none";
        wrapper.style.opacity = "0.5";
      }
    }
    infoSelect.addEventListener("change", updateWrapper);
    updateWrapper();
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Imports
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const data = cache.actions[cache.index];
    const { PrintError, MsgType } = this.getDBM();

    const server = await this.getServerFromData(
      data.server,
      data.varName,
      cache,
    );
    const member = await this.getMemberFromData(
      data.member,
      data.varName2,
      cache,
    );
    const info = parseInt(data.info, 10);
    const user = member.user || member;
    let guildMember = member;
    if (!member.guild && server) {
      guildMember = await server.members.fetch(member.id).catch(() => null);
    }

    if (!server) {
      PrintError(MsgType.SERVER_NOT_FOUND, server);
      this.callNextAction(cache);
      return;
    }
    if (!member) {
      PrintError(MsgType.MEMBER_NOT_FOUND, member);
      this.callNextAction(cache);
      return;
    }

    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Store Member Info
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    let result;
    switch (info) {
      // Global Info
      case 0: // Member
        result = member;
        break;
      case 5: // Profile Accent Color
        result = user.accentColor;
        break;
      case 10: // Avatar Decoration Type
        result = user.avatarDecoration?.type ?? null;
        break;
      case 15: // Avatar Decoration Value
        result = user.avatarDecoration?.value ?? null;
        break;
      case 20: // Avatar Decoration Color
        result = user.avatarDecoration?.color ?? null;
        break;
      case 25: // Banner URL
        result =
          user.bannerURL({
            format: "png",
            dynamic: true,
            size: 4096,
          }) ?? null;
        break;
      case 30: // Is Bot?
        result = user.bot;
        break;
      case 35: // Client Object
        result = user.client;
        break;
      case 40: // Collectibles
        result = user.collectibles ?? null;
        break;
      case 45: // Created At
        result = user.createdAt;
        break;
      case 50: // Created Timestamp
        result = user.createdTimestamp;
        break;
      case 55: // Avatar
        result = user.displayAvatarURL({
          format: "png",
          dynamic: true,
          size: 4096,
        });
        break;
      case 60: // Discriminator
        result = user.discriminator;
        break;
      case 65: // Display Name
        result = member.displayName;
        break;
      case 70: // DM Channel
        result = await user.createDM();
        break;
      case 75: // Flags
        result = user.flags?.toArray() ?? [];
        break;
      case 80: // Global Name
        result = user.globalName ?? null;
        break;
      case 85: // Hex Accent Color
        result = user.hexAccentColor ?? null;
        break;
      case 90: // Member ID
        result = user.id;
        break;
      case 95: // Activities
        result = user.presence?.activities ?? [];
        break;
      case 100: // Client Status
        result = user.presence?.clientStatus ?? null;
        break;
      case 105: // Status
        result = user.presence?.status ?? null;
        break;
      case 110: // Partial
        result = user.partial;
        break;
      case 115: // Primary Guild
        result = user.primaryGuild ?? null;
        break;
      case 120: // System
        result = user.system;
        break;
      case 125: // Tag
        result = user.tag;
        break;
      case 130: // Username
        result = user.username;
        break;
      // Server Info
      case 135: // Server Avatar URL
        result =
          guildMember.displayAvatarURL({
            format: "png",
            dynamic: true,
            size: 4096,
          }) ?? null;
        break;
      case 140: // Is Bannable?
        result = guildMember.bannable;
        break;
      case 145: // Communication Disabled Until
        result = guildMember.communicationDisabledUntil;
        break;
      case 150: // Communication Disabled Until Timestamp
        result = guildMember.communicationDisabledUntilTimestamp;
        break;
      case 155: // Display Color
        result = guildMember.displayColor;
        break;
      case 160: // Display Hex Color
        result = guildMember.displayHexColor;
        break;
      case 165: // Guild Object
        result = guildMember.guild;
        break;
      case 170: // Joined At
        result = guildMember.joinedAt;
        break;
      case 175: // Joined Timestamp
        result = guildMember.joinedTimestamp;
        break;
      case 180: // Kickable
        result = guildMember.kickable;
        break;
      case 185: // Manageable
        result = guildMember.manageable;
        break;
      case 190: // Moderatable
        result = guildMember.moderatable;
        break;
      case 195: // Nickname
        result = guildMember.nickname ?? null;
        break;
      case 200: // Pending
        result = guildMember.pending;
        break;
      case 205: // Permissions Object
        result = guildMember.permissions;
        break;
      case 210: // Permissions Array
        result = guildMember.permissions.toArray();
        break;
      case 215: // Boosting Since
        result = guildMember.premiumSince;
        break;
      case 220: // Boosting Since Timestamp
        result = guildMember.premiumSinceTimestamp;
        break;
      case 225: // Is Owner?
        result = guildMember.id === guildMember.guild.ownerId;
        break;
      case 230: // Is Muted?
        result =
          guildMember.communicationDisabledUntil &&
          guildMember.communicationDisabledUntil > new Date();
        break;
      case 235: // Is Deafened?
        result = guildMember.voice?.deaf ?? false;
        break;
      case 240: // Voice Object
        result = guildMember.voice ?? null;
        break;
      case 245: // Roles Object
        result = guildMember.roles.cache;
        break;
      case 250: // Roles Collection
        result = guildMember.roles.cache;
        break;
      case 255: // Highest Role Object
        result = guildMember.roles.highest;
        break;
      case 260: // Highest Role Color
        result = guildMember.roles.highest.color;
        break;
      case 265: // Highest Role Name
        result = guildMember.roles.highest.name;
        break;
      case 270: // Highest Role ID
        result = guildMember.roles.highest.id;
        break;
      case 275: // Roles Amount
        result = guildMember.roles.cache.size;
        break;
      default:
        break;
    }

    if (result !== undefined) {
      const storage = parseInt(data.storage, 10);
      const varName3 = this.evalMessage(data.varName3, cache);
      this.storeValue(result, storage, varName3, cache);
    }
    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
