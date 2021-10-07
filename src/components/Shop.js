import Card from "./Card"
import Flowers from '../images/Flowers.png'
import Clothes from '../images/Clothes.png'
import Pizza from '../images/Pizza.png'

function Shop(){
  return(
    <div>
      <h2 className="selector__title">Shop Selection</h2>
      <p className="selector__text">We managed to find these shops at the destination place</p>
      <section className="selector__partners">
      <Card image={Pizza} name="Gigi's Pizza" button="Order Here" link="/templates"/>
      <Card image={Flowers} name="Petal's Flowers" button="Order Here" link="/templates"/>
      <Card image={Clothes} name="Lina's Fashions" button="Order Here" link="/templates"/>
      </section>
    </div>
  )
}

export default Shop