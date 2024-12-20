import React, { useState, useRef } from 'react'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import { verifyTPO } from '../../../scripts/authify/verifyTPO'
import { load } from '../../../scripts/utils/storage'

export default function TryVerifyTPO({ setStatus }) {
  const [inputs, setInputs] = useState(Array(6).fill(''))
  const inputRefs = useRef([])
  const [error, setError] = useState('')

  function handleInputChange(e, index) {
    const value = e.target.value
    const newInputs = [...inputs]

    if (value.length === 1) {
      newInputs[index] = value
    } else if (value.length > 1) {
      const newValues = value.slice(0, inputs.length - index).split('')
      newValues.forEach((char, i) => {
        newInputs[index + i] = char
      })
    }

    setInputs(newInputs)

    if (index < inputs.length - 1 && value.length === 1) {
      inputRefs.current[index + 1].focus()
    } else if (value === '' && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  async function handleSubmit() {
    const code = inputs.join('')

    if (code.length === inputs.length) {
      const phoneNumber = load('phoneNumber')
      const website = load('website')

      const data = await verifyTPO(phoneNumber, website, code)
      if (!data.ok) {
        setError(data.message)
        return
      }

      setStatus('verified')
    } else {
      setError('Please fill all the inputs')
    }
  }

  function isFormValid() {
    return inputs.every(function (input) {
      return input !== ''
    })
  }

  function handlePaste(e) {
    const paste = e.clipboardData.getData('text')
    const newInputs = inputs.map((input, index) => paste[index] || input)
    setInputs(newInputs)

    for (let i = 0; i < inputs.length; i++) {
      if (newInputs[i] === '') {
        inputRefs.current[i].focus()
        break
      }
    }
  }

  return (
    <>
      <h2>Verify</h2>
      <div className="list_x d_f_ai_ce try_tpo_verify_area">
        {inputs.map(function (input, index) {
          return (
            <Input
              key={index}
              id={`input-${index}`}
              value={input}
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              autoFocus={index === 0}
              onChange={(e) => handleInputChange(e, index)}
              onPaste={handlePaste}
              onKeyDown={(e) => {
                if (e.key === 'Backspace' && input === '') {
                  if (index > 0) {
                    inputRefs.current[index - 1].focus()
                  }
                }
              }}
            />
          )
        })}
      </div>
      <div className="try_error">{error}</div>
      <Button onClick={handleSubmit} disabled={!isFormValid()}>
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
