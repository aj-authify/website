export async function sendTPO(phoneNumber, website) {
  const response = await fetch(
    'https://authify-api-ame4edcncxbugrbc.eastus-01.azurewebsites.net/tpo/generate',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
        website: website,
      }),
    }
  )

  const data = await response.json()
  return data
}
