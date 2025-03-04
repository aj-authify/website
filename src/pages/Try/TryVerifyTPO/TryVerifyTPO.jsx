import { useState } from 'react'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import { verifyTPO } from '../../../scripts/authify/verifyTPO'
import { load } from '../../../scripts/utils/storage'

export default function TryVerifyTPO({ setStatus }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit() {
    if (code.length !== 6) {
      setError('Code must be exactly 6 characters')
      return
    }

    const phoneNumber = load('phoneNumber')
    const website = load('website')
    const data = await verifyTPO(phoneNumber, website, code)

    if (!data.ok) {
      setError(data.message)
      return
    }

    setStatus('verified')
  }

  return (
    <>
      <h2 className="list_x d_f_ai_ce d_f_jc_sb">
        <div>Verify</div> <div>+{load('phoneNumber')}</div>
      </h2>
      <Input
        value={code}
        autoFocus={true}
        maxLength="6"
        className="try_tpo_verify_area_input"
        onChange={(e) => setCode(e.target.value)}
      />
      <div className="try_error">{error}</div>
      <Button onClick={handleSubmit} disabled={code.length !== 6}>
        Verify
      </Button>
      <Button className="back_btn" onClick={() => setStatus('waiting')}>
        Back to phone number
      </Button>
      <div className="d_f_ce list_x">
        <div>To get your TPO code please visit</div>
        <a
          href="https://t.me/authify_bot"
          rel="noreferrer"
          target="_blank"
          className="bot_link"
        >
          Authify bot
        </a>
      </div>
    </>
  )
}
