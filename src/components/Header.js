import headerLogo from '../images/logo.png'
import {Link} from 'react-router-dom'

function Header(){
  return(
    <Link to="/">
    <img className="header__logo" alt="Smilevery Logo" src={headerLogo}/>
    </Link>

  )
}

export default Header