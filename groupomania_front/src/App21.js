import React from "react";
import UserInfo from "./components/User2";
import Compteur from "./components/compteur11";

class GetRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch("http://localhost:3100/api/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    const { users } = this.state;
    return (
      <div className="">
        <div className="">Total user :{users.length}</div>

        {users &&
          users.map((user) => {
            return (
              <div>
                <button onClick={logOut3(user.Id_user)}>
                  logOut2 la ligne
                </button>
                <hr></hr> <UserInfo user={user}></UserInfo>
              </div>
            );
          })}
      </div>
    );
  }
}

export default GetRequest;

function logOut3(toto) {
  // console.log("logOut 233 : ", toto);
}

/** <h3 key={user.Id_user} id={user.Id_user}>
                  - {user.Pseudo} mail : {user.Email}
                </h3> */
