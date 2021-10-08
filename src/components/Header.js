import headerLogo from '../images/logo.png'
import gift from '../images/gift.png'
import love from '../images/love.png'
import {Link} from 'react-router-dom'

function Header(){
  return(
    <div>
    <Link to="/smilevery-react/">
    <img className="header__logo" alt="Smilevery Logo" src={headerLogo}/>
    </Link>
     
    </div>


  )
}

export default Header