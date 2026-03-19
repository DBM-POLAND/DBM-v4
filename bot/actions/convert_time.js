module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Convert Time",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Other Stuff",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data) {
    const convertFroms = [
      "Year",
      "Month(Number)",
      "Month(Text)",
      "Day of the Month",
      "Hour",
      "Minute",
      "Second",
      "Millisecond",
      "Full Date",
      "Timestamp",
      "Timestamp (Short Time)",
      "Timestamp (Long Time)",
      "Timestamp (Short Date)",
      "Timestamp (Long Date)",
      "Timestamp (Long Date w. Short Time)",
      "Timestamp (Full Date)",
      "Timestamp (Relative)",
    ];
    const convertTos = [...convertFroms];
    return `Convert ${data.value} ${
      convertFroms[parseInt(data.convertFrom)]
    } to ${convertTos[parseInt(data.convertTo)]}`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/convert_time.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    const type = parseInt(data.storage);
    if (type !== varType) return;
    let dataType = "Number";
    const convertTo = parseInt(data.convertTo);
    if (convertTo === 8) dataType = "Date";
    if (convertTo >= 10) dataType = "String";
    return [data.varName, dataType];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["convertFrom", "value", "convertTo", "storage", "varName"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html() {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    const type = `
			<optgroup label="General">
        <option value="0">Year</option>
        <option value="1">Month (Number)</option>
		  	<option value="2">Month (Text)</option>
		  	<option value="3">Day of the Month</option>
	  		<option value="4">Hour</option>
	  		<option value="5">Minute</option>
	  		<option value="6">Second</option>
		  	<option value="7">Milisecond</option>
        <option value="8">Full Date</option>
        <option value="9">Timestamp</option>
      </optgroup>
      <optgroup label="Other">
        <option value="10">Timestamp (Short Time)</option>
        <option value="11">Timestamp (Long Time)</option>
        <option value="12">Timestamp (Short Date)</option>
        <option value="13">Timestamp (Long Date)</option>
        <option value="14">Timestamp (Long Date w. Short Time)</option>
        <option value="15">Timestamp (Full Date)</option>
        <option value="16">Timestamp (Relative)</option>
      </optgroup>
    `;
    return (
      mod +
      `
<div style="float: left; width: 49%;">
  <span class="dbminputlabel">Convert From</span>
  <select id="convertFrom" class="round">
    ${type}
  </select>
</div>
<div style="float: right; width: 49%;">
  <span class="dbminputlabel">Value</span>
  <input id="value" class="round" type="text">
</div>
<br><br><br>
<span class="dbminputlabel">Convert To</span>
<select id="convertTo" class="round">
  ${type}
</select>
<br>
<store-in-variable dropdownLabel="Store In" selectId="storage" variableInputId="varName" variableContainerId="varNameContainer"></store-in-variable>
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
    const convertFrom = parseInt(data.convertFrom, 10);
    const convertTo = parseInt(data.convertTo, 10);
    const value = this.evalMessage(data.value, cache);
    function convertTime(value, fromType, toType) {
      let ms = 0;
      const monthsTextArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      switch (fromType) {
        case 0:
          ms = Number(value) * 365 * 24 * 60 * 60 * 1000;
          break;
        case 1:
          ms = Number(value) * 30 * 24 * 60 * 60 * 1000;
          break;
        case 2:
          const months = monthsTextArray;
          ms = (months.indexOf(value) + 1) * 30 * 24 * 60 * 60 * 1000;
          break;
        case 3:
          ms = Number(value) * 24 * 60 * 60 * 1000;
          break;
        case 4:
          ms = Number(value) * 60 * 60 * 1000;
          break;
        case 5:
          ms = Number(value) * 60 * 1000;
          break;
        case 6:
          ms = Number(value) * 1000;
          break;
        case 7:
          ms = Number(value);
          break;
        case 8:
          ms = new Date(value).getTime();
          break;
        case 9:
          ms = Number(value);
          break;
        case 10:
          return `<t:${Math.floor(ms / 1000)}:t>`;
        case 11:
          return `<t:${Math.floor(ms / 1000)}:T>`;
        case 12:
          return `<t:${Math.floor(ms / 1000)}:d>`;
        case 13:
          return `<t:${Math.floor(ms / 1000)}:D>`;
        case 14:
          return `<t:${Math.floor(ms / 1000)}:f>`;
        case 15:
          return `<t:${Math.floor(ms / 1000)}:F>`;
        case 16:
          return `<t:${Math.floor(ms / 1000)}:R>`;
        default:
          ms = Number(value);
          break;
      }
      switch (toType) {
        case 0:
          return ms / (365 * 24 * 60 * 60 * 1000);
        case 1:
          return ms / (30 * 24 * 60 * 60 * 1000);
        case 2:
          const monthsText = monthsTextArray;
          return monthsText[Math.floor(ms / (30 * 24 * 60 * 60 * 1000)) % 12];
        case 3:
          return ms / (24 * 60 * 60 * 1000);
        case 4:
          return ms / (60 * 60 * 1000);
        case 5:
          return ms / (60 * 1000);
        case 6:
          return ms / 1000;
        case 7:
          return ms;
        case 8:
          return new Date(ms);
        case 9:
          return ms;
        case 10:
          return `<t:${Math.floor(ms / 1000)}:t>`;
        case 11:
          return `<t:${Math.floor(ms / 1000)}:T>`;
        case 12:
          return `<t:${Math.floor(ms / 1000)}:d>`;
        case 13:
          return `<t:${Math.floor(ms / 1000)}:D>`;
        case 14:
          return `<t:${Math.floor(ms / 1000)}:f>`;
        case 15:
          return `<t:${Math.floor(ms / 1000)}:F>`;
        case 16:
          return `<t:${Math.floor(ms / 1000)}:R>`;
        default:
          return ms;
      }
    }
    const result = convertTime(value, convertFrom, convertTo);
    this.storeValue(
      result,
      parseInt(data.storage),
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
