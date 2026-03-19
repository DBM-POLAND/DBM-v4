module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Edit Button",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Messaging",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data) {
    if (data.sourceButton === "0") return `Current Button`;
    else return `Button by ID "${data.buttonId}"`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/edit_button.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "sourceButton",
    "buttonId",
    "message",
    "varName",
    "buttonName",
    "buttonEmoji",
    "buttonType",
    "disabled",
    "url",
    "skuId",
  ],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html() {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<div>
	<div style="float: left; width: 40%;">
		<span class="dbminputlabel">Source Buton</span>
		<select id="sourceButton" class="round">
			<option value="0" selected>Current Button</option>
			<option value="1">Button by ID</option>
		</select>
	</div>
	<div id="buttonIdWrapper" style="float: right; width: 55%;">
		<span class="dbminputlabel">Button ID</span>
		<input id="buttonId" class="round" type="text">
	</div>
</div>
<br><br><br>
<div id="sourceMessageWrapper">
  <retrieve-from-variable allowNone dropdownLabel="Source Message" selectId="message" variableInputId="varName" variableContainerId="varNameContainer">
    <option value="auto" selected>Automatic Search</option>
  </retrieve-from-variable>
</div>
<br><br><br><br>
<div style="float: left; width: 49%;">
  <span class="dbminputlabel">Name</span>
  <input id="buttonName" class="round" type="text" placeholder="Leave blank to not edit...">
</div>
<div style="float: right; width: 49%;">
  <span class="dbminputlabel">Emoji</span>
  <input id="buttonEmoji" class="round" type="text" placeholder="Leave blank to not edit...">
</div>
<br><br><br>
<div style="float: left; width: 49%;">
  <span class="dbminputlabel">Type</span>
  <select id="buttonType" class="round">
    <option value="0" selected>Not Edit</option>
    <option value="1">Primary (Blurple)</option>
    <option value="2">Secondary (Grey)</option>
    <option value="3">Success (Green)</option>
    <option value="4">Danger (Red)</option>
    <option value="5">Link (Grey)</option>
    <option value="6">Premium (Blurple)</option>
  </select>
</div>
<div style="float: right; width: 49%;">
  <span class="dbminputlabel">Enable/Disable Button</span>
  <select id="disabled" class="round">
    <option value="false">Enable</option>
    <option value="true">Disable</option>
  </select>
</div>
<br><br><br>
<div id="linkUrlWrapper" style="float: left; width: 49%;">
  <span class="dbminputlabel">
    Link URL
    <help-icon dialogTitle="Link URL" dialogWidth="480" dialogHeight="280">
      <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.5); padding: 10px; border-radius: 5px; margin-bottom: 10px;">
        <span style="font-size:15px; font-weight:bold; text-decoration:underline;">Link URL</span><br>
        • In the "Link URL" text box you should enter a link, e.g. to a website.<br>
        • The "Link URL" text field only needs to be filled in if we have set the button type to "Link (Grey)".
      </div>
    </help-icon>
  </span>
  <input id="url" placeholder="Leave blank for none..." class="round" type="text">
</div>
<br><br><br>
<div id="skuIdWrapper" style="float: left; width: 49%;">
  <span class="dbminputlabel">
    SKU ID
    <help-icon dialogTitle="SKU ID" dialogWidth="500" dialogHeight="280">
      <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.5); padding: 10px; border-radius: 5px; margin-bottom: 10px; word-wrap: break-word; overflow-wrap: break-word;">
        <span style="font-size:15px; font-weight:bold; text-decoration:underline;">SKU ID</span><br>
        • In the "SKU ID" text box, enter the ID of the appropriate SKU subscription.<br>
        • The "SKU ID" text field only needs to be completed if the button type is set to "Premium (Blurple)".<br>
        • To use the "Premium (Blurple)" button, please make sure that the bot is verified and has monetization unlocked on the <a href="https://discord.com/developers/applications" style="word-break: break-word;">Discord Developer Portal</a> page.
      </div>
    </help-icon>
  </span>
  <input id="skuId" placeholder="Leave blank for none..." class="round" type="text">
</div>
`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const d = document,
      btnType = d.getElementById("buttonType"),
      btnSelect = d.getElementById("sourceButton"),
      lW = d.getElementById("linkUrlWrapper"),
      sW = d.getElementById("skuIdWrapper"),
      bW = d.getElementById("buttonIdWrapper"),
      smW = d.getElementById("sourceMessageWrapper"),
      lI = d.getElementById("url"),
      sI = d.getElementById("skuId");
    const rv = d.querySelector("retrieve-from-variable[allowNone]");
    if (rv) {
      const optionNothing = Array.from(rv.querySelectorAll("option")).find(
        (opt) => opt.text === "Nothing",
      );
      if (optionNothing) optionNothing.remove();
    }
    const upd = () => {
      const tVal = btnType.options[btnType.selectedIndex].text;
      const bVal = btnSelect.value;
      lW.style.opacity = lI.disabled = tVal !== "Link (Grey)" ? "0.5" : "1";
      sW.style.opacity = sI.disabled =
        tVal !== "Premium (Blurple)" ? "0.5" : "1";
      bW.style.display = bVal === "1" ? "block" : "none";
      smW.style.opacity = smW.querySelector("*").disabled =
        bVal === "1" ? "1" : "0.5";
      smW
        .querySelectorAll("input, select, textarea, dbm-variable")
        .forEach((el) => {
          el.disabled = bVal !== "1";
        });
    };
    lW.style.opacity = sW.style.opacity = "0.5";
    lI.disabled = sI.disabled = true;
    bW.style.display = "none";
    smW.style.opacity = "0.5";
    smW
      .querySelectorAll("input, select, textarea, dbm-variable")
      .forEach((el) => (el.disabled = true));
    btnType.addEventListener("change", upd);
    btnSelect.addEventListener("change", upd);
    upd();
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    const data = cache.actions[cache.index];
    const {
      ActionRowBuilder,
      ButtonBuilder,
      MessageFlags,
    } = require("discord.js");
    const { interaction } = cache;

    const sourceButton = parseInt(data.sourceButton, 10);
    let buttonId = this.evalMessage(data.buttonId, cache);
    const o = {
      name: this.evalMessage(data.buttonName, cache),
      emoji: this.evalMessage(data.buttonEmoji, cache),
      style: parseInt(data.buttonType, 10),
      disabled: data.disabled === "true",
      url: this.evalMessage(data.url, cache),
      skuId: this.evalMessage(data.skuId, cache),
    };

    const autoFindMessage = async () => {
      let message;
      if (sourceButton === 0) {
        message = interaction.message;
        buttonId = interaction.component.customId;
      } else {
        if (data.message === "auto") {
          try {
            const messages = await interaction.channel.messages.fetch({
              limit: 100,
            });
            message = messages.find((msg) =>
              msg.components.some((row) =>
                row.components.some((btn) => btn.customId === buttonId),
              ),
            );
          } catch (err) {
            // this.displayError(data, cache, err);
          }
          if (!message) {
            const channels = interaction.guild.channels.cache.filter((c) =>
              c.isTextBased(),
            );
            for (const ch of channels.values()) {
              try {
                const messages = await ch.messages.fetch({ limit: 100 });
                message = messages.find((msg) =>
                  msg.components.some((row) =>
                    row.components.some((btn) => btn.customId === buttonId),
                  ),
                );
                if (message) break;
              } catch {
                continue;
              }
            }
          }
        } else {
          message = this.getVariable(
            parseInt(data.message, 10),
            this.evalMessage(data.varName, cache),
            cache,
          );
        }
      }
      return message;
    };

    const findButtonInMessage = (message, buttonId) => {
      let button;
      if (!message.flags?.has?.(MessageFlags.IsComponentsV2)) {
        for (const row of message.components) {
          for (const comp of row.components) {
            if (comp.customId === buttonId) {
              button = comp;
              break;
            }
          }
          if (button) break;
        }
      } else {
        this.displayError(data, cache, "Components V2 Currently Unsupported!");
      }
      return button;
    };

    const editButton = async (message, buttonToEdit) => {
      const button = ButtonBuilder.from(buttonToEdit);
      if (o.name) button.setLabel(o.name);
      if (o.emoji) button.setEmoji(o.emoji);
      if (o.style === 0) button.setStyle(buttonToEdit.style);
      else button.setStyle(o.style);
      button.setDisabled(o.disabled);
      if (o.url) button.setURL(o.url);
      if (o.skuId) button.setSKUId(o.skuId);

      if (!message.flags?.has?.(MessageFlags.IsComponentsV2)) {
        try {
          const newComponents = message.components.map((row, i) => {
            return new ActionRowBuilder().addComponents(
              row.components.map((c) =>
                c.customId === buttonToEdit.customId
                  ? button
                  : ButtonBuilder.from(c),
              ),
            );
          });
          await message.edit({ components: newComponents });
          return true;
        } catch {
          return false;
        }
      } else {
        try {
          this.displayError(
            data,
            cache,
            "Components V2 Currently Unsupported!",
          );
          return false;
        } catch {
          return false;
        }
      }
    };

    const message = await autoFindMessage();
    const buttonToEdit = findButtonInMessage(message, buttonId);
    await editButton(message, buttonToEdit);

    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
