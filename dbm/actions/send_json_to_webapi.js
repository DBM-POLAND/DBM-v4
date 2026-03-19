module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Send Json to WebAPI",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Other Stuff",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data) {
    const method = data.method || "POST";
    const useTimeout = !!data.useTimeout;
    const timeout = data.timeout ? `${data.timeout} s` : "10 s";
    return `Method: "${method}" - Timeout: "${
      useTimeout ? timeout : "Disabled"
    }"`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/send_json_to_webapi.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let type;
    if (data.responseFormat === "json") type = "Object";
    else type = "Text";
    return [data.varName, type];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "method",
    "jsonToSend",
    "storage",
    "varName",
    "apiUrl",
    "headers",
    "token",
    "username",
    "password",
    "debugMode",
    "retryCount",
    "useTimeout",
    "timeout",
    "responseFormat",
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
    <span class="dbminputlabel">Method</span>
    <select id="method" class="round" style="width: 30%;">
      <option value="POST" selected>POST</option>
      <option value="PATCH">PATCH</option>
      <option value="PUT">PUT</option>
      <option value="DELETE">DELETE</option>
    </select>
    <br>
    <span class="dbminputlabel">JSON To Send</span>
    <textarea id="jsonToSend" rows="8" style="white-space: nowrap; resize: none;"></textarea>
    <br>
    <store-in-variable allowNone dropdownLabel="Store Result In" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></store-in-variable>
  </tab>
  <tab label="Auth & Headers" icon="key">
    <span class="dbminputlabel">WebAPI URL</span>
    <input id="apiUrl" class="round" type="text">
    <br>
    <span class="dbminputlabel">Headers (key:value per line)</span>
    <textarea id="headers" rows="4" style="white-space: nowrap; resize: none;" placeholder="User-Agent: Other"></textarea>
    <br>
    <span class="dbminputlabel">Bearer Token</span>
    <input id="token" class="round" type="password" placeholder="Leave blank if none...">
    <br>
    <div style="float: left; width: 49%;">
      <span class="dbminputlabel">Username</span>
      <input id="username" class="round" placeholder="Leave blank if none...">
    </div>
    <div style="float: right; width: 49%;">
      <span class="dbminputlabel">Password</span>
      <input id="password" class="round" type="password" placeholder="Leave blank if none...">
    </div>
  </tab>
  <tab label="Advanced" icon="cogs">
    <dbm-checkbox id="debugMode" label="Debug Mode"></dbm-checkbox>
    <br>
    <span class="dbminputlabel">Retry Count</span>
    <input id="retryCount" class="round" type="text" placeholder="Leave blank for 0..." value="0">
    <dbm-checkbox id="useTimeout" style="font-size:13px; margin: 0; margin-left: 3px;" label="Timeout"></dbm-checkbox>
    <input id="timeout" class="round" type="text" placeholder="Leave blank for 10 seconds..." style="position: relative; z-index: 2; margin-top: -3px;">
    <br>
    <span class="dbminputlabel">Response Format</span>
    <select id="responseFormat" class="round">
      <option value="json" selected>JSON</option>
      <option value="text">Text</option>
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
    const o = {
      method: this.evalMessage(data.method, cache) || "POST",
      jsonToSend: this.evalMessage(data.jsonToSend, cache),
      apiUrl: this.evalMessage(data.apiUrl, cache),
      headers: this.evalMessage(data.headers, cache),
      token: this.evalMessage(data.token, cache),
      username: this.evalMessage(data.username, cache),
      password: this.evalMessage(data.password, cache),
      debugMode: data.debugMode,
      retryCount: parseInt(this.evalMessage(data.retryCount, cache), 10) || 0,
      responseFormat: data.responseFormat || "json",
      useTimeout: !!data.useTimeout,
      timeout: parseFloat(this.evalMessage(data.timeout, cache)) || 10,
    };

    o.timeout = o.timeout * 1000;

    if (!o.apiUrl) {
      this.displayError(data, cache, "API URL is required!");
      return this.callNextAction(cache);
    }

    if (o.jsonToSend) {
      try {
        o.jsonToSend = JSON.parse(o.jsonToSend);
      } catch (err) {
        this.displayError(data, cache, err);
        return this.callNextAction(cache);
      }
    }

    let headersObj = {};
    if (o.headers) {
      o.headers.split("\n").forEach((line) => {
        const [key, ...rest] = line.split(":");
        if (key && rest.length) headersObj[key.trim()] = rest.join(":").trim();
      });
    }

    if (o.username && o.password) {
      headersObj["Authorization"] = `Basic ${Buffer.from(
        o.username + ":" + o.password,
      ).toString("base64")}`;
    } else if (o.token) {
      headersObj["Authorization"] = `Bearer ${o.token}`;
    }

    let response;
    let attempts = 0;

    while (attempts <= o.retryCount) {
      try {
        let fetchOptions = {
          method: o.method,
          headers: headersObj,
          body:
            o.method !== "GET" && o.jsonToSend
              ? JSON.stringify(o.jsonToSend)
              : undefined,
        };
        let controller, timeoutId;
        if (o.useTimeout) {
          controller = new AbortController();
          timeoutId = setTimeout(() => controller.abort(), o.timeout);
          fetchOptions.signal = controller.signal;
        }
        const res = await fetch(o.apiUrl, fetchOptions);
        if (o.useTimeout) clearTimeout(timeoutId);
        response =
          o.responseFormat === "json" ? await res.json() : await res.text();
        if (o.debugMode) console.log(response);
        break;
      } catch (err) {
        attempts++;
        if (attempts > o.retryCount) {
          this.displayError(data, cache, err);
          return this.callNextAction(cache);
        }
      }
    }

    this.storeValue(
      response,
      parseInt(data.storage, 10),
      this.evalMessage(data.varName, cache),
      cache,
    );
    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
