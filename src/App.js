import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const d = new Date(parseInt(e.target.value) * 1000);
    this.setState({ date: d.toString() });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <fieldset>
              <label htmlFor="epoch">Epoch</label>
              <input
                className="padded"
                type="number"
                id="epoch"
                onChange={this.handleChange}
                size="64"
              ></input>
              <label htmlFor="date">Date</label>
              <input
                className="padded"
                type="text"
                id="date"
                value={this.state.date}
                readOnly
                size="64"
              ></input>
            </fieldset>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
