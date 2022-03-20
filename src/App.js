import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Content-wrap">
          <h1>markjanssen-webdev-portfolio</h1>
          <div>
            I'm an architectural graduate turned full stack web software developer based in Australia, predominantly using Javascript/React, C#/.net and AWS.
            This space is to detail my ongoing learnings, predominantly inspired by https://roadmap.sh/
          </div>
          <ul>
            <li>
              <a href="https://github.com/Mark-Cooper-Janssen-Vooles/frontend-webdev-guide">frontend-webdev-guide</a>
            </li>
            <li>
              <a href="https://github.com/Mark-Cooper-Janssen-Vooles/backend-webdev-guide">backend-webdev-guide</a>
            </li>
            <li>
              <a href="https://github.com/Mark-Cooper-Janssen-Vooles/devops-webdev-guide">devops-webdev-guide</a>
            </li>
          </ul>
          <div>
            {/* https://fontawesome.com/v4/icons/ */}
            <a href="https://www.linkedin.com/in/mark-janssen-vooles-312a77187/">
              <i class="fa fa-linkedin-square" aria-hidden="true" href="https://www.linkedin.com/in/mark-janssen-vooles-312a77187/"></i> 
            </a>
            &nbsp;
            <a href="https://github.com/Mark-Cooper-Janssen-Vooles/">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
