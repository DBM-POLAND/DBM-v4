module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Store Data List",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Data Control",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data) {
    const files = [
      "players.json",
      "servers.json",
      "channels.json",
      "messages.json",
    ];
    return `${files[parseInt(data.File, 10)]} - ${data.dataName}`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/store_data_list.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let dataType = "Unknown Type";
    switch (parseInt(data.resultInfo, 10)) {
      case 0:
        dataType = "List";
        break;
      case 1:
        dataType = "Number";
        break;
    }
    return [data.varName, dataType];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "File",
    "serverType",
    "dataName",
    "sort",
    "numberBoolean",
    "resultFormat",
    "resultInfo",
    "rank",
    "resultType",
    "resultFrom",
    "resultTo",
    "varName",
    "storage",
  ],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(_isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<div style="width: 550px; height: 350px; overflow-y: scroll;">
  <div style="padding-top: 8px;">
    <div style="float: left; width: 35%;">
      <span class="dbminputlabel">Data File</span><br>
      <select id="File" class="round" onchange="glob.onChange0(this)">
        <option value="0" selected>players.json</option>
        <option value="1">servers.json</option>
        <option value="2">channels.json</option>
        <option value="3">messages.json</option>
      </select>
    </div>
    <div id="Input0" style="padding-left: 5%; display: none; float: left; width: 60%;">
      <span class="dbminputlabel">Server Type</span><br>
      <select id="serverType" class="round">
        <option value="0" selected>Current Server</option>
        <option value="1">All Servers</option>
      </select>
    </div>
  </div>
  <br><br><br>
  <div>
    <div style="float: left; width: 39%;">
      <span class="dbminputlabel">Data Name</span><br>
      <input id="dataName" class="round" type="text" placeholder="Must fill in"><br>
    </div>
    <div style="padding-left: 1%; float: left; width: 56%;">
      <span class="dbminputlabel">Sort By</span><br>
      <select id="sort" class="round">
        <option value="0" selected>Sort from Descending</option>
        <option value="1">Sort from Ascending</option>
      </select><br>
    </div>
  </div>
  <br>
  <div>
    <div style="float: left; width: 35%;">
      <span class="dbminputlabel">Store Result Info</span><br>
      <select id="resultInfo" class="round" onchange="glob.onChange1(this)">
        <option value="0" selected>Results List</option>
        <option value="1">Ranking</option>
      </select><br>
    </div>
    <div id="Result0" style="padding-left: 5%; display: null; float: left; width: 60%;">
      <span class="dbminputlabel">Store Result List</span><br>
      <select id="resultType" class="round" onchange="glob.onChange2(this)">
        <option value="0" selected>All Results</option>
        <option value="1">Result From Begin</option>
        <option value="2">Result To End</option>
        <option value="3">Result From Specific</option>
      </select><br>
    </div>
    <div id="Result1" style="padding-left: 5%; display: none; float: left; width: 62%;">
      <span class="dbminputlabel">Store Ranking</span><br>
      <input id="rank" class="round" type="text" placeholder="Input Member ID here"><br>
    </div>
  </div>
  <br>
  <div>
    <div id="Input1" style="display: null; float: left; width: 35%;">
      <span class="dbminputlabel">Number Before Start</span><br>
      <select id="numberBoolean" class="round">
        <option value="0"selected>No</option>
        <option value="1" >Yes</option>
      </select><br>
    </div>
    <div id="Input2" style="display: null; padding-left: 5%; float: left; width: 65%;">
      <span class="dbminputlabel">Result Format</span><br>
      <input id="resultFormat" class="round" type="text" placeholder="Name + 'DataName' + DataValue"><br>
    </div>
  </div>
  <br>
  <div>
    <div id="Input3" style="display: none; float: left; width: 50%;">
      <span class="dbminputlabel">Result From</span><br>
      <input id="resultFrom" class="round" type="text"><br>
    </div>
    <div id="Input4" style="display: none; float: left; width: 50%;">
      <span class="dbminputlabel">Result To</span><br>
      <input id="resultTo" class="round" type="text"><br>
    </div>
  </div>
  <div style="padding-top: 8px;">
    <store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></store-in-variable>
  </div>
</div>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const { glob, document } = this;
    const Input0 = document.getElementById("Input0");
    const Input1 = document.getElementById("Input1");
    const Input2 = document.getElementById("Input2");
    const Input3 = document.getElementById("Input3");
    const Input4 = document.getElementById("Input4");
    const Result0 = document.getElementById("Result0");
    const Result1 = document.getElementById("Result1");
    const rank = document.getElementById("rank");
    glob.onChange0 = function onChange0(File) {
      switch (parseInt(File.value, 10)) {
        case 0:
          Input0.style.display = null;
          rank.placeholder = "Input Member ID here";
          break;
        case 1:
          Input0.style.display = "none";
          rank.placeholder = "Input Server ID here";
          break;
      }
    };
    glob.onChange1 = function onChange1(resultInfo) {
      switch (parseInt(resultInfo.value, 10)) {
        case 0:
          Result0.style.display = null;
          Result1.style.display = "none";
          Input1.style.display = null;
          Input2.style.display = null;
          break;
        case 1:
          Result0.style.display = "none";
          Result1.style.display = null;
          Input1.style.display = "none";
          Input2.style.display = "none";
          Input3.style.display = "none";
          Input4.style.display = "none";
          break;
      }
    };
    glob.onChange2 = function onChange2(resultType) {
      switch (parseInt(resultType.value, 10)) {
        case 0:
          Input3.style.display = "none";
          Input4.style.display = "none";
          break;
        case 1:
          Input3.style.display = "none";
          Input4.style.display = null;
          Input3.style.width = "0%";
          Input4.style.width = "100%";
          break;
        case 2:
          Input3.style.display = null;
          Input4.style.display = "none";
          Input3.style.width = "100%";
          Input4.style.width = "0%";
          break;
        case 3:
          Input3.style.display = null;
          Input4.style.display = null;
          Input3.style.width = "50%";
          Input4.style.width = "50%";
          break;
      }
    };
    glob.onChange0(document.getElementById("File"));
    glob.onChange1(document.getElementById("resultInfo"));
    glob.onChange2(document.getElementById("resultType"));
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    const Client = this.getDBM().Bot.bot;
    const { Files } = this.getDBM();
    const { sort: fastsort } = require("fast-sort");
    const data = cache.actions[cache.index];
    const File = parseInt(data.File, 10);
    let file;
    let serverType;
    switch (File) {
      case 0:
        file = Files.data.players;
        serverType = parseInt(data.serverType, 10);
        break;
      case 1:
        file = Files.data.servers;
        break;
      case 2:
        file = Files.data.channels;
        break;
      case 3:
        file = Files.data.messages;
        break;
      default:
        file = {};
    }

    const array0 = [];
    let result = [];
    const dataName = this.evalMessage(data.dataName, cache);
    const sort = parseInt(data.sort, 10);
    const numberBoolean = parseInt(data.numberBoolean, 10);
    const resultInfo = parseInt(data.resultInfo, 10);
    let resultFormat = String(this.evalMessage(data.resultFormat, cache));
    if (resultInfo === 0 && !resultFormat) {
      resultFormat = String('Name + " " + DataValue');
    }

    const resultType = parseInt(data.resultType, 10);
    const rank = this.evalMessage(data.rank, cache);
    const storage = parseInt(data.storage, 10);
    const varName = this.evalMessage(data.varName, cache);
    let name;
    let object;

    for (const id in file) {
      if (file[id][dataName] || !isNaN(file[id][dataName])) {
        switch (File) {
          case 0: {
            let object;
            switch (serverType) {
              case 0: {
                const { server } = cache;
                if (server.memberCount !== server.members.cache.size) {
                  await server.members.fetch();
                }
                object = server.members.cache.get(id);
                break;
              }
              case 1: {
                object = Client.users.cache.get(id);
                break;
              }
            }
            if (object) {
              name = object.tag || object.user.tag;
              array0.push({ id: object.id, data: file[id][dataName], name });
            }
            break;
          }
          case 1: {
            object = Client.guilds.cache.get(id);
            if (object) {
              array0.push({
                id: object.id,
                data: file[id][dataName],
                name: object.name,
              });
            }
            break;
          }
          case 2: {
            object = Client.channels.cache.get(id);
            if (object) {
              array0.push({
                id: object.id,
                data: file[id][dataName],
                name: object.name,
              });
            }
            break;
          }
          case 3: {
            object = Client.channels.cache
              .get(file[id].channelId)
              ?.messages.cache.get(id);
            if (object) {
              array0.push({
                id: object.id,
                data: file[id][dataName],
                name: object.content || "Message",
              });
            }
            break;
          }
        }
      }
    }
    switch (sort) {
      case 0:
        result = fastsort(array0).desc((u) => parseInt(u.data, 10));
        break;
      case 1:
        result = fastsort(array0).asc((u) => parseInt(u.data, 10));
        break;
    }
    for (let i = 0; i < result.length; i++) {
      result[i].rank = i + 1;
    }
    switch (resultInfo) {
      case 0: {
        let array1 = [];
        let resultFrom;
        let resultTo;
        switch (resultType) {
          case 0:
            resultFrom = 0;
            resultTo = result.length;
            break;
          case 1:
            resultFrom = 0;
            resultTo = parseInt(this.evalMessage(data.resultTo, cache), 10);
            break;
          case 2:
            resultFrom = parseInt(this.evalMessage(data.resultFrom, cache), 10);
            resultTo = result.length;
            break;
          case 3:
            resultFrom = parseInt(this.evalMessage(data.resultFrom, cache), 10);
            resultTo = parseInt(this.evalMessage(data.resultTo, cache), 10);
            break;
          default:
            break;
        }
        if (result.length < resultTo || resultFrom >= resultTo) {
          resultTo = result.length;
        }
        for (; resultFrom < resultTo; resultFrom++) {
          const Name = result[resultFrom].name;
          const DataValue = result[resultFrom].data;
          let Member;
          let User;
          if (serverType === 0) {
            Member = cache.server.members.cache.get(result[resultFrom].id);
          } else {
            User = Client.users.cache.get(result[resultFrom].id);
          }
          if (numberBoolean === 0) {
            array1.push(`${eval(resultFormat)}\n`);
          } else {
            array1.push(`${result[resultFrom].rank + eval(resultFormat)}\n`);
          }
        }
        array1 = array1.join("");
        this.storeValue(array1, storage, varName, cache);
        break;
      }
      case 1: {
        if (rank) {
          const found = result.find((res) => res.id === rank);
          if (found) this.storeValue(found.rank, storage, varName, cache);
        }
        break;
      }
      default:
        break;
    }
    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
