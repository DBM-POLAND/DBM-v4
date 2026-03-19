//---------------------------------------------------------------------
// Defining global array of partials so they are not repeated later on.
//---------------------------------------------------------------------

const PARTIALS = [
  "User",
  "Channel",
  "GuildMember",
  "Message",
  "Reaction",
  "GuildScheduledEvent",
  "ThreadMember",
  "SoundboardSound",
  "Poll",
  "PollAnswer",
];

module.exports = {
  //---------------------------------------------------------------------
  // Editor Extension Name
  //---------------------------------------------------------------------

  name: "Bot Partials",

  //---------------------------------------------------------------------
  // Is Editor Extension
  //---------------------------------------------------------------------

  isEditorExtension: true,

  //---------------------------------------------------------------------
  // Save Button Text
  //---------------------------------------------------------------------

  saveButtonText: "Save Partials",

  //---------------------------------------------------------------------
  // Extension Fields
  //---------------------------------------------------------------------

  fields: [],

  //---------------------------------------------------------------------
  // Default Fields
  //---------------------------------------------------------------------

  defaultFields: {
    partials: [],
  },

  //---------------------------------------------------------------------
  // Extension Dialog Size
  //---------------------------------------------------------------------

  size: function () {
    return { width: 420, height: 250 };
  },

  //---------------------------------------------------------------------
  // Extension HTML
  //---------------------------------------------------------------------

  html: function (data) {
    if (!data.partials) {
      data.partials = [];
    }
    let result = `
    <div style="padding: 24px 16px 16px 16px;">
      <div style="padding: 0px 24px 0px 24px; display: flex; gap: 10px;">
        <div style="flex: 1; text-align: center;">
          <input type="radio" id="None" name="RatioButton" value="None" ${
            data.partials.length === 0 ? "checked" : ""
          }>
          <label for="None">No Partials</label>
        </div>

        <div style="flex: 1; text-align: center;">
          <input type="radio" id="AllPartials" name="RatioButton" value="AllPartials" ${
            data.partials.length === PARTIALS.length ? "checked" : ""
          }>
          <label for="AllPartials">All Partials</label>
        </div>

        <div style="flex: 1; text-align: center;">
          <input type="radio" id="Custom" name="RatioButton" value="Custom" ${
            data.partials.length > 0 && data.partials.length < PARTIALS.length
              ? "checked"
              : ""
          }>
          <label for="Custom">Custom</label>
        </div>
      </div>

      <br>
      <hr>
      <br>

      <div style="padding: 0px 24px 0px 24px;">
  `;
    const partialNames = [
      "User",
      "Channel (Enables DMs)",
      "Guild Member",
      "Message",
      "Reaction",
      "Guild Scheduled Event",
      "ThreadMember",
      "Soundboard Sound",
      "Poll",
      "Poll Answer",
    ];
    for (let i = 0; i < PARTIALS.length; i++) {
      const partial = PARTIALS[i];
      result += `
      <div style="width: 50%; float: left;">
        <input type="checkbox" id="${partial}" name="${partial}" value="${partial}" ${
        data.partials.includes(partial) ? "checked" : ""
      }>
        <label for="${partial}">${partialNames[i]}</label>
      </div>
      ${i % 2 === 1 ? `<div style="height: 24px;"><br></div>` : ""}
    `;
    }
    result += `</div><br></div>`;
    return result;
  },

  //---------------------------------------------------------------------
  // Extension Dialog Init Code
  //---------------------------------------------------------------------

  init: function (document, globalObject) {
    const noneRadio = document.getElementById("None");
    const allRadio = document.getElementById("AllPartials");
    const customRadio = document.getElementById("Custom");
    function EnableAll(enable) {
      for (let i = 0; i < PARTIALS.length; i++) {
        const val = document.getElementById(PARTIALS[i]);
        if (val) val.disabled = !enable;
      }
    }
    if (noneRadio) {
      noneRadio.onclick = function () {
        EnableAll(false);
        for (let i = 0; i < PARTIALS.length; i++) {
          const val = document.getElementById(PARTIALS[i]);
          if (val) val.checked = false;
        }
      };
    }
    if (allRadio) {
      allRadio.onclick = function () {
        EnableAll(false);
        for (let i = 0; i < PARTIALS.length; i++) {
          const val = document.getElementById(PARTIALS[i]);
          if (val) val.checked = true;
        }
      };
    }

    if (customRadio) {
      customRadio.onclick = function () {
        EnableAll(true);
      };
    }
    if (allRadio && allRadio.checked) allRadio.onclick();
    else if (customRadio && customRadio.checked) customRadio.onclick();
    else if (noneRadio && noneRadio.checked) noneRadio.onclick();
  },

  //---------------------------------------------------------------------
  // Extension Dialog Close Code
  //---------------------------------------------------------------------

  close: function (document, data, globalObject) {
    let result = [];
    const noneRadio = document.getElementById("None");
    const allRadio = document.getElementById("AllPartials");
    const customRadio = document.getElementById("Custom");
    if (allRadio && allRadio.checked) {
      result = [...PARTIALS];
    } else if (customRadio && customRadio.checked) {
      for (let i = 0; i < PARTIALS.length; i++) {
        const partial = PARTIALS[i];
        const val = document.getElementById(partial).checked;
        if (val) result.push(partial);
      }
    }
    data.partials = result;
  },

  //---------------------------------------------------------------------
  // Editor Extension Bot Mod
  //---------------------------------------------------------------------

  mod: function (DBM) {
    DBM.Bot.usePartials = function () {
      const partialData = DBM.Files?.data.settings?.["Bot Partials"];
      const partials = partialData?.customData?.["Bot Partials"]?.partials;
      return partials?.length > 0;
    };

    DBM.Bot.partials = function () {
      const partialData = DBM.Files?.data.settings?.["Bot Partials"];
      const partials = partialData?.customData?.["Bot Partials"]?.partials;
      return partials;
    };
  },
};
