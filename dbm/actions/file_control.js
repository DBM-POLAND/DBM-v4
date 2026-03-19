module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "File Control",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "File Stuff",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data) {
    const filePath = data.filePath || "—";
    const newFilePath = data.newFilePath || "—";
    const newFileName = data.newFileName || "—";
    switch (parseInt(data.task, 10)) {
      case 0:
        return `Create file → ${filePath}`;
      case 1:
        return `Delete file → ${filePath}`;
      case 2:
        return `Copy file → ${filePath} → ${newFilePath}`;
      case 3:
        return `Move file → ${filePath} → ${newFilePath}`;
      case 4:
        return `Write to file → ${filePath}`;
      case 5:
        return `Append to file → ${filePath}`;
      case 6:
        return `Insert content into file → ${filePath}`;
      case 7:
        return `Rename file → ${filePath} → ${newFileName}`;
      default:
        return "File Control";
    }
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/file_control.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "task",
    "filePath",
    "newFilePath",
    "newFileName",
    "writeContent",
    "insertPosition",
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
  <span class="dbminputlabel">Task</span>
  <select id="task" class="round">
    <option value="0" selected>Create</option>
    <option value="1">Delete</option>
    <option value="2">Copy</option>
    <option value="3">Move</option>
    <option value="4">Write</option>
    <option value="5">Append</option>
    <option value="6">Insert</option>
    <option value="7">Rename</option>
  </select>
</div>
<br><br><br>
<div id="filePathWrapper" style="float: left; width: 49%;">
  <span class="dbminputlabel">File Path</span>
  <input id="filePath" class="round" type="text" placeholder="e.g. ./resources/test.txt">
</div>
<div id="newFilePathWrapper" style="float: right; width: 49%;">
  <span class="dbminputlabel">New File Path</span>
  <input id="newFilePath" class="round" type="text" placeholder="e.g. ./resources/users/test.txt">
</div>
<div id="newFileNameWrapper" style="float: right; width: 49%;">
  <span class="dbminputlabel">New File Name</span>
  <input id="newFileName" class="round" type="text" placeholder="e.g. piwo.txt">
</div>
<div id="writeContentWrapper">
  <br><br><br>
  <span class="dbminputlabel">Content</span>
  <textarea id="writeContent" class="round" rows="5" placeholder="Leave blank for none..."></textarea>
</div>
<div id="insertPositionWrapper">
  <br>
  <span class="dbminputlabel">Insert Position</span>
  <input id="insertPosition" class="round" type="text" placeholder="Leave blank for 0..." value="0">
</div>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const task = document.getElementById("task");
    const fields = {
      filePath: document.getElementById("filePathWrapper"),
      newFilePath: document.getElementById("newFilePathWrapper"),
      newFileName: document.getElementById("newFileNameWrapper"),
      writeContent: document.getElementById("writeContentWrapper"),
      insertPosition: document.getElementById("insertPositionWrapper"),
    };
    const map = {
      0: ["filePath", "writeContent"],
      1: ["filePath"],
      2: ["filePath", "newFilePath"],
      3: ["filePath", "newFilePath"],
      4: ["filePath", "writeContent"],
      5: ["filePath", "writeContent"],
      6: ["filePath", "writeContent", "insertPosition"],
      7: ["filePath", "newFileName"],
    };
    const updateUI = () => {
      Object.values(fields).forEach((e) => (e.style.display = "none"));
      (map[task.value] || []).forEach((k) => (fields[k].style.display = ""));
    };
    task.addEventListener("change", updateUI);
    updateUI();
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    const data = cache.actions[cache.index];
    const fs = require("fs/promises");
    const path = require("path");
    const task = parseInt(data.task, 10);
    const filePath = this.evalMessage(data.filePath, cache) || "";
    const newFilePath = this.evalMessage(data.newFilePath, cache) || "";
    const newFileName = this.evalMessage(data.newFileName, cache) || "";
    const writeContent = this.evalMessage(data.writeContent, cache) || "";
    const insertPosition =
      parseInt(this.evalMessage(data.insertPosition, cache), 10) || 0;
    try {
      switch (task) {
        case 0: {
          // create
          if (!filePath) break;
          await fs.mkdir(path.dirname(filePath), { recursive: true });
          await fs.writeFile(filePath, writeContent);
          break;
        }
        case 1: {
          // delete
          if (!filePath) break;
          await fs.rm(filePath, { force: true });
          break;
        }
        case 2: {
          // copy
          if (!filePath || !newFilePath) break;
          await fs.mkdir(path.dirname(newFilePath), { recursive: true });
          await fs.copyFile(filePath, newFilePath);
          break;
        }
        case 3: {
          // move
          if (!filePath || !newFilePath) break;
          await fs.mkdir(path.dirname(newFilePath), { recursive: true });
          await fs.rename(filePath, newFilePath);
          break;
        }
        case 4: {
          // write (overwrite)
          if (!filePath) break;
          await fs.mkdir(path.dirname(filePath), { recursive: true });
          await fs.writeFile(filePath, writeContent);
          break;
        }
        case 5: {
          // append
          if (!filePath) break;
          await fs.mkdir(path.dirname(filePath), { recursive: true });
          await fs.appendFile(filePath, writeContent);
          break;
        }
        case 6: {
          // insert
          if (!filePath) break;
          const content = await fs.readFile(filePath, "utf8");
          const pos = Math.max(0, insertPosition);
          const result =
            content.slice(0, pos) + writeContent + content.slice(pos);
          await fs.writeFile(filePath, result);
          break;
        }
        case 7: {
          // rename
          if (!filePath || !newFileName) break;
          const targetPath = path.join(path.dirname(filePath), newFileName);
          await fs.rename(filePath, targetPath);
          break;
        }
      }
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
