import { useState } from "react";

function Form2() {
  const [inputs, setInputs] = useState({});
  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.username);
    //+ ", age " + inputs.age
  };

  return (
    <form>
      <label>
        celsius
        <input
          type="number"
          name="celsius"
          value={inputs.celsius || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        value="s'inscrire"
        onClick={function () {
          alert(inputs.username + "_age_" + inputs.age);
        }}
      />
    </form>
  );
}
export default Form2;
