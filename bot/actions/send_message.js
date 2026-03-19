module.exports = {
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Name
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  name: "Send Message",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Section
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  section: "Messaging",

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Size
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  size() {
    return { width: 619, height: 600 };
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
    let messageText;
    if (data.message) messageText = data.message;
    else if (!data.message) {
      if (data.embeds.length) {
        messageText = `${data.embeds.length} ${
          data.embeds.length === 1 ? "Embed" : "Embeds"
        }`;
      } else if (data.pollAnswers.length) {
        messageText = `Poll: ${data.pollQuestion}`;
      } else if (data.buttons.length) {
        messageText = `${data.buttons.length} ${
          data.buttons.length === 1 ? "Button" : "Buttons"
        }`;
      } else if (data.selectMenus.length) {
        messageText = `${data.selectMenus.length} ${
          data.selectMenus.length === 1 ? "Select Menu" : "Select Menus"
        }`;
      } else if (data.attachments.length) {
        messageText = `${data.attachments.length} ${
          data.attachments.length === 1 ? "Attachment" : "Attachments"
        }`;
      } else {
        messageText = "Nothing (might cause error)";
      }
    }
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
      "https://github.com/shadoow051/DBM-v14/blob/main/bot/actions/send_message.js",
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Fields
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  fields: [
    "channel",
    "varName",
    "message",
    "buttons",
    "selectMenus",
    "attachments",
    "embeds",
    "reply",
    "ephemeral",
    "tts",
    "dontSend",
    "editMessage",
    "editMessageVarName",
    "storage",
    "varName2",
    "pinMsgAfterSend",
    "pollQuestion",
    "pollAnswers",
    "pollAnswer",
    "pollEmoji",
    "pollAllowMultipleAnswers",
    "pollDuration",
    "actionDescription",
    "actionDescriptionColor",
    "allowMentionUsers",
    "allowMentionRoles",
    "allowMentionEveryone",
    "allowMentionCommandUser",
    "suppressLinkEmbeds",
    "suppressNotifications",
    "overwriteContent",
    "overwriteEmbeds",
    "overwriteButtons",
    "overwriteSelects",
    "overwriteFiles",
  ],

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action HTML
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  html(isEvent, data) {
    const mod = `<dbm-mod><info style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; left: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'">Author: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.authorUrl}')">${this.meta.author}</a><br>Help: <a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.help}')">click here</a></info><version style="opacity: 0.2; transition: opacity 0.3s; font-weight: 900; font-size: 16px; padding: 5px; border-radius: 5px; background: rgba(0, 0, 0, 0.49); border:1px solid rgba(132, 132, 132, 1); position: fixed; bottom: 0; right: 0; z-index: 999999;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.2'"><a href="#" style="color:#07f;text-decoration:none;" onclick="require('electron').shell.openExternal('${this.meta.downloadUrl}')">${this.meta.modVersion}</a></version></dbm-mod>`;
    return (
      mod +
      `
<div style="margin-top: -10px;">
  <send-reply-target-input selectId="channel" variableInputId="varName"></send-reply-target-input>
</div>



<tab-system style="margin-top: 70px;">



<tab label="Message" icon="comment">
  <div style="width: 100%; padding: 8px; height: calc(100vh - 260px); overflow: auto">
    <textarea id="message" class="dbm_monospace" rows="10" placeholder="Insert message here..." style="height: calc(100vh - 309px); white-space: nowrap;"></textarea>
    <div id="counter" style="float: right; text-align: right; position: relative; width: 22%;">characters: 0</div>
    <dbm-checkbox id="overwriteContent" label="Overwrite Content"></dbm-checkbox>
  </div>
</tab>



<tab label="Embeds" icon="book image">
  <div style="padding: 8px;">

    <dialog-list id="embeds" fields='["title", "url", "color", "useTimestamp", "timestamp", "imageUrl", "thumbUrl", "description", "fields", "author", "authorUrl", "authorIcon", "footerText", "footerIconUrl"]' saveButtonText="Save Embed", dialogTitle="Embed Info" dialogWidth="540" dialogHeight="460" listLabel="Embeds" listStyle="height: calc(100vh - 350px);" itemName="Embed" itemCols="2" itemHeight="80px;" itemTextFunction="glob.formatItemEmbed(data)" itemStyle="text-align: left; line-height: 30px;">
      <div style="padding: 16px 16px 0px 16px;">

        <tab-system>

          <tab label="General" icon="certificate">
            <div style="padding: 8px">
              <div style="float: left; width: calc(50% - 12px);">
                <span class="dbminputlabel">Title</span><br>
                <input id="title" class="round" type="text" placeholder="Leave blank for none...">

                <br>

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
                    <input id="color" class="round" type="text" placeholder="Leave blank for black...">
                  </div>
                  <button onclick="const i=color,b=this;t=i.type==='text';i.type=t?'color':'text';b.textContent=t?'Text':'Color'" class="tiny compact ui icon button" style="margin-top:18px">Color</button>
                </div>

              </div>

              <div style="float: right; width: calc(50% - 12px);">
                <span class="dbminputlabel">Tittle URL</span><br>
                <input id="url" class="round" type="text" placeholder="Leave blank for none...">

                <br>

                <div style="width:100%; vertical-align: top;">
                  <div style="display: flex; flex-direction: column; position: relative; margin-top: -4px;">
                    <dbm-checkbox id="useTimestamp" style="font-size:13px; margin: 0; margin-left: 3px;" label="Use Timestamp"></dbm-checkbox>
                    <input id="timestamp" class="round" type="text" placeholder="Leave blank for current..." style="position: relative; z-index: 2; margin-top: -3px;">
                  </div>
                </div>

              </div>

              <br><br><br><br><br><br><br>

              <hr class="subtlebar">

              <br>

              <span class="dbminputlabel">Image (url/path/buffer)</span><br>
              <input id="imageUrl" class="round" type="text" placeholder="Leave blank for none...">

              <br>

              <span class="dbminputlabel">Thumbnail (url/path/buffer)</span><br>
              <input id="thumbUrl" class="round" type="text" placeholder="Leave blank for none...">
            </div>
          </tab>

          <tab label="Description" icon="file image">
            <div style="padding: 8px">
              <textarea id="description" class="dbm_monospace" rows="10" placeholder="Insert description here..." style="height: calc(100vh - 149px); white-space: nowrap; resize: none;"></textarea>
              <div id="counter" style="float: right; text-align: right; position: relative; width: 22%;">characters: 0</div>
            </div>
          </tab>

          <tab label="Fields" icon="list">
            <div style="padding: 8px">
              <dialog-list id="fields" fields='["name", "value", "inline"]' saveButtonText="Save Field", dialogTitle="Field Info" dialogWidth="540" dialogHeight="300" listLabel="Fields" listStyle="height: calc(100vh - 190px);" itemName="Field" itemCols="1" itemHeight="30px;" itemTextFunction="data.name + '<br>' + data.value" itemStyle="text-align: left; line-height: 30px;">
                <div style="padding: 16px;">
                  <div style="float: left; width: calc(50% - 12px);">
                    <span class="dbminputlabel">Field Name</span><br>
                    <input id="name" class="round" type="text">
                  </div>

                  <div style="float: right; width: calc(50% - 12px);">
                    <span class="dbminputlabel">Inline?</span><br>
                    <select id="inline" class="round">
                      <option value="true">Yes</option>
                      <option value="false" selected>No</option>
                    </select>
                  </div>

                  <br><br><br><br>

                  <span class="dbminputlabel">Field Value</span><br>
                  <textarea id="value" class="dbm_monospace" rows="10" placeholder="Insert field text here..." style="height: calc(100vh - 190px); white-space: nowrap; resize: none;"></textarea>

                </div>
              </dialog-list>
            </div>
          </tab>

          <tab label="Author" icon="user circle">
            <div style="padding: 8px">
              <span class="dbminputlabel">Author Text</span><br>
              <input id="author" class="round" type="text" placeholder="Leave blank to disallow...">

              <br>

              <span class="dbminputlabel">Author URL</span><br>
              <input id="authorUrl" class="round" type="text" placeholder="Leave blank for none...">

              <br>

              <span class="dbminputlabel">Author Icon (url/path/buffer)</span><br>
              <input id="authorIcon" class="round" type="text" placeholder="Leave blank for none...">
            </div>
          </tab>

          <tab label="Footer" icon="map outline">
            <div style="padding: 8px;">
              <span class="dbminputlabel">Footer Icon (url/path/buffer)</span><br>
              <input id="footerIconUrl" class="round" type="text" placeholder="Leave blank for none...">

              <br>

              <span class="dbminputlabel">Footer Text</span><br>
              <textarea id="footerText" class="dbm_monospace" rows="10" placeholder="Leave blank to disallow..." style="height: calc(100vh - 234px); white-space: nowrap; resize: none;"></textarea>
            </div>
          </tab>

        </tab-system>

      </div>
      <img src="invalid_src" style="display:none" onerror="t=document.getElementById('description'),c=document.getElementById('counter'),t&&c&&(u=()=>c.textContent='characters: '+t.value.length,u(),t.addEventListener('input',u))">
    </dialog-list>

    <dbm-checkbox id="overwriteEmbeds" label="Overwrite Embeds"></dbm-checkbox>
  </div>
</tab>



<tab label="Poll" icon="chart bar">
  <div style="padding: 8px;">
    <dbm-container>

      <span class="dbminputlabel">Question</span>
      <input id="pollQuestion" class="round" type="text" placeholder="Leave blank for disable poll..." style="width: 100%;">

      <dialog-list id="pollAnswers" fields='["pollAnswer", "pollEmoji"]' saveButtonText="Save Answer" dialogTitle="Create Answer" dialogWidth="400" dialogHeight="250" listLabel="Answers (1 - 10)" listStyle="height: calc(100vh - 470px);" itemName="Answer" itemCols="1" itemHeight="30px;" itemTextFunction="data.pollEmoji + data.pollAnswer" itemStyle="text-align: left; line-height: 30px;">
        <div style="padding: 16px;">
          <span class="dbminputlabel">Answer</span>
          <input id="pollAnswer" class="round" type="text" placeholder="Type your answer" style="width: 100%;">

          <br>

          <span class="dbminputlabel">Emoji</span>
          <input id="pollEmoji" class="round" type="text" placeholder="Leave blank for none..." style="width: 100%;">

          <br>
        </div>
      </dialog-list>

      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 20px; margin-bottom: 0;">
        <div style="flex: 1; text-align: left;">
          <dbm-checkbox id="pollAllowMultipleAnswers" label="Allow Multiple Answers"></dbm-checkbox>
        </div>

        <div style="flex: 1; text-align: left;">
          <span class="dbminputlabel">Duration (in hours 1/2/3...)</span>
          <input id="pollDuration" class="round" type="text" placeholder="Leave blank for 24h..." style="width: 100%;">
        </div>
      </div>

    </dbm-container>
  </div>
</tab>



<tab label="Buttons" icon="clone">
  <div style="padding: 8px;">

    <dialog-list id="buttons" fields='["name", "type", "id", "row", "url", "skuId", "emoji", "disabled", "mode", "time", "actions"]' saveButtonText="Save Button" dialogTitle="Button Info" dialogWidth="600" dialogHeight="700" listLabel="Buttons" listStyle="height: calc(100vh - 350px);" itemName="Button" itemCols="5" itemHeight="40px;" itemTextFunction="glob.formatItemButton(data)" itemStyle="text-align: center; line-height: 40px;">
      <div style="padding: 16px;">

        <div style="width: calc(50% - 12px); float: left;">
          <span class="dbminputlabel">Name</span>
          <input id="name" class="round" type="text" placeholder="Leave blank for none...">

          <br>

          <span class="dbminputlabel">Type</span><br>
          <select id="type" class="round" onchange="(function(el){const linkWrap=document.getElementById('linkIdWrapper');const skuWrap=document.getElementById('skuIdWrapper');const typeVal=el.value;if(linkWrap){const d=typeVal!=='5';linkWrap.style.pointerEvents=d?'none':'auto';linkWrap.style.opacity=d?'0.5':'1';linkWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(linkWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(skuWrap){const d=typeVal!=='6';skuWrap.style.pointerEvents=d?'none':'auto';skuWrap.style.opacity=d?'0.5':'1';skuWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(skuWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}})(this)">
            <option value="1" selected>Primary (Blurple)</option>
            <option value="2">Secondary (Grey)</option>
            <option value="3">Success (Green)</option>
            <option value="4">Danger (Red)</option>
            <option value="5">Link (Grey)</option>
            <option value="6">Premium (Blurple)</option>
          </select>

          <br>

          <div id="linkIdWrapper">
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

          <br>

          <div id="skuIdWrapper">
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
        </div>

        <div style="width: calc(50% - 12px); float: right;">
          <span class="dbminputlabel">Unique ID</span>
          <input id="id" placeholder="Leave blank to auto-generate..." class="round" type="text">

          <br>

          <span class="dbminputlabel">Action Row (1 - 5)</span>
          <input id="row" placeholder="Leave blank for default..." class="round" type="text">

          <br>

          <span class="dbminputlabel">Emoji</span>
          <input id="emoji" placeholder="Leave blank for none..." class="round" type="text">

          <br>

          <span class="dbminputlabel">Temporary Time-Limit (Miliseconds)</span>
          <input id="time" placeholder="60000" class="round" type="text">

          <div style="padding-top: 8px; margin-top: 10px;">
            <span class="dbminputlabel">Enable/Disable Button</span>
            <select id="disabled" class="round">
              <option value="false">Enable</option>
              <option value="true">Disable</option>
            </select>
          </div>
        </div>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

        <action-list-input mode="BUTTON" id="actions" height="calc(100vh - 460px)"></action-list-input>

      </div>
      <img src="invalid_src" style="display:none" onerror="(function(){const t=document.getElementById('type');if(!t)return;const linkWrap=document.getElementById('linkIdWrapper');const skuWrap=document.getElementById('skuIdWrapper');const typeVal=t.value;if(linkWrap){const d=typeVal!=='5';linkWrap.style.pointerEvents=d?'none':'auto';linkWrap.style.opacity=d?'0.5':'1';linkWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(linkWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}if(skuWrap){const d=typeVal!=='6';skuWrap.style.pointerEvents=d?'none':'auto';skuWrap.style.opacity=d?'0.5':'1';skuWrap.style.filter=d?'grayscale(0.4)':'none';Array.from(skuWrap.querySelectorAll('input,select,textarea,button')).forEach(i=>{try{i.disabled=d}catch(e){}})}})()">
    </dialog-list>

    <dbm-checkbox id="overwriteButtons" label="Overwrite Buttons"></dbm-checkbox>
  </div>
</tab>



<tab label="Selects" icon="list alternate">
  <div style="padding: 8px;">

    <dialog-list id="selectMenus" fields='["test", "placeholder", "id", "tempVarName", "row", "min", "max", "mode", "time", "options", "actions", "type", "disabled", "defaultValues", "channelTypes", "GuildText", "GuildVoice", "GuildCategory", "GuildAnnouncement", "GuildStageVoice", "GuildForum", "GuildMedia"]' saveButtonText="Save Select Menu" dialogTitle="Select Menu Info" dialogWidth="800" dialogHeight="750" listLabel="Select Menus" listStyle="height: calc(100vh - 350px);" itemName="Select Menu" itemCols="1" itemHeight="40px;" itemTextFunction="glob.formatItemSelectMenu(data)" itemStyle="text-align: left; line-height: 40px;">
      <div style="padding: 16px;">

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
          <input id="id" placeholder="Leave blank to auto-generate..." class="round" type="text">

          <br>

          <span class="dbminputlabel">Action Row (1 - 5)</span>
          <input id="row" placeholder="Leave blank for default..." class="round" type="text">

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

    <dbm-checkbox id="overwriteSelects" label="Overwrite Selects"></dbm-checkbox>
  </div>
</tab>



<tab label="Files" icon="file image">
  <div style="padding: 8px;">

    <dialog-list id="attachments" fields='["url", "name", "spoiler"]' saveButtonText="Save File" dialogTitle="Attachment Info" dialogWidth="400" dialogHeight="300" listLabel="Files" listStyle="height: calc(100vh - 350px);" itemName="File" itemCols="1" itemHeight="30px;" itemTextFunction="data.url" itemStyle="text-align: left; line-height: 30px;">
      <div style="padding: 16px;">
        <span class="dbminputlabel">Attachment (url/path/buffer)</span>
        <input id="url" class="round" type="text" value="resources/">

        <br>

        <span class="dbminputlabel">Attachment Name</span>
        <input id="name" class="round" type="text" placeholder="Leave blank for default...">

        <br>

        <div style="text-align: center; padding-top: 4px;">
          <dbm-checkbox id="spoiler" label="Make Attachment Spoiler"></dbm-checkbox>
        </div>
      </div>
    </dialog-list>

    <dbm-checkbox id="overwriteFiles" label="Overwrite Files"></dbm-checkbox>

  </div>
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
      <dbm-checkbox id="allowMentionUsers" label="Allow Mention Users" checked></dbm-checkbox>
      <dbm-checkbox id="allowMentionRoles" label="Allow Mention Roles" checked></dbm-checkbox>
      <dbm-checkbox id="allowMentionEveryone" label="Allow Mention Everyone" checked></dbm-checkbox>
    </div>

    <br>

    <div style="display: flex; justify-content: space-between;">
      <dbm-checkbox id="suppressLinkEmbeds" label="Suppress Link Embeds"></dbm-checkbox>
      <dbm-checkbox id="allowMentionCommandUser" label="Ping Command User (only in text command reply)"></dbm-checkbox>
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

    <div style="padding-bottom: 12px;">
      <retrieve-from-variable allowNone dropdownLabel="Message/Options to Edit" selectId="editMessage" variableInputId="editMessageVarName" variableContainerId="editMessageVarNameContainer">
        <option value="intUpdate">Interaction Update</option>
        <option value="deferUpdate">Defer Update</option>
        <option value="replyUpdate">Reply Update</option>
      </retrieve-from-variable>
    </div>

    <br><br><br>

    <div style="padding-bottom: 12px;">
      <store-in-variable dropdownLabel="Store Message In" allowNone selectId="storage" variableInputId="varName2" variableContainerId="varNameContainer2"></store-in-variable>
    </div>

    <br><br>
    <div></div>
    
  </div>
</tab>



</tab-system>`
    );
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor Init Code
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  init() {
    const { document, glob } = this;

    const textarea = document.getElementById("message");
    const counter = document.getElementById("counter");
    const textLength = textarea.value.length;
    counter.textContent = `characters: ${textLength}`;
    textarea.addEventListener("input", () => {
      const textLength = textarea.value.length;
      counter.textContent = `characters: ${textLength}`;
    });

    glob.formatItemButton = function (data) {
      let setcor = "";
      if (data.type == "1" || data.type == "6") {
        setcor = "rgb(88,101,242)";
      }
      if (data.type == "2" || data.type == "5") {
        setcor = "rgb(78,80,88)";
      }
      if (data.type == "3") {
        setcor = "rgb(36,128,70)";
      }
      if (data.type == "4") {
        setcor = "rgb(218,55,60)";
      }
      let result =
        '<div style="display: inline-block; width: 100%;"><div style="width:10px;background:' +
        setcor +
        ';float:left;margin-left:-10px"><br></div><table style="margin-left:10px"><tr><td style="width:100%">';
      const comp = "0";
      switch (comp) {
        case "0":
          result +=
            (data.emoji ? data.emoji.substring(0, 4) : "") + " " + data.name;
          break;
      }
      return result;
    };

    glob.formatItemSelectMenu = function (data) {
      const type = data.type;

      let result =
        '<div style="display: inline-block; width: 100%; padding-left: 8px">' +
        '<div style="float:left;width: calc(100% - 200px);overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">';

      result += data.placeholder;

      result +=
        "</div><div style='float:right;width:190px;text-align:right;padding:0px 10px 0px 0px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;'>";

      if (type === "StringSelectMenu") {
        result += "Options: " + data.options.length + " / 25";
      } else {
        result += type.replace(/([A-Z])/g, " $1").trim();
      }

      result += "</div></div>";

      return result;
    };

    glob.formatItemEmbed = function (data) {
      const maxLength = 30;
      const firstLine = data.description.substring(0, maxLength);
      const secondLine =
        data.description.length > maxLength
          ? data.description.substring(maxLength, maxLength * 2)
          : "";

      const result =
        '<div style="margin-left:-10px; background:' +
        data.color +
        '; float:left; width:10px; overflow:hidden; height:80px;"><br></div>' +
        '<div style="float:left; width:70%; overflow:hidden; margin-left:5px; white-space: normal; line-height: 1.2;">' +
        "<br>" +
        "<strong style='font-weight: bolder;'>" +
        data.title +
        "</strong>" +
        "<br>" +
        firstLine +
        "<br>" +
        secondLine +
        "</div>" +
        '<div style="float:right; width:19%; text-align:right; overflow:hidden;">' +
        (data.formula == 1 || data.formula == 2
          ? '<span style="float:right;" title="Condition enabled"> 🔘 </span>'
          : "") +
        "</div>";

      return result;
    };
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor On Save
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  onSave(data, helpers) {
    for (let i = 0; i < data.buttons.length; i++) {
      if (!data.buttons[i].id) {
        data.buttons[i].id =
          "msg-button-" + helpers.generateUUID().substring(0, 7);
      }
    }
    for (let i = 0; i < data.selectMenus.length; i++) {
      if (!data.selectMenus[i].id) {
        data.selectMenus[i].id =
          "msg-select-" + helpers.generateUUID().substring(0, 7);
      }
    }
    return data;
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Editor On Paste
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  onPaste(data, helpers) {
    for (let i = 0; i < data.buttons.length; i++) {
      const id = data.buttons[i].id;
      if (!id || id.startsWith("msg-button-")) {
        data.buttons[i].id =
          "msg-button-" + helpers.generateUUID().substring(0, 7);
      }
    }
    for (let i = 0; i < data.selectMenus.length; i++) {
      const id = data.selectMenus[i].id;
      if (!id || id.startsWith("msg-select-")) {
        data.selectMenus[i].id =
          "msg-select-" + helpers.generateUUID().substring(0, 7);
      }
    }
    return data;
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Function
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  async action(cache) {
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Imports
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const data = cache.actions[cache.index];
    const { Bot } = this.getDBM();
    const { MessageFlags, ChannelType } = Bot.require("discord.js");

    const target = await this.getSendReplyTarget(
      parseInt(data.channel, 10),
      this.evalMessage(data.varName, cache),
      cache,
    );
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

    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Get Content
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const getContent = () => {
      let content = this.evalMessage(data.message, cache) || "";
      if (content !== "") {
        if (msgToEdit && data.overwriteContent === true) {
          content = this.evalMessage(data.message, cache);
        } else if (msgToEdit && data.overwriteContent === false) {
          const oldContent = msgToEdit.content || "";
          const newContent = this.evalMessage(data.message, cache) || "";
          content = oldContent + newContent;
        } else {
          content = this.evalMessage(data.message, cache);
        }
      }
      return content;
    };

    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Get Embeds
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const getEmbeds = async () => {
      let embeds = [];
      let embedFiles = [];
      for (const e of data.embeds) {
        let timestamp;
        if (e.useTimestamp) {
          timestamp =
            this.evalMessage(e.timestamp, cache) || Date.now().toString();
        }
        const fields = [];
        for (const f of e.fields) {
          const field = this.generateEmbedField(
            {
              name: f.name,
              value: f.value,
              inline: f.inline,
            },
            cache,
          );
          fields.push(field);
        }
        const embed = this.generateEmbed(
          {
            author: {
              name: e.author,
              iconURL: await this.resolveAttachmentUrl(
                this.evalIfPossible(e.authorIcon, cache),
                embedFiles,
              ),
              url: e.authorUrl,
            },
            color: e.color,
            description: e.description,
            fields: fields,
            footer: {
              text: e.footerText,
              iconURL: await this.resolveAttachmentUrl(
                this.evalIfPossible(e.footerIconUrl, cache),
                embedFiles,
              ),
            },
            image: await this.resolveAttachmentUrl(
              this.evalIfPossible(e.imageUrl, cache),
              embedFiles,
            ),
            thumbnail: await this.resolveAttachmentUrl(
              this.evalIfPossible(e.thumbUrl, cache),
              embedFiles,
            ),
            timestamp: timestamp,
            title: e.title,
            url: e.url,
          },
          cache,
        );
        embeds.push(embed);
      }
      if (embeds.length > 0) {
        if (msgToEdit && data.overwriteEmbeds === true) {
          embeds = embeds;
        } else if (msgToEdit && data.overwriteEmbeds === false) {
          const oldEmbeds = msgToEdit.embeds || [];
          const newEmbeds = embeds;
          const oldFiles = msgToEdit.attachments?.map((a) => a.url) || [];
          const newFiles = embedFiles;
          embeds = [...oldEmbeds, ...newEmbeds];
          embedFiles = [...oldFiles, ...newFiles];
        } else {
          embeds = embeds;
        }
      }
      return { embeds: embeds, embedFiles: embedFiles };
    };

    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Get Poll
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const getPoll = () => {
      if (data.pollQuestion && data.pollAnswers.length > 0) {
        const answers = [];
        for (const a of data.pollAnswers) {
          const answer = this.generatePollAnswer(
            {
              text: a.pollAnswer,
              emoji: a.pollEmoji,
            },
            cache,
          );
          answers.push(answer);
        }
        let poll = this.generatePoll(
          {
            question: { text: data.pollQuestion },
            answers: answers,
            allowMultiselect: data.pollAllowMultipleAnswers,
            duration: data.pollDuration,
          },
          cache,
        );
        return poll;
      }
    };

    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Get Buttons
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const getButtons = () => {
      let buttons = [];
      const usedCustomIds = new Set();
      for (const b of data.buttons) {
        const customId = this.evalMessage(b.id, cache) || Date.now();
        const time = this.evalMessage(b.time, cache) || 60000;
        const mode = this.evalMessage(b.mode, cache);
        const row = this.evalMessage(b.row, cache) || null;
        if (usedCustomIds.has(customId)) continue;
        usedCustomIds.add(customId);
        const button = this.generateButton(
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
        buttons.push({ button: button, row: row, time: time, mode: mode });
        if (b.mode !== "PERSISTENT") {
          awaitResponses.push({
            type: "BUTTON",
            time: b.time
              ? parseInt(this.evalMessage(b.time, cache)) || defaultTime
              : defaultTime,
            id: this.evalMessage(b.id, cache),
            user: b.mode.endsWith("PERSONAL") ? cache.getUser()?.id : null,
            multi: b.mode.startsWith("MULTI"),
            data: b,
          });
        }
      }
      if (buttons.length > 0) {
        if (msgToEdit && data.overwriteButtons === true) {
          buttons = buttons;
          if (msgToEdit._awaitResponses?.length > 0) {
            const oldButtons = msgToEdit._awaitResponses.filter(
              (r) => r.type === "BUTTON",
            );
            const newButtons = awaitResponses.filter(
              (r) => r.type === "BUTTON",
            );
            if (data.overwriteButtons && newButtons.length > 0) {
              msgToEdit._awaitResponses = msgToEdit._awaitResponses.filter(
                (r) => r.type !== "BUTTON",
              );
            } else {
              awaitResponses = oldButtons.concat(newButtons);
            }
          }
        } else if (msgToEdit && data.overwriteButtons === false) {
          const oldComponents = msgToEdit.components || [];
          const oldButtons = [];
          for (const row of oldComponents) {
            for (const comp of row.components) {
              if (comp.type === 2) {
                oldButtons.push({ button: comp, row: row.index || null });
              }
            }
          }
          const newButtons = buttons;
          buttons = [...oldButtons, ...newButtons];
        } else {
          buttons = buttons;
        }
      }
      return buttons;
    };

    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Get Selects
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const getSelects = () => {
      let selects = [];
      const usedCustomIds = new Set();
      for (const s of data.selectMenus) {
        const type = this.evalMessage(s.type, cache);
        const customId = this.evalMessage(s.id, cache) || Date.now();
        const options = [];
        const time = this.evalMessage(s.time, cache) || 60000;
        const mode = this.evalMessage(s.mode, cache);
        const row = this.evalMessage(s.row, cache) || null;
        if (usedCustomIds.has(customId)) continue;
        usedCustomIds.add(customId);
        let selectMenu;
        if (type === "StringSelectMenu") {
          for (const o of s.options) {
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
          selectMenu = this.generateStringSelectMenu(
            {
              customId: s.id,
              disabled: s.disabled,
              minValues: s.min,
              maxValues: s.max,
              options: options,
              placeholder: s.placeholder,
            },
            cache,
          );
        } else if (type === "UserSelectMenu") {
          selectMenu = this.generateUserSelectMenu(
            {
              customId: s.id,
              defaultUsers: s.defaultValues,
              disabled: s.disabled,
              minValues: s.min,
              maxValues: s.max,
              placeholder: s.placeholder,
            },
            cache,
          );
        } else if (type === "RoleSelectMenu") {
          selectMenu = this.generateRoleSelectMenu(
            {
              customId: s.id,
              defaultRoles: s.defaultValues,
              disabled: s.disabled,
              minValues: s.min,
              maxValues: s.max,
              placeholder: s.placeholder,
            },
            cache,
          );
        } else if (type === "MentionableSelectMenu") {
          selectMenu = this.generateMentionableSelectMenu(
            {
              customId: s.id,
              defaultValues: s.defaultValues,
              disabled: s.disabled,
              minValues: s.min,
              maxValues: s.max,
              placeholder: s.placeholder,
            },
            cache,
          );
        } else if (type === "ChannelSelectMenu") {
          const channelTypes = [];
          if (s.GuildText) channelTypes.push(ChannelType.GuildText);
          if (s.GuildVoice) channelTypes.push(ChannelType.GuildVoice);
          if (s.GuildCategory) channelTypes.push(ChannelType.GuildCategory);
          if (s.GuildAnnouncement)
            channelTypes.push(ChannelType.GuildAnnouncement);
          if (s.GuildStageVoice) channelTypes.push(ChannelType.GuildStageVoice);
          if (s.GuildForum) channelTypes.push(ChannelType.GuildForum);
          if (s.GuildMedia) channelTypes.push(ChannelType.GuildMedia);
          selectMenu = this.generateChannelSelectMenu(
            {
              customId: s.id,
              channelTypes: channelTypes,
              defaultChannels: s.defaultValues,
              disabled: s.disabled,
              minValues: s.min,
              maxValues: s.max,
              placeholder: s.placeholder,
            },
            cache,
          );
        }
        selects.push({
          selectMenu: selectMenu,
          row: row,
          time: time,
          mode: mode,
        });
        if (s.mode !== "PERSISTENT") {
          awaitResponses.push({
            type: "SELECT",
            time: s.time
              ? parseInt(this.evalMessage(s.time, cache)) || defaultTime
              : defaultTime,
            id: this.evalMessage(s.id, cache),
            user: s.mode.endsWith("PERSONAL") ? cache.getUser()?.id : null,
            multi: s.mode.startsWith("MULTI"),
            data: s,
          });
        }
      }
      if (selects.length > 0) {
        if (msgToEdit && data.overwriteSelects === true) {
          selects = selects;
          if (msgToEdit._awaitResponses?.length > 0) {
            const oldSelects = msgToEdit._awaitResponses.filter(
              (r) => r.type === "SELECT",
            );
            const newSelects = awaitResponses.filter(
              (r) => r.type === "SELECT",
            );
            if (data.overwriteSelects && newSelects.length > 0) {
              msgToEdit._awaitResponses = msgToEdit._awaitResponses.filter(
                (r) => r.type !== "SELECT",
              );
            } else {
              awaitResponses = oldSelects.concat(newSelects);
            }
          }
        } else if (msgToEdit && data.overwriteSelects === false) {
          const oldComponents = msgToEdit.components || [];
          const oldSelects = [];
          for (const row of oldComponents) {
            for (const comp of row.components) {
              if (
                comp.type === 3 ||
                comp.type === 5 ||
                comp.type === 6 ||
                comp.type === 7 ||
                comp.type === 8
              ) {
                oldSelects.push({
                  selectMenu: comp,
                  row: row.index || null,
                  time: null,
                  mode: null,
                });
              }
            }
          }
          const newSelects = selects;
          selects = [...oldSelects, ...newSelects];
        } else {
          selects = selects;
        }
      }
      return selects;
    };

    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Get Components
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const getComponents = () => {
      const componentsArr = [];
      const buttonsData = getButtons();
      const selectsData = getSelects();
      for (const { button, row } of buttonsData) {
        this.addButtonToActionRowArray(componentsArr, row, button, cache);
      }
      for (const { selectMenu, row } of selectsData) {
        this.addSelectToActionRowArray(componentsArr, row, selectMenu, cache);
      }
      const components = this.convertComponentsArrayToActionRows(componentsArr);
      return components;
    };

    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Get Files
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const getFiles = async () => {
      let files = [];
      for (const f of data.attachments) {
        const filePath = this.evalIfPossible(f.url, cache) || undefined;
        const fileName = this.evalMessage(f.name, cache) || undefined;
        const file = await this.resolveAttachment(filePath, {
          name: fileName,
          spoiler: f.spoiler,
        });
        files.push(file);
      }
      if (files.length > 0) {
        if (msgToEdit && data.overwriteFiles === true) {
          files = files;
        } else if (msgToEdit && data.overwriteFiles === false) {
          const oldFiles = msgToEdit.attachments?.map((a) => a.url) || [];
          const newFiles = files;
          files = [...oldFiles, ...newFiles];
        } else {
          files = files;
        }
      }
      return files;
    };

    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Get Flags
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const getFlags = () => {
      const flags = [];
      if (data.ephemeral) flags.push(MessageFlags.Ephemeral);
      if (data.suppressLinkEmbeds) flags.push(MessageFlags.SuppressEmbeds);
      if (data.suppressNotifications)
        flags.push(MessageFlags.SuppressNotifications);
      return flags;
    };

    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // * Create Message
    //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

    const content = getContent();
    const { embeds, embedFiles } = await getEmbeds();
    const components = getComponents();
    const files = await getFiles();
    const poll = getPoll();
    const flags = getFlags();

    const mentionParse = [];
    if (data.allowMentionUsers) mentionParse.push("users");
    if (data.allowMentionRoles) mentionParse.push("roles");
    if (data.allowMentionEveryone) mentionParse.push("everyone");
    const repliedUser = data.allowMentionCommandUser;

    let message = {
      content: content,
      embeds: embeds,
      components: components,
      files: [...files, ...embedFiles],
      poll: poll,
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
      message._awaitResponses = awaitResponses;
      this.storeValue(message, storage, varName2, cache);
      this.callNextAction(cache);
      return;
    }

    try {
      const resultMsg = await this.sendOrReplyOrEditMessage(
        target,
        message,
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
      this.storeValue(resultMsg || message, storage, varName2, cache);
    } catch (err) {
      this.displayError(data, cache, err);
    }

    this.callNextAction(cache);
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod Init
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  modInit(data) {
    for (let i = 0; i < data.buttons.length; i++) {
      const button = data.buttons[i];
      if (button.mode === "PERSISTENT") {
        this.registerButtonInteraction(button.id, button);
      }
      this.prepareActions(button.actions);
    }
    for (let i = 0; i < data.selectMenus.length; i++) {
      const select = data.selectMenus[i];
      if (select.mode === "PERSISTENT") {
        this.registerSelectMenuInteraction(select.id, select);
      }
      this.prepareActions(select.actions);
    }
  },

  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  //region # Action Bot Mod
  //≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

  mod() {},
};
