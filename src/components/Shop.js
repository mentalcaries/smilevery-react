import ShopCard from "./ShopCard";
import Flowers from "../images/Flowers.png";
import Candy from "../images/Candy.png";
import Pizza from "../images/Pizza.png";

function Shop() {
  return (
    <div>
      <h2 className="selector__title">Shop Selection</h2>
      <p className="selector__text">
        We managed to find these shops at the destination place
      </p>
      <section className="selector__partners">
        <ShopCard image={Pizza} name="Gigi's Pizza" button="Order Here" />
        <ShopCard image={Flowers} name="Petal's Flowers" button="Order Here" />
        <ShopCard image={Candy} name="Lina's Candies" button="Order Here" />
      </section>
    </div>
  );
}

export default Shop;
