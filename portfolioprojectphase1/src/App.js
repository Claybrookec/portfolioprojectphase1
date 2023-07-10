import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <body>
    <div className="App">
      <div className="div1">
        <h2 className="chance-claybrooke">Chance Claybrooke &lt;/&gt;</h2>
      </div>

      <div className="container">
        <div className="div2">
          <h1 className="about-me">About Me</h1>
          <p>Hello all, my name is Chance Claybrooke. I study Full-Stack engineering at <strong><u>freeCodeCamp</u></strong>. I am a Project Manager and Front-End Engineer Intern at NorthBuilt</p>
        </div>
        <div className="div3">
        </div>
      </div>

      <div className="div4">
        <h1 className="contact-me">Contact me</h1>
          <fieldset>
            <p className="field-set-p">Name (required)</p>
            <label className="first-name">First Name</label><input required></input>
            <label className="last-name">Last Name</label><input required></input>
            <label>Email (required)</label><input required></input>
            <label>Subject (required)</label><input required></input>
            <label>Message (required)</label><input required></input>
          </fieldset>
          <input type="submit" value="Submit"></input>
      </div>

      <div className="div5">
        <p className="chance-email">chancepc69@gmail.com Mckinney, TX, Unites States</p>
        <p className="text-call">Text or Call +1 (714)609-2404</p>
      </div>
    </div>
  </body>
  );
}

export default App;
