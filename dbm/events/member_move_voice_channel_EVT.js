module.exports = {
  name: "Member Move Voice Channel",
  isEvent: true,

  fields: [
    "Temp Variable Name (Stores member that entered the channel):",
    `Temp Variable Name (Stores channel that the member joined):
    <div id="tempVarStore3" style="position: absolute; right: 0; top: 0; transform: translateX(0%);">
                <span class="dbminputlabel" id="tempLabel3">Temp Variable Name (Stores channel that the member left):</span>
                <input class="dbm_input" id="etemp3" style="width: 100%;" onchange="DBM.etempSaveData('etemp3')" type="text">
                (the variable is saved but not displayed in the GUI!)
            </div>
    `,
  ],

  mod(DBM) {
    DBM.Events = DBM.Events || {};
    const { Actions, Bot } = DBM;

    DBM.Events.memberMoveVoiceChannel = function memberMoveVoiceChannel(
      oldVoiceState,
      newVoiceState
    ) {
      if (!Bot.$evts["Member Move Voice Channel"]) return;
      const leftChannel = oldVoiceState.channel;
      const joinedChannel = newVoiceState.channel;
      if (
        !leftChannel ||
        !joinedChannel ||
        !leftChannel.id ||
        !joinedChannel.id ||
        leftChannel.id === joinedChannel.id
      )
        return;
      const server = joinedChannel.guild;

      for (const event of Bot.$evts["Member Move Voice Channel"]) {
        const temp = {};
        if (event.temp) temp[event.temp] = newVoiceState.member;
        if (event.temp2) temp[event.temp2] = joinedChannel;
        if (event.temp3) temp[event.temp3] = leftChannel;
        Actions.invokeEvent(event, server, temp);
      }
    };

    const { onReady } = Bot;
    Bot.onReady = function memberMoveVoiceChannelOnReady(...params) {
      Bot.bot.on("voiceStateUpdate", DBM.Events.memberMoveVoiceChannel);
      onReady.apply(this, ...params);
    };
  },
};
