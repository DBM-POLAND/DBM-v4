module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Create Transcript",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Other Stuff",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    return `Gets a Transcript from a Channel: ${presets.getChannelText(
      data.channel,
      data.varName1,
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/create_transcript.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, storage) {
    const type = parseInt(data.storage, 10);
    if (type !== storage) return;
    return [data.varName2, "Transcript (HTML)"];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "fileName",
    "saveImages",
    "useSSR",
    "channel",
    "storage",
    "varName1",
    "varName2",
    "footerText",
    "poweredBy",
    "messageLimit",
    "storageType",
    "storageFolder",
  ],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html() {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<channel-input dropdownLabel="Source Channel" selectId="channel" variableContainerId="varNameContainer1" variableInputId="varName1"></channel-input>
<br><br><br>
<tab-system style="margin-top: 20px;">
  <tab label="Options" icon="html5">
    <div style="width: 100%; margin-bottom: 20px;">
      <span class="dbminputlabel">File Name</span>
      <input id="fileName" placeholder="Leave blank for transcript.html" value="transcript.html" class="round" type="text">
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 20px;">
      <div style="width: 35%;">
        <select id="saveImages" class="round">
          <option value="0">False</option>
          <option value="1">True</option>
        </select>
      </div>
      <div style="width: 60%; margin-left: 5%;">
        <label>Download all images in the HTML</label>
      </div>
    </div>
    <div style="display: flex; align-items: center;">
      <div style="width: 35%;">
        <select id="useSSR" class="round">
          <option value="0">False</option>
          <option value="1" selected>True</option>
        </select>
      </div>
      <div style="width: 60%; margin-left: 5%;">
        <label>Makes the transcript look like Discord even without an internet connection</label>
      </div>
    </div>
  </tab>
  <tab label="Advanced" icon="cogs">
    <div style="width: 100%; margin-bottom: 10px;">
      <span class="dbminputlabel">Footer Text</span>
      <input id="footerText" placeholder="Leave blank for default" value="Exported {number} message{s}" class="round" type="text">
    </div>
    <div style="width: 100%; margin-bottom: 10px;">
      <span class="dbminputlabel">Show "Powered By" in Footer?</span>
      <select id="poweredBy" class="round">
        <option value="0" selected>False</option>
        <option value="1">True</option>
      </select>
    </div>
    <div style="width: 100%;">
      <span class="dbminputlabel">Message Limit</span>
      <input id="messageLimit" placeholder="Leave blank or -1 for none limit..." class="round" type="text">
    </div>
  </tab>
  <tab label="Storage" icon="file archive">
    <span class="dbminputlabel">Storage Type</span>
    <select id="storageType" class="round">
      <option value="0" selected>Attachment</option>
      <option value="1">Buffer</option>
      <option value="2">Local File</option>
      <option value="3">String (text)</option>
    </select>
    <br>
    <div id="storageFolderWrapper">
      <span class="dbminputlabel">Storage Folder</span>
      <input id="storageFolder" placeholder="Leave blank for './transcripts'..." class="round" type="text" value="./transcripts">
    </div>
  </tab>
</tab-system>
<br><br><br><br><br><br><br><br><br><br><br><br>
<store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const { document } = this;
    const storageType = document.getElementById("storageType");
    const storageFolderWrapper = document.getElementById(
      "storageFolderWrapper",
    );
    function updateStorageWrapper() {
      if (storageType.value !== "2") {
        storageFolderWrapper.style.opacity = "0.5";
        storageFolderWrapper.style.pointerEvents = "none";
      } else {
        storageFolderWrapper.style.opacity = "1";
        storageFolderWrapper.style.pointerEvents = "auto";
      }
    }
    updateStorageWrapper();
    storageType.addEventListener("change", updateStorageWrapper);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    const data = cache.actions[cache.index];
    const { Bot } = this.getDBM();
    const { createTranscript } = Bot.require("discord-html-transcripts");
    const dhtVersion = require("discord-html-transcripts/package.json").version;
    if (dhtVersion != "3.2.0") {
      // Version 3.3.0 is broken due to a critical bug, please downgrade to =3.2.0 or upgrade if a fix is available.
      this.displayError(
        data,
        cache,
        "[discord-html-transcripts] Version 3.2.0 is required!",
      );
      return;
    }
    const fs = require("fs/promises");
    const path = require("path");
    const channel = await this.getChannelFromData(
      data.channel,
      data.varName1,
      cache,
    );
    const fileName =
      this.evalMessage(data.fileName, cache) || "transcript.html";
    const footerText =
      this.evalMessage(data.footerText, cache) ||
      "Exported {number} message{s}";
    const messageLimit =
      parseInt(this.evalMessage(data.messageLimit, cache), 10) || -1;
    const saveImages = data.saveImages === "1" ? true : false;
    const useSSR = data.useSSR === "1" ? true : false;
    const poweredBy = data.poweredBy === "1" ? true : false;
    const storageType = parseInt(data.storageType, 10);
    const storageFolder =
      this.evalMessage(data.storageFolder, cache) || "./transcripts";
    let returnType;
    if (storageType === 0) returnType = "attachment";
    else if (storageType === 1) returnType = "buffer";
    else if (storageType === 2) returnType = "string";
    else if (storageType === 3) returnType = "string";
    try {
      const transcript = await createTranscript(channel, {
        limit: messageLimit,
        returnType: returnType,
        filename: fileName,
        saveImages: saveImages,
        footerText: footerText,
        poweredBy: poweredBy,
        ssr: useSSR,
      });
      let result;
      if (storageType === 0 || storageType === 1 || storageType === 3) {
        result = transcript;
      } else if (storageType === 2) {
        const transcriptFolder = path.join(storageFolder);
        const transcriptPath = path.join(transcriptFolder, fileName);
        await fs.mkdir(transcriptFolder, { recursive: true });
        await fs.writeFile(transcriptPath, transcript, "utf8");
        result = transcriptPath;
      }
      this.storeValue(result, parseInt(data.storage, 10), data.varName2, cache);
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
