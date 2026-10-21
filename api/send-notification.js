var admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
    }),
  });
}

export default async function handler(req, res) {
  const titles = [
    "Depth Caller ID", "New Theme Available", "Incoming Call Alert",
    "Caller Style", "Check This Out", "Awesome Wallpaper",
    "Update Your Look", "Special Caller ID", "Screen Design", "Caller Effect"
  ];

  const messages = [
    "Tamara phone mate navo depth effect wallpaper aavi gyo chhe!",
    "Caller screen par amazing look set karo.",
    "Tamari call screen ne hve arakshit ane sundar banavo.",
    "Click karine navi theme check karo.",
    "Best caller ID background wait kare chhe.",
    "Depth effect caller id theme update thi gai.",
    "Tamaro phone hve alag j lagse.",
    "Preview joyine turat apply karo.",
    "Exclusive wallpaper caller ID mate.",
    "Open karo ane navi style try karo."
  ];

  const randomIndex = Math.floor(Math.random() * titles.length);
  const selectedTitle = titles[randomIndex];
  const selectedMessage = messages[randomIndex];

  const message = {
    topic: "all_users",
    data: {
      title: selectedTitle,
      body: selectedMessage,
      type: "depth_caller_notification"
    },
    android: {
      priority: "high"
    }
  };

  try {
    const response = await admin.messaging().send(message);
    return res.status(200).json({ 
      success: true, 
      messageId: response, 
      sentTitle: selectedTitle, 
      sentBody: selectedMessage 
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
