import { React, useContext } from "react";

import { UserContext } from "../App";
function Test4() {
  const user = useContext(UserContext);

  return (
    <>
      test4 ..
      <p>{`Hello ${user.Pseudo} again in TEST4!`}</p>
      <button
        onClick={() =>
          user.setTruc2({ ...user.truc2, Pseudo: "Pipo__2555PPPPPPPPPP53" })
        }
      >
        test truc Pipo__255553
      </button>
    </>
  );
}

export default Test4;
