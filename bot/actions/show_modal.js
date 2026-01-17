module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Show Modal",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Messaging",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data) {
    const count = data.modalComponents.length;
    return `[${data.modalTitle || "My Modal"}] - with ${count} ${
      count === 1 ? "component" : "components"
    }`;
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/show_modal.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    const result = [];
    for (const {
      storage,
      storageVarName,
      componentType,
    } of data.modalComponents) {
      const type = parseInt(storage, 10);
      if (type !== varType) continue;
      let description;
      if (componentType === "textDisplay") {
        description = "Text Display";
      } else if (componentType === "textInput") {
        description = "Text From Input";
      } else if (componentType === "selectMenu") {
        description = "Select Menu Option";
      } else if (componentType === "fileUpload") {
        description = "File";
      } else {
        description = "Modal Component";
      }
      result.push(storageVarName, description);
    }
    return result.length ? result : undefined;
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: ["modalTitle", "modalComponents"],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<span class="dbminputlabel">Modal Title</span>
<input id="modalTitle" class="round" type="text" value="My Modal">

<br>

<dialog-list id="modalComponents" fields='["componentType", "labelText", "labelDescription", "textDisplay", "textInputMinLength", "textInputMaxLength", "textInputRequired", "textInputStyle", "textInputPlaceholder", "textInputDefaultValue", "selectMenuPlaceholder", "selectMenuRequired", "selectMenuType", "selectMenuMin", "selectMenuMax", "selectMenuDefaultValues", "selectMenuDisabled", "selectMenuOptions", "GuildText", "GuildVoice", "GuildCategory", "GuildAnnouncement", "GuildStageVoice", "GuildForum", "GuildMedia", "fileUploadMinValues", "fileUploadMaxValues", "fileUploadRequired", "storage", "storageVarName"]' saveButtonText="Save Component" dialogTitle="Component Info" dialogWidth="780" dialogHeight="620" listLabel="Components" listStyle="height: calc(100vh - 300px);" itemName="Component" itemCols="1" itemHeight="40px;" itemTextFunction="data.componentType" itemStyle="line-height: 40px;">
  <div style="padding: 16px;">

    <span class="dbminputlabel">Component Type</span>
    <select id="componentType" class="round">
        <option value="textDisplay" selected>Text Display</option>
        <option value="textInput">Text Input</option>
        <option value="selectMenu">Select Menu</option>
        <option value="fileUpload">File Upload</option>
    </select>

    <br><br>

    <div id="labelCompWrapper">
      <div style="float: left; width: 49%;">
        <span class="dbminputlabel">Label Text</span>
        <input id="labelText" class="round" type="text" placeholder="Leave blank for none...">
      </div>
      <div style="float: right; width: 49%;">
        <span class="dbminputlabel">Label Description</span>
        <input id="labelDescription" class="round" type="text" placeholder="Leave blank for none...">
      </div>
      <br><br><br>
    </div>

    <div id="textDisplayWrapper">
      <div style="width: 100%; padding: 8px; height: calc(100vh - 300px); overflow: auto">
        <span class="dbminputlabel">Text to Display</span>
        <textarea id="textDisplay" class="dbm_monospace" rows="10" placeholder="Insert text here..." style="height: calc(100vh - 350px); white-space: nowrap;"></textarea>
      </div>
    </div>

    <div id="textInputWrapper">
      <dbm-container>
        <div style="float: left; width: 49%;">
          <span class="dbminputlabel">Min Length</span>
          <input id="textInputMinLength" class="round" type="text" placeholder="Leave blank for 0..." value="0">
        </div>
        <div style="float: right; width: 49%;">
          <span class="dbminputlabel">Max Length</span>
          <input id="textInputMaxLength" class="round" type="text" placeholder="Leave blank for 4000..." value="4000">
        </div>
        <br><br><br>
        <div style="float: left; width: 49%;">
          <span class="dbminputlabel">Required?</span>
          <select id="textInputRequired" class="round">
            <option value="true" selected>Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div style="float: right; width: 49%;">
          <span class="dbminputlabel">Style</span>
          <select id="textInputStyle" class="round">
            <option value="0" selected>One Line</option>
            <option value="1">Paragraph</option>
          </select>
        </div>
        <br><br><br>
        <span class="dbminputlabel">Placeholder</span>
        <input id="textInputPlaceholder" class="round" type="text" placeholder="Leave blank for none...">
        <br>
        <span class="dbminputlabel">Default Value</span>
        <input id="textInputDefaultValue" class="round" type="text" placeholder="Leave blank for blank...">
      </dbm-container>
    </div>

    <div id="selectMenuWrapper">
      <dbm-container>
        <div style="float: left; width: 58%;">
          <span class="dbminputlabel">Placeholder</span>
          <input id="selectMenuPlaceholder" class="round" type="text" placeholder="Leave blank for default...">
          <br>
          <div style="float: left; width: 49%;">
            <span class="dbminputlabel">Required?</span>
            <select id="selectMenuRequired" class="round">
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
          </div>
          <div style="float: right; width: 49%;">
            <span class="dbminputlabel">Select Menu Type</span>
            <select id="selectMenuType" class="round">
                <option value="StringSelectMenu">String Select Menu</option>
                <option value="UserSelectMenu">User Select Menu</option>
                <option value="RoleSelectMenu">Role Select Menu</option>
                <option value="MentionableSelectMenu">Mentionable Select Menu</option>
                <option value="ChannelSelectMenu">Channel Select Menu</option>
            </select>
          </div>
          <br><br><br>
          <div style="float: left; width: 49%;">
            <span class="dbminputlabel">Min Select Number</span>
            <input id="selectMenuMin" class="round" type="text" placeholder="Leave blank for 1..." value="1">
          </div>
          <div style="float: right; width: 49%;">
            <span class="dbminputlabel">Max Select Number</span>
            <input id="selectMenuMax" class="round" type="text" placeholder="Leave blank for 1..." value="1">
          </div>
          <br><br><br>
          <div style="float: left; width: 49%;">
            <div id="defaultValuesWrapper">
             <span class="dbminputlabel">Default Values
              <help-icon dialogTitle="Default Values" dialogWidth="480" dialogHeight="280">
                <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.5); padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                 <span style="font-size:15px; font-weight:bold; text-decoration:underline;">Default Values</span><br>
                  • The "Default Values" text field is optional and is used to print an array of strings (the strings in the array should contain the user ID/role ID/channel ID, depending on what type of select menu was set in the "Select Menu Type" field).<br>
                  • The set user ID/role ID/channel ID will be displayed in the sent select menu as the default option.<br>
                  • Example: ["1409504484270276699"] or ["1413508103013400627", "1413507702881124362"].
                </div>
              </help-icon> 
            </span>
            <input id="selectMenuDefaultValues" class="round" type="text" placeholder="Leave blank for none...">
           </div>  
          </div>
          <div style="float: right; width: 49%;">
            <span class="dbminputlabel">Enable/Disable Select Menu</span>
            <select id="selectMenuDisabled" class="round">
              <option value="false">Enable</option>
              <option value="true">Disable</option>
            </select>
          </div>
        </div>

        <div style="float: right; width: 40%;">
          <div id="optionsWrapper">
           <dialog-list id="selectMenuOptions" fields='["label", "description", "value", "emoji", "default"]' saveButtonText="Save Option" dialogTitle="Select Menu Option Info" dialogWidth="360" dialogHeight="440" listLabel="Options" listStyle="height: 110px;" itemName="Option" itemCols="1" itemHeight="20px;" itemTextFunction="data.label" itemStyle="text-align: left; line-height: 20px;">
            <div style="padding: 16px;">
              <span class="dbminputlabel">Name</span>
              <input id="label" class="round" type="text">
              <br>
              <span class="dbminputlabel">Description</span>
              <input id="description" class="round" type="text" placeholder="Leave blank for none...">
              <br>
              <span class="dbminputlabel">Value</span>
              <input id="value" placeholder="The text passed to the temp variable..." class="round" type="text">
              <br>
              <span class="dbminputlabel">Emoji</span>
              <input id="emoji" placeholder="Leave blank for none..." class="round" type="text">
              <br>
              <span class="dbminputlabel">Default Selected</span><br>
              <select id="default" class="round">
                <option value="true">Yes</option>
                <option value="false" selected>No</option>
              </select>
            </div>
           </dialog-list>
          </div>
          <br>
          <div id="channelTypesWrapper">
            <span class="dbminputlabel">Channel Types
              <help-icon dialogTitle="Channel Types" dialogWidth="350" dialogHeight="200">
                <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.5); padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                 <span style="font-size:15px; font-weight:bold; text-decoration:underline;">Channel Types</span><br>
                  • The checkboxes in the "Channel Types" container are used to set custom filters on the Channel Select Menu.
                </div>
              </help-icon>            
            </span>
            <dbm-container style="transform: scale(0.8); transform-origin: top left; width: 125%; display: flex; flex-wrap: wrap; gap: 5px; max-height: 120px; overflow-y: auto; border-radius: 5px;">
                <dbm-checkbox id="GuildText" label="Text Channel" style="margin-right: -8px;"></dbm-checkbox>
                <dbm-checkbox id="GuildVoice" label="Voice Channel" style="margin-right: -8px;"></dbm-checkbox>
                <dbm-checkbox id="GuildCategory" label="Category Channel" style="margin-right: -8px;"></dbm-checkbox>
                <dbm-checkbox id="GuildAnnouncement" label="Announcement Channel" style="margin-right: -8px;"></dbm-checkbox>
                <dbm-checkbox id="GuildStageVoice" label="Stage Voice Channel" style="margin-right: -8px;"></dbm-checkbox>
                <dbm-checkbox id="GuildForum" label="Forum Channel" style="margin-right: -8px;"></dbm-checkbox>
                <dbm-checkbox id="GuildMedia" label="Media Channel" style="margin-right: -8px;"></dbm-checkbox>
            </dbm-container>
          </div>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      </dbm-container>
    </div>

    <div id="fileUploadWrapper">
      <dbm-container>
        <div style="float: left; width: 49%;">
          <span class="dbminputlabel">Min Values</span>
          <input id="fileUploadMinValues" class="round" type="text" placeholder="Leave blank for 1..." value="1">
        </div>
        <div style="float: right; width: 49%;">
          <span class="dbminputlabel">Max Values</span>
          <input id="fileUploadMaxValues" class="round" type="text" placeholder="Leave blank for 1..." value="1">
        </div>
        <br><br><br>
        <div style="float: left; width: 49%;">
          <span class="dbminputlabel">Required?</span>
          <select id="fileUploadRequired" class="round">
            <option value="true" selected>Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <br><br><br>
      </dbm-container>
    </div>

    <br>

    <div id="storeInVariableWrapper">
      <store-in-variable allowNone dropdownLabel="Store Result In" selectId="storage" variableInputId="storageVarName" variableContainerId="varNameContainer2"></store-in-variable>
    </div>

  </div>
  <img src="invalid_src" style="display:none" onerror="(function(){const s=document.getElementById('componentType');if(!s)return;const w=['textDisplay','textInput','selectMenu','fileUpload'];const u=()=>{const v=s.value;w.forEach(x=>{const d=document.getElementById(x+'Wrapper');if(d)d.style.display=(x===v?'block':'none');});const labelWrapper=document.getElementById('labelCompWrapper');if(labelWrapper)labelWrapper.style.display=(v==='textDisplay'?'none':'block');};u();s.addEventListener('change',u);})()">
  <img src="invalid_src" style="display:none" onerror="(function(){const s=document.getElementById('selectMenuType');if(!s)return;const o=document.getElementById('optionsWrapper');const d=document.getElementById('defaultValuesWrapper');const c=document.getElementById('channelTypesWrapper');function u(){const v=s.value,isStr=v==='StringSelectMenu',isCh=v==='ChannelSelectMenu';if(o){o.style.opacity=isStr?'1':'0.4';o.style.pointerEvents=isStr?'auto':'none';}if(d){d.style.opacity=isStr?'0.4':'1';d.style.pointerEvents=isStr?'none':'auto';}if(c){c.style.opacity=isCh?'1':'0.4';c.style.pointerEvents=isCh?'auto':'none';}}u();s.addEventListener('change',u);})()">
  <img src="invalid_src" style="display:none" onerror="(function(){const s=document.getElementById('componentType'),w=document.getElementById('storeInVariableWrapper');if(!s||!w)return;const u=()=>{w.style.display=s.value==='textDisplay'?'none':'block'};u();s.addEventListener('change',u)})()">

</dialog-list>
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
    const {
      ModalBuilder,
      TextDisplayBuilder,
      LabelBuilder,
      ChannelType,

      TextInputStyle,
      FileUploadBuilder,
      TextInputBuilder,

      StringSelectMenuBuilder,
      UserSelectMenuBuilder,
      RoleSelectMenuBuilder,
      MentionableSelectMenuBuilder,
      ChannelSelectMenuBuilder,
    } = require("discord.js");
    const { Files } = this.getDBM();

    const modal = new ModalBuilder()
      .setCustomId(cache.interaction.id)
      .setTitle(this.evalMessage(data.modalTitle, cache) || "My Modal");

    for (const c of data.modalComponents) {
      const customId = `modal-${
        this.evalMessage(c.storageVarName, cache) || Files.crypto.randomUUID()
      }`;
      if (c.componentType === "textDisplay") {
        // Text Display
        const text = new TextDisplayBuilder().setContent(
          this.evalMessage(c.textDisplay, cache),
        );
        modal.addTextDisplayComponents(text);
      } else {
        const labelText = this.evalMessage(c.labelText, cache) || "ᅠ";
        const description = this.evalMessage(c.labelDescription, cache);
        if (c.componentType === "textInput") {
          // Text Input
          const minLength =
            parseInt(this.evalMessage(c.textInputMinLength, cache), 10) || 0;
          const maxLength =
            parseInt(this.evalMessage(c.textInputMaxLength, cache), 10) || 4000;
          const required = this.parseBool(c.textInputRequired);
          const style =
            c.textInputStyle === "1"
              ? TextInputStyle.Paragraph
              : TextInputStyle.Short;
          const placeholder = this.evalMessage(c.textInputPlaceholder, cache);
          const value = this.evalMessage(c.textInputDefaultValue, cache);
          const label = new LabelBuilder()
            .setLabel(labelText)
            .setTextInputComponent(
              new TextInputBuilder()
                .setCustomId(customId)
                .setMinLength(minLength)
                .setMaxLength(maxLength)
                .setPlaceholder(placeholder)
                .setRequired(required)
                .setStyle(style)
                .setValue(value),
            );
          if (description) label.setDescription(description);
          modal.addLabelComponents(label);
        } else if (c.componentType === "selectMenu") {
          // Select Menu
          const placeholder =
            this.evalMessage(c.selectMenuPlaceholder, cache) || null;
          const required = this.parseBool(c.selectMenuRequired) || true;
          const type = c.selectMenuType;
          const min =
            parseInt(this.evalMessage(c.selectMenuMin, cache), 10) || 1;
          const max =
            parseInt(this.evalMessage(c.selectMenuMax, cache), 10) || 1;
          const defaultValues =
            this.evalMessage(c.selectMenuDefaultValues, cache) || null;
          const disabled = this.parseBool(c.selectMenuDisabled) || false;

          const label = new LabelBuilder().setLabel(labelText);
          if (description) label.setDescription(description);

          if (type === "StringSelectMenu") {
            const options = [];
            for (const o of c.selectMenuOptions) {
              const option = this.generateStringSelectMenuOption(
                {
                  default: o.default,
                  description: o.description,
                  emoji: o.emoji,
                  label: o.label,
                  value: o.value,
                },
                cache,
              );
              options.push(option);
            }
            const selectMenu = new StringSelectMenuBuilder()
              .setCustomId(customId)
              .setRequired(required)
              .setMinValues(min)
              .setMaxValues(max)
              .setDisabled(disabled)
              .setOptions(options);
            if (placeholder) selectMenu.setPlaceholder(placeholder);
            label.setStringSelectMenuComponent(selectMenu);
          } else if (type === "UserSelectMenu") {
            const selectMenu = new UserSelectMenuBuilder()
              .setCustomId(customId)
              .setRequired(required)
              .setMinValues(min)
              .setMaxValues(max)
              .setDisabled(disabled);
            if (defaultValues) selectMenu.setDefaultUsers(defaultValues);
            if (placeholder) selectMenu.setPlaceholder(placeholder);
            label.setUserSelectMenuComponent(selectMenu);
          } else if (type === "RoleSelectMenu") {
            const selectMenu = new RoleSelectMenuBuilder()
              .setCustomId(customId)
              .setRequired(required)
              .setMinValues(min)
              .setMaxValues(max)
              .setDisabled(disabled);
            if (defaultValues) selectMenu.setDefaultRoles(defaultValues);
            if (placeholder) selectMenu.setPlaceholder(placeholder);
            label.setRoleSelectMenuComponent(selectMenu);
          } else if (type === "MentionableSelectMenu") {
            const selectMenu = new MentionableSelectMenuBuilder()
              .setCustomId(customId)
              .setRequired(required)
              .setMinValues(min)
              .setMaxValues(max)
              .setDisabled(disabled);
            if (defaultValues) selectMenu.setDefaultValues(defaultValues);
            if (placeholder) selectMenu.setPlaceholder(placeholder);
            label.setMentionableSelectMenuComponent(selectMenu);
          } else if (type === "ChannelSelectMenu") {
            const channelTypes = [];
            if (c.GuildText) channelTypes.push(ChannelType.GuildText);
            if (c.GuildVoice) channelTypes.push(ChannelType.GuildVoice);
            if (c.GuildCategory) channelTypes.push(ChannelType.GuildCategory);
            if (c.GuildAnnouncement)
              channelTypes.push(ChannelType.GuildAnnouncement);
            if (c.GuildStageVoice)
              channelTypes.push(ChannelType.GuildStageVoice);
            if (c.GuildForum) channelTypes.push(ChannelType.GuildForum);
            if (c.GuildMedia) channelTypes.push(ChannelType.GuildMedia);
            const selectMenu = new ChannelSelectMenuBuilder()
              .setCustomId(customId)
              .setRequired(required)
              .setMinValues(min)
              .setMaxValues(max)
              .setDisabled(disabled)
              .setChannelTypes(channelTypes);
            if (defaultValues) selectMenu.setDefaultChannels(defaultValues);
            if (placeholder) selectMenu.setPlaceholder(placeholder);
            label.setChannelSelectMenuComponent(selectMenu);
          }
          modal.addLabelComponents(label);
        } else if (c.componentType === "fileUpload") {
          // File Upload
          const minValues =
            parseInt(this.evalMessage(c.fileUploadMinValues, cache), 10) || 1;
          const maxValues =
            parseInt(this.evalMessage(c.fileUploadMaxValues, cache), 10) || 1;
          const required = this.parseBool(c.fileUploadRequired);
          const label = new LabelBuilder()
            .setLabel(labelText)
            .setFileUploadComponent(
              new FileUploadBuilder()
                .setCustomId(customId)
                .setMinValues(minValues)
                .setMaxValues(maxValues)
                .setRequired(required),
            );
          if (description) label.setDescription(description);
          modal.addLabelComponents(label);
        }
      }
    }

    if (cache.interaction) {
      if (cache.interaction.showModal) {
        this.registerModalSubmitResponses(
          cache.interaction.id,
          (newInteraction) => {
            newInteraction.__originalInteraction = cache.interaction;
            cache.interaction = newInteraction;

            for (const c of data.modalComponents) {
              const varName = this.evalMessage(c.storageVarName, cache);
              const id = `modal-${varName}`;
              const storage = parseInt(c.storage, 10);
              let value = "";
              const type = c.componentType;
              if (type === "textDisplay") {
                value = undefined;
              } else if (type === "textInput") {
                try {
                  value = newInteraction.fields.getTextInputValue(id);
                } catch {
                  value = undefined;
                }
              } else if (type === "selectMenu") {
                const selectMenuType = c.selectMenuType;
                if (selectMenuType === "StringSelectMenu") {
                  try {
                    value = newInteraction.fields.getStringSelectValues(id);
                  } catch {
                    value = undefined;
                  }
                } else if (selectMenuType === "UserSelectMenu") {
                  try {
                    value = newInteraction.fields.getSelectedUsers(id);
                    value = [...value.keys()];
                  } catch {
                    value = undefined;
                  }
                } else if (selectMenuType === "RoleSelectMenu") {
                  try {
                    value = newInteraction.fields.getSelectedRoles(id);
                    value = [...value.keys()];
                  } catch {
                    value = undefined;
                  }
                } else if (selectMenuType === "MentionableSelectMenu") {
                  try {
                    value = newInteraction.fields.getSelectedMentionables(id);
                    value = [...value.keys()];
                  } catch {
                    value = undefined;
                  }
                } else if (selectMenuType === "ChannelSelectMenu") {
                  try {
                    value = newInteraction.fields.getSelectedChannels(id);
                    value = [...value.keys()];
                  } catch {
                    value = undefined;
                  }
                }
              } else if (type === "fileUpload") {
                try {
                  value = newInteraction.fields.getAttachments(id);
                } catch {
                  value = undefined;
                }
              }
              this.storeValue(value, storage, varName, cache);
            }

            this.callNextAction(cache);
          },
        );

        cache.interaction.showModal(modal);
      } else {
        this.displayError(
          data,
          cache,
          "Cannot show modal from current interaction, perhaps attempting to show modal multiple times?",
        );
        this.callNextAction(cache);
      }
    } else {
      this.callNextAction(cache);
    }
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
