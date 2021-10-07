import { Link } from "react-router-dom"


function Card(props){
  function handleClick(){
    console.log("Click")
  }

  return(
    <article className="card">
      <img className="card__image" src={props.image} alt="" onClick={handleClick} />
      <div className="card__items">
        <h2 className="card__title">{props.name}</h2>
        <Link to={props.link}>
        <button className="card__order-button">{props.button}</button>
        </Link>
      </div>
    </article>
  )

}
export default Card