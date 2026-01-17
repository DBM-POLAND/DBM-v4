module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Set Time Restriction",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Other Stuff",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data) {
    const units = {
      0: ["millisecond", "milliseconds"],
      1: ["second", "seconds"],
      2: ["minute", "minutes"],
      3: ["hour", "hours"],
      4: ["day", "days"],
    };

    const measurement = parseInt(data.measurement, 10) || 1;
    const timeRaw = parseFloat(data.time) || 0;
    const unit = units[measurement] || ["second", "seconds"];
    const timeStr = `${timeRaw} ${timeRaw === 1 ? unit[0] : unit[1]}`;
    const restrictStr =
      parseInt(data.restrict, 10) === 0 ? "Restrict Global" : "Restrict Server";
    const sharedStr = data.sharedCooldown ? "Shared Cooldown" : null;
    return [timeStr, restrictStr, sharedStr].filter(Boolean).join(" | ");
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/set_time_restriction.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    if (parseInt(data.storage2, 10) !== varType) return;
    return [data.varName2, "Timestamp"];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "measurement",
    "time",
    "resetAfterRestart",
    "restrict",
    "sharedCooldown",
    "branch",
    "storage2",
    "varName2",
  ],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(_isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<div>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 35%;">
      <span class="dbminputlabel">Time Measurement</span><br>
      <select id="measurement" class="round" onchange="glob.onChange(this)">
        <option value="0">Milliseconds</option>
        <option value="1" selected>Seconds</option>
        <option value="2">Minutes</option>
        <option value="3">Hours</option>
        <option value="4">Days</option>
      </select>
    </div>
    <div style="padding-left: 5%; float: left; width: 65%;">
      <span class="dbminputlabel">Cooldown Time</span><br>
      <input id="time" class="round" type="text" placeholder="..."><br>
    </div>
  </div>
  <br><br><br>
  
  <div style="padding-top: 8px;">
    <div style="float: left; width: 35%;">
      <span class="dbminputlabel">Reset After Restart?</span><br>
      <select id="resetAfterRestart" class="round"><br>
        <option value="0" selected>False</option>
        <option value="1">True</option>
      </select>
    </div>

    <div style="padding-left: 5%; float: left; width: 59%;">
    <dbm-checkbox id="sharedCooldown" label="Shared Cooldown (All users share the timer)" style="position: absolute; right: -5px; top: 80px; transform: scale(0.9); transform-origin: top right;"></dbm-checkbox>
      <span class="dbminputlabel">Restrict By</span><br>
      <select id="restrict" class="round"><br>
        <option value="0" selected>Global</option>
        <option value="1">Server</option>
      </select>
    </div>
  </div>
  <br><br><br>
  
<hr class="subtlebar" style="margin-top: 4px; margin-bottom: 4px; width: 100%;">

<span style="font-size: 0.9em; color: #888; display: block; margin-bottom: -5px;">Cooldown is Active:</span>
<conditional-input id="branch" style="padding-top: 8px;"></conditional-input>

  <br><br><br>

  <hr class="subtlebar" style="margin-top: 4px; margin-bottom: 4px; width: 100%;">
  
  <div style="padding-top: 8px;">
    <store-in-variable allowNone dropdownLabel="Store Timestamp Left In" selectId="storage2" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>
  </div>
</div>
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

    const measurement = parseInt(data.measurement, 10) || 1;
    const timeRaw = parseFloat(this.evalMessage(data.time, cache));
    const resetAfterRestart = parseInt(data.resetAfterRestart, 10) || 0;
    const restrict = parseInt(data.restrict, 10) || 0;
    const sharedCooldown = data.sharedCooldown;
    const multipliers = [1, 1000, 60000, 3600000, 86400000];
    const durationMs =
      timeRaw > 0
        ? Math.floor(timeRaw * (multipliers[measurement] || 1000))
        : 0;

    const authorId =
      cache.msg?.author?.id || cache.interaction?.user?.id || "unknown_user";
    const guildId = cache.server?.id || cache.msg?.guild?.id || "unknown_guild";
    const actionKey = `setTimeRestriction_action_${cache.index}`;
    let key;
    if (sharedCooldown) {
      key =
        restrict === 0
          ? `global_shared_${actionKey}`
          : `server_${guildId}_shared_${actionKey}`;
    } else {
      key =
        restrict === 0
          ? `global_user_${authorId}_${actionKey}`
          : `server_${guildId}_user_${actionKey}`;
    }

    if (!this._timeRestrictions) this._timeRestrictions = {};
    if (!this._timeRestrictionsFile) {
      try {
        const fs = require("fs");
        const path = require("path");
        const dataDir = path.join(process.cwd(), "data");
        if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
        const filePath = path.join(dataDir, "timeRestrictions.json");
        let obj = fs.existsSync(filePath)
          ? JSON.parse(fs.readFileSync(filePath, "utf8") || "{}")
          : {};

        if (Object.values(obj).every((v) => typeof v === "number")) {
          obj = Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [
              k,
              { expiry: v, persistent: true },
            ]),
          );
        }
        this._timeRestrictions = obj;
        this._timeRestrictionsFile = filePath;
      } catch (e) {
        this._timeRestrictions = {};
        this._timeRestrictionsFile = null;
      }
    }

    const now = Date.now();
    const existingObj = this._timeRestrictions[key];

    const storage = parseInt(data.storage2, 10);
    const varName = this.evalMessage(data.varName2, cache);
    const newPersistent = resetAfterRestart === 0;

    if (existingObj?.expiry > now) {
      if (existingObj.persistent === newPersistent) {
        if (!Number.isNaN(storage) && varName) {
          this.storeValue(
            Math.floor(existingObj.expiry / 1000),
            storage,
            varName,
            cache,
          );
        }
        return this.executeResults(true, data.branch ?? data, cache);
      } else {
        if (!Number.isNaN(storage) && varName) {
          this.storeValue(now + durationMs, storage, varName, cache);
        }
        this._timeRestrictions[key] = {
          expiry: now + durationMs,
          persistent: newPersistent,
        };
        return this.executeResults(false, data.branch ?? data, cache);
      }
    }

    if (!Number.isNaN(storage) && varName)
      this.storeValue(Date.now() + durationMs, storage, varName, cache);

    this._timeRestrictions[key] = {
      expiry: now + durationMs,
      persistent: resetAfterRestart === 0,
    };

    if (this._timeRestrictionsFile) {
      try {
        const fs = require("fs");
        const toSave = Object.fromEntries(
          Object.entries(this._timeRestrictions).filter(
            ([_, v]) => v.persistent && v.expiry > now,
          ),
        );
        fs.writeFileSync(
          this._timeRestrictionsFile,
          JSON.stringify(toSave, null, 2),
          "utf8",
        );
        global.DBM_timeRestrictions = { ...toSave };
      } catch {}
    }

    return this.executeResults(false, data.branch ?? data, cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async mod() {
    const fs = require("fs");
    const path = require("path");
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      const filePath = path.join(dataDir, "timeRestrictions.json");
      let obj = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, "utf8") || "{}")
        : {};
      if (Object.values(obj).every((v) => typeof v === "number")) {
        obj = Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [
            k,
            { expiry: v, persistent: true },
          ]),
        );
      }
      const now = Date.now();

      const cleaned = Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v.expiry > now && v.persistent),
      );

      this._timeRestrictions = cleaned;
      this._timeRestrictionsFile = filePath;
      global.DBM_timeRestrictions = { ...cleaned };
    } catch (e) {
      this._timeRestrictions = {};
      this._timeRestrictionsFile = null;
    }
  },
};
