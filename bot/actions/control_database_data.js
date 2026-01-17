module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Control Database Data",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Data Control",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    let target;
    if (data.dataFile === "0")
      target = presets.getChannelText(data.channel, data.varName);
    else if (data.dataFile === "1") target = "Global";
    else if (data.dataFile === "2")
      target = presets.getMessageText(data.message, data.varName2);
    else if (data.dataFile === "3")
      target = presets.getMessageText(data.message, data.varName3);
    else if (data.dataFile === "4")
      target = presets.getMessageText(data.server, data.varName4);
    let type;
    if (data.changeType === "set") type = "=";
    else if (data.changeType === "add") type = "+";
    else if (data.changeType === "substract") type = "-";
    else type = "-=";
    return `${target} (${data.dataName}) ${type} ${data.value}`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/control_database_data.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "dataFile",
    "databaseType",
    "channel",
    "varName",
    "message",
    "varName2",
    "member",
    "varName3",
    "server",
    "varName4",
    "dataName",
    "changeType",
    "value",
  ],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html() {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<div style="float: left; width: 40%;">
  <span class="dbminputlabel">Data File</span>
  <select id="dataFile" class="round">
    <option value="0">Channels</option>
    <option value="1">Globals</option>
    <option value="2">Messages</option>
    <option value="3">Players</option>
    <option value="4">Servers</option>
  </select>
</div>
<div id="channelInputWrapper">
  <br><br><br>
  <channel-input dropdownLabel="Source Channel" selectId="channel" variableContainerId="varNameContainer" variableInputId="varName"></channel-input>
</div>
<div id="globalInputWrapper">
</div>
<div id="messageInputWrapper">
  <br><br><br>
  <message-input dropdownLabel="Source Message" selectId="message" variableContainerId="varNameContainer2" variableInputId="varName2"></message-input>
</div>
<div id="playerInputWrapper">
  <br><br><br>
  <member-input dropdownLabel="Source Member" selectId="member" variableContainerId="varNameContainer3" variableInputId="varName3"></member-input>
</div>
<div id="serverInputWrapper">
  <br><br><br>
  <server-input dropdownLabel="Source Server" selectId="server" variableContainerId="varNameContainer4" variableInputId="varName4"></server-input>
</div>
<br><br><br><br>
<div style="padding-top: 8px;">
	<div style="float: left; width: calc(50% - 12px);">
		<span class="dbminputlabel">Data Name</span>
		<input id="dataName" class="round" type="text">
	</div>
	<div style="float: right; width: calc(50% - 12px);">
		<span class="dbminputlabel">Control Type</span>
		<select id="changeType" class="round">
			<option value="set" selected>Set Value</option>
			<option value="add">Add Value</option>
      <option value="substract">Subtract Value</option>
      <option value="clear">Clear Value</option>
		</select>
	</div>
</div>
<br><br><br>
<div style="padding-top: 8px;" id="valueWrapper">
	<span class="dbminputlabel">Value</span>
	<input id="value" class="round" type="text">
</div>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const dataFile = document.getElementById("dataFile");
    const changeType = document.getElementById("changeType");
    const valueWrapper = document.getElementById("valueWrapper");
    const wrappers = {
      0: "channelInputWrapper",
      1: "globalInputWrapper",
      2: "messageInputWrapper",
      3: "playerInputWrapper",
      4: "serverInputWrapper",
    };
    function updateWrappers() {
      Object.values(wrappers).forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
      });
      const selected = wrappers[dataFile.value];
      if (selected) {
        const el = document.getElementById(selected);
        if (el) el.style.display = "block";
      }
    }
    dataFile.addEventListener("change", updateWrappers);
    updateWrappers();
    function updateValueWrapper() {
      if (changeType.value === "clear") {
        valueWrapper.style.display = "none";
      } else {
        valueWrapper.style.display = "block";
      }
    }
    changeType.addEventListener("change", updateValueWrapper);
    updateValueWrapper();
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    const data = cache.actions[cache.index];
    const { db } = this.getDBM().Files;
    const { Bot, Files } = this.getDBM();
    Files.db.DataBase = Bot.require("better-sqlite3");
    const dataName = this.evalMessage(data.dataName, cache);
    const value = this.evalIfPossible(data.value, cache);
    const changeType = data.changeType;
    if (data.dataFile === "0") {
      // channels
      const channel = await this.getChannelFromData(
        data.channel,
        data.varName,
        cache,
      );
      db.saveData(
        db.DataBase.channels,
        channel.id,
        dataName,
        value,
        changeType,
      );
    } else if (data.dataFile === "1") {
      // globals
      db.saveData(db.DataBase.globals, "global", dataName, value, changeType);
    } else if (data.dataFile === "2") {
      // messages
      const message = await this.getMessageFromData(
        data.message,
        data.varName2,
        cache,
      );
      db.saveData(
        db.DataBase.messages,
        message.id,
        dataName,
        value,
        changeType,
      );
    } else if (data.dataFile === "3") {
      // players
      const member = await this.getMemberFromData(
        data.member,
        data.varName3,
        cache,
      );
      db.saveData(db.DataBase.players, member.id, dataName, value, changeType);
    } else if (data.dataFile === "4") {
      // servers
      const server = await this.getServerFromData(
        data.server,
        data.varName4,
        cache,
      );
      db.saveData(db.DataBase.servers, server.id, dataName, value, changeType);
    }
    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
