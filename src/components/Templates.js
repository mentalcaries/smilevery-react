import Card from "./Card"
import paperCard from '../images/card-paper.png'
import floralCard from '../images/card-floral.png'
import animalCard from '../images/card-animal.png'

function Template(){
  return(
    <div>
      <h2 className="selector__title">Creating a Postcard</h2>
      <p className="selector__text">We managed to find these shops at the destination place</p>
      <section className="selector__partners">
      <Card image={paperCard}  button="Select"/>
      <Card image={floralCard}  button="Select"/>
      <Card image={animalCard} button="Select"/>
      </section>
    </div>
  )
}

export default Template