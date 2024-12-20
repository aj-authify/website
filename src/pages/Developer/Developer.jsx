import DeveloperCode from './DeveloperCode'
import DeveloperSocialMedia from './DeveloperSocialMedia'
import './Developer.css'

export default function Developer() {
  return (
    <>
      <div className="container container_content dev_list_y">
        <div className="dev_title">Authify API</div>
        <DeveloperSocialMedia />
        <div className="list_y">
          <div className="dev_sub_title">Overview</div>
          <p>
            <span>api-hj87.onrender.com</span> Authify API provides a simple,
            secure way to manage phone number-based authentication for websites.
            It supports generating and verifying TPO (Temporary Passcode) codes
            for user authentication.
          </p>
        </div>
        <DeveloperCode />
      </div>
    </>
  )
}
