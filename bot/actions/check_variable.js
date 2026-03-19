module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Check Variable",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Conditions",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    return `${presets.getConditionsText(data)}`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/check_variable.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["storage", "varName", "comparison", "value", "value2", "branch"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<retrieve-from-variable allowSlashParams dropdownLabel="Variable" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></retrieve-from-variable>
<br><br><br>
<div style="padding-top: 8px;">
	<div style="float: left; width: 35%;">
		<span class="dbminputlabel">Comparison Type</span><br>
		<select id="comparison" class="round" onchange="glob.onComparisonChanged(this)">
			<option value="0">Exists</option>
			<option value="1" selected>Equals</option>
			<option value="2">Equals Exactly</option>
			<option value="3">Less Than</option>
      <option value="4">Less than or equal to</option>
			<option value="5">Greater Than</option>
      <option value="6">Greater than or equal to</option>
			<option value="7">Includes</option>
			<option value="8">Matches Regex</option>
      <option value="9">Matches Full Regex</option>
			<option value="10">Starts With</option>
			<option value="11">Ends With</option>
			<option value="12">Length is Equals</option>
			<option value="13">Length is Greater Than</option>
			<option value="14">Length is Less Than</option>
      <option value="15">Between</option>
      <option value="16">Does it have accents?</option>
      <option value="17">Includes the words ["a" , "b" , "c"]</option>
      <option value="18">Equals the words ["a" , "b" , "c"]</option>
      <option value="19">Is it an even number?</option>
      <option value="20">Is it an odd number?</option>
      <option value="21">Is it a number?</option>
      <option value="24">Is it text?</option>
      <option value="22">Is it a list?</option>
      <option value="23">Is this an image URL?</option>
      <option value="25">Is it a URL?</option>
      <option value="26">Is a number (only digits)</option>
		</select>
	</div>
	<table style="float: right;width: 60%;"><tr><td style="padding:0px 8px"><div style="width: 100%" id="directValue">
		<span class="dbminputlabel">Value to compare</span>
		<input id="value" class="round" type="text">
	</div></td><td style="padding:0px 3px";> <div style="width: 100%;" id="containerxin">
  <span class="dbminputlabel">and</span><br>
  <input id="value2" class="round" type="text"></td></tr></table>
  </div>
 </div>
</div>
<br><br><br><br>
<hr class="subtlebar">
<br>
<conditional-input id="branch" style="padding-top: 8px;"></conditional-input>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Pre-Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  preInit(data, formatters) {
    return formatters.compatibility_2_0_0_iftruefalse_to_branch(data);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const { glob, document } = this;
    glob.onComparisonChanged = function (event) {
      if (event.value === "0") {
        document.getElementById("directValue").style.display = "none";
        document.getElementById("containerxin").style.display = "none";
      } else {
        document.getElementById("directValue").style.display = null;
        document.getElementById("containerxin").style.display = "none";
      }
      if (event.value === "15") {
        document.getElementById("directValue").style.display = null;
        document.getElementById("containerxin").style.display = null;
      }
      if (
        event.value === "16" ||
        event.value === "19" ||
        event.value === "20" ||
        event.value === "21" ||
        event.value === "22" ||
        event.value === "23" ||
        event.value == "24" ||
        event.value === "25"
      ) {
        document.getElementById("directValue").style.display = "none";
        document.getElementById("containerxin").style.display = "none";
      }
    };
    glob.onComparisonChanged(document.getElementById("comparison"));
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  action(cache) {
    const data = cache.actions[cache.index];
    const type = parseInt(data.storage, 10);
    const varName = this.evalMessage(data.varName, cache);
    const variable = this.getVariable(type, varName, cache);
    let result = false;

    const val1 = variable;
    const compare = parseInt(data.comparison, 10);
    let val2 = this.evalMessage(data.value, cache);
    let val3 = this.evalMessage(data.value2, cache);

    if (compare !== 6) val2 = this.evalIfPossible(val2, cache);

    if (val2 === "true") val2 = true;
    if (val2 === "false") val2 = false;

    switch (compare) {
      case 0: // Exists
        result = val1 !== undefined;
        break;
      case 1: // Equals
        result = val1 == val2;
        break;
      case 2: // Equals Exactly
        result = val1 === val2;
        break;
      case 3: // Less Than
        result = val1 < val2;
        break;
      case 4: // Less than or equal to
        result = Number(val1) <= Number(val2);
        break;
      case 5: // Greater Than
        result = val1 > val2;
        break;
      case 6: // Greater than or equal to
        result = Number(val1) >= Number(val2);
        break;
      case 7: // Includes
        let includesVal1 = val1;
        if (typeof includesVal1 !== "string" && !Array.isArray(includesVal1)) {
          includesVal1 = String(includesVal1);
        }
        if (typeof includesVal1?.includes === "function") {
          result = includesVal1.includes(val2);
        }
        break;
      case 8: // Matches Regex
        if (typeof val1?.match === "function") {
          result = Boolean(val1.match(new RegExp("^" + val2 + "$", "i")));
        }
        break;
      case 9: // Matches Full Regex
        result = Boolean(val1.toString().match(new RegExp(val2)));
        break;
      case 10: // Starts With
        if (typeof val1?.startsWith === "function") {
          result = Boolean(val1.startsWith(val2));
        }
        break;
      case 11: // Ends With
        if (typeof val1?.endsWith === "function") {
          result = Boolean(val1.endsWith(val2));
        }
        break;
      case 12: // Length is Equals
        if (typeof val1?.length === "number") {
          result = Boolean(val1.length === val2);
        }
        break;
      case 13: // Length is Greater Than
        if (typeof val1?.length === "number") {
          result = Boolean(val1.length > val2);
        }
        break;
      case 14: // Length is Less Than
        if (typeof val1?.length === "number") {
          result = Boolean(val1.length < val2);
        }
        break;
      case 15: // Between
        var numberj = val1.toString();
        if (numberj >= val2 && val1 <= val3) {
          result = numberj;
        }
        break;
      case 16: // Does it have accents?
        result = /[^\u0000-\u007F]/.test(val1);
        break;
      case 17: // Includes the words ["a","b","c"]
        const conditionsX = val2;
        result = conditionsX.some((els) => val1.includes(els));
        break;
      case 18: // Equals the words ["a","b","c"]
        const conditionsZ = val2;
        result = conditionsZ.some((elz) => val1 == elz);
        break;
      case 19: // Is it an even number
        result = val1 % 2 == 0;
        break;
      case 20: // Is it an odd number
        result = val1 % 2 == 1;
        break;
      case 21: // Is it a number
        result = Boolean(!isNaN(parseFloat(val1.toString().replace(",", "."))));
        break;
      case 22: // Is it a list
        result = Boolean(Array.isArray(val1));
        break;
      case 23: // Is this an image URL
        {
          const { Bot } = this.getDBM();
          const isImageUrl = Bot.require("is-image-url");
          result = isImageUrl(val1);
        }
        break;
      case 24: // Is it text
        result = typeof val1 === "string";
        break;
      case 25: // Is it a URL
        {
          const { Bot } = this.getDBM();
          const isUrl = Bot.require("is-url");
          result = isUrl(val1);
        }
        break;
      case 26: // Is a number (only digits)
        result = /^\d+$/.test(val1);
        break;
    }
    this.executeResults(result, data?.branch ?? data, cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod Init
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  modInit(data) {
    this.prepareActions(data.branch?.iftrueActions);
    this.prepareActions(data.branch?.iffalseActions);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
