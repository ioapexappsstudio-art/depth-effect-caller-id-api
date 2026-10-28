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
          },
          {
            "id": 6,
            "preview": "https://drive.google.com/file/d/1tfVrrva5RlItPRqhLWomFhOQm-yUhxlU/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1ZHFeciE8DAZuFEp4RaxqlvxJ7TLu1Uij/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/11oSWoq9kKPMitZYLFwatDIbtojlE47j1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 7,
            "preview": "https://drive.google.com/file/d/1ZdkNeS16jqtx7iYk6PCxNcvJV2OiH8_X/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1FefVpj94v7ve4k0gG1aCIoLbf1xUTzxN/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1XAHNn2Jpj8QvWWWqAqG3haMlKGPx-Feu/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 8,
            "preview": "https://drive.google.com/file/d/12WC9BhhW5mY8TGYMnTrjN09pk4bPGUS6/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1lGSC8FKrLbumWuEwk0AOqH3rojBjc2q7/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/15CoeV8pdvZdjPxNYSQRIuhhHqxtMjg40/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 9,
            "preview": "https://drive.google.com/file/d/189Vtmo3OHo3XdV607CiGCs3Ic3HJRsmK/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1KPTR4EWiSSHq7ODFB9cFfrpM-FDnrpnJ/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1POHzZd201A8d84mKkHrGKlKKZQGHCRiK/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 10,
            "preview": "https://drive.google.com/file/d/1Ryq4qsGKoLqUcVLB-WbYLKdfHcbyDNYr/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1k0NUuxU4htTWCqU2_cW0UqiHhVFccm73/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1VqlIL7EuncSDJ6jLCCGg37KxJEDV1mIQ/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 11,
            "preview": "https://drive.google.com/file/d/1AC97PVieETKljYJSeOT6oZLoi4i4blLj/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1dhyvLEpi5-zvZei2sgf25RLBjt_R6Xv_/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1luLraQWgbfHb8pBdJLboL8knpX9S4FqF/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 12,
            "preview": "https://drive.google.com/file/d/1MyPqTbyHmRhsQ7xkeZlNMfWCJWGSsrsA/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1_sPLqzNOLQUfteyauOYQ_XHchqt-lYqx/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1SUC-pEyJQ8K_GVbp49RN8hADu8UgEIGn/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 13,
            "preview": "https://drive.google.com/file/d/1l6ogjs33GnGT2FMMQBiGZjAP9hh7Q1G8/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1NRHkcwzTiT2XYf6zZI0ByJnKJXQWhaMQ/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1mI-bS7MPW7SBkOw3a2iVv1CVARjTnAMB/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 14,
            "preview": "https://drive.google.com/file/d/10G6bD3RlQmMglVgpw_qu8BJoSTK2qICd/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1f4faohQMITE4XlLOBS2X7jAtpMMor1T_/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1j1QsgQ2s1WI-MB_M9ssPJhCgdC35GVh9/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 15,
            "preview": "https://drive.google.com/file/d/1nj5IdXbw_D6ZsIWKTgiGdCUcngB_Nb6d/view?usp=drive_link",
            "background": "https://drive.google.com/file/d/1nhXXKFpwgWKr1mnNO0aZI6Meb06Cutsk/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1DXp3FYrrK3FkQYcE21Xe2YPB9Shn9odx/view?usp=drive_link",
            "textColor": "#FFFFFF"
          }
        ]
  };

  return res.status(200).json(data);
}
