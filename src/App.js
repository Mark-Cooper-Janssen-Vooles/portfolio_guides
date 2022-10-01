import './App.css';
import AnimationArea from './AnimationArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Content-wrap">
          <div className="First-column">
            <h2 style={{marginTop: "0px", marginBottom: "0px"}}>markjanssen-webdev-learnings</h2>
            <AnimationArea />
          </div>
          <div className="Second-column">
            <div>
              <p style={{marginTop: "0px", fontSize: "12px"}}>
                I'm an architectural graduate turned full stack web software developer based in Australia. Predominantly using Javascript/React, C#/.net and AWS. This space is to detail my ongoing learnings, inspired by https://roadmap.sh/.
              </p>
              <ul style={{paddingLeft: "0px"}}>
                <li>
                  <a style={{fontSize: "12px"}} href="https://github.com/Mark-Cooper-Janssen-Vooles/frontend-webdev-guide">frontend-webdev-guide</a>
                </li>
                <li>
                  <a style={{fontSize: "12px"}} href="https://github.com/Mark-Cooper-Janssen-Vooles/backend-webdev-guide">backend-webdev-guide</a>
                </li>
                <li>
                  <a style={{fontSize: "12px"}} href="https://github.com/Mark-Cooper-Janssen-Vooles/devops-webdev-guide">devops-webdev-guide</a>
                </li>
              </ul>
            </div>
            <div style={{marginBottom: "20px"}}>
              {/* usable icons here: https://fontawesome.com/v4/icons/ */}
              <a href="https://www.linkedin.com/in/mark-janssen-vooles-312a77187/">
                <i className="fa fa-linkedin-square" aria-hidden="true" href="https://www.linkedin.com/in/mark-janssen-vooles-312a77187/"></i> 
              </a>
              &nbsp;
              <a href="https://github.com/Mark-Cooper-Janssen-Vooles/">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
