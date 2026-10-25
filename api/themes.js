export default function handler(req, res) {
  const SECRET_TOKEN = "DepthEffectSecretKey@123";

  const clientToken = req.headers['x-api-key'];

  if (!clientToken || clientToken !== SECRET_TOKEN) {
    return res.status(401).json({ error: "Unauthorized Access!" });
  }

  const data = {
    "Wallpaper": [
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1UJ6Lbt-HifF0Qf2HskEEvBqhnMvjsWlu/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1QOe7HMq_mFL5jiLu8nVfGaOTqNsloEMH/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1HHxu_fn9DHatl749mJImA7CguiPvvptG/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 2,
            "preview": "https://drive.google.com/file/d/1QTwX83HwU8aJbDxqFfBzw8bw_q_LU8Cc/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1lahvWpshZtCtLbdgAY_kGPTyn2MZ7526/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1O-19cHBTrLXxXpZ4rQhvsSb7DNOCqz8w/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 3,
            "preview": "https://drive.google.com/file/d/1i7g8dsPfZNNE-5OPU7tpbBG6R9-yJA89/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1o_wrIW3snXYLwnNsmXfMX_SJp1WlpEZ7/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1Px0So0CsOrcafy8EBUlpt272E9H2WYb2/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 4,
            "preview": "https://drive.google.com/file/d/1pKXSQQyhYMCnQec4k2XWcWmqyahKhsRR/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1E-3G0mSfwkacX8x_Q5oGEgUw4PKciRl-/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1smQE46TNqfH0HKcxpPCCX_2pTMKaUM7T/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 5,
            "preview": "https://drive.google.com/file/d/1t4FxjrE2PbzQZXBVVG6c0omX4h55dioQ/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1Tp0_C1TUaF3RmUiTkd_Mk6TEp3q5tJ29/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1oPBdv_3Ry-mOkrpLNyKcEgDir12sCOKW/view?usp=drive_link",
            "textColor": "#FFFFFF"
          }
        ]
  };

  return res.status(200).json(data);
}
