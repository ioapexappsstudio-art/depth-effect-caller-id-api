export default function handler(req, res) {
  // Tamaro Secret Token (Aa password jevo kaam karse)
  const SECRET_TOKEN = "DepthEffectSecretKey@123";

  // App thi moklelo token header ma check thase
  const clientToken = req.headers['x-api-key'];

  if (!clientToken || clientToken !== SECRET_TOKEN) {
    return res.status(401).json({ error: "Unauthorized Access!" });
  }

  // Secure JSON Data without Accept & Decline
  const data = {
    "Categories": [
      {
        "categoryName": "Nature",
        "Wallpaper": [
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          }
        ]
      },
       {
        "categoryName": "Nature",
        "Wallpaper": [
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          }
        ]
      },
       {
        "categoryName": "Nature",
        "Wallpaper": [
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          }
        ]
      },
       {
        "categoryName": "Nature",
        "Wallpaper": [
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          }
        ]
      },
       {
        "categoryName": "Nature",
        "Wallpaper": [
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          },
          {
            "id": 1,
            "preview": "https://drive.google.com/file/d/1S1k7ACKxPBG0dNvp3l7H6wJwp3Bn3Now/view?usp=sharing",
            "background": "https://drive.google.com/file/d/146Hj4zQp-GVkVJPIe17QnUEFeft4mn-T/view?usp=drive_link",
            "frontImage": "https://drive.google.com/file/d/1RzUlPDk6bqZMod0m3UIJ6FN_c4dpcou1/view?usp=drive_link",
            "textColor": "#FFFFFF"
          }
        ]
      }
    ]
  };

  return res.status(200).json(data);
}
