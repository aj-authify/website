import { useState } from 'react'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import { sendTPO } from '../../../scripts/authify/sendTPO'
import { isValidPhoneNumber } from '../../../scripts/utils/isValidPhoneNumber'
import { load, save } from '../../../scripts/utils/storage'

export default function TrySendTPO({ setStatus }) {
  const [value, setValue] = useState(load('phoneNumber') || '')
  const [error, setError] = useState('')

  async function verify() {
    const phoneNumber = value.trim()
    const website = window.location.hostname

    const tpoData = await sendTPO(`+${phoneNumber}`, website)

    if (!tpoData.ok) {
      setError(tpoData.messsage)
      return
    }

    save('phoneNumber', phoneNumber)
    save('website', website)

    setStatus('verifying')
  }

  return (
    <>
      <h2>Phone number</h2>
      <div className="list_x d_f_ai_ce">
        <div>+</div>
        <Input
          autoFocus={true}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="try_error">{error}</div>
      <Button disabled={!isValidPhoneNumber(value.trim())} onClick={verify}>
        Send TPO
      </Button>
    </>
  )
}
