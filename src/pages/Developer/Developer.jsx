import { Link } from 'react-router-dom'
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
            <Link to="https://authify-api-ame4edcncxbugrbc.eastus-01.azurewebsites.net/docs">
              <span>
                authify-api-ame4edcncxbugrbc.eastus-01.azurewebsites.net
              </span>
            </Link>
            Authify provides a simple, secure way to manage phone number-based
            authentication for websites. It supports generating and verifying
            OTP (One-time password) codes for user authentication.
          </p>
        </div>
        <DeveloperCode />
      </div>
    </>
  )
}
