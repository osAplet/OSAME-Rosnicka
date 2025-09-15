import requests

WEBHOOK_URL = "https://discord.com/api/webhooks/1407651497075806218/8-URXg8jtUcbVHVvq1Mi5dkFbELjfZrGAr5XPFAtjxmjmKoxe4QAIB0rJc_48Y-q13zp"

data = {
    "username": "Rosnička",
    "avatar_url": "https://i.imgur.com/4M34hi2.png",
    "content": "🌦️ **Rosnička Výdech #2**\nLokalita: Rašovka\nTeplota: 21°C\nVítr: 8 km/h SZ\nRadar: ☁️🌧️💨"
}

response = requests.post(WEBHOOK_URL, json=data)

if response.status_code == 204:
    print("✅ Výdech úspěšně odeslán!")
else:
    print(f"❌ Chyba: {response.status_code}")
