function UserInfo(props) {
  const oneUser = props.theUser;

  //console.log("oneUser array", oneUser[0]);
  return (
    <div className="messageBonjour">
      Coucou {oneUser.mail} , il est {new Date().toLocaleTimeString()} <br />
      votre mail : {oneUser.mail}
      <br />
      <button type="submit" onClick={logOut(oneUser)}>
        se deconnecter
      </button>
      <button type="submit" onClick={mySignUp2()}>
        mon compte
      </button>
      <button
        type="submit"
        onClick={function () {
          alert("clic" + oneUser.mail);
        }}
      >
        {"message de " + oneUser.mail}
      </button>
    </div>
  );
}
export default UserInfo;
function mySignUp2() {}
function logOut(toto) {
  console.log("logOut", toto);
}

/*
  
       
  */
