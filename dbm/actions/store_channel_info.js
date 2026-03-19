module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Store Channel Info",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Channel Control",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    const info = [
      "Channel Object",
      "Channel ID",
      "Channel Name",
      "Channel Type",
      "Channel Type (Number)",
      "Guild From Channel",
      "Created Timestamp",
      "Created At",
      "Is NSFW?",
      "Slowmode",
      "Is Slowmode?",
      "Last Message ID",
      "Parent Category",
      "Parent Category ID",
      "Position",
      "Is Private Channel",
      "Channel Topic",
      "Is Announcement Channel?",
      "User Limit",
      "Bitrate",
      "Connected Members Count",
      "Connected Members",
      "Is Full?",
      "RTC Region",
      "Is Video Quality Auto?",
      "Video Quality",
      "Stage Topic",
      "Is Stage Live?",
      "Speakers Count",
      "Speakers",
      "Audience Count",
      "Audience Members",
      "Forum Topic",
      "Default Reaction Emoji",
      "Available Tags",
      "Available Tags Count",
      "Is Tag Required?",
      "Default Auto Archive Duration",
      "Sort Order",
      "Forum Layout",
      "Posts Count",
      "Active Posts Count",
      "Archived Posts Count",
      "Thread Owner",
      "Is Archived?",
      "Is Private Thread?",
      "Message Count",
      "Member Count",
      "Is Forum Post?",
      "Parent Channel",
      "Applied Tags",
      "Applied Tags Count",
      "Starter Message",
    ];
    return `${presets.getChannelText(data.channel, data.varName)} - ${
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/store_channel_info.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Unknown Type";
    if ([0, 49].includes(info)) dataType = "Channel";
    else if ([1, 13].includes(info)) dataType = "Channel ID";
    else if ([52].includes(info)) dataType = "Message";
    else if (
      [2, 3, 16, 23, 26, 27, 29, 31, 32, 33, 34, 43, 48, 50].includes(info)
    )
      dataType = "Text";
    else if (
      [
        4, 5, 6, 7, 9, 10, 14, 18, 19, 20, 22, 25, 28, 30, 35, 36, 37, 38, 39,
        40, 41, 42, 46, 47, 51,
      ].includes(info)
    )
      dataType = "Number";
    else if ([8, 15, 17, 24, 44, 45].includes(info)) dataType = "Boolean";
    else if ([11, 7].includes(info)) dataType = "Date";
    else if ([12, 13].includes(info)) dataType = "Channel/Category ID";
    return [data.varName2, dataType];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["channel", "varName", "info", "storage", "varName2"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<channel-input dropdownLabel="Source Channel" selectId="channel" variableContainerId="varNameContainer" variableInputId="varName"></channel-input>

<br><br><br>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Source Info</span>
	<select id="info" class="round">
      <optgroup label="Global Info">
		    <option value="0" selected>Channel Object</option>
		    <option value="1">Channel ID</option>
		    <option value="2">Channel Name</option>
        <option value="3">Channel Type</option>
        <option value="4">Channel Type (Number)</option>
        <option value="5">Guild From Channel</option>
        <option value="6">Created Timestamp</option>
        <option value="7">Created At</option>
        <option value="8">Is NSFW?</option>
        <option value="9">Slowmode</option>
        <option value="10">Is Slowmode?</option>
        <option value="11">Last Message ID</option>
        <option value="12">Parent Category</option>
        <option value="13">Parent Category ID</option>
        <option value="14">Position</option>
        <option value="15">Is Private Channel</option>
      </optgroup>
      <optgroup label="Text Channel Info">
        <option value="16">Channel Topic</option>
        <option value="17">Is Announcement Channel?</option>
      </optgroup>
      <optgroup label="Voice Channel Info">
        <option value="18">User Limit</option>
        <option value="19">Bitrate</option>
        <option value="20">Connected Members Count</option>
        <option value="21">Connected Members</option>
        <option value="22">Is Full?</option>
        <option value="23">RTC Region</option>
        <option value="24">Is Video Quality Auto?</option>
        <option value="25">Video Quality</option>
      </optgroup>
      <optgroup label="Stage Voice Channel Info">
        <option value="26">Stage Topic</option>
        <option value="27">Is Stage Live?</option>
        <option value="28">Speakers Count</option>
        <option value="29">Speakers</option>
        <option value="30">Audience Count</option>
        <option value="31">Audience Members</option>
      </optgroup>
      <optgroup label="Forum Channel Info">
        <option value="32">Forum Topic</option>
        <option value="33">Default Reaction Emoji</option>
        <option value="34">Available Tags</option>
        <option value="35">Available Tags Count</option>
        <option value="36">Is Tag Required?</option>
        <option value="37">Default Auto Archive Duration</option>
        <option value="38">Sort Order</option>
        <option value="39">Forum Layout</option>
        <option value="40">Posts Count</option>
        <option value="41">Active Posts Count</option>
        <option value="42">Archived Posts Count</option>
      </optgroup>
      <optgroup label="Thread/Post Channel Info">
        <option value="43">Thread Owner</option>
        <option value="44">Is Archived?</option>
        <option value="45">Is Private Thread?</option>
        <option value="46">Message Count</option>
        <option value="47">Member Count</option>
        <option value="48">Is Forum Post?</option>
        <option value="49">Parent Channel</option>
        <option value="50">Applied Tags</option>
        <option value="51">Applied Tags Count</option>
        <option value="52">Starter Message</option>
      </optgroup>
	</select>
</div>

<br><br><br>

<store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>
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

    const CHANNEL_TYPE_NAMES = {
      0: "Text Channel",
      1: "DM",
      2: "Voice Channel",
      3: "Group DM",
      4: "Category",
      5: "Announcement Channel",
      10: "Announcement Thread",
      11: "Public Thread",
      12: "Private Thread",
      13: "Stage Voice Channel",
      15: "Forum Channel",
    };

    const channel = await this.getChannelFromData(
      data.channel,
      data.varName,
      cache,
    );
    const info = parseInt(data.info, 10);

    if (!channel) {
      this.callNextAction(cache);
      return;
    }

    let result;
    switch (info) {
      case 0:
        // channel object
        result = channel;
        break;
      case 1:
        // channel id
        result = channel.id;
        break;
      case 2:
        // channel name
        result = channel.name;
        break;
      case 3:
        // channel type
        result = CHANNEL_TYPE_NAMES[channel.type] ?? "Unknown Channel";
        break;
      case 4:
        // channel type (number)
        result = channel.type;
        break;
      case 5:
        // guild from channel
        result = channel.guild;
        break;
      case 6:
        // created timestamp
        result = channel.createdTimestamp;
        break;
      case 7:
        // created at
        result = channel.createdAt;
        break;
      case 8:
        // is nsfw?
        result = channel.nsfw ?? false;
        break;
      case 9:
        // slowmode
        result = channel.rateLimitPerUser ?? 0;
        break;
      case 10:
        // is slowmode?
        result = (channel.rateLimitPerUser ?? 0) > 0;
        break;
      case 11:
        // last message id
        result = channel.lastMessageId ?? null;
        break;
      case 12:
        // parent category
        result = channel.parent;
        break;
      case 13:
        // parent category id
        result = channel.parentId;
        break;
      case 14:
        // position
        result = channel.rawPosition;
        break;
      case 15:
        // is private channel
        if (channel.permissionOverwrites) {
          const everyonePerm = channel.permissionOverwrites.cache.get(
            channel.guild.id,
          );
          result = everyonePerm
            ? !everyonePerm.allow.has("ViewChannel")
            : false;
        } else {
          result = false;
        }
        break;
      case 16:
        // channel topic
        result = channel.topic;
        break;
      case 17:
        // is announcement channel?
        result = channel.type === 5;
        break;
      case 18:
        // user limit
        result = channel.userLimit;
        break;
      case 19:
        // bitrate
        result = channel.bitrate;
        break;
      case 20:
        // connected members count
        result = channel.members ? channel.members.size : 0;
        break;
      case 21:
        // connected members
        result = channel.members ? Array.from(channel.members.values()) : [];
        break;
      case 22:
        // is full?
        result = channel.userLimit
          ? channel.members.size >= channel.userLimit
          : false;
        break;
      case 23:
        // rtc region
        result = channel.rtcRegion ?? null;
        break;
      case 24:
        // is video quality auto?
        result = channel.videoQualityMode === 1;
        break;
      case 25:
        // video quality
        result = channel.videoQualityMode;
        break;
      case 26:
        // stage topic
        result = channel.topic;
        break;
      case 27:
        // is stage live?
        result =
          channel.guild?.stageInstances.cache.some(
            (si) => si.channelId === channel.id,
          ) ?? false;
        break;
      case 28:
        // speakers count
        result = channel.members
          ? Array.from(channel.members.values()).filter(
              (m) => m.voice.suppress === false,
            ).length
          : 0;
        break;
      case 29:
        // speakers
        result = channel.members
          ? Array.from(channel.members.values()).filter(
              (m) => m.voice.suppress === false,
            )
          : [];
        break;
      case 30:
        // audience count
        result = channel.members
          ? Array.from(channel.members.values()).filter(
              (m) => m.voice.suppress === true,
            ).length
          : 0;
        break;
      case 31:
        // audience members
        result = channel.members
          ? Array.from(channel.members.values()).filter(
              (m) => m.voice.suppress === true,
            )
          : [];
        break;
      case 32:
        // forum topic
        result = channel.topic ?? null;
        break;
      case 33:
        // default reaction emoji
        result = channel.defaultReactionEmoji ?? null;
        break;
      case 34:
        // available tags
        result = channel.availableTags
          ? Array.from(channel.availableTags.values())
          : [];
        break;
      case 35:
        // available Tags count
        result = channel.availableTags ? channel.availableTags.size : 0;
        break;
      case 36:
        // is tag required?
        result = channel.defaultThreadRateLimitPerUser ? true : false;
        break;
      case 37:
        // default auto archive duration
        result = channel.defaultAutoArchiveDuration ?? null;
        break;
      case 38:
        // sort order
        result = channel.defaultSortOrder ?? null;
        break;
      case 39:
        // forum layout
        result = channel.forumLayout ?? null;
        break;
      case 40:
        // posts count
        result = channel.threads ? channel.threads.cache.size : 0;
        break;
      case 41:
        // active posts count
        result = channel.threads
          ? channel.threads.cache.filter((t) => !t.archived).size
          : 0;
        break;
      case 42:
        // archived posts count
        result = channel.threads
          ? channel.threads.cache.filter((t) => t.archived).size
          : 0;
        break;

      case 43:
        // thread owner
        result = channel.ownerId ?? null;
        break;
      case 44:
        // is archived?
        result = channel.archived ?? false;
        break;
      case 45:
        // is private thread?
        result = channel.type === 12;
        break;
      case 46:
        // message count
        result = channel.messageCount ?? 0;
        break;
      case 47:
        // member count
        result = channel.memberCount ?? 0;
        break;
      case 48:
        // is forum post?
        result = channel.isPost ?? false;
        break;
      case 49:
        // parent channel
        result = channel.parent ?? null;
        break;
      case 50:
        // applied tags
        result = channel.appliedTags ? Array.from(channel.appliedTags) : [];
        break;
      case 51:
        // applied tags count
        result = channel.appliedTags ? channel.appliedTags.length : 0;
        break;
      case 52:
        // starter message
        result = channel.threadStarterMessage ?? null;
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
