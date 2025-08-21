module.exports = {
  config: {
    name: "offbot",
    version: "1.0",
    author: "siyam",
    countDown: 45,
    role: 0,
    shortDescription: "Turn off bot",
    longDescription: "Turn off bot",
    category: "owner",
    guide: "{p}{n}"
  },
  onStart: async function ({event, api}) {
    const permission = [ "100074722578899" ];
  if (!permission.includes(event.senderID)) {
    api.sendMessage("╔════ஜ۩۞۩ஜ═══╗\nমাংগেরনাটি তুই এই কমান্ড ইউজ করতে পারবি নাহ .\n═══ஜ۩۞۩ஜ═══╝", event.threadID, event.messageID);
    return;
  }
    api.sendMessage("╔════ஜ۩۞۩ஜ═══╗\nবাই সুনা 💋 দেখা হবে পরে আবার এখন আমি ঘুমাইলাম✅\═══ஜ۩۞۩ஜ═══╝",event.threadID, () =>process.exit(0))}
};
