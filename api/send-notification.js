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
    "Incoming Call Alert  incoming",
    "New Depth Theme",
    "Stunning Caller Screen",
    "Upgrade Your Caller ID",
    "Awesome 3D Effect",
    "Exclusive Wallpaper",
    "Set Your Live Theme",
    "Smart Caller Design",
    "Make Calls Stylish",
    "New Look For Calls"
  ];

  
  const messages = [
    "Transform your incoming call screen with stunning depth effects!",
    "Check out the new trending wallpaper for your caller ID.",
    "Make your phone look amazing with our new custom themes.",
    "Give your caller screen a fresh and modern style today.",
    "Experience the ultimate 3D depth effect on every call.",
    "Discover exclusive HD wallpapers tailored for your caller ID.",
    "Tap now to apply the most popular caller theme of the day.",
    "Upgrade your default call screen with unique animations.",
    "Stand out every time your phone rings with cool new designs.",
    "Open the app now and explore today's top featured themes."
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
