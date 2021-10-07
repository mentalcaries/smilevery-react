import {Link} from "react-router-dom";

function DesignCard(props) {
  function handleClick() {
    props.onCardSelect(props);
  }

  return (
    <article className="card">
      <img
        className="card__image"
        src={props.image}
        alt=""
        onClick={handleClick}
      />
      <div className="card__items">
        <h2 className="card__title">{props.name}</h2>
        <Link to="/designer">
          <button className="card__order-button" onClick={handleClick}>
            {props.button}
          </button>
        </Link>
      </div>
    </article>
  );
}
export default DesignCard;
