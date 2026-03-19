module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Create Forum Channel",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Channel Control",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    return `${data.channelName}`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/create_forum_channel.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    return [data.varName2, "Channel"];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "channelName",
    "channelTopic",
    "channelPosition",
    "nsfw",
    "parent",
    "slowMode",
    "defaultForumLayout",
    "defaultReactionEmoji",
    "defaultSortOrder",
    "reason",
    "requireTag",
    "tags",
    "storage",
    "varName2",
  ],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<tab-system>
<tab label="General" icon="comments">

<div style="float: left; width: 49%;">
  <span class="dbminputlabel">Channel Name</span><br>
  <input id="channelName" class="round" type="text">
</div>
<div style="float: right; width: 49%;">
  <span class="dbminputlabel">Channel Topic</span>
  <input id="channelTopic" placeholder="Leave blank for none..." class="round" type="text">
</div>

<br><br><br>

<div style="float: left; width: 49%;">
  <span class="dbminputlabel">Channel Position</span><br>
  <input id="channelPosition" class="round" type="text" placeholder="Leave blank for default...">
</div>
<div style="float: right; width: 49%;">
  <span class="dbminputlabel">Category Parent ID</span>
  <input id="parent" placeholder="Leave blank for default..." class="round" type="text">
</div>

<br><br><br>

<span class="dbminputlabel">Reason</span>
<input id="reason" class="round" type="text" placeholder="Leave blank for none...">

</tab>


<tab label="Advanced" icon="cogs">

<div style="float: left; width: 49%;">
  <span class="dbminputlabel">SlowMode (in seconds)</span><br>
  <input id="slowMode" class="round" type="text" placeholder="Leave blank for none...">
</div>
<div style="float: right; width: 49%;">
  <span class="dbminputlabel">Default Forum Layout</span>
  <select id="defaultForumLayout" class="round">
  	<option value="0" selected>List View</option>
  	<option value="1">Grid View</option>
  </select>
</div>

<br><br><br>

<div style="float: left; width: 49%;">
  <span class="dbminputlabel">Auto Archive Duration</span>
  <select id="defaultAutoArchiveDuration" class="round">
  	<option value="0">1 Hour</option>
  	<option value="1">24 Hours</option>
    <option value="2" selected>3 Days</option>
    <option value="3">1 Week</option>
  </select>
</div>
<div style="float: right; width: 49%;">
  <span class="dbminputlabel">Default Reaction Emoji</span>
  <input id="defaultReactionEmoji" placeholder="Leave blank for auto..." class="round" type="text">
</div>

<br><br><br>

<div style="float: left; width: 49%;">
  <span class="dbminputlabel">Default Sort Order</span>
  <select id="defaultSortOrder" class="round">
  	<option value="0" selected>Latest Activity</option>
  	<option value="1">Creation Date</option>
  </select>
</div>

<br><br><br>

<dbm-checkbox id="nsfw" label="NSFW"></dbm-checkbox>

</tab>


<tab label="Tags" icon="tags">
  <dbm-checkbox id="requireTag" label="Require Tag"></dbm-checkbox>

  <dialog-list id="tags" fields='["tagName", "tagEmoji", "moderatorsOnly"]' saveButtonText="Save Tag", dialogTitle="Tag Info" dialogWidth="540" dialogHeight="300" listLabel="Tags" listStyle="height: calc(100vh - 360px);" itemName="Tag" itemCols="1" itemHeight="30px;" itemTextFunction="data.tagName" itemStyle="text-align: left; line-height: 30px;">
    <div style="padding: 16px;">
      <span class="dbminputlabel">Name</span>
      <input id="tagName" class="round" type="text">
      <br>
      <span class="dbminputlabel">Emoji</span>
      <input id="tagEmoji" class="round" type="text" placeholder="Leave blank for none...">
      <br>
      <dbm-checkbox id="moderatorsOnly" label="Moderators Only"></dbm-checkbox>
    </div>
  </dialog-list>
</tab>
</tab-system>


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

<store-in-variable dropdownLabel="Store Channel In" allowNone selectId="storage" variableInputId="varName2" variableContainerId="varNameContainer2"></store-in-variable>
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
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Imports
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const data = cache.actions[cache.index];
    const {
      ChannelType,
      ForumLayoutType,
      ThreadAutoArchiveDuration,
      SortOrderType,
      ChannelFlagsBitField,
    } = require("discord.js");
    const server = cache.server;

    const forumLayoutMap = [ForumLayoutType.ListView, ForumLayoutType.GridView];
    const autoArchiveMap = [
      ThreadAutoArchiveDuration.OneHour,
      ThreadAutoArchiveDuration.OneDay,
      ThreadAutoArchiveDuration.ThreeDays,
      ThreadAutoArchiveDuration.OneWeek,
    ];
    const sortOrderMap = [
      SortOrderType.LatestActivity,
      SortOrderType.CreationDate,
    ];

    const channelName = this.evalMessage(data.channelName, cache) || "channel";
    const channelTopic =
      this.evalMessage(data.channelTopic, cache) || undefined;
    const channelPosition =
      parseInt(this.evalMessage(data.channelPosition, cache), 10) || undefined;
    const nsfw = data.nsfw || undefined;
    const parentId = this.evalMessage(data.parent, cache) || undefined;
    const slowMode = parseInt(this.evalMessage(data.slowMode, cache), 10) || 0;
    const defaultForumLayout =
      parseInt(data.defaultForumLayout, 10) || undefined;
    const defaultAutoArchiveDuration =
      parseInt(data.defaultAutoArchiveDuration, 10) || undefined;
    const defaultReactionEmoji =
      this.evalMessage(data.defaultReactionEmoji, cache) || undefined;
    const defaultSortOrder =
      this.evalMessage(data.defaultSortOrder, cache) || undefined;
    const requireTag = data.requireTag || false;
    const reason = this.evalMessage(data.reason, cache) || undefined;
    let tags = [];
    for (const t of data.tags) {
      const name = this.evalMessage(t.tagName, cache) || undefined;
      const emoji = this.evalMessage(t.tagEmoji, cache) || undefined;
      const moderatorsOnly = t.moderatorsOnly || false;
      const tag = {
        name: name,
        emoji: { name: emoji },
        moderated: moderatorsOnly,
      };
      tags.push(tag);
    }

    try {
      const channel = await server.channels.create({
        name: channelName,
        type: ChannelType.GuildForum,
        topic: channelTopic,
        position: channelPosition,
        nsfw: nsfw,
        rateLimitPerUser: slowMode,
        parent: parentId,
        availableTags: tags.length > 0 ? tags : undefined,
        reason: reason,
      });

      if (defaultForumLayout !== undefined) {
        await channel.setDefaultForumLayout(
          forumLayoutMap[defaultForumLayout],
          reason,
        );
      }
      if (defaultAutoArchiveDuration !== undefined) {
        await channel.setDefaultAutoArchiveDuration(
          autoArchiveMap[defaultAutoArchiveDuration],
          reason,
        );
      }
      if (defaultReactionEmoji) {
        await channel.setDefaultReactionEmoji(
          { emoji: defaultReactionEmoji },
          reason,
        );
      }
      if (defaultSortOrder !== undefined) {
        await channel.setDefaultSortOrder(
          sortOrderMap[defaultSortOrder],
          reason,
        );
      }
      if (data.requireTag && tags.length > 0) {
        const oldFlags = channel.flags.value;
        const newFlags = oldFlags | ChannelFlagsBitField.Flags.RequireTag;
        await channel.edit({ flags: newFlags });
      }

      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName2, cache);
      this.storeValue(channel, storage, varName2, cache);
    } catch (error) {
      this.displayError(data, cache, error);
    }

    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
