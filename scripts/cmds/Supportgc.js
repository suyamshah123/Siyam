module.exports = {
  config: {
    name: "supportgc",
    version: "1.0",
    author: "kivv",
    role: 0,
    shortDescription: {
      en: "Adds the user to a specific thread."
    },
    longDescription: {
      en: "Adds the user to a specific thread and sends them a notification message."
    },
    category: "System",
    guide: {
      en: "Use {p}join to add yourself to the specified thread."
    }
  },
  onStart: async function ({ api, event, args }) {
    const threadID = "1445524483430739"; //m.me/j/AbY8harEO5FLMBKz/

    try {
      await api.addUserToGroup(event.senderID, threadID);
      api.sendMessage("You have been added to the group chat. Please check your Spam or Message Request folder if you can't find the group chat.", event.senderID);
    } catch (error) {
      api.sendMessage("Failed to add you to the group chat.", event.senderID);
    }
  }
};
