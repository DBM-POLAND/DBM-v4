module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Store Reaction Info",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Emoji/Sticker Control",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    const info = [
      "Message Object",
      "Bot reacted?",
      "Users Who Reacted List",
      "Emoji Name",
      "Reaction Count",
      "First User to React",
      "Random User to React",
      "Last User to React",
      "Emoji Object",
    ];
    return `${presets.getVariableText(data.reaction, data.varName)} - ${
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/store_reaction_info.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let dataType = "Unknown Type";
    switch (parseInt(data.info, 10)) {
      case 0:
        dataType = "Message";
        break;
      case 1:
        dataType = "Boolean";
        break;
      case 2:
        dataType = "List";
        break;
      case 3:
        dataType = "String";
        break;
      case 4:
        dataType = "Number";
        break;
      case 5:
        dataType = "User";
        break;
      case 6:
        dataType = "User";
        break;
      case 7:
        dataType = "User";
        break;
      case 8:
        dataType = "Object";
        break;
      default:
        break;
    }
    return [data.varName2, dataType];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["reaction", "varName", "info", "storage", "varName2"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html() {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<retrieve-from-variable dropdownLabel="Reaction" selectId="reaction" variableContainerId="varNameContainer" variableInputId="varName"></retrieve-from-variable>
<br><br><br>
<div style="float:left; width: 70%; padding-top: 16px;">
    <span class="dbminputlabel">Source Info</span>
    <select id="info" class="round">
      <option value="0" selected>Message Object</option>
      <option value="5">First User to React</option>
      <option value="6">Random User to React</option>
      <option value="7">Last User to React</option>
      <option value="1">Bot Reacted?</option>
      <option value="2">User Who Reacted List</option>
      <option value="3">Emoji Name</option>
      <option value="8">Emoji Object</option>
      <option value="4">Reaction Count</option>
    </select>
</div>
<br><br><br><br>
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

  action(cache) {
    const data = cache.actions[cache.index];
    const info = parseInt(data.info, 10);
    const reaction = this.getVariable(
      parseInt(data.reaction, 10),
      this.evalMessage(data.varName, cache),
      cache,
    );
    if (!reaction) return this.callNextAction(cache);
    let result;
    switch (info) {
      case 0: {
        // Message Object
        result = reaction.message;
        break;
      }
      case 1: {
        // This bot reacted?
        result = Boolean(reaction.me);
        break;
      }
      case 2: {
        // All users who reacted list
        result = Array.from(reaction.users.cache.values());
        break;
      }
      case 3: {
        // Emoji (/Reaction) name
        result = reaction.emoji.name;
        break;
      }
      case 4: {
        // Number (user+bots) who reacted like this
        result = reaction.count;
        break;
      }
      case 5: {
        // Stores first user ID reacted
        const firstid = reaction.users.cache.firstKey();
        result = cache.server.members.cache.get(firstid);
        break;
      }
      case 6: {
        // Stores random user ID reacted
        const randomid = reaction.users.cache.randomKey();
        result = cache.server.members.cache.get(randomid);
        break;
      }
      case 7: {
        // Stores last user ID reacted
        const lastid = reaction.users.cache.lastKey();
        result = cache.server.members.cache.get(lastid);
        break;
      }
      case 8: {
        // Emoji object
        result = reaction.emoji;
        break;
      }
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
