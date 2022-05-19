import { useState } from "react";

function FavoriteColor(props) {
  const truc = props.truc;
  const [color, setColor] = useState(0);

  return (
    <>
      <h1>
        My favorite {truc} is {color}!
      </h1>
      <button type="button" onClick={() => setColor(color + 1)}>
        Blue
      </button>
    </>
  );
}

export default FavoriteColor;

/*** le truc initial ok !
 * 
 * 
 * import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState(0);

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor(color + 1)}>
        Blue
      </button>
    </>
  );
}

export default FavoriteColor;
 */
