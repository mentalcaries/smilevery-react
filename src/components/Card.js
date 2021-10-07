

function Card(props){
  function handleClick(){
    console.log("Click")
  }

  return(
    <article className="card">
      <img className="card__image" src={props.image} alt="" onClick={handleClick} />
      <div className="card__items">
        <h2 className="card__title">{props.name}</h2>
        <button className="card__order-button">{props.button}</button>
      </div>
    </article>
  )

}
export default Card