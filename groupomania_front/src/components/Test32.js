import React from "react";

class Test32 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Écrivez un essai à propos de votre élément du DOM préféré",
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  /*const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };*/

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  /*handleSubmit(event) {
    alert("Un essai a été envoyé : " + this.state.value);
    event.preventDefault();
  }*/

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay: coucou
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}
export default Test32;

/***
 * <input type="submit" value="Envoyer" />
 *
 *
 */
