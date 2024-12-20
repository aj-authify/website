import { Link } from 'react-router-dom'
import './Header.css'
import telegramIcon from '../../media/icons/telegram.svg'

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="header d_f_ai_ce d_f_jc_sb">
          <div className="logo">
            <Link to="/">Authify</Link>
          </div>
          <div className="header_items list_x d_f_ai_ce">
            <Link to="https://t.me/authify_bot" className="d_f_ce">
              <img
                className="header_icon icon"
                src={telegramIcon}
                alt="telegram"
              />
            </Link>
            <div>|</div>
            <Link to="/dev">Developer</Link>
            <Link to="https://akbarswe.uz">About me</Link>
          </div>
        </div>
      </div>
    </>
  )
}
