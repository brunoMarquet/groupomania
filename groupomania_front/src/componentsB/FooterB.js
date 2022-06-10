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
  function basFunction() {
    document.body.scrollIntoView(false);
    // document.documentElement.scrollBottom = 0;
  }

  return (
    <footer>
      <i
        className="fas fa-arrow-alt-circle-up"
        onClick={() => topFunction()}
      ></i>
      <i
        className="fas fa-arrow-alt-circle-down"
        onClick={() => basFunction()}
      ></i>
      <br></br>

      <i className="fas fa-map-marker-alt"> </i>
      <i className="fas fa-search"></i>
      <i className="fas fa-user"></i>
      <i className="fas fa-mailbox"></i>
      <i className="fas fa-edit"></i>
      <i className="fas fa-user-alt-slash"></i>
      <i className="fas fa-list"></i>
      <i className="fas fa-address-card"></i>
      <i className="fas fa-user-edit"></i>
      <i className="fas fa-comment"></i>
      <i className="far fa-comment"></i>
      <i className="fas fa-user"></i>
      <i className="far fa-user"></i>
      <i className="fas fa-user-lock"></i>
      <i className="fas fa-save"></i>
      <i className="far fa-save"></i>
      <i className="fas fa-power-off"></i>
      <i className="fas fa-user-secret"></i>
      <i className="far fa-envelope"></i>
      <i className="fas fa-eye"></i>
      <i className="fas fa-eye-slash"></i>

      <MouseLoc></MouseLoc>
    </footer>
  );
};

export default Footer;
/**
 * 
 *  <button onClick={() => topFunction()}> haut de page</button>
      <button onClick={() => basFunction()}> bas de page</button>
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
