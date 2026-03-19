module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Store Json From WebAPI",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Other Stuff",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data) {
    const path = data.path || "All JSON";
    return `Store JSON Path: "${path}"`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/store_json_from_webapi.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName, "Object"];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "url",
    "path",
    "storage",
    "varName",
    "token",
    "user",
    "pass",
    "headers",
    "debugMode",
    "reUse",
  ],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html() {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<tab-system>
  <tab label="General" icon="cloud upload">
    <span class="dbminputlabel">WebAPI URL</span>
    <input id="url" class="round" type="text">
    <br>
    <span class="dbminputlabel">JSON Path (Optional)</span>
    <input id="path" class="round" type="text">
    <br>
    <store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></store-in-variable>
  </tab>
  <tab label="Auth & Headers" icon="key">
    <span class="dbminputlabel">Bearer Token</span>
    <input id="token" class="round" type="password" placeholder="Leave blank if none...">
    <br>
    <span class="dbminputlabel">Headers (key:value per line)</span>
    <textarea id="headers" rows="4" style="white-space: nowrap; resize: none;" placeholder="User-Agent: Other"></textarea>
    <br>
    <div style="float:left;width:49%;">
      <span class="dbminputlabel">Username</span>
      <input id="user" class="round" placeholder="Leave blank if none...">
    </div>
    <div style="float:right;width:49%;">
      <span class="dbminputlabel">Password</span>
      <input id="pass" class="round" type="password" placeholder="Leave blank if none...">
    </div>
  </tab>
  <tab label="Advanced" icon="cogs">
    <dbm-checkbox id="debugMode" label="Debug Mode"></dbm-checkbox>
    <br>
    <span class="dbminputlabel">Re-Use Previously Stored JSON</span>
    <select id="reUse" class="round">
      <option value="1" selected>Allow</option>
      <option value="0">Disallow</option>
    </select>
  </tab>
</tab-system>
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
    const url = this.evalMessage(data.url, cache);
    const path = this.evalMessage(data.path, cache);
    const token = this.evalMessage(data.token, cache);
    const user = this.evalMessage(data.user, cache);
    const pass = this.evalMessage(data.pass, cache);
    const headersRaw = this.evalMessage(data.headers, cache);
    const storage = parseInt(data.storage, 10);
    const varName = this.evalMessage(data.varName, cache);
    const debug = !!parseInt(data.debugMode, 10);
    const reUse = parseInt(data.reUse, 10);
    function checkURL(url) {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    }
    if (!checkURL(url)) return debug && console.error(`Invalid URL: ${url}`);
    const oldUrl = this.getVariable(1, `${url}_URL`, cache);
    if (url === oldUrl && reUse === 1) {
      const jsonData = this.getVariable(1, url, cache);
      this.storeValue(jsonData, storage, varName, cache);
      return this.callNextAction(cache);
    }
    const fetchHeaders = { "User-Agent": "Other" };
    if (headersRaw) {
      headersRaw.split("\n").forEach((line) => {
        const [key, ...rest] = line.split(":");
        if (key && rest.length)
          fetchHeaders[key.trim()] = rest.join(":").trim();
      });
    }
    if (token) fetchHeaders.Authorization = `Bearer ${token}`;
    else if (user && pass)
      fetchHeaders.Authorization = `Basic ${Buffer.from(
        `${user}:${pass}`,
      ).toString("base64")}`;
    try {
      const res = await fetch(url, { headers: fetchHeaders });
      const jsonData = await res.json();
      const outData = path ? jsonPath(jsonData, path) : jsonData;
      this.storeValue(outData, storage, varName, cache);
      this.storeValue(jsonData, 1, url, cache);
      this.storeValue(url, 1, `${url}_URL`, cache);
      if (debug)
        console.log(
          `Stored JSON Data${
            path ? ` at path "${path}"` : ""
          } to variable [${varName}]`,
        );
    } catch (err) {
      debug && console.error(err.stack || err);
    }
    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
