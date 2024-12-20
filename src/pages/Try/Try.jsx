import { useState } from 'react'
import TrySendTPO from './TrySendTPO/TrySendTPO'
import TryVerifyTPO from './TryVerifyTPO/TryVerifyTPO'
import TryVerifiedTPO from './TryVerifiedTPO/TryVerifiedTPO'
import './Try.css'

export default function Try() {
  const [status, setStatus] = useState('waiting')

  return (
    <>
      <div className="container container_content d_f_ce">
        <div className="list_y home_container">
          {status === 'waiting' && <TrySendTPO setStatus={setStatus} />}
          {status === 'verifying' && <TryVerifyTPO setStatus={setStatus} />}
          {status === 'verified' && <TryVerifiedTPO setStatus={setStatus} />}
        </div>
      </div>
    </>
  )
}
