const nums = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
export function isValidPhoneNumber(phoneNumber) {
  if (!phoneNumber) return false

  for (let i = 0; i < phoneNumber.length; i++) {
    if (!nums.has(phoneNumber[i])) return false
  }

  return true
}
