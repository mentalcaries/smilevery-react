import DesignCard from "./DesignCard";
import paperCard from "../images/card-paper.png";
import floralCard from "../images/card-floral.png";
import animalCard from "../images/card-animal.png";

function Template({onCardSelect}) {
  return (
    <div>
      <h2 className="selector__title">Creating a Postcard</h2>
      <p className="selector__text">
        We managed to find these shops at the destination place
      </p>
      <section className="selector__partners">
        <DesignCard image={paperCard} name="Paper" onCardSelect={onCardSelect} button="Select" />
        <DesignCard image={floralCard} name="Flowers" onCardSelect={onCardSelect}  button="Select" />
        <DesignCard image={animalCard} name="Animals" onCardSelect={onCardSelect}  button="Select" />
      </section>
    </div>
  );
}

export default Template;
