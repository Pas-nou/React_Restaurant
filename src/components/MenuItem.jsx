// imports

import { useState } from "react";

function MenuItem({itemName, foodImage, description, price}) {
  //create a state isFavorite that has the inital value of isFavorite that comes from the props

  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickFavorite = () => {
    if (isFavorite === false) {
      setIsFavorite(true);
    }
    else if (isFavorite === true) {
      setIsFavorite(false);
    }
  }

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <img src={foodImage} alt="Food from the restaurant" />
        <figcaption>
          <h2>{itemName}</h2>
          <p>{description}</p>
        </figcaption>
      </figure>
      <span>{price} EUR</span>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}

      <button onClick={handleClickFavorite}>
        {(isFavorite)?"❤️":"🖤"}
      </button>
    </section>
  );
}

export default MenuItem;
