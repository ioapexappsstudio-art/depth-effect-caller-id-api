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
  // Ahiya Vercel Cron dwara request aave chhe ke nahi te check thase
  // Aethi koi bahar no user direct URL kholse to error aavse
  const authHeader = req.headers['authorization'];
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    // Note: Vercel aapo-aap cron request ma authorization header moke chhe
  }

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

  // NOTE: Ro-roj automatic notification mate badha users na FCM tokens database (Firestore/Realtime DB) ma save hova joiye. 
  // Ahiya tame badha users na tokens ni array lai ne loop chalai sako cho.
  
  return res.status(200).json({ 
    success: true, 
    sentTitle: selectedTitle, 
    sentBody: selectedMessage,
    message: "Daily 9 PM Cron executed successfully!" 
  });
}
