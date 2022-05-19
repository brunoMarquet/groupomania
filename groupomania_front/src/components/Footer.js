import React from "react";
//import { useState, useEffect } from "react";
import MouseLoc from "../components/MouseLoc";

//const UserContext = createContext();

const Footer = () => {
  //const user = useContext(UserContext);
  // const [user, setUser] = useState("Jesse Hall");

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <footer>
      <MouseLoc></MouseLoc>
      <button onClick={() => topFunction()}> haut de page</button>
    </footer>
  );
};

export default Footer;
/**
 * <UnComposant42 /> <hr></hr>
      <UnComposant4></UnComposant4> <hr></hr>
      <UnComposant2></UnComposant2>
      <hr></hr>
      <UnComposant></UnComposant>
 *  <ComposantParent /> <hr></hr>
 */
//<h2>{`Hello ${user} again!`}</h2> <p>Footer</p>
//<UnComposant></UnComposant>
/**
 * 
 *  const UnComposant4 = () => {
    const [object, setObject] = useState({
      name: "mrBien",
      click: 0,
    });

    const handleClick = () => {
      setObject({ ...object, click: object.click + 1 });
    };

    return <div onClick={handleClick}>{object.click}</div>;
  };

  const UnComposant42 = () => {
    const [object, setObject] = useState({
      name: "UnComposant42 pas bien",
      click: 0,
    });
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
      setLoading(true);

      generateName().then((newName) => {
        setObject({ ...object, name: newName });
        setLoading(false);
      });
    };

    return loading ? COUCOU : <div onClick={handleClick}>{object.name}</div>;
  };

  const UnComposant = () => {
    const [object, setObject] = useState({
      name: "MacGuffin",
      click: 0,
    });

    const [nombreDeClique, setNombreDeClique] = useState(0);

    const handleClick = () => {
      if (nombreDeClique + (1 % 10) === 0) {
        generateName().then((newName) => {
          setObject({ ...object, name: newName });
        });
      }
      setNombreDeClique(nombreDeClique + 1);
    };

    return <div onClick={handleClick}>{object.name} </div>;
  };

  const UnComposant2 = () => {
    const [object, setObject] = useState({
      name: "pas elegant 2",
      click: 0,
    });

    const handleClick = () => {
      object.click = object.click + 1;
      setObject(object);
    };

    return <button onClick={handleClick}>{object.name}</button>;
  };
 */
