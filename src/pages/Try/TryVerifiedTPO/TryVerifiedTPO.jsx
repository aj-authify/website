import { remove } from '../../../scripts/utils/storage'

export default function TryVerifiedTPO() {
  remove('website')
  remove('phoneNumber')

  return (
    <>
      <div className="try_success">Your phone number is verified 🎉</div>
    </>
  )
}
