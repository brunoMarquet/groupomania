function Truc() {
  return (
    <div>
      <form method="post">
        <label htmlFor="email">
          <b>email</b>
        </label>
        <input
          type="mail"
          placeholder="Enter email"
          id="email"
          name="email"
          required
        />
        <br /> <br />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        />{" "}
        <br />
        <button type="submit" onClick={mySignUp()}>
          se connecter
        </button>{" "}
        <br />
        <button type="submit" onClick={mySignUp()}>
          s'enregistrer
        </button>
      </form>
    </div>
  );
}
function mySignUp() {
  console.log("je signe");
}
export default Truc;
