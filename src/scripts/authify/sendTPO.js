export async function sendTPO(phoneNumber, website) {
  const response = await fetch('https://api-hj87.onrender.com/tpo/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phone_number: phoneNumber,
      website: website,
    }),
  })

  const data = await response.json()
  return data
}
