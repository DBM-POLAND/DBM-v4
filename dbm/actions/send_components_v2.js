const getAllButtons = (data) => {
  const buttons = [];
  for (const c of data.components) {
    if (c.componentType === "1") {
      for (const a of c.accessory) if (a.accessoryType === "0") buttons.push(a);
    } else if (c.componentType === "2") {
      for (const cc of c.containerComponents) {
        if (cc.componentType === "1") {
          for (const a of cc.accessory) buttons.push(a);
        } else if (cc.componentType === "6") {
          for (const b of cc.buttons) buttons.push(b);
        }
      }
    } else if (c.componentType === "6") {
      for (const b of c.buttons) buttons.push(b);
    }
  }
  return buttons;
};
const getAllSelects = (data) => {
  const selects = [];
  for (const c of data.components) {
    if (c.componentType === "2") {
      for (const cc of c.containerComponents) {
        if (cc.componentType === "7") {
          for (const s of cc.selects) selects.push(s);
        }
      }
    } else if (c.componentType === "7") {
      for (const s of c.selects) selects.push(s);
    }
  }
  return selects;
};

module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Send Components V2",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Messaging",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Size
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  size() {
    return { width: 610, height: 600 };
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Subtitle
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  subtitle(data, presets) {
    if (data.actionDescription) {
      return `<span style="color: ${
        data.actionDescriptionColor || "#ffffff"
      };">${data.actionDescription}</span>`;
    }
    let targetText = presets.getSendReplyTargetText(data.channel, data.varName);
    if (data.dontSend) {
      targetText = `Don't Send`;
    } else if (data.editMessage !== "0") {
      switch (data.editMessage) {
        case "intUpdate":
          targetText = "Interaction Update";
          break;
        case "deferUpdate":
          targetText = "Defer Update";
          break;
        case "replyUpdate":
          targetText = "Reply Update";
          break;
        default:
          targetText = `Edit ${presets.getVariableText(
            data.editMessage,
            data.editMessageVarName,
          )}`;
      }
    }
    const messageText =
      data.components.length === 0
        ? "Nothing (might cause error)"
        : `${data.components.length} ${
            data.components.length === 1 ? "Component" : "Components"
          }`;
    return `${targetText} - ${messageText}`;
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Storage Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    return [data.varName2, data.dontSend ? "Message Options" : "Message"];
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Meta Data
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  meta: {
    version: "4.0.0",
    modVersion: "1.0.1",
    preciseCheck: true,
    author: "Shadow",
    help: "https://dc.dbm-poland.site",
    authorUrl: "https://github.com/shadoow051",
    downloadUrl:
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/send_components_v2.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "channel",
    "varName",
    "components",
    "reply",
    "ephemeral",
    "tts",
    "dontSend",
    "pinMsgAfterSend",
    "overwriteChanges",
    "allowMentionUsers",
    "allowMentionRoles",
    "allowMentionEveryone",
    "allowMentionCommandUser",
    "suppressNotifications",
    "actionDescription",
    "actionDescriptionColor",
    "editMessage",
    "editMessageVarName",
    "storage",
    "varName2",
  ],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<send-reply-target-input selectId="channel" variableInputId="varName"></send-reply-target-input>
<br><br><br>
<tab-system>
  <tab label="Components" icon="comment">
    <dialog-list id="components" fields='["componentType", "componentCustomName", "", "defaultContent", "", "sectionContent", "accessory", "", "containerColor", "containerSpoiler", "containerComponents", "", "images", "", "files", "", "divider", "spacing", "", "buttons", "selects"]' saveButtonText="Save Component" dialogTitle="Component Info" dialogWidth="780" dialogHeight="620" listLabel="Components" listStyle="height: calc(100vh - 300px);" itemName="Component" itemCols="1" itemHeight="40px;" itemTextFunction="glob.formatItemComponent(data)" itemStyle="line-height: 40px;">
      <div style="padding: 16px 16px 0px 16px;">
        <div id="componentTypeWrapper" style="float: left; width: 49%;">
          <span class="dbminputlabel">Component Type</span>
          <select id="componentType" class="round">
            <option value="0" selected>Content</option>
            <option value="1">Section</option>
            <option value="2">Container</option>
            <option value="3">Images</option>
            <option value="4">Files</option>
            <option value="5">Separator</option>
            <option value="6">Buttons</option>
            <option value="7">Select Menu</option>
          </select>
        </div>
        <div id="componentCustomNameWrapper" style="float: right; width: 40%;">
          <span class="dbminputlabel">Component Custom Name</span>
          <input id="componentCustomName" class="round" type="text" placeholder="Leave blank for default...">
        </div>
        <br><br><br>
        <dbm-container>
          <div id="contentComponentWrapper">
            <span class="dbminputlabel">Content</span>
            <textarea id="defaultContent" class="dbm_monospace" rows="10" placeholder="Insert content here..." style="height: calc(100vh - 300px); white-space: nowrap;"></textarea>
          </div>
          <div id="sectionComponentWrapper">
            <span class="dbminputlabel">Section Content</span>
            <textarea id="sectionContent" class="dbm_monospace" rows="5" placeholder="Insert content here..." style="height: calc(100vh - 400px); white-space: nowrap;"></textarea>
            <br>
            <dialog-list id="accessory" fields='["accessoryType", "accessoryComponentCustomDescription", "name", "customId", "type", "emoji", "url", "time", "skuId", "disabled", "mode", "actions", "thumbnail", "thumbnailSpoiler"]' saveButtonText="Save Accessory", dialogTitle="Accessory Info" dialogWidth="600" dialogHeight="650" listLabel="Accessory (1 - 1)" listStyle="height: calc(100vh - 548px);" itemName="Accessory" itemCols="1" itemHeight="50px;" itemTextFunction="data.accessoryComponentCustomDescription || 'Accessory Component Description'" itemStyle="text-align: left; line-height: 50px;">
              <div style="padding: 16px 16px 0px 16px;">
                <div style="float: left; width: 49%;">
                  <span class="dbminputlabel">Accessory Type</span>
                  <select id="accessoryType" class="round">
                    <option value="0" selected>Button</option>
                    <option value="1">Thumbnail</option>
                  </select>
                </div>
                <div id="componentCustomDescriptionWrapper" style="float: right; width: 40%;">
                  <span class="dbminputlabel">Component Custom Description</span>
                  <input id="accessoryComponentCustomDescription" class="round" type="text" placeholder="Leave blank for default...">
                </div>
                <br><br><br>
                <dbm-container>
                  <div id="buttonAccessoryWrapper">
                    <div style="float: left; width: 49%;">
                      <span class="dbminputlabel">Name</span>
                      <input id="name" class="round" type="text" placeholder="Leave blank for none...">
                    </div>
                    <div style="float: right; width: 49%;">
                      <span class="dbminputlabel">Unique ID</span>
                      <input id="customId" class="round" type="text" placeholder="Leave blank to auto-generate...">
                    </div>
                    <br><br><br>
                    <div style="float: left; width: 49%;">
                      <span class="dbminputlabel">Type</span>
                      <select id="type" class="round">
                        <option value="1" selected>Primary (Blurple)</option>
                        <option value="2">Secondary (Grey)</option>
                        <option value="3">Success (Green)</option>
                        <option value="4">Danger (Red)</option>
                        <option value="5">Link (Grey)</option>
                        <option value="6">Premium (Blurple)</option>
                      </select>
                    </div>
                    <div style="float: right; width: 49%;">
                      <span class="dbminputlabel">Emoji</span>
                      <input id="emoji" class="round" type="text" placeholder="Leave blank for none...">
                    </div>
                    <br><br><br>
                    <div id="linkUrlWrapper" style="float: left; width: 49%;">
                      <span class="dbminputlabel">Link URL
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
                    <div style="float: right; width: 49%;">
                      <span class="dbminputlabel">Temporary Time-Limit (Miliseconds)</span>
                      <input id="time" placeholder="60000" class="round" type="text">
                    </div>
                    <br><br><br>
                    <div id="skuIdWrapper" style="float: left; width: 49%;">
                      <span class="dbminputlabel">SKU ID
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
                    <div style="float: right; width: 49%;">
                      <span class="dbminputlabel">Enable/Disable Button</span>
                      <select id="disabled" class="round">
                        <option value="false">Enable</option>
                        <option value="true">Disable</option>
                      </select>
                    </div>
                    <br><br><br>
                    <div style="float: left; width: 49%;">
                      <span class="dbminputlabel">Action Response Mode<help-icon type="ACTION_RESPONSE_MODE"></help-icon></span>
                      <select id="mode" class="round">
                        <option value="PERSONAL">Once, Command User Only</option>
                        <option value="PUBLIC">Once, Anyone Can Use</option>
                        <option value="MULTIPERSONAL">Multi, Command User Only</option>
                        <option value="MULTI" selected>Multi, Anyone Can Use</option>
                        <option value="PERSISTENT">Persistent</option>
                      </select>
                    </div>
                    <br><br><br>
                    <action-list-input mode="BUTTON" id="actions" height="calc(100vh - 500px)"></action-list-input>
                  </div>
                  <div id="thumbnailAccessoryWrapper">
                    <span class="dbminputlabel">Thumbnail (url/path/buffer)</span>
                    <input id="thumbnail" class="round" type="text" value="resources/">
                    <br>
                    <div style="text-align: center;">
                      <dbm-checkbox id="thumbnailSpoiler" label="Make Thumbnail Spoiler"></dbm-checkbox>
                    </div>
                  </div>
                </dbm-container>
              </div>
              <img src="invalid_src" style="display:none" onerror="(function(){const s=document.getElementById('accessoryType');const wrappers={'0':document.getElementById('buttonAccessoryWrapper'),'1':document.getElementById('thumbnailAccessoryWrapper')};if(!s)return;function u(){for(const k in wrappers){if(wrappers[k])wrappers[k].style.display=k===s.value?'block':'none';}}u();s.addEventListener('change',u);})()">
              <img src="invalid_src" style="display:none" onerror="(function(){const t=document.getElementById('type'),l=document.getElementById('linkUrlWrapper'),s=document.getElementById('skuIdWrapper');if(!t)return;function e(w,n){if(!w)return;const i=w.querySelector('input');w.style.opacity=n?'1':'0.4';w.style.pointerEvents=n?'auto':'none';if(i)i.disabled=!n;}function u(){const v=t.value;e(l,v==='5');e(s,v==='6');}u();t.addEventListener('change',u);})()">
            </dialog-list>
          </div>
          <div id="containerComponentWrapper">
            <div style="float: left; width: 49%;">
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex-grow:1">
                    <span class="dbminputlabel">Color
                      <help-icon dialogTitle="Embed Colors" dialogWidth="500" dialogHeight="600">
                        <div style="background:rgba(0,0,0,0.25); border:1px solid rgba(255,255,255,0.5); padding:10px; border-radius:5px; margin-bottom:10px;">
                          <span style="font-size:15px; font-weight:bold; text-decoration:underline;">List of Word Colors</span>
                          <div style="display:flex; flex-direction:column; gap:4px; margin-top:5px;">
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#000000; border-radius:50%; margin-right:10px;"></span>Default</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#ffffff; border-radius:50%; margin-right:10px;"></span>White</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#1abc9c; border-radius:50%; margin-right:10px;"></span>Aqua</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#57f287; border-radius:50%; margin-right:10px;"></span>Green</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#3498db; border-radius:50%; margin-right:10px;"></span>Blue</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#fee75c; border-radius:50%; margin-right:10px;"></span>Yellow</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#9b59b6; border-radius:50%; margin-right:10px;"></span>Purple</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#e91e63; border-radius:50%; margin-right:10px;"></span>LuminousVividPink</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#eb459e; border-radius:50%; margin-right:10px;"></span>Fuchsia</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#f1c40f; border-radius:50%; margin-right:10px;"></span>Gold</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#e67e22; border-radius:50%; margin-right:10px;"></span>Orange</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#ed4245; border-radius:50%; margin-right:10px;"></span>Red</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#95a5a6; border-radius:50%; margin-right:10px;"></span>Grey</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#34495e; border-radius:50%; margin-right:10px;"></span>Navy</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#11806a; border-radius:50%; margin-right:10px;"></span>DarkAqua</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#1f8b4c; border-radius:50%; margin-right:10px;"></span>DarkGreen</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#206694; border-radius:50%; margin-right:10px;"></span>DarkBlue</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#71368a; border-radius:50%; margin-right:10px;"></span>DarkPurple</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#ad1457; border-radius:50%; margin-right:10px;"></span>DarkVividPink</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#c27c0e; border-radius:50%; margin-right:10px;"></span>DarkGold</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#a84300; border-radius:50%; margin-right:10px;"></span>DarkOrange</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#992d22; border-radius:50%; margin-right:10px;"></span>DarkRed</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#979c9f; border-radius:50%; margin-right:10px;"></span>DarkGrey</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#7f8c8d; border-radius:50%; margin-right:10px;"></span>DarkerGrey</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#bcc0c0; border-radius:50%; margin-right:10px;"></span>LightGrey</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#2c3e50; border-radius:50%; margin-right:10px;"></span>DarkNavy</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#5865f2; border-radius:50%; margin-right:10px;"></span>Blurple</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#99aab5; border-radius:50%; margin-right:10px;"></span>Greyple</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#2c2f33; border-radius:50%; margin-right:10px;"></span>DarkButNotBlack</div>
                            <div style="display:flex; align-items:center;"><span style="width:20px; height:20px; background:#23272a; border-radius:50%; margin-right:10px;"></span>NotQuiteBlack</div>
                          </div>
                        </div>
                      </help-icon>
                    </span><br>
                    <input id="containerColor" class="round" type="text" placeholder="Leave blank for none...">
                  </div>
                  <button onclick="const i=containerColor,b=this;t=i.type==='text';i.type=t?'color':'text';b.textContent=t?'Text':'Color'" class="tiny compact ui icon button" style="margin-top:18px">Color</button>
                </div>
            </div>
            <div style="float: right; width: 40%;"><br>
              <dbm-checkbox id="containerSpoiler" label="Make Container Spoiler"></dbm-checkbox>
            </div>
            <br><br><br>
            <dialog-list id="containerComponents" fields='["componentType", "componentCustomName", "", "defaultContent", "", "sectionContent", "accessory", "", "images", "", "files", "", "divider", "spacing", "", "buttons", "selects"]' saveButtonText="Save Component" dialogTitle="Component Info" dialogWidth="780" dialogHeight="620" listLabel="Components" listStyle="height: calc(100vh - 300px);" itemName="Component" itemCols="1" itemHeight="40px;" itemTextFunction="data.componentCustomName || 'Container Component Name'" itemStyle="line-height: 40px;">
              <div style="padding: 16px;">
                <div id="containerComponentTypeWrapper" style="float: left; width: 49%;">
                  <span class="dbminputlabel">Component Type</span>
                  <select id="componentType" class="round">
                    <option value="0" selected>Content</option>
                    <option value="1">Section</option>
                    <option value="3">Images</option>
                    <option value="4">Files</option>
                    <option value="5">Separator</option>
                    <option value="6">Buttons</option>
                    <option value="7">Select Menu</option>
                  </select>
                </div>
                <div id="componentCustomNameWrapper" style="float: right; width: 40%;">
                  <span class="dbminputlabel">Component Custom Name</span>
                  <input id="componentCustomName" class="round" type="text" placeholder="Leave blank for default...">
                </div>
              <br><br><br>
              <dbm-container>
                <div id="contentComponentWrapper">
                  <span class="dbminputlabel">Content</span>
                  <textarea id="defaultContent" class="dbm_monospace" rows="10" placeholder="Insert content here..." style="height: calc(100vh - 300px); white-space: nowrap;"></textarea>
                </div>
                <div id="sectionComponentWrapper">
                  <span class="dbminputlabel">Section Content</span>
                  <textarea id="sectionContent" class="dbm_monospace" rows="5" placeholder="Insert content here..." style="height: calc(100vh - 400px); white-space: nowrap;"></textarea>
                  <br>
                  <dialog-list id="accessory" fields='["accessoryType", "accessoryComponentCustomDescription", "name", "customId", "type", "emoji", "url", "time", "skuId", "disabled", "mode", "actions", "thumbnail", "thumbnailSpoiler"]' saveButtonText="Save Accessory", dialogTitle="Accessory Info" dialogWidth="600" dialogHeight="650" listLabel="Accessory (0 - 1)" listStyle="height: calc(100vh - 548px);" itemName="Accessory" itemCols="1" itemHeight="50px;" itemTextFunction="data.accessoryComponentCustomDescription || 'Accessory Component Description'" itemStyle="text-align: left; line-height: 50px;">
                    <div style="padding: 16px 16px 0px 16px;">
                      <div style="float: left; width: 49%;">
                        <span class="dbminputlabel">Accessory Type</span>
                        <select id="accessoryType" class="round">
                          <option value="0" selected>Button</option>
                          <option value="1">Thumbnail</option>
                        </select>
                      </div>
                      <div id="componentCustomDescriptionWrapper" style="float: right; width: 40%;">
                        <span class="dbminputlabel">Component Custom Description</span>
                        <input id="accessoryComponentCustomDescription" class="round" type="text" placeholder="Leave blank for default...">
                      </div>
                      <br><br><br>
                      <dbm-container>
                        <div id="buttonAccessoryWrapper">
                          <div style="float: left; width: 49%;">
                            <span class="dbminputlabel">Name</span>
                            <input id="name" class="round" type="text" placeholder="Leave blank for none...">
                          </div>
                          <div style="float: right; width: 49%;">
                            <span class="dbminputlabel">Unique ID</span>
                            <input id="customId" class="round" type="text" placeholder="Leave blank to auto-generate...">
                          </div>
                          <br><br><br>
                          <div style="float: left; width: 49%;">
                            <span class="dbminputlabel">Type</span>
                            <select id="type" class="round">
                              <option value="1" selected>Primary (Blurple)</option>
                              <option value="2">Secondary (Grey)</option>
                              <option value="3">Success (Green)</option>
                              <option value="4">Danger (Red)</option>
                              <option value="5">Link (Grey)</option>
                              <option value="6">Premium (Blurple)</option>
                            </select>
                          </div>
                          <div style="float: right; width: 49%;">
                            <span class="dbminputlabel">Emoji</span>
                            <input id="emoji" class="round" type="text" placeholder="Leave blank for none...">
                          </div>
                          <br><br><br>
                          <div id="linkUrlWrapper" style="float: left; width: 49%;">
                            <span class="dbminputlabel">Link URL
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
                          <div style="float: right; width: 49%;">
                            <span class="dbminputlabel">Temporary Time-Limit (Miliseconds)</span>
                            <input id="time" placeholder="60000" class="round" type="text">
                          </div>
                          <br><br><br>
                          <div id="skuIdWrapper" style="float: left; width: 49%;">
                            <span class="dbminputlabel">SKU ID
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
                          <div style="float: right; width: 49%;">
                            <span class="dbminputlabel">Enable/Disable Button</span>
                            <select id="disabled" class="round">
                              <option value="false">Enable</option>
                              <option value="true">Disable</option>
                            </select>
                          </div>
                          <br><br><br>
                          <div style="float: left; width: 49%;">
                            <span class="dbminputlabel">Action Response Mode<help-icon type="ACTION_RESPONSE_MODE"></help-icon></span>
                            <select id="mode" class="round">
                              <option value="PERSONAL">Once, Command User Only</option>
                              <option value="PUBLIC">Once, Anyone Can Use</option>
                              <option value="MULTIPERSONAL">Multi, Command User Only</option>
                              <option value="MULTI" selected>Multi, Anyone Can Use</option>
                              <option value="PERSISTENT">Persistent</option>
                            </select>
                          </div>
                          <br><br><br>
                          <action-list-input mode="BUTTON" id="actions" height="calc(100vh - 500px)"></action-list-input>
                        </div>
                        <div id="thumbnailAccessoryWrapper">
                          <span class="dbminputlabel">Thumbnail (url/path/buffer)</span>
                          <input id="thumbnail" class="round" type="text" value="resources/">
                          <br>
                          <div style="text-align: center;">
                            <dbm-checkbox id="thumbnailSpoiler" label="Make Thumbnail Spoiler"></dbm-checkbox>
                          </div>
                        </div>
                      </dbm-container>
                    </div>
                    <img src="invalid_src" style="display:none" onerror="(function(){const s=document.getElementById('accessoryType');const wrappers={'0':document.getElementById('buttonAccessoryWrapper'),'1':document.getElementById('thumbnailAccessoryWrapper')};if(!s)return;function u(){for(const k in wrappers){if(wrappers[k])wrappers[k].style.display=k===s.value?'block':'none';}}u();s.addEventListener('change',u);})()">
                    <img src="invalid_src" style="display:none" onerror="(function(){const t=document.getElementById('type'),l=document.getElementById('linkUrlWrapper'),s=document.getElementById('skuIdWrapper');if(!t)return;function e(w,n){if(!w)return;const i=w.querySelector('input');w.style.opacity=n?'1':'0.4';w.style.pointerEvents=n?'auto':'none';if(i)i.disabled=!n;}function u(){const v=t.value;e(l,v==='5');e(s,v==='6');}u();t.addEventListener('change',u);})()">
                  </dialog-list>
                </div>

                <div id="imagesComponentWrapper">
                  <dialog-list id="images" fields='["url", "spoiler"]' saveButtonText="Save Image" dialogTitle="Image Info" dialogWidth="400" dialogHeight="230" listLabel="Images (0 - 10)" listStyle="height: calc(100vh - 298px);" itemName="Image" itemCols="1" itemHeight="30px;" itemTextFunction="data.url" itemStyle="text-align: left; line-height: 30px;">
                    <div style="padding: 16px;">
                      <span class="dbminputlabel">Image (url/path/buffer)</span>
                      <input id="url" class="round" type="text" value="resources/">
                      <br>
                      <div style="text-align: center; padding-top: 4px;">
                        <dbm-checkbox id="spoiler" label="Make Image Spoiler"></dbm-checkbox>
                      </div>
                    </div>
                  </dialog-list>
                </div>
                <div id="filesComponentWrapper">
                  <dialog-list id="files" fields='["url", "name", "spoiler"]' saveButtonText="Save File" dialogTitle="File Info" dialogWidth="400" dialogHeight="300" listLabel="Files (0 - 10)" listStyle="height: calc(100vh - 298px);" itemName="File" itemCols="1" itemHeight="30px;" itemTextFunction="data.url" itemStyle="text-align: left; line-height: 30px;">
                    <div style="padding: 16px;">
                      <span class="dbminputlabel">File (url/path/buffer)</span>
                      <input id="url" class="round" type="text" value="resources/">
                      <br>
                      <span class="dbminputlabel">File Name</span>
                      <input id="name" class="round" type="text" placeholder="Leave blank for default...">
                      <br>
                      <div style="text-align: center; padding-top: 4px;">
                        <dbm-checkbox id="spoiler" label="Make File Spoiler"></dbm-checkbox>
                      </div>
                    </div>
                  </dialog-list>
                </div>
                <div id="separatorComponentWrapper">
                  <span class="dbminputlabel">Divider</span>
                  <select id="divider" class="round">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                  <br>
                  <span class="dbminputlabel">Spacing</span>
                  <select id="spacing" class="round">
                    <option value="1">Small</option>
                    <option value="2">Large</option>
                  </select>
                </div>
                <div id="buttonsComponentWrapper">
                  <dialog-list id="buttons" fields='["name", "customId", "type", "emoji", "url", "time", "skuId", "disabled", "mode", "actions"]' saveButtonText="Save Button" dialogTitle="Button Info" dialogWidth="600" dialogHeight="650" listLabel="Buttons (0 - 5)" listStyle="height: calc(100vh - 538px);" itemName="Button" itemCols="5" itemHeight="60px;" itemTextFunction="data.name || data.emoji || data.customId" itemStyle="text-align: center; line-height: 60px;">
                    <div style="padding: 16px 16px 0px 16px;">
                          <div style="float: left; width: 49%;">
                            <span class="dbminputlabel">Name</span>
                            <input id="name" class="round" type="text" placeholder="Leave blank for none...">
                          </div>
                          <div style="float: right; width: 49%;">
                            <span class="dbminputlabel">Unique ID</span>
                            <input id="customId" class="round" type="text" placeholder="Leave blank to auto-generate...">
                          </div>
                          <br><br><br>
                          <div style="float: left; width: 49%;">
                            <span class="dbminputlabel">Type</span>
                            <select id="type" class="round" onchange="(function(el){const linkWrap=document.getElementById('linkUrlWrapper');const skuWrap=document.getElementById('skuIdWrapper');const typeVal=el.value;if(linkWrap){const d=typeVal!=='5';linkWrap.style.pointerEvents=d?'none':'auto';linkWrap.style.opacity=d?'0.5':'1';linkWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(linkWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(skuWrap){const d=typeVal!=='6';skuWrap.style.pointerEvents=d?'none':'auto';skuWrap.style.opacity=d?'0.5':'1';skuWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(skuWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}})(this)">
                              <option value="1" selected>Primary (Blurple)</option>
                              <option value="2">Secondary (Grey)</option>
                              <option value="3">Success (Green)</option>
                              <option value="4">Danger (Red)</option>
                              <option value="5">Link (Grey)</option>
                              <option value="6">Premium (Blurple)</option>
                            </select>
                          </div>
                          <div style="float: right; width: 49%;">
                            <span class="dbminputlabel">Emoji</span>
                            <input id="emoji" class="round" type="text" placeholder="Leave blank for none...">
                          </div>
                          <br><br><br>
                          <div id="linkUrlWrapper">
                            <div style="float: left; width: 49%;">
                              <span class="dbminputlabel">Link URL
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
                          </div>
                          <div style="float: right; width: 49%;">
                            <span class="dbminputlabel">Temporary Time-Limit (Miliseconds)</span>
                            <input id="time" placeholder="60000" class="round" type="text">
                          </div>
                          <br><br><br>
                          <div id="skuIdWrapper">
                            <div style="float: left; width: 49%;">
                              <span class="dbminputlabel">SKU ID
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
                          </div>
                          <div style="float: right; width: 49%;">
                            <span class="dbminputlabel">Enable/Disable Button</span>
                            <select id="disabled" class="round">
                              <option value="false">Enable</option>
                              <option value="true">Disable</option>
                            </select>
                          </div>
                          <br><br><br>
                          <div style="float: left; width: 49%;">
                            <span class="dbminputlabel">Action Response Mode<help-icon type="ACTION_RESPONSE_MODE"></help-icon></span>
                            <select id="mode" class="round">
                              <option value="PERSONAL">Once, Command User Only</option>
                              <option value="PUBLIC">Once, Anyone Can Use</option>
                              <option value="MULTIPERSONAL">Multi, Command User Only</option>
                              <option value="MULTI" selected>Multi, Anyone Can Use</option>
                              <option value="PERSISTENT">Persistent</option>
                            </select>
                          </div>
                          <br><br><br>
                          <action-list-input mode="BUTTON" id="actions" height="calc(100vh - 430px)"></action-list-input>
                    </div>
                    <img src="invalid_src" style="display:none" onerror="">
                    <img src="invalid_src" style="display:none" onerror="(function(){const t=document.getElementById('type');if(!t)return;const linkWrap=document.getElementById('linkUrlWrapper');const skuWrap=document.getElementById('skuIdWrapper');const typeVal=t.value;if(linkWrap){const d=typeVal!=='5';linkWrap.style.pointerEvents=d?'none':'auto';linkWrap.style.opacity=d?'0.5':'1';linkWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(linkWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(skuWrap){const d=typeVal!=='6';skuWrap.style.pointerEvents=d?'none':'auto';skuWrap.style.opacity=d?'0.5':'1';skuWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(skuWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}})()">
                  </dialog-list>
                </div>
                <div id="selectsComponentWrapper">
                  <dialog-list id="selects" fields='["test", "placeholder", "customId", "tempVarName", "row", "min", "max", "mode", "time", "options", "actions", "type", "disabled", "defaultValues", "channelTypes", "GuildText", "GuildVoice", "GuildCategory", "GuildAnnouncement", "GuildStageVoice", "GuildForum", "GuildMedia"]' saveButtonText="Save Select Menu" dialogTitle="Select Menu Info" dialogWidth="800" dialogHeight="750" listLabel="Select Menu (0 - 1)" listStyle="height: calc(100vh - 498px);" itemName="Select Menu" itemCols="1" itemHeight="100px;" itemTextFunction="data.placeholder || data.type || data.customId" itemStyle="text-align: left; line-height: 100px;">
                    <div style="padding: 16px 16px 0px 16px;">
                      <div style="width: calc(33% - 16px); float: left; margin-right: 16px;">
                        <span class="dbminputlabel">Placeholder</span>
                        <input id="placeholder" class="round" type="text" placeholder="Leave blank for default...">
                        <br>
                        <span class="dbminputlabel">Temp Variable Name</span>
                        <input id="tempVarName" placeholder="Stores selected value for actions..." class="round" type="text">
                        <br>
                        <span class="dbminputlabel">Minimum Select Number</span>
                        <input id="min" class="round" type="text" value="1">
                        <br>
                        <span class="dbminputlabel">
                          Action Response Mode
                          <help-icon type="ACTION_RESPONSE_MODE"></help-icon>
                        </span><br>
                        <select id="mode" class="round">
                          <option value="PERSONAL">Once, Command User Only</option>
                          <option value="PUBLIC">Once, Anyone Can Use</option>
                          <option value="MULTIPERSONAL">Multi, Command User Only</option>
                          <option value="MULTI" selected>Multi, Anyone Can Use</option>
                          <option value="PERSISTENT">Persistent</option>
                        </select>
                        <div style="padding-top: 8px; margin-top: 10px;">
                          <span class="dbminputlabel">Select Menu Type</span>
                          <select id="type" class="round" onchange="(function(el){const oW=document.getElementById('optionsWrapper');const cW=document.getElementById('channelTypesWrapper');const dW=document.getElementById('defaultValuesWrapper');const t=el.value;if(oW){const d=t!=='StringSelectMenu';oW.style.pointerEvents=d?'none':'auto';oW.style.opacity=d?'0.5':'1';oW.style.filter=d?'grayscale(0.4)':'none';Array.from(oW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(cW){const d=t!=='ChannelSelectMenu';cW.style.pointerEvents=d?'none':'auto';cW.style.opacity=d?'0.5':'1';cW.style.filter=d?'grayscale(0.4)':'none';Array.from(cW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(dW){const d=t==='StringSelectMenu';dW.style.pointerEvents=d?'none':'auto';dW.style.opacity=d?'0.5':'1';dW.style.filter=d?'grayscale(0.4)':'none';Array.from(dW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}})(this)">
                              <option value="StringSelectMenu">String Select Menu</option>
                              <option value="UserSelectMenu">User Select Menu</option>
                              <option value="RoleSelectMenu">Role Select Menu</option>
                              <option value="MentionableSelectMenu">Mentionable Select Menu</option>
                              <option value="ChannelSelectMenu">Channel Select Menu</option>
                          </select>
                        </div>
                        <div style="padding-top: 8px; margin-top: 10px;">
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
                          <input id="defaultValues" class="round" type="text" placeholder="Leave blank for none...">
                         </div>  
                        </div>
                      </div>
                      <div style="width: calc(33% - 16px); float: left; margin-right: 16px;">
                        <span class="dbminputlabel">Unique ID</span>
                        <input id="customId" placeholder="Leave blank to auto-generate..." class="round" type="text">
                        <br>
                        <span class="dbminputlabel">Maximum Select Number</span>
                        <input id="max" class="round" type="text" value="1">
                        <br>
                        <span class="dbminputlabel">Temporary Time-Limit (Miliseconds)</span>
                        <input id="time" placeholder="60000" class="round" type="text">
                        <div style="padding-top: 8px; margin-top: 10px;">
                          <span class="dbminputlabel">Enable/Disable Select Menu</span>
                          <select id="disabled" class="round">
                            <option value="false">Enable</option>
                            <option value="true">Disable</option>
                          </select>
                        </div>
                      </div>
                      <div style="width: calc(34% - 8px); height: 300px; float: left; margin-left: 8px;">
                       <div id="optionsWrapper">
                        <dialog-list onload="try{const t=document.getElementById('type');if(!t)return;const o=document.getElementById('options');const disabled=t.value!=='StringSelectMenu';o.style.pointerEvents=disabled?'none':'auto';o.style.opacity=disabled?'0.5':'1';o.style.filter=disabled?'grayscale(0.4)':'none';Array.from(o.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=disabled}catch(e){}})}catch(e){}" id="options" fields='["label", "description", "value", "emoji", "default"]' saveButtonText="Save Option" dialogTitle="Select Menu Option Info" dialogWidth="360" dialogHeight="440" listLabel="Options" listStyle="height: 210px;" itemName="Option" itemCols="1" itemHeight="20px;" itemTextFunction="data.label" itemStyle="text-align: left; line-height: 20px;">
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
                        <div style="padding-top: 8px; margin-top: 1px;">
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
                      </div>
                      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                      <action-list-input mode="SELECT" id="actions" height="calc(100vh - 510px)">
                        <script class="setupTempVars">
                          const elem = document.getElementById("tempVarName");
                          if(elem?.value) {
                            tempVars.push([elem.value, "Text"]);
                          }
                        </script>
                      </action-list-input>
                    </div>
                    <img src="invalid_src" style="display:none" onerror="(function(){const el=document.getElementById('type');if(!el)return;const oW=document.getElementById('optionsWrapper');const cW=document.getElementById('channelTypesWrapper');const dW=document.getElementById('defaultValuesWrapper');const t=el.value;if(oW){const d=t!=='StringSelectMenu';oW.style.pointerEvents=d?'none':'auto';oW.style.opacity=d?'0.5':'1';oW.style.filter=d?'grayscale(0.4)':'none';Array.from(oW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(cW){const d=t!=='ChannelSelectMenu';cW.style.pointerEvents=d?'none':'auto';cW.style.opacity=d?'0.5':'1';cW.style.filter=d?'grayscale(0.4)':'none';Array.from(cW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(dW){const d=t==='StringSelectMenu';dW.style.pointerEvents=d?'none':'auto';dW.style.opacity=d?'0.5':'1';dW.style.filter=d?'grayscale(0.4)':'none';Array.from(dW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}})()">
                  </dialog-list>
                </div>
              </dbm-container>
              </div>
              <img src="invalid_src" style="display:none" onerror="(function(){const s=document.getElementById('componentType');const wrappers={'0':document.getElementById('contentComponentWrapper'),'1':document.getElementById('sectionComponentWrapper'),'2':document.getElementById('containerComponentWrapper'),'3':document.getElementById('imagesComponentWrapper'),'4':document.getElementById('filesComponentWrapper'),'5':document.getElementById('separatorComponentWrapper'),'6':document.getElementById('buttonsComponentWrapper'),'7':document.getElementById('selectsComponentWrapper')};if(!s)return;function u(){for(const k in wrappers){if(wrappers[k])wrappers[k].style.display=k===s.value?'block':'none';}}u();s.addEventListener('change',u);})()">
            </dialog-list>
          </div>
          <div id="imagesComponentWrapper">
            <dialog-list id="images" fields='["url", "spoiler"]' saveButtonText="Save Image" dialogTitle="Image Info" dialogWidth="400" dialogHeight="230" listLabel="Images (0 - 10)" listStyle="height: calc(100vh - 298px);" itemName="Image" itemCols="1" itemHeight="30px;" itemTextFunction="data.url" itemStyle="text-align: left; line-height: 30px;">
              <div style="padding: 16px;">
                <span class="dbminputlabel">Image (url/path/buffer)</span>
                <input id="url" class="round" type="text" value="resources/">
                <br>
                <div style="text-align: center; padding-top: 4px;">
                  <dbm-checkbox id="spoiler" label="Make Image Spoiler"></dbm-checkbox>
                </div>
              </div>
            </dialog-list>
          </div>
          <div id="filesComponentWrapper">
            <dialog-list id="files" fields='["url", "name", "spoiler"]' saveButtonText="Save File" dialogTitle="File Info" dialogWidth="400" dialogHeight="300" listLabel="Files (0 - 10)" listStyle="height: calc(100vh - 298px);" itemName="File" itemCols="1" itemHeight="30px;" itemTextFunction="data.url" itemStyle="text-align: left; line-height: 30px;">
              <div style="padding: 16px;">
                <span class="dbminputlabel">File (url/path/buffer)</span>
                <input id="url" class="round" type="text" value="resources/">
                <br>
                <span class="dbminputlabel">File Name</span>
                <input id="name" class="round" type="text" placeholder="Leave blank for default...">
                <br>
                <div style="text-align: center; padding-top: 4px;">
                  <dbm-checkbox id="spoiler" label="Make File Spoiler"></dbm-checkbox>
                </div>
              </div>
            </dialog-list>
          </div>
          <div id="separatorComponentWrapper">
            <span class="dbminputlabel">Divider</span>
            <select id="divider" class="round">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <br>
            <span class="dbminputlabel">Spacing</span>
            <select id="spacing" class="round">
              <option value="1">Small</option>
              <option value="2">Large</option>
            </select>
          </div>
          <div id="buttonsComponentWrapper">
            <dialog-list id="buttons" fields='["name", "customId", "type", "emoji", "url", "time", "skuId", "disabled", "mode", "actions"]' saveButtonText="Save Button" dialogTitle="Button Info" dialogWidth="600" dialogHeight="650" listLabel="Buttons (0 - 5)" listStyle="height: calc(100vh - 538px);" itemName="Button" itemCols="5" itemHeight="60px;" itemTextFunction="data.name || data.emoji || data.customId" itemStyle="text-align: center; line-height: 60px;">
              <div style="padding: 16px 16px 0px 16px;">
                    <div style="float: left; width: 49%;">
                      <span class="dbminputlabel">Name</span>
                      <input id="name" class="round" type="text" placeholder="Leave blank for none...">
                    </div>
                    <div style="float: right; width: 49%;">
                      <span class="dbminputlabel">Unique ID</span>
                      <input id="customId" class="round" type="text" placeholder="Leave blank to auto-generate...">
                    </div>
                    <br><br><br>
                    <div style="float: left; width: 49%;">
                      <span class="dbminputlabel">Type</span>
                      <select id="type" class="round" onchange="(function(el){const linkWrap=document.getElementById('linkUrlWrapper');const skuWrap=document.getElementById('skuIdWrapper');const typeVal=el.value;if(linkWrap){const d=typeVal!=='5';linkWrap.style.pointerEvents=d?'none':'auto';linkWrap.style.opacity=d?'0.5':'1';linkWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(linkWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(skuWrap){const d=typeVal!=='6';skuWrap.style.pointerEvents=d?'none':'auto';skuWrap.style.opacity=d?'0.5':'1';skuWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(skuWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}})(this)">
                        <option value="1" selected>Primary (Blurple)</option>
                        <option value="2">Secondary (Grey)</option>
                        <option value="3">Success (Green)</option>
                        <option value="4">Danger (Red)</option>
                        <option value="5">Link (Grey)</option>
                        <option value="6">Premium (Blurple)</option>
                      </select>
                    </div>
                    <div style="float: right; width: 49%;">
                      <span class="dbminputlabel">Emoji</span>
                      <input id="emoji" class="round" type="text" placeholder="Leave blank for none...">
                    </div>
                    <br><br><br>
                    <div id="linkUrlWrapper">
                      <div style="float: left; width: 49%;">
                        <span class="dbminputlabel">Link URL
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
                    </div>
                    <div style="float: right; width: 49%;">
                      <span class="dbminputlabel">Temporary Time-Limit (Miliseconds)</span>
                      <input id="time" placeholder="60000" class="round" type="text">
                    </div>
                    <br><br><br>
                    <div id="skuIdWrapper">
                      <div style="float: left; width: 49%;">
                        <span class="dbminputlabel">SKU ID
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
                    </div>
                    <div style="float: right; width: 49%;">
                      <span class="dbminputlabel">Enable/Disable Button</span>
                      <select id="disabled" class="round">
                        <option value="false">Enable</option>
                        <option value="true">Disable</option>
                      </select>
                    </div>
                    <br><br><br>
                    <div style="float: left; width: 49%;">
                      <span class="dbminputlabel">Action Response Mode<help-icon type="ACTION_RESPONSE_MODE"></help-icon></span>
                      <select id="mode" class="round">
                        <option value="PERSONAL">Once, Command User Only</option>
                        <option value="PUBLIC">Once, Anyone Can Use</option>
                        <option value="MULTIPERSONAL">Multi, Command User Only</option>
                        <option value="MULTI" selected>Multi, Anyone Can Use</option>
                        <option value="PERSISTENT">Persistent</option>
                      </select>
                    </div>
                    <br><br><br>
                    <action-list-input mode="BUTTON" id="actions" height="calc(100vh - 430px)"></action-list-input>
              </div>
              <img src="invalid_src" style="display:none" onerror="">
              <img src="invalid_src" style="display:none" onerror="(function(){const t=document.getElementById('type');if(!t)return;const linkWrap=document.getElementById('linkUrlWrapper');const skuWrap=document.getElementById('skuIdWrapper');const typeVal=t.value;if(linkWrap){const d=typeVal!=='5';linkWrap.style.pointerEvents=d?'none':'auto';linkWrap.style.opacity=d?'0.5':'1';linkWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(linkWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(skuWrap){const d=typeVal!=='6';skuWrap.style.pointerEvents=d?'none':'auto';skuWrap.style.opacity=d?'0.5':'1';skuWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(skuWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}})()">
            </dialog-list>
          </div>
          <div id="selectsComponentWrapper">
            <dialog-list id="selects" fields='["test", "placeholder", "customId", "tempVarName", "row", "min", "max", "mode", "time", "options", "actions", "type", "disabled", "defaultValues", "channelTypes", "GuildText", "GuildVoice", "GuildCategory", "GuildAnnouncement", "GuildStageVoice", "GuildForum", "GuildMedia"]' saveButtonText="Save Select Menu" dialogTitle="Select Menu Info" dialogWidth="800" dialogHeight="750" listLabel="Select Menu (0 - 1)" listStyle="height: calc(100vh - 498px);" itemName="Select Menu" itemCols="1" itemHeight="100px;" itemTextFunction="data.placeholder || data.type || data.customId" itemStyle="text-align: left; line-height: 100px;">
              <div style="padding: 16px 16px 0px 16px;">
                <div style="width: calc(33% - 16px); float: left; margin-right: 16px;">
                  <span class="dbminputlabel">Placeholder</span>
                  <input id="placeholder" class="round" type="text" placeholder="Leave blank for default...">
                  <br>
                  <span class="dbminputlabel">Temp Variable Name</span>
                  <input id="tempVarName" placeholder="Stores selected value for actions..." class="round" type="text">
                  <br>
                  <span class="dbminputlabel">Minimum Select Number</span>
                  <input id="min" class="round" type="text" value="1">
                  <br>
                  <span class="dbminputlabel">
                    Action Response Mode
                    <help-icon type="ACTION_RESPONSE_MODE"></help-icon>
                  </span><br>
                  <select id="mode" class="round">
                    <option value="PERSONAL">Once, Command User Only</option>
                    <option value="PUBLIC">Once, Anyone Can Use</option>
                    <option value="MULTIPERSONAL">Multi, Command User Only</option>
                    <option value="MULTI" selected>Multi, Anyone Can Use</option>
                    <option value="PERSISTENT">Persistent</option>
                  </select>
                  <div style="padding-top: 8px; margin-top: 10px;">
                    <span class="dbminputlabel">Select Menu Type</span>
                    <select id="type" class="round" onchange="(function(el){const oW=document.getElementById('optionsWrapper');const cW=document.getElementById('channelTypesWrapper');const dW=document.getElementById('defaultValuesWrapper');const t=el.value;if(oW){const d=t!=='StringSelectMenu';oW.style.pointerEvents=d?'none':'auto';oW.style.opacity=d?'0.5':'1';oW.style.filter=d?'grayscale(0.4)':'none';Array.from(oW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(cW){const d=t!=='ChannelSelectMenu';cW.style.pointerEvents=d?'none':'auto';cW.style.opacity=d?'0.5':'1';cW.style.filter=d?'grayscale(0.4)':'none';Array.from(cW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(dW){const d=t==='StringSelectMenu';dW.style.pointerEvents=d?'none':'auto';dW.style.opacity=d?'0.5':'1';dW.style.filter=d?'grayscale(0.4)':'none';Array.from(dW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}})(this)">
                        <option value="StringSelectMenu">String Select Menu</option>
                        <option value="UserSelectMenu">User Select Menu</option>
                        <option value="RoleSelectMenu">Role Select Menu</option>
                        <option value="MentionableSelectMenu">Mentionable Select Menu</option>
                        <option value="ChannelSelectMenu">Channel Select Menu</option>
                    </select>
                  </div>
                  <div style="padding-top: 8px; margin-top: 10px;">
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
                    <input id="defaultValues" class="round" type="text" placeholder="Leave blank for none...">
                   </div>  
                  </div>
                </div>
                <div style="width: calc(33% - 16px); float: left; margin-right: 16px;">
                  <span class="dbminputlabel">Unique ID</span>
                  <input id="customId" placeholder="Leave blank to auto-generate..." class="round" type="text">
                  <br>
                  <span class="dbminputlabel">Maximum Select Number</span>
                  <input id="max" class="round" type="text" value="1">
                  <br>
                  <span class="dbminputlabel">Temporary Time-Limit (Miliseconds)</span>
                  <input id="time" placeholder="60000" class="round" type="text">
                  <div style="padding-top: 8px; margin-top: 10px;">
                    <span class="dbminputlabel">Enable/Disable Select Menu</span>
                    <select id="disabled" class="round">
                      <option value="false">Enable</option>
                      <option value="true">Disable</option>
                    </select>
                  </div>
                </div>
                <div style="width: calc(34% - 8px); height: 300px; float: left; margin-left: 8px;">
                 <div id="optionsWrapper">
                  <dialog-list onload="try{const t=document.getElementById('type');if(!t)return;const o=document.getElementById('options');const disabled=t.value!=='StringSelectMenu';o.style.pointerEvents=disabled?'none':'auto';o.style.opacity=disabled?'0.5':'1';o.style.filter=disabled?'grayscale(0.4)':'none';Array.from(o.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=disabled}catch(e){}})}catch(e){}" id="options" fields='["label", "description", "value", "emoji", "default"]' saveButtonText="Save Option" dialogTitle="Select Menu Option Info" dialogWidth="360" dialogHeight="440" listLabel="Options" listStyle="height: 210px;" itemName="Option" itemCols="1" itemHeight="20px;" itemTextFunction="data.label" itemStyle="text-align: left; line-height: 20px;">
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
                  <div style="padding-top: 8px; margin-top: 1px;">
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
                </div>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <action-list-input mode="SELECT" id="actions" height="calc(100vh - 510px)">
                  <script class="setupTempVars">
                    const elem = document.getElementById("tempVarName");
                    if(elem?.value) {
                      tempVars.push([elem.value, "Text"]);
                    }
                  </script>
                </action-list-input>
              </div>
              <img src="invalid_src" style="display:none" onerror="(function(){const el=document.getElementById('type');if(!el)return;const oW=document.getElementById('optionsWrapper');const cW=document.getElementById('channelTypesWrapper');const dW=document.getElementById('defaultValuesWrapper');const t=el.value;if(oW){const d=t!=='StringSelectMenu';oW.style.pointerEvents=d?'none':'auto';oW.style.opacity=d?'0.5':'1';oW.style.filter=d?'grayscale(0.4)':'none';Array.from(oW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(cW){const d=t!=='ChannelSelectMenu';cW.style.pointerEvents=d?'none':'auto';cW.style.opacity=d?'0.5':'1';cW.style.filter=d?'grayscale(0.4)':'none';Array.from(cW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(dW){const d=t==='StringSelectMenu';dW.style.pointerEvents=d?'none':'auto';dW.style.opacity=d?'0.5':'1';dW.style.filter=d?'grayscale(0.4)':'none';Array.from(dW.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}})()">
            </dialog-list>
          </div>
        </dbm-container>  
      </div>
      <img src="invalid_src" style="display:none" onerror="(function(){const s=document.getElementById('componentType');const wrappers={'0':document.getElementById('contentComponentWrapper'),'1':document.getElementById('sectionComponentWrapper'),'2':document.getElementById('containerComponentWrapper'),'3':document.getElementById('imagesComponentWrapper'),'4':document.getElementById('filesComponentWrapper'),'5':document.getElementById('separatorComponentWrapper'),'6':document.getElementById('buttonsComponentWrapper'),'7':document.getElementById('selectsComponentWrapper')};if(!s)return;function u(){for(const k in wrappers){if(wrappers[k])wrappers[k].style.display=k===s.value?'block':'none';}}u();s.addEventListener('change',u);})()">
    </dialog-list>
  </tab>
  <tab label="Settings" icon="cogs">
    <div style="width: 100%; padding:8px; height: calc(100vh - 260px); overflow-y: scroll; overflow-x: hidden;">
      <div style="display: flex; justify-content: space-between;">
        <dbm-checkbox style="float: left;" id="reply" label="Reply to Interaction if Possible" checked></dbm-checkbox>
        <dbm-checkbox style="float: middle;" id="ephemeral" label="Make Reply Private (ephemeral)"></dbm-checkbox>
      </div>
      <br>
      <div style="display: flex; justify-content: space-between;">
        <dbm-checkbox id="tts" label="Text to Speech"></dbm-checkbox>
        <dbm-checkbox id="dontSend" label="Don't Send Message"></dbm-checkbox>
        <dbm-checkbox id="pinMsgAfterSend" label="Pin Message After Send/Edit"></dbm-checkbox>
      </div>
      <br>
      <div style="display: flex; justify-content: space-between;">
        <dbm-checkbox id="overwriteChanges" label="Overwrite Changes"></dbm-checkbox>
        <dbm-checkbox id="allowMentionCommandUser" label="Ping Command User (only in text command reply)"></dbm-checkbox>
      </div>
      <br>
      <div style="display: flex; justify-content: space-between;">
        <dbm-checkbox id="allowMentionUsers" label="Allow Mention Users" checked></dbm-checkbox>
        <dbm-checkbox id="allowMentionRoles" label="Allow Mention Roles" checked></dbm-checkbox>
        <dbm-checkbox id="allowMentionEveryone" label="Allow Mention Everyone" checked></dbm-checkbox>
      </div>
      <br>
      <div style="display: flex; justify-content: space-between;">
        <dbm-checkbox id="suppressNotifications" label="Suppress Notifications"></dbm-checkbox>
      </div>
      <br>
      <hr class="subtlebar">
      <br>
      <div style="float: left; width: 79%;">
        <span class="dbminputlabel">Action Description</span>
        <input type="text" class="round" id="actionDescription" placeholder="Leave blank for default...">
      </div>
      <div style="float: right; width: 19%;">
        <span class="dbminputlabel">Color</span>
        <input type="color" value="#ffffff" class="round" id="actionDescriptionColor">
      </div>
      <br><br><br>
      <hr class="subtlebar">
      <br>
      <retrieve-from-variable allowNone dropdownLabel="Message/Options to Edit" selectId="editMessage" variableInputId="editMessageVarName" variableContainerId="editMessageVarNameContainer">
        <option value="intUpdate">Interaction Update</option>
        <option value="deferUpdate">Defer Update</option>
        <option value="replyUpdate">Reply Update</option>
      </retrieve-from-variable>
      <br><br><br><br>
      <store-in-variable dropdownLabel="Store Message In" allowNone selectId="storage" variableInputId="varName2" variableContainerId="varNameContainer2"></store-in-variable>
      <br><br><br>
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
    const { document, glob } = this;
    glob.formatItemComponent = function (data) {
      const type = data.componentType;
      let componentDefaultName = "Content";
      if (type === "0") componentDefaultName = "Content";
      else if (type === "1") componentDefaultName = "Section";
      else if (type === "2") componentDefaultName = "Container";
      else if (type === "3") componentDefaultName = "Images";
      else if (type === "4") componentDefaultName = "Files";
      else if (type === "5") componentDefaultName = "Separator";
      else if (type === "6") componentDefaultName = "Buttons";
      else if (type === "7") componentDefaultName = "Select Menu";
      else componentDefaultName = "Unknown Component Type!";
      let typeText = `<span style="float:right; margin-right:10px;">${
        data.componentCustomName || componentDefaultName
      }</span>`;
      if (type === "0") {
        const content =
          (data.defaultContent ?? "").length > 40
            ? data.defaultContent.slice(0, 37) + "..."
            : data.defaultContent;
        return `${content}${typeText}`;
      } else if (type === "1") {
        const content =
          (data.sectionContent ?? "").length > 30
            ? data.sectionContent.slice(0, 27) + "..."
            : data.sectionContent;
        let accessory = "undefined";
        for (const a of data.accessory) {
          if (a.accessoryType === "0") accessory = "button";
          else if (a.accessoryType === "1") accessory = "thumbnail";
        }
        return `<b>Accessory:</b> ${accessory} <b>---</b> ${content}${typeText}`;
      } else if (type === "2") {
        const components = data.containerComponents.length;
        const spoiler = data.containerSpoiler ? "yes" : "no";
        const color = data.containerColor || "no";
        return `<b>Color: </b>${color} <b>---</b> <b>Spoiler:</b> ${spoiler} <b>---</b> <b>Components:</b> ${components}${typeText}`;
      } else if (type === "3") {
        const amount = data.images.length;
        return `<b>Number of Images:</b> (${amount} - 10)${typeText}`;
      } else if (type === "4") {
        const amount = data.files.length;
        return `<b>Number of Files:</b> (${amount} - 10)${typeText}`;
      } else if (type === "5") {
        let divider = data.divider;
        let spacing;
        if (data.spacing === "1") spacing = "small";
        else if (data.spacing === "2") spacing = "large";
        if (data.divider === "true") divider = "yes";
        else if (data.divider === "false") divider = "no";
        return `<b>Divider:</b> ${divider} <b>---</b> <b>Spacing:</b> ${spacing}${typeText}`;
      } else if (type === "6") {
        const amount = data.buttons.length;
        return `<b>Number of Buttons:</b> (${amount} - 10)${typeText}`;
      } else if (type === "7") {
        const amount = data.selects.length;
        return `<b>Number of Select Menus:</b> (${amount} - 1)${typeText}`;
      }
      return `${typeText}`;
    };

    glob.formatItemAccessory = function (data) {
      const type = data.accessoryType;
      let componentDefaultName = "Button";
      if (type === "0") componentDefaultName = "Button";
      else if (type === "1") componentDefaultName = "Thumbnail";
      else componentDefaultName = "Unknown Component Type!";
      let typeText = `<span style="float:right; margin-right:10px;">${
        data.accessoryComponentCustomName || componentDefaultName
      }</span>`;
      if (type === "0") {
        return `${data.name}${typeText}`;
      } else if (type === "1") {
        return `${data.thumbnail}${typeText}`;
      }
    };
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor On Save
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  onSave(data, helpers) {
    const genBtn = () => "msg-button-" + helpers.generateUUID().substring(0, 7);
    const genSel = () => "msg-select-" + helpers.generateUUID().substring(0, 7);
    for (const c of data.components) {
      if (c.componentType === "1") {
        for (const a of c.accessory) {
          if (a.accessoryType === "0") {
            if (!a.customId) a.customId = genBtn();
          }
        }
      } else if (c.componentType === "2") {
        for (const cc of c.containerComponents) {
          if (cc.componentType === "1") {
            for (const a of cc.accessory) {
              if (!a.customId) a.customId = genBtn();
            }
          } else if (cc.componentType === "6") {
            for (const b of cc.buttons) {
              if (!b.customId) b.customId = genBtn();
            }
          } else if (cc.componentType === "7") {
            for (const s of cc.selects) {
              if (!s.customId) s.customId = genSel();
            }
          }
        }
      } else if (c.componentType === "6") {
        for (const b of c.buttons) {
          if (!b.customId) b.customId = genBtn();
        }
      } else if (c.componentType === "7") {
        for (const s of c.selects) {
          if (!s.customId) s.customId = genSel();
        }
      }
    }
    return data;
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor On Paste
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  onPaste(data, helpers) {
    const genBtn = () => "msg-button-" + helpers.generateUUID().substring(0, 7);
    const genSel = () => "msg-select-" + helpers.generateUUID().substring(0, 7);
    for (const c of data.components) {
      if (c.componentType === "1") {
        for (const a of c.accessory) {
          if (a.accessoryType === "0") {
            const id = a.customId;
            if (!id || id.startsWith("msg-button-")) a.customId = genBtn();
          }
        }
      } else if (c.componentType === "2") {
        for (const cc of c.containerComponents) {
          if (cc.componentType === "1") {
            for (const a of cc.accessory) {
              const id = a.customId;
              if (!id || id.startsWith("msg-button-")) a.customId = genBtn();
            }
          } else if (cc.componentType === "6") {
            for (const b of cc.buttons) {
              const id = b.customId;
              if (!id || id.startsWith("msg-button-")) b.customId = genBtn();
            }
          } else if (cc.componentType === "7") {
            for (const s of cc.selects) {
              const id = s.customId;
              if (!id || id.startsWith("msg-select-")) s.customId = genSel();
            }
          }
        }
      } else if (c.componentType === "6") {
        for (const b of c.buttons) {
          const id = b.customId;
          if (!id || id.startsWith("msg-button-")) b.customId = genBtn();
        }
      } else if (c.componentType === "7") {
        for (const s of c.selects) {
          const id = s.customId;
          if (!id || id.startsWith("msg-select-")) s.customId = genSel();
        }
      }
    }
    return data;
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    // imports
    const data = cache.actions[cache.index];
    const {
      MessageFlags,
      ChannelType,
      ButtonStyle,
      ActionRowBuilder,
      TextDisplayBuilder,
      SectionBuilder,
      ThumbnailBuilder,
      ContainerBuilder,
      Colors,
      MediaGalleryBuilder,
      MediaGalleryItemBuilder,
      AttachmentBuilder,
      FileBuilder,
      SeparatorBuilder,
      SeparatorSpacingSize,
      ButtonBuilder,
      StringSelectMenuBuilder,
      UserSelectMenuBuilder,
      RoleSelectMenuBuilder,
      MentionableSelectMenuBuilder,
      ChannelSelectMenuBuilder,
      ActionRow,
    } = require("discord.js");

    const target = await this.getSendReplyTarget(
      parseInt(data.channel, 10),
      this.evalMessage(data.varName, cache),
      cache,
    );

    const components = [];
    const flags = [];
    const files = [];
    let defaultTime = 60000;
    let awaitResponses = [];
    let msgToEdit = null;
    if (data.editMessage !== "0") {
      msgToEdit =
        this.getVariable(
          parseInt(data.editMessage, 10),
          this.evalMessage(data.editMessageVarName, cache),
          cache,
        ) || cache.interaction.message;
    }

    for (const c of data.components) {
      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      // # Content
      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      if (c.componentType === "0") {
        const content = this.evalMessage(c.defaultContent, cache);
        const component = new TextDisplayBuilder().setContent(content);
        components.push(component);
      }

      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      // # Section
      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      else if (c.componentType === "1") {
        const contentComponent = new TextDisplayBuilder().setContent(
          this.evalMessage(c.sectionContent, cache) || "ᅠ",
        );
        const component = new SectionBuilder().addTextDisplayComponents(
          contentComponent,
        );
        for (const a of c.accessory) {
          if (a.accessoryType === "0") {
            const customId = this.evalMessage(a.customId, cache) || Date.now();
            const buttonComponent = this.generateButton(
              {
                customId: customId,
                disabled: a.disabled,
                emoji: a.emoji,
                label: a.name,
                skuId: a.skuId,
                style: a.type,
                url: a.url,
              },
              cache,
            );
            if (a.mode !== "PERSISTENT") {
              awaitResponses.push({
                type: "BUTTON",
                time: a.time
                  ? parseInt(this.evalMessage(a.time, cache)) || defaultTime
                  : defaultTime,
                id: this.evalMessage(a.customId, cache),
                user: a.mode.endsWith("PERSONAL") ? cache.getUser()?.id : null,
                multi: a.mode.startsWith("MULTI"),
                data: a,
              });
            }
            component.setButtonAccessory(buttonComponent);
          } else if (a.accessoryType === "1") {
            const url = a.thumbnail;
            const spoiler = a.thumbnailSpoiler;
            const attachmentUrl = await this.resolveAttachmentUrl(url, files);
            const thumbnailComponent = new ThumbnailBuilder()
              .setURL(attachmentUrl)
              .setSpoiler(spoiler);
            component.setThumbnailAccessory(thumbnailComponent);
          }
        }
        components.push(component);
      }

      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      // # Container
      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      else if (c.componentType === "2") {
        if (
          Array.isArray(c.containerComponents) &&
          c.containerComponents.length > 0
        ) {
          function parseColor(color) {
            const COLOR_MAP = Object.fromEntries(
              Object.entries(Colors).map(([key, value]) => [
                key.toUpperCase(),
                value,
              ]),
            );
            if (!color) return undefined;
            if (typeof color === "string" && /^#?[0-9A-Fa-f]{6}$/.test(color)) {
              return parseInt(color.replace(/^#/, ""), 16);
            }
            const key = color.toUpperCase();
            if (COLOR_MAP[key] !== undefined) return COLOR_MAP[key];
            return undefined;
          }
          const accentColor = parseColor(
            this.evalMessage(c.containerColor, cache),
          );
          const containerComponent = new ContainerBuilder()
            .setSpoiler(c.containerSpoiler)
            .setAccentColor(accentColor);
          for (const cc of c.containerComponents) {
            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            // * C. Content
            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            if (cc.componentType === "0") {
              const content = this.evalMessage(cc.defaultContent, cache);
              const textDisplayComponent = new TextDisplayBuilder().setContent(
                content,
              );
              containerComponent.addTextDisplayComponents(textDisplayComponent);
            }

            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            // * C. Section
            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            else if (cc.componentType === "1") {
              const contentComponent = new TextDisplayBuilder().setContent(
                this.evalMessage(cc.sectionContent, cache) || "ᅠ",
              );
              const sectionComponent =
                new SectionBuilder().addTextDisplayComponents(contentComponent);
              for (const a of cc.accessory) {
                if (a.accessoryType === "0") {
                  const customId =
                    this.evalMessage(a.customId, cache) || Date.now();
                  const buttonComponent = this.generateButton(
                    {
                      customId: customId,
                      disabled: a.disabled,
                      emoji: a.emoji,
                      label: a.name,
                      skuId: a.skuId,
                      style: a.type,
                      url: a.url,
                    },
                    cache,
                  );
                  if (a.mode !== "PERSISTENT") {
                    awaitResponses.push({
                      type: "BUTTON",
                      time: a.time
                        ? parseInt(this.evalMessage(a.time, cache)) ||
                          defaultTime
                        : defaultTime,
                      id: this.evalMessage(a.customId, cache),
                      user: a.mode.endsWith("PERSONAL")
                        ? cache.getUser()?.id
                        : null,
                      multi: a.mode.startsWith("MULTI"),
                      data: a,
                    });
                  }
                  sectionComponent.setButtonAccessory(buttonComponent);
                } else if (a.accessoryType === "1") {
                  const url = a.thumbnail;
                  const spoiler = a.thumbnailSpoiler;
                  const attachmentUrl = await this.resolveAttachmentUrl(
                    url,
                    files,
                  );
                  const thumbnailComponent = new ThumbnailBuilder()
                    .setURL(attachmentUrl)
                    .setSpoiler(spoiler);
                  sectionComponent.setThumbnailAccessory(thumbnailComponent);
                }
              }
              containerComponent.addSectionComponents(sectionComponent);
            }

            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            // * C. Images
            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            else if (cc.componentType === "3") {
              if (Array.isArray(cc.images) && cc.images.length > 0) {
                const items = [];
                for (const i of cc.images) {
                  const url = this.evalIfPossible(i.url, cache);
                  const spoiler = i.spoiler;
                  const attachmentUrl = await this.resolveAttachmentUrl(
                    url,
                    files,
                  );
                  const item = new MediaGalleryItemBuilder()
                    .setURL(attachmentUrl)
                    .setSpoiler(spoiler);
                  items.push(item);
                }
                const mediaGalleryComponent =
                  new MediaGalleryBuilder().addItems(items);
                containerComponent.addMediaGalleryComponents(
                  mediaGalleryComponent,
                );
              }
            }

            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            // * C. Files
            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            else if (cc.componentType === "4") {
              if (Array.isArray(cc.files) && cc.files.length > 0) {
                const fileComponents = [];
                for (const f of cc.files) {
                  const url = this.evalIfPossible(f.url, cache);
                  const name = this.evalMessage(f.name, cache);
                  const spoiler = f.spoiler;
                  const attachmentUrl = await this.resolveAttachmentUrl(
                    url,
                    files,
                    {
                      name: name,
                      spoiler: false,
                    },
                  );
                  const fileComponent = new FileBuilder()
                    .setURL(attachmentUrl)
                    .setSpoiler(spoiler);
                  fileComponents.push(fileComponent);
                }
                containerComponent.addFileComponents(fileComponents);
              }
            }

            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            // * C. Separator
            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            else if (cc.componentType === "5") {
              const divider = cc.divider === "true";
              let spacing = null;
              if (cc.spacing === "1") spacing = SeparatorSpacingSize.Small;
              else if (cc.spacing === "2") spacing = SeparatorSpacingSize.Large;
              const separatorComponent = new SeparatorBuilder()
                .setDivider(divider)
                .setSpacing(spacing);
              containerComponent.addSeparatorComponents(separatorComponent);
            }

            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            // * C. Buttons
            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            else if (cc.componentType === "6") {
              if (Array.isArray(cc.buttons) && cc.buttons.length > 0) {
                const ActionRowComponent = new ActionRowBuilder();
                const buttons = [];
                for (const b of cc.buttons) {
                  const customId =
                    this.evalMessage(b.customId, cache) || Date.now();
                  const buttonComponent = this.generateButton(
                    {
                      customId: customId,
                      disabled: b.disabled,
                      emoji: b.emoji,
                      label: b.name,
                      skuId: b.skuId,
                      style: b.type,
                      url: b.url,
                    },
                    cache,
                  );
                  if (b.mode !== "PERSISTENT") {
                    awaitResponses.push({
                      type: "BUTTON",
                      time: b.time
                        ? parseInt(this.evalMessage(b.time, cache)) ||
                          defaultTime
                        : defaultTime,
                      id: this.evalMessage(b.customId, cache),
                      user: b.mode.endsWith("PERSONAL")
                        ? cache.getUser()?.id
                        : null,
                      multi: b.mode.startsWith("MULTI"),
                      data: b,
                    });
                  }
                  buttons.push(buttonComponent);
                }
                ActionRowComponent.setComponents(buttons);
                containerComponent.addActionRowComponents(ActionRowComponent);
              }
            }

            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            // * C. Selects
            //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
            else if (cc.componentType === "7") {
              if (Array.isArray(cc.selects) && cc.selects.length > 0) {
                const actionRowComponent = new ActionRowBuilder();
                const selects = [];
                for (const s of cc.selects) {
                  const channelTypes = [];
                  if (s.GuildText) channelTypes.push(ChannelType.GuildText);
                  if (s.GuildVoice) channelTypes.push(ChannelType.GuildVoice);
                  if (s.GuildCategory)
                    channelTypes.push(ChannelType.GuildCategory);
                  if (s.GuildAnnouncement)
                    channelTypes.push(ChannelType.GuildAnnouncement);
                  if (s.GuildStageVoice)
                    channelTypes.push(ChannelType.GuildStageVoice);
                  if (s.GuildForum) channelTypes.push(ChannelType.GuildForum);
                  if (s.GuildMedia) channelTypes.push(ChannelType.GuildMedia);
                  const selectMenuComponent = this.generateAnySelectMenu(
                    s.type,
                    {
                      customId: s.customId,
                      defaultValues: s.defaultValues,
                      channelTypes: channelTypes,
                      disabled: s.disabled,
                      minValues: s.min,
                      maxValues: s.max,
                      options: s.options,
                      placeholder: s.placeholder,
                    },
                    cache,
                  );
                  if (s.mode !== "PERSISTENT") {
                    awaitResponses.push({
                      type: "SELECT",
                      time: s.time
                        ? parseInt(this.evalMessage(s.time, cache)) ||
                          defaultTime
                        : defaultTime,
                      id: this.evalMessage(s.customId, cache),
                      user: s.mode.endsWith("PERSONAL")
                        ? cache.getUser()?.id
                        : null,
                      multi: s.mode.startsWith("MULTI"),
                      data: s,
                    });
                  }
                  selects.push(selectMenuComponent);
                }
                actionRowComponent.setComponents(selects);
                containerComponent.addActionRowComponents(actionRowComponent);
              }
            }
          }
          components.push(containerComponent);
        }
      }

      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      // # Images
      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      else if (c.componentType === "3") {
        if (Array.isArray(c.images) && c.images.length > 0) {
          const items = [];
          for (const i of c.images) {
            const url = this.evalIfPossible(i.url, cache);
            const spoiler = i.spoiler;
            const attachmentUrl = await this.resolveAttachmentUrl(url, files);
            const item = new MediaGalleryItemBuilder()
              .setURL(attachmentUrl)
              .setSpoiler(spoiler);
            items.push(item);
          }
          const component = new MediaGalleryBuilder().addItems(items);
          components.push(component);
        }
      }

      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      // # Files
      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      else if (c.componentType === "4") {
        for (const f of c.files) {
          const url = this.evalIfPossible(f.url, cache);
          const name = this.evalMessage(f.name, cache);
          const spoiler = f.spoiler;
          const attachmentUrl = await this.resolveAttachmentUrl(url, files, {
            name: name,
            spoiler: false,
          });
          const component = new FileBuilder()
            .setURL(attachmentUrl)
            .setSpoiler(spoiler);
          components.push(component);
        }
      }

      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      // # Separator
      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      else if (c.componentType === "5") {
        const divider = c.divider === "true";
        let spacing = null;
        if (c.spacing === "1") spacing = SeparatorSpacingSize.Small;
        else if (c.spacing === "2") spacing = SeparatorSpacingSize.Large;
        const component = new SeparatorBuilder()
          .setDivider(divider)
          .setSpacing(spacing);
        components.push(component);
      }

      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      // # Buttons
      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      else if (c.componentType === "6") {
        if (Array.isArray(c.buttons) && c.buttons.length > 0) {
          const component = new ActionRowBuilder();
          const buttons = [];
          for (const b of c.buttons) {
            const customId = this.evalMessage(b.customId, cache) || Date.now();
            const buttonComponent = this.generateButton(
              {
                customId: customId,
                disabled: b.disabled,
                emoji: b.emoji,
                label: b.name,
                skuId: b.skuId,
                style: b.type,
                url: b.url,
              },
              cache,
            );
            if (b.mode !== "PERSISTENT") {
              awaitResponses.push({
                type: "BUTTON",
                time: b.time
                  ? parseInt(this.evalMessage(b.time, cache)) || defaultTime
                  : defaultTime,
                id: this.evalMessage(b.customId, cache),
                user: b.mode.endsWith("PERSONAL") ? cache.getUser()?.id : null,
                multi: b.mode.startsWith("MULTI"),
                data: b,
              });
            }
            buttons.push(buttonComponent);
          }
          component.setComponents(buttons);
          components.push(component);
        }
      }

      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      // # Selects
      //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
      else if (c.componentType === "7") {
        if (Array.isArray(c.selects) && c.selects.length > 0) {
          const component = new ActionRowBuilder();
          const selects = [];
          for (const s of c.selects) {
            const channelTypes = [];
            if (s.GuildText) channelTypes.push(ChannelType.GuildText);
            if (s.GuildVoice) channelTypes.push(ChannelType.GuildVoice);
            if (s.GuildCategory) channelTypes.push(ChannelType.GuildCategory);
            if (s.GuildAnnouncement)
              channelTypes.push(ChannelType.GuildAnnouncement);
            if (s.GuildStageVoice)
              channelTypes.push(ChannelType.GuildStageVoice);
            if (s.GuildForum) channelTypes.push(ChannelType.GuildForum);
            if (s.GuildMedia) channelTypes.push(ChannelType.GuildMedia);
            const selectMenuComponent = this.generateAnySelectMenu(
              s.type,
              {
                customId: s.customId,
                defaultValues: s.defaultValues,
                channelTypes: channelTypes,
                disabled: s.disabled,
                minValues: s.min,
                maxValues: s.max,
                options: s.options,
                placeholder: s.placeholder,
              },
              cache,
            );
            if (s.mode !== "PERSISTENT") {
              awaitResponses.push({
                type: "SELECT",
                time: s.time
                  ? parseInt(this.evalMessage(s.time, cache)) || defaultTime
                  : defaultTime,
                id: this.evalMessage(s.customId, cache),
                user: s.mode.endsWith("PERSONAL") ? cache.getUser()?.id : null,
                multi: s.mode.startsWith("MULTI"),
                data: s,
              });
            }
            selects.push(selectMenuComponent);
          }
          component.setComponents(selects);
          components.push(component);
        }
      }
    }

    flags.push(MessageFlags.IsComponentsV2);
    if (data.ephemeral) flags.push(MessageFlags.Ephemeral);
    if (data.suppressNotifications)
      flags.push(MessageFlags.SuppressNotifications);

    const mentionParse = [];
    if (data.allowMentionUsers) mentionParse.push("users");
    if (data.allowMentionRoles) mentionParse.push("roles");
    if (data.allowMentionEveryone) mentionParse.push("everyone");
    const repliedUser = data.allowMentionCommandUser;

    let payload = {
      components: components,
      files: files,
      flags: flags,
      tts: data.tts,
      allowedMentions: {
        parse: mentionParse,
        replied_user: repliedUser,
      },
    };

    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Send Message
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    if (data.dontSend === true) {
      const varName2 = this.evalMessage(data.varName2, cache);
      const storage = parseInt(data.storage, 10);
      payload._awaitResponses = awaitResponses;
      this.storeValue(payload, storage, varName2, cache);
      this.callNextAction(cache);
      return;
    }

    if (data.editMessage !== "0") {
      if (!data.overwriteChanges) {
        payload = {
          ...payload,
          components: [...(msgToEdit.components ?? []), ...(components ?? [])],
          flags: payload.flags ?? msgToEdit.flags,
          files: [
            ...(msgToEdit.attachments?.map((a) => a) ?? []),
            ...(files ?? []),
          ],
        };
      }
    }

    try {
      const resultMsg = await this.sendOrReplyOrEditMessage(
        target,
        payload,
        cache,
        {
          reply: data.reply,
          msgToEdit: msgToEdit,
          pinMsgAfterSend: data.pinMsgAfterSend,
          isEdit: data.editMessage !== "0",
          editMessage: data.editMessage,
          callback: (interaction, resultMsg) => {
            for (let i = 0; i < awaitResponses.length; i++) {
              const response = awaitResponses[i];
              const originalInteraction =
                cache.interaction?.__originalInteraction ?? cache.interaction;
              const tempVariables = cache.temp || {};
              this.registerTemporaryInteraction(
                resultMsg.id,
                response.time,
                response.id,
                response.user,
                response.multi,
                (interaction) => {
                  if (response.data) {
                    interaction.__originalInteraction = originalInteraction;
                    if (response.type === "BUTTON") {
                      this.preformActionsFromInteraction(
                        interaction,
                        response.data,
                        cache.meta,
                        tempVariables,
                      );
                    } else {
                      this.preformActionsFromSelectInteraction(
                        interaction,
                        response.data,
                        cache.meta,
                        tempVariables,
                      );
                    }
                  }
                },
              );
            }
          },
        },
      );
      const varName2 = this.evalMessage(data.varName2, cache);
      const storage = parseInt(data.storage, 10);
      this.storeValue(resultMsg || payload, storage, varName2, cache);
    } catch (err) {
      this.displayError(data, cache, err);
    }
    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod Init
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  modInit(data) {
    const buttons = getAllButtons(data);
    const selects = getAllSelects(data);
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      if (button.mode === "PERSISTENT") {
        this.registerButtonInteraction(button.customId, button);
      }
      this.prepareActions(button.actions);
    }
    for (let i = 0; i < selects.length; i++) {
      const select = selects[i];
      if (select.mode === "PERSISTENT") {
        this.registerSelectMenuInteraction(select.customId, select);
      }
      this.prepareActions(select.actions);
    }
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
