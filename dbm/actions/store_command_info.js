module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Store Command Info",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Bot Client Control",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data) {
    const info = [
      "Command Name",
      "DBM Command ID",
      "Command Type",
      "Command Restriction",
      "Command User Required Permission",
      "Command Aliases",
      "Command Time Restriction",
      "Command Actions Length",
      "Command ID",
      "Command Description",
    ];
    const storage = ["", "Temp Variable", "Server Variable", "Global Variable"];
    return `${info[parseInt(data.info, 10)]} - ${
      storage[parseInt(data.storage, 10)]
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/store_command_info.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let dataType = "Unknown Type";
    switch (parseInt(data.info, 10)) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 8:
      case 9:
        dataType = "Text";
        break;
      case 5:
        dataType = "List";
        break;
      case 6:
      case 7:
        dataType = "Number";
        break;
      default:
        break;
    }
    return [data.varName, dataType];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["cmds", "info", "storage", "varName"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html() {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<div style="float: left; width: 40%">
  <span class="dbminputlabel">Commands</span>
  <select id="cmds" class="round">
  </select>
</div>
<br><br><br><br>
<span class="dbminputlabel">Source Info</span>
<select id="info" class="round">
  <option value="0" selected>Command Name</option>
  <option value="1">DBM Command ID</option>
  <option value="2">Command Type</option>
  <option value="3">Command Restriction</option>
  <option value="4">Command User Required Permission</option>
  <option value="5">Command Aliases</option>
  <option value="6">Command Time Restriction</option>
  <option value="7">Command Actions Length</option>
  <option value="8">Command ID</option>
  <option value="9">Command Description</option>
</select>
<br><br><br><br>
<store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></store-in-variable>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const { glob, document } = this;
    const $cmds = glob.$cmds;
    const select = document.getElementById("cmds");
    select.innerHTML = "";
    for (let i = 0; i < $cmds.length; i++) {
      const cmd = $cmds[i];
      if (!cmd) continue;
      const option = document.createElement("option");
      option.value = cmd._id;
      option.textContent = cmd.name;
      select.appendChild(option);
    }
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    const data = cache.actions[cache.index];
    const { Files } = this.getDBM();

    const cmdId = data.cmds;
    let command;
    for (let i = 0; i < Files.data.commands.length; i++) {
      if (Files.data.commands[i]?._id === cmdId) {
        command = Files.data.commands[i];
        break;
      }
    }
    let result;
    switch (parseInt(data.info, 10)) {
      case 0:
        result = command?.name;
        break;
      case 1:
        result = command?._id;
        break;
      case 2:
        switch (parseInt(command?.comType, 10)) {
          case 0:
            result = "Text Command";
            break;
          case 1:
            result = "Includes Word";
            break;
          case 2:
            result = "Matches Regular Expression";
            break;
          case 3:
            result = "Any Message";
            break;
          case 4:
            result = "Slash Command";
            break;
          case 5:
            result = "User Menu Command";
            break;
          case 6:
            result = "Msg Menu Command";
            break;
          default:
            break;
        }
        break;
      case 3:
        switch (parseInt(command?.restriction, 10)) {
          case 0:
            result = "None";
            break;
          case 1:
            result = "Server Only";
            break;
          case 2:
            result = "Owner Only";
            break;
          case 3:
            result = "DMs Only";
            break;
          default:
            break;
        }
        break;
      case 4:
        result = command?.permissions
          ? JSON.stringify(command.permissions)
              .slice(2, -2)
              .replace("_", " ")
              .toLowerCase()
          : undefined;
        break;
      case 5:
        result = command?._aliases;
        break;
      case 6:
        result =
          command?._timeRestriction === ""
            ? "none"
            : parseInt(command?._timeRestriction, 10);
        break;
      case 7:
        result = Array.isArray(command?.actions)
          ? command.actions.length
          : "none";
        break;
      case 8: {
        const client = this.getClient();
        const { interaction, msg } = cache;
        const guild = interaction?.guild ?? msg?.guild;
        const cmdName = command?.name;
        let cmds =
          (guild && (await guild.commands.fetch())) ||
          (await client.application.commands.fetch());
        const found = cmds.find((c) => c.name === cmdName);
        result = found?.id ?? "Not Found";
        break;
      }
      case 9:
        result = command?.description;
        break;
      default:
        break;
    }

    if (!result) result = "invalid";

    if (result !== undefined) {
      const storage = parseInt(data.storage, 10);
      const varName = this.evalMessage(data.varName, cache);
      this.storeValue(result, storage, varName, cache);
    }

    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
