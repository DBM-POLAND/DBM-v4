module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Store YouTube Video Info",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Other Stuff",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data) {
    const info = [
      "Video ID",
      "Video URL",
      "Video Title",
      "Video Description",
      "Video Channel Name",
      "Video Channel ID",
      "Video Thumbnail URL",
      "Video Channel URL",
      "Video Channel Avatar URL",
      "Video Channel is Verified?",
      "Video Channel Subscriber Count",
      "Video is Unlisted?",
      "Video is Family Friendly?",
      "Video Duration",
      "Video Views",
      "Available Countries",
      "Video Like Count",
      "Video Dislike Count",
      "Video Publish Date",
      "Video Publish Timestamp",
      "Video is Live?",
      "Video Owner Viewing?",
      "Video is Age Restricted?",
      "Video Tags",
      "Video Captions Languages",
      "Video Comments Count",
      "Video is Shorts?",
    ];
    return `${info[parseInt(data.info, 10)]}`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/store_youtube_video_info.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName, "Text"];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["url", "info", "storage", "varName"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html() {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<span class="dbminputlabel">Video URL/ID</span>
<input id="url" class="round" type="text">
<br>
<span class="dbminputlabel">Source Info</span>
<select id="info" class="round">
  <option value="0">Video ID</option>
  <option value="1">Video URL</option>
  <option value="2">Video Title</option>
  <option value="3">Video Description</option>
  <option value="4">Video Channel Name</option>
  <option value="5">Video Channel ID</option>
  <option value="6">Video Thumbnail URL</option>
  <option value="7">Video Channel URL</option>
  <option value="8">Video Channel Avatar URL</option>
  <option value="9">Video Channel is Verified?</option>
  <option value="10">Video Channel Subscriber Count</option>
  <option value="11">Video is Unlisted?</option>
  <option value="12">Video is Family Friendly?</option>
  <option value="13">Video Duration</option>
  <option value="14">Video Views</option>
  <option value="15">Available Countries</option>
  <option value="16">Video Like Count</option>
  <option value="17">Video Dislike Count</option>
  <option value="18">Video Publish Date</option>
  <option value="19">Video Publish Timestamp</option>
  <option value="20">Video is Live?</option>
  <option value="21">Video Owner Viewing?</option>
  <option value="22">Video is Age Restricted?</option>
  <option value="23">Video Tags</option>
  <option value="24">Video Captions Languages</option>
  <option value="25">Video Comments Count</option>
  <option value="26">Video is Shorts?</option>
</select>
<br>
<store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></store-in-variable>
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
    const { youtubeiClient } = this.getDBM().Audio;
    const url = this.evalMessage(data.url, cache);
    const info = parseInt(data.info, 10);
    const youtube = youtubeiClient;

    try {
      let videoId = url;
      if (url.includes("youtube.com") || url.includes("youtu.be")) {
        const urlObj = new URL(url);
        if (urlObj.hostname.includes("youtu.be")) {
          videoId = urlObj.pathname.slice(1);
        } else {
          videoId = urlObj.searchParams.get("v");
        }
      }

      let video;
      try {
        video = await youtube.getVideo(videoId);
      } catch (err) {
        console.error(err);
        return this.callNextAction(cache);
      }

      let result;
      switch (info) {
        case 0:
          // video id
          result = video.id;
          break;
        case 1:
          // video url
          result = `https://www.youtube.com/watch?v=${video.id}`;
          break;
        case 2:
          // video title
          result = video.title;
          break;
        case 3:
          // video description
          result = video.description;
          break;
        case 4:
          // video channel name
          result = video.channel?.name ?? "Unknown";
          break;
        case 5:
          // video channel id
          result = video.channel?.id ?? "Unknown";
          break;
        case 6:
          // video thumbnail url
          result = video.thumbnails?.[video.thumbnails.length - 1]?.url ?? "";
          break;
        case 7:
          // video channel url
          result = `https://www.youtube.com/@${video.channel?.name}`;
          break;
        case 8:
          // video channel avatar url
          result =
            video.channel?.thumbnails?.[video.channel.thumbnails.length - 1]
              ?.url ?? "";
          break;
        case 9:
          // video channel is verified?
          result = video.channel?.verified ?? false;
          break;
        case 10:
          // video channel subscriber count
          result = video.channel?.subscriberCount ?? "0";
          break;
        case 11:
          // video is unlisted?
          result = video.isUnlisted ?? false;
          break;
        case 12:
          // video is family friendly?
          result = video.isFamilySafe ?? false;
          break;
        case 13:
          // video duration
          result = video.duration ?? 0;
          break;
        case 14:
          // video views
          result = video.viewCount ?? 0;
          break;
        case 15:
          // available countries
          result = video.availableCountries?.join(", ") ?? "";
          break;
        case 16:
          // video like count
          result = video.likeCount ?? 0;
          break;
        case 17:
          // video dislike count
          result = video.dislikeCount ?? 0;
          break;
        case 18:
          // video publish date
          result = video.uploadDate ?? "";
          break;
        case 19:
          // video publish timestamp
          result = video.uploadDate ? Date.parse(video.uploadDate) : 0;
          break;
        case 20:
          // video is live?
          result = video.isLiveContent ?? false;
          break;
        case 21:
          // video owner viewing?
          result = video.isOwnerViewing ?? false;
          break;
        case 22:
          // video is age restricted?
          result = video.ageRestricted ?? false;
          break;
        case 23:
          // video tags
          result = video.tags?.join(", ") ?? "";
          break;
        case 24:
          // video captions languages
          result =
            video.captions?.languages?.map((l) => l.name).join(", ") ?? "";
          break;
        case 25:
          // video comments count
          result = video.comments?.items?.length ?? 0;
          break;
        case 26:
          // video is shorts?
          result = video.isShorts ?? false;
          break;
        default:
          break;
      }
      this.storeValue(
        result,
        parseInt(data.storage, 10),
        this.evalMessage(data.varName, cache),
        cache,
      );
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
