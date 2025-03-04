export async function verifyTPO(phoneNumber, website, tpo) {
  const response = await fetch(
    'https://authify-api-ame4edcncxbugrbc.eastus-01.azurewebsites.net/tpo/verify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        website: website,
        phone_number: `+${phoneNumber}`,
        tpo: tpo,
      }),
    }
  )

  const data = await response.json()
  return data
}
