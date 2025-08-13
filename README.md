module.exports.config = {
  name: "admin",
  version: "1.0.0",
  role: 0,
  author: "Masum Chowdhury",
  description: "Show owner/admin info",
  usages: "admin | masum | info | owner",
  cooldowns: 5,
  aliases: ["masum", "info", "owner"]
};

module.exports.run = async ({ api, event }) => {
  const ownerInfo = `
╭───[ 🌟 OWNER INFO 🌟 ]───╮
👤 Name: Masum Chowdhury
♂️ Gender: Male
❤️ Relation: single pro max
🎂 Age: Private (June 5)
☪️ Religion: Islam
🏠 Address: Noakhali, Bangladesh
📌 Facebook: facebook.com/4Masum4
📌 Instagram: instagram.com/4masum4

📌 UID List:
1️⃣ Main: 61561677212620
2️⃣ Alt 1: 100094007219565
3️⃣ Alt 2: 100086505613769
╰──────────────────────────╯
`;

  // ছবির ডিরেক্ট লিংক
  const ownerCardImg = "https://i.postimg.cc/fT4V5h7R/owner-info-masum.jpg"; // Neon Owner Info
  const profileCollageImg = "https://i.postimg.cc/j5xDLqVx/profile-collage-masum.jpg"; // FB + IG Profile Collage

  api.sendMessage(
    { body: ownerInfo, attachment: await Promise.all([
        global.utils.getStreamFromURL(ownerCardImg),
        global.utils.getStreamFromURL(profileCollageImg)
      ])
    },
    event.threadID,
    event.messageID
  );
};
