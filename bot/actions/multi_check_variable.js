module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Multi-Check Variable",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Conditions",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    return `Check ${presets.getVariableText(data.storage, data.varName)} with ${
      data.branches.length
    } Branches`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/multi_check_variable.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["storage", "varName", "branches"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<retrieve-from-variable allowSlashParams dropdownLabel="Variable" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></retrieve-from-variable>
<br><br><br><br>
<dialog-list id="branches" fields='["comparison", "value", "value2", "actions"]' dialogResizable dialogTitle="Check Variable Info" dialogWidth="600" dialogHeight="400" listLabel="Comparisons and Actions" listStyle="height: calc(100vh - 290px);" itemName="Condition" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
  <div style="padding: 16px;">
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
    <table style="float: right;width: 60%;">
     <tr>
      <td style="padding:0px 8px">
       <div style="width: 100%" id="directValue">
        <span class="dbminputlabel">Value to compare</span>
        <input id="value" class="round" type="text">
       </div>
      </td>
      <td style="padding:0px 3px">
       <div style="width: 100%;" id="containerxin">
        <span class="dbminputlabel">and</span><br>
        <input id="value2" class="round" type="text">
       </div>
      </td>
     </tr>
    </table>
    <br><br><br><br>
    <action-list-input id="actions" height="calc(100vh - 220px)"></action-list-input>
  </div>
 <img src="invalid_src" style="display:none" onerror="const select=document.getElementById('comparison');const valueContainer=document.getElementById('directValue');const andContainer=document.getElementById('containerxin');function updateVisibility(){const val=select.value;const hideValueOptions=['0','16','19','20','21','24','22','23','25'];if(hideValueOptions.includes(val)){valueContainer.style.display='none';andContainer.style.display='none';}else if(val==='15'){valueContainer.style.display='block';andContainer.style.display='block';}else{valueContainer.style.display='block';andContainer.style.display='none';}}select.onchange=updateVisibility;updateVisibility();">
</dialog-list>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const { glob } = this;
    const comparisonLabels = {
      0: "Exists",
      1: "= ",
      2: "= ",
      3: "< ",
      4: "<= ",
      5: "> ",
      6: ">= ",
      7: "Includes ",
      8: "Matches Regex ",
      9: "Matches Full Regex ",
      10: "Starts With ",
      11: "Ends With ",
      12: "Length is Equals ",
      13: "Length is Greater Than ",
      14: "Length is Less Than ",
      15: "Between ",
      16: "Does it have accents?",
      17: "Includes the words ",
      18: "Equals the words ",
      19: "Is it an even number?",
      20: "Is it an odd number?",
      21: "Is it a number?",
      22: "Is it a list?",
      23: "Is this an image URL?",
      24: "Is it text?",
      25: "Is it a URL?",
      26: "Is a number (only digits)",
    };
    glob.formatItem = function (data) {
      const label = comparisonLabels[data.comparison] || "Unknown";
      let valueText = "";
      if (
        [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "17",
          "18",
        ].includes(data.comparison)
      ) {
        valueText = label + data.value;
        if (data.comparison === "15")
          valueText += " and " + (data.value2 || "");
        if (["17", "18"].includes(data.comparison))
          valueText = label + JSON.stringify(data.value);
      } else {
        valueText = label;
      }
      return `<div style="display: flex; justify-content: space-between; align-items: center; width: 95%; padding-left: 8px;">
            <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 400px;">VAR ${valueText}</div>
            <div>Call ${data.actions ? data.actions.length : 0} Actions</div>
          </div>`;
    };
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

    if (variable) {
      const val1 = variable;
      const branches = data.branches;

      for (let i = 0; i < branches.length; i++) {
        const branch = branches[i];
        const compare = parseInt(branch.comparison, 10);
        let val2 = branch.value;
        let val3 = branch.value2;

        if (![0, 16, 19, 20, 21, 22, 23, 24, 25].includes(compare)) {
          val2 = this.evalIfPossible(val2, cache);
        }
        if (compare === 15) val3 = this.evalIfPossible(val3, cache);

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
          case 4: // Less than or equal
            result = val1 <= val2;
            break;
          case 5: // Greater Than
            result = val1 > val2;
            break;
          case 6: // Greater than or equal
            result = val1 >= val2;
            break;
          case 7: // Includes
            result = typeof val1.includes === "function" && val1.includes(val2);
            break;
          case 8: // Matches Regex
            try {
              result = Boolean(val1.match(new RegExp(val2)));
            } catch {
              result = false;
            }
            break;
          case 9: // Matches Full Regex
            try {
              result = Boolean(val1.match(new RegExp(`^${val2}$`)));
            } catch {
              result = false;
            }
            break;
          case 10: // Starts With
            result = typeof val1 === "string" && val1.startsWith(val2);
            break;
          case 11: // Ends With
            result = typeof val1 === "string" && val1.endsWith(val2);
            break;
          case 12: // Length Equals
            result = val1.length == val2;
            break;
          case 13: // Length Greater
            result = val1.length > val2;
            break;
          case 14: // Length Less
            result = val1.length < val2;
            break;
          case 15: // Between
            result = val1 >= val2 && val1 <= val3;
            break;
          case 16: // Does it have accents
            result =
              typeof val1 === "string" &&
              /[\u0300-\u036f\u00C0-\u00FF]/.test(val1.normalize("NFD"));
            break;
          case 17: // Includes the words ["a","b","c"]
            try {
              result = JSON.parse(val2).every((w) => val1.includes(w));
            } catch {
              result = false;
            }
            break;
          case 18: // Equals the words ["a","b","c"]
            try {
              result =
                JSON.stringify(val1) === JSON.stringify(JSON.parse(val2));
            } catch {
              result = false;
            }
            break;
          case 19: // Is it an even number
            result = typeof val1 === "number" && val1 % 2 === 0;
            break;
          case 20: // Is it an odd number
            result = typeof val1 === "number" && val1 % 2 !== 0;
            break;
          case 21: // Is it a number
            result = !isNaN(Number(val1));
            break;
          case 22: // Is it a list
            result = Array.isArray(val1);
            break;
          case 23: // Is this an image URL
            result =
              typeof val1 === "string" &&
              /^https?:\/\/.*\.(png|jpg|jpeg|gif|webp|bmp)$/i.test(val1);
            break;
          case 24: // Is it text
            result = typeof val1 === "string";
            break;
          case 25: // Is it a URL
            result = typeof val1 === "string" && /^https?:\/\/.+/i.test(val1);
            break;
          case 26: // Is a number (only digits)
            result = /^\d+$/.test(val1);
            break;
        }
        if (result) {
          this.executeSubActionsThenNextAction(branch.actions, cache);
          break;
        }
      }
    }
    if (!result) {
      this.callNextAction(cache);
    }
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod Init
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  modInit(data) {
    for (let i = 0; i < data.branches.length; i++) {
      const branch = data.branches[i];
      this.prepareActions(branch.actions);
    }
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
