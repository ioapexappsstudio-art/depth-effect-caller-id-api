// api/fcm-notify.js
var admin = require("firebase-admin");

// TODO: Firebase Service Account JSON key ne Vercel Environment Variables ma add karvani chhe
// Athva ahiya direct initialize kari sako cho.
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed, use POST" });
  }

  // 10 Alag-alag Titles ane Texts ni Array (Random select karva mate)
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

  // Random index select karva mate
  const randomIndex = Math.floor(Math.random() * titles.length);
  const selectedTitle = titles[randomIndex];
  const selectedMessage = messages[randomIndex];

  // Android device no FCM Device Token je client thi aavse
  const fcmToken = req.body.token;

  if (!fcmToken) {
    return res.status(400).json({ error: "FCM Token missing in request body!" });
  }

  // FAKAT 'data' payload mokliye chhie, 'notification' key nahi!
  // Aethi app foreground ma hoy ke background ma, onMessageReceived call thase j.
  const message = {
    token: fcmToken,
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
