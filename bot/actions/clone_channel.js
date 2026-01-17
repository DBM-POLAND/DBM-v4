module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Clone Channel",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Channel Control",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    return `Clone Channel: ${presets.getChannelText(
      data.storage,
      data.varName,
    )}`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/clone_channel.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    if (parseInt(data.storage2, 10) !== varType) return;
    return [data.varName2, "Channel"];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "storage",
    "varName",
    "categoryID",
    "position",
    "permission",
    "info",
    "topic",
    "slowmode",
    "nsfw",
    "bitrate",
    "userLimit",
    "storage2",
    "varName2",
  ],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html() {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<div style="padding-top: 8px;">
  <channel-input dropdownLabel="Source Channel" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></channel-input>
</div>
<br><br><br>
<div style="padding-top: 8px;">
  <div style="float: left; width: 35%;">
    <span class="dbminputlabel">Category ID</span>
    <input id="categoryID" class="round" type="text" placeholder="Leave blank to clone"><br>
  </div>
  <div style="float: right; width: 60%;">
    <span class="dbminputlabel">Position</span>
    <input id="position" class="round" type="text" placeholder="Leave blank to clone"><br>
  </div>
</div>
<br><br><br>
<div>
  <div style="float: left; width: 35%;">
    <span class="dbminputlabel">Clone Permission</span>
    <select id="permission" class="round">
      <option value="0">False</option>
      <option value="1" selected>True</option>
    </select><br>
  </div>
  <div style="float: right; width: 60%;">
    <span class="dbminputlabel">Channel Type</span>
    <select id="info" class="round" onchange="glob.channeltype(this, 'option')">
      <option value="0" selected>Automatic (Clone Everything)</option>
      <option value="1">Text Channel</option>
      <option value="2">Voice Channel</option>
    </select><br>
  </div>
</div>
<br><br><br>
<div id="text" style="display: none">
  <div style="float: left; width: 28%;">
    <span class="dbminputlabel">Clone Topic?</span>
    <select id="topic" class="round">
      <option value="0">False</option>
      <option value="1" selected>True</option>
    </select><br>
  </div>
  <div style="padding-left: 5%; float: left; width: 33%;">
    <span class="dbminputlabel">Clone NSFW?</span>
    <select id="nsfw" class="round">
      <option value="0">False</option>
      <option value="1" selected>True</option>
    </select><br>
  </div>
  <div style="padding-left: 5%; float: left; width: 34%;">
    <span class="dbminputlabel">Clone Slow Mode?</span>
    <select id="slowmode" class="round">
      <option value="0">False</option>
      <option value="1" selected>True</option>
    </select><br>
  </div>
</div>
<div id="voice" style="display: none;">
  <div style="float: left; width: 35%;">
    <span class="dbminputlabel">Clone User Limit?</span>
    <select id="userLimit" class="round">
      <option value="0">False</option>
      <option value="1" selected>True</option>
    </select><br>
  </div>
  <div style="float: right; width: 60%;">
    <span class="dbminputlabel">Clone Bitrate?</span>
    <select id="bitrate" class="round">
      <option value="0">False</option>
      <option value="1" selected>True</option>
    </select><br>
  </div>
</div>
<div style="padding-top: 8px;">
  <store-in-variable allowNone dropdownLabel="Store In" selectId="storage2" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>
</div>`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const { glob, document } = this;

    glob.channeltype = function channeltype(event) {
      if (event.value === "0") {
        document.getElementById("text").style.display = "none";
        document.getElementById("voice").style.display = "none";
      } else if (event.value === "1") {
        document.getElementById("text").style.display = null;
        document.getElementById("voice").style.display = "none";
      } else if (event.value === "2") {
        document.getElementById("text").style.display = "none";
        document.getElementById("voice").style.display = null;
      }
    };
    glob.channeltype(document.getElementById("info"));
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    const data = cache.actions[cache.index];
    const { ChannelType } = require("discord.js");
    const channel = await this.getChannelFromData(
      data.storage,
      data.varName,
      cache,
    );

    if (!channel) return this.callNextAction(cache);

    const parentId = data.categoryID
      ? parseInt(this.evalMessage(data.categoryID, cache), 10)
      : channel.parentId;
    const options = {
      permissionOverwrites:
        data.permission === "1" ? channel.permissionOverwrites?.cache : [],
      parent: channel.guild.channels.cache.get(parentId),
      type: channel.type,
      position:
        parseInt(this.evalMessage(data.position, cache), 10) ??
        channel.position,
      nsfw: data.nsfw === "1" ? channel.nsfw : false,
      rateLimitPerUser: data.slowmode === "1" ? channel.rateLimitPerUser : 0,
      defaultReactionEmoji: channel.defaultReactionEmoji,
    };

    if (channel.type === ChannelType.GuildVoice) {
      Object.assign(options, {
        userLimit: data.userLimit === "1" ? channel.userLimit : 0,
        bitrate: data.bitrate === "1" ? channel.bitrate : undefined,
        rtcRegion: channel.rtcRegion,
        videoQualityMode: channel.videoQualityMode,
      });
    } else if (channel.type === ChannelType.GuildText) {
      Object.assign(options, {
        topic: data.topic === "1" ? channel.topic : undefined,
        defaultAutoArchiveDuration: channel.defaultAutoArchiveDuration,
      });
    }

    try {
      await channel.guild.channels.create({
        name: channel.name,
        type: options.type,
        parent: options.parent?.id ?? null,
        permissionOverwrites: options.permissionOverwrites?.map((o) =>
          o.toJSON(),
        ),
        position: options.position,
        nsfw: options.nsfw,
        rateLimitPerUser: options.rateLimitPerUser,
        topic: options.topic,
        userLimit: options.userLimit,
        bitrate: options.bitrate,
        rtcRegion: options.rtcRegion,
        videoQualityMode: options.videoQualityMode,
        defaultAutoArchiveDuration: options.defaultAutoArchiveDuration,
      });
      const varName2 = this.evalMessage(data.varName2, cache);
      const storage2 = parseInt(data.storage2, 10);
      this.storeValue(channel, storage2, varName2, cache);
    } catch (err) {
      this.displayError(data, cache, err);
    }
    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
