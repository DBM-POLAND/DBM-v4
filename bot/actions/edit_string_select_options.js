module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Edit String Select Menu Options",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Messaging",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    const optionChange = data.optionChange ?? {};
    if (optionChange._index === 0) {
      return `Add Option Labeled "${optionChange.label}"`;
    } else if (optionChange.type === "value") {
      return `Remove Option with Value "${optionChange.value}"`;
    }
    return `Remove Option with Label "${optionChange.value}"`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/edit_string_select_options.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["message", "messageVarName", "type", "searchValue", "optionChange"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<message-input dropdownLabel="Source Message" selectId="message" variableContainerId="varNameContainer" variableInputId="messageVarName"></message-input>
<br><br><br><br>
<div style="float: left; width: calc(50% - 12px);">
  <span class="dbminputlabel">Components to Edit</span><br>
  <select id="type" class="round" onchange="glob.onButtonSelectTypeChange(this)">
    <option value="allSelects">All Select Menus</option>
    <option value="sourceSelect" selected>Source Select Menu</option>
    <option value="findSelect">Specific Select Menu</option>
  </select>
</div>
<div style="float: right; width: calc(50% - 12px);">
  <div id="nameContainer">
    <span class="dbminputlabel">Select Menu Label/ID</span><br>
    <input id="searchValue" class="round" type="text">
  </div>
</div>
<br><br><br><br>
<tab-system exclusiveTabData spreadOut id="optionChange">
  <tab label="Add Option" icon="plus" fields='["label", "description", "value", "emoji"]'>
    <div style="padding: 8px;">
      <div style="float: left; width: calc(50% - 12px);">
        <span class="dbminputlabel">Name</span>
        <input id="label" class="round" type="text">
        <br>
        <span class="dbminputlabel">Value</span>
        <input id="value" placeholder="Passed to the temp variable..." class="round" type="text">
      </div>
      <div style="float: right; width: calc(50% - 12px);">
        <span class="dbminputlabel">Description</span>
        <input id="description" class="round" type="text" placeholder="Leave blank for none...">
        <br>
        <span class="dbminputlabel">Emoji</span>
        <input id="emoji" placeholder="Leave blank for none..." class="round" type="text">
      </div>
      <br><br><br><br><br><br>
    </div>
  </tab>
  <tab label="Remove Option" icon="x icon" fields='["type", "value"]'>
    <div style="padding: 8px; margin-bottom: 10px;">
      <div style="float: left; width: calc(50% - 12px);">
        <span class="dbminputlabel">Remove Type</span><br>
        <select id="type" class="round">
          <option value="value" selected>Remove By Value</option>
          <option value="label">Remove By Label</option>
        </select>
      </div>
      <div id="removeValueContainer" style="float: right; width: calc(50% - 12px);">
        <span class="dbminputlabel">Option Value to Remove</span>
        <input id="value" class="round" type="text">
      </div>
      <br><br>
    </div>
  </tab>
</tab-system>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const { glob } = this;
    glob.onButtonSelectTypeChange = function (event) {
      const input = document.getElementById("nameContainer");
      input.style.display = event.value === "findSelect" ? null : "none";
    };
    glob.onButtonSelectTypeChange(document.getElementById("type"));
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    const data = cache.actions[cache.index];
    const message = await this.getMessageFromData(
      data.message,
      data.messageVarName,
      cache,
    );
    if (!message || !message.components?.length) {
      this.callNextAction(cache);
      return;
    }
    const {
      ActionRowBuilder,
      StringSelectMenuBuilder,
      ComponentType,
    } = require("discord.js");
    const type = data.type;
    const optionChange = data.optionChange ?? {};
    let newOptionData = null;
    let removeOptionValue = null;
    let removeOptionLabel = null;
    if (optionChange._index === 0) {
      newOptionData = {
        label: this.evalMessage(optionChange.label, cache),
        value: this.evalMessage(optionChange.value, cache),
      };
      if (optionChange.description) {
        newOptionData.description = this.evalMessage(
          optionChange.description,
          cache,
        );
      }
      if (optionChange.emoji) {
        newOptionData.emoji = this.evalMessage(optionChange.emoji, cache);
      }
      newOptionData.default = false;
    } else if (optionChange._index === 1) {
      if (optionChange.type === "value") {
        removeOptionValue = this.evalMessage(optionChange.value, cache);
      } else if (optionChange.type === "label") {
        removeOptionLabel = this.evalMessage(optionChange.value, cache);
      }
    }
    let sourceSelect = null;
    if (
      cache.interaction?.isStringSelectMenu &&
      cache.interaction?.isStringSelectMenu()
    ) {
      sourceSelect = cache.interaction.customId;
    }
    let searchValue = null;
    const getSearchValue = () => {
      if (searchValue === null)
        searchValue = this.evalMessage(data.searchValue, cache);
      return searchValue;
    };
    const normalizeOption = (o) => {
      if (!o) return null;
      const src = o.data ?? o;
      return {
        label: src.label,
        value: src.value,
        description: src.description,
        emoji: src.emoji,
        default: src.default ?? false,
      };
    };
    const newComponents = message.components.map((row) => {
      const rowBuilder = ActionRowBuilder.from(row);
      rowBuilder.components = rowBuilder.components.map((comp) => {
        const compType =
          comp.type ??
          comp.data?.type ??
          (comp.constructor &&
          comp.constructor.name === "StringSelectMenuBuilder"
            ? ComponentType.StringSelect
            : undefined);
        if (
          compType !== ComponentType.StringSelect &&
          compType !== "SELECT_MENU"
        ) {
          return comp;
        }
        const selectBuilder = StringSelectMenuBuilder.from(comp);
        const compCustomId =
          selectBuilder.customId ??
          selectBuilder.data?.custom_id ??
          selectBuilder.data?.customId;
        if (type === "sourceSelect" && compCustomId !== sourceSelect)
          return comp;
        if (type === "findSelect") {
          const sv = getSearchValue();
          const labelCandidate =
            selectBuilder.data?.label ??
            selectBuilder.data?.custom_label ??
            undefined;
          if (compCustomId !== sv && labelCandidate !== sv) return comp;
        }
        const currentOptions = (selectBuilder.options ?? [])
          .map(normalizeOption)
          .filter(Boolean);
        if (newOptionData) {
          const exists = currentOptions.some(
            (o) => o.value === newOptionData.value,
          );
          if (!exists) {
            selectBuilder.setOptions([...currentOptions, newOptionData]);
          } else {
            const updated = currentOptions.map((o) =>
              o.value === newOptionData.value ? { ...o, ...newOptionData } : o,
            );
            selectBuilder.setOptions(updated);
          }
        } else if (removeOptionValue) {
          const filtered = currentOptions.filter(
            (o) => o.value !== removeOptionValue,
          );
          selectBuilder.setOptions(filtered);
        } else if (removeOptionLabel) {
          const filtered = currentOptions.filter(
            (o) => o.label !== removeOptionLabel,
          );
          selectBuilder.setOptions(filtered);
        }
        return selectBuilder;
      });
      return rowBuilder;
    });
    try {
      await message.edit({ components: newComponents });
    } catch (err) {
      this.displayError(data, cache, err);
    }

    try {
      if (message?.edit) {
        await message.edit({ components: newComponents });
      } else {
        if (message.components) {
          message.components = newComponents;
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
