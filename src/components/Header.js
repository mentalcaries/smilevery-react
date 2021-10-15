import headerLogo from '../images/logo.png'
import gift from '../images/gift.png'
import love from '../images/love.png'
import {Link} from 'react-router-dom'

function Header(){
  return(
    <div className="header__items">
    <Link to="/smilevery-react/">
    <img className="header__logo" alt="Smilevery Logo" src={headerLogo}/>
    </Link>
     <div className="header__group">
       <h2 className="header__text">Send a Smile!</h2>
       <img className="header__image" src={gift}/>
       {/* <img className="header__image" src={love}/> */}
     </div>
    </div>


  )
}

export default Header