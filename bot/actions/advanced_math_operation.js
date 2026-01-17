module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Advanced Math Operation",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Other Stuff",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data) {
    const info = [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Round",
      "Round to S.F.",
      "Absolute",
      "Ceil",
      "Floor",
      "Factorial",
      "Raised by (Exponents)",
      "Rooted by (Roots)",
      "Sine",
      "Cosine",
      "Tangent",
      "Arc Sine",
      "Arc Cosine",
      "Arc Tangent",
      "% Of Number",
      "Increase By %",
      "Decrease By %",
      "Value of Pi",
      "Value of Euler's number",
    ];
    return `${info[data.info] ?? "Unknown Operation"}`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/advanced_math_operation.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName, "Number"];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["number1", "info", "number2", "storage", "varName"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html() {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<div id="number1Wrapper" style="width: 90%;">
  <span class="dbminputlabel">First Number</span>
  <input id="number1" class="round" type="text">
</div>
<br>
<div style="width: 60%;">
  <span class="dbminputlabel">Math Operation</span>
  <select id="info" class="round" onchange="glob.onChange1(this)">
      <option value="0" selected>Addition</option>
      <option value="1">Subtraction</option>
      <option value="2">Multiplication</option>
      <option value="3">Division</option>
      <option value="4">Round</option>
      <option value="5">Round to S.F.</option>
      <option value="6">Absolute</option>
      <option value="7">Ceil</option>
      <option value="8">Floor</option>
      <option value="9">Factorial</option>
      <option value="10">Raised by (Exponents)</option>
      <option value="11">Rooted by (Roots)</option>
      <option value="12">Sine</option>
      <option value="13">Cosine</option>
      <option value="14">Tangent</option>
      <option value="15">Arc Sine</option>
      <option value="16">Arc Cosine</option>
      <option value="17">Arc Tangent</option>
      <option value="18">% Of Number</option>
      <option value="19">Increase Number By %</option>
      <option value="20">Decrease Number By %</option>
      <option value="21">Value of Pi</option>
      <option value="22">Value of Euler's number</option>
  </select>
</div>
<br>
<div id="number2Wrapper" style="width: 90%;">
  <span class="dbminputlabel">Second Number</span>
  <input id="number2" class="round" type="text">
  <br>
</div>
<br>
<store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></store-in-variable>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const { glob, document } = this;
    const needsSecondNumber = new Set([0, 1, 2, 3, 5, 10, 11, 18, 19, 20]);
    glob.onChange1 = (select) => {
      const value = Number(select.value);
      document.getElementById("number2Wrapper").style.display =
        needsSecondNumber.has(value) ? null : "none";
      document.getElementById("number1Wrapper").style.display =
        value < 21 ? null : "none";
    };
    glob.onChange1(document.getElementById("info"));
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  action(cache) {
    const data = cache.actions[cache.index];
    let number1 = parseFloat(
      this.evalMessage(data.number1, cache).replace(/,/g, ""),
    );
    const info = parseInt(data.info, 10);
    const number2 = parseFloat(
      this.evalMessage(data.number2, cache).replace(/,/g, ""),
    );

    let result;
    switch (info) {
      case 0:
        result = number1 + number2;
        break;
      case 1:
        result = number1 - number2;
        break;
      case 2:
        result = number1 * number2;
        break;
      case 3:
        result = number1 / number2;
        break;
      case 4:
        result = Math.round(number1);
        break;
      case 5:
        result = number1.toPrecision(number2);
        break;
      case 6:
        result = Math.abs(number1);
        break;
      case 7:
        result = Math.ceil(number1);
        break;
      case 8:
        result = Math.floor(number1);
        break;
      case 9:
        if (!Number.isInteger(number1) || number1 < 0) {
          result = undefined;
          break;
        }
        result = 1;
        for (let i = 2; i <= number1; i++) {
          result *= i;
        }
        break;
      case 10:
        result = Math.pow(number1, number2);
        break;
      case 11:
        result = Math.pow(number1, 1 / number2);
        break;
      case 12:
        result = Math.sin(number1);
        break;
      case 13:
        result = Math.cos(number1);
        break;
      case 14:
        result = Math.tan(number1);
        break;
      case 15:
        result = Math.asin(number1);
        break;
      case 16:
        result = Math.acos(number1);
        break;
      case 17:
        result = Math.atan(number1);
        break;
      case 18:
        result = (number1 * number2) / 100;
        break;
      case 19:
        result = (number1 * number2) / 100 + number1;
        break;
      case 20:
        result = (number1 * (100 - number2)) / 100;
        break;
      case 21:
        result = Math.PI;
        break;
      case 22:
        result = Math.E;
        break;
      default:
        break;
    }

    if (result !== undefined) {
      this.storeValue(
        result,
        parseInt(data.storage, 10),
        this.evalMessage(data.varName, cache),
        cache,
      );
    }
    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
