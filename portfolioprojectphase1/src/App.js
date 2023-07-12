import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="div1">
        <h1 className="chance-claybrooke">Chance Claybrooke &lt;/&gt;</h1> <div className="flex-container-2"><p className="posts">Posts</p><p className="resume">Resume</p>
          <a href="https://www.twitter.com">
              <span class="social-icon twitter-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M24 4.968c-.885.388-1.838.65-2.832.772a4.95 4.95 0 0 0 2.178-2.729 9.9 9.9 0 0 1-3.136 1.195A4.944 4.944 0 0 0 16.94 3c-2.738 0-4.954 2.217-4.954 4.947 0 .39.044.769.128 1.134C8.626 8.936 4.557 7.252 2.313 4.762A4.962 4.962 0 0 0 1.9 6.383c0 1.723.877 3.246 2.211 4.139a4.92 4.92 0 0 1-2.24-.623v.062c0 2.406 1.707 4.412 3.978 4.867a4.958 4.958 0 0 1-2.234.084c.628 1.968 2.45 3.402 4.603 3.44A9.92 9.92 0 0 1 0 20.87a14 14 0 0 0 7.58 2.216c9.123 0 14.107-7.548 14.107-14.106 0-.214-.006-.428-.016-.64A10.086 10.086 0 0 0 24 4.968z"/>
</svg></span>
            </a>
          <a href="https://www.github.com">
              <span class="social-icon github-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.386.6.112.793-.26.793-.574l-.007-2.003c-3.338.725-4.033-1.553-4.033-1.553-.546-1.387-1.334-1.757-1.334-1.757-1.09-.74.083-.726.083-.726 1.204.084 1.839 1.236 1.839 1.236 1.07 1.832 2.805 1.304 3.488.995.108-.764.419-1.285.762-1.58-2.665-.307-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.134-.308-.536-1.53.104-3.184 0 0 1.01-.323 3.3 1.23a11.54 11.54 0 0 1 3-.403c1.018.006 2.043.136 3 .403 2.29-1.553 3.3-1.23 3.3-1.23.642 1.654.24 2.876.12 3.184.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.432.37.824 1.1.824 2.22l-.006 3.29c0 .31.195.688.8.57C20.565 21.794 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
</svg>
              </span>
            </a>
          <a href="https://www.linkedin.com">
              <span class="social-icon linkedin-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.199 20.199h-3.196V13.17c0-1.505-.03-3.44-2.097-3.44-2.098 0-2.419 1.636-2.419 3.32v6.15H9.802V9H12.62v1.76h.046c.577-1.095 1.986-2.255 4.087-2.255 4.366 0 5.166 2.874 5.166 6.615v7.079h-.001zM4.8 7.724c-1.408 0-2.496-.999-2.496-2.22 0-1.224 1.089-2.221 2.496-2.221s2.496.997 2.496 2.22c0 1.221-1.088 2.22-2.496 2.22zm-1.599 12.475h3.195V9h-3.195v11.2z"/>
</svg>
              </span>
            </a>
        </div>
      </div>

      <div className="container">
        <div className="div2">
          <h1 className="about-me"><u>About Me</u></h1>
          <p className="div2-p">Hello all, my name is Chance Claybrooke. I study Full-Stack engineering at <strong><u>freeCodeCamp</u></strong>. I am a Project Manager and Front-End Engineer Intern at NorthBuilt</p>
        </div>
        <div className="div3">
          <img src={require('./chancephoto.png')} alt="Chance"/>
        </div>
      </div>
      <div className="div4">
          <form>
          <h1 className="contact-me">Contact me</h1>
            <fieldset>
              <p className="field-set-p">Name (required)</p>
              <div className="flex-container">
                <div className="flex-item">
                <label for="first-name">First Name</label><input required></input>
                </div>
                <div className="flex-item">
                <label for="last-name">Last Name</label><input required></input>
                </div>
              </div>
              <label className="email">Email (required)</label><input required></input>
              <label className="subject">Subject (required)</label><input required></input>
              <label className="message">Message (required)</label><textarea required></textarea>
            </fieldset>
            <input type="submit" value="SUBMIT"></input>
          </form>
          <div class="flex-container-3">
  <div class="social-icons">
    <a href="https://www.twitter.com">
      <span class="social-icon-2 twitter-icon-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M24 4.968c-.885.388-1.838.65-2.832.772a4.95 4.95 0 0 0 2.178-2.729 9.9 9.9 0 0 1-3.136 1.195A4.944 4.944 0 0 0 16.94 3c-2.738 0-4.954 2.217-4.954 4.947 0 .39.044.769.128 1.134C8.626 8.936 4.557 7.252 2.313 4.762A4.962 4.962 0 0 0 1.9 6.383c0 1.723.877 3.246 2.211 4.139a4.92 4.92 0 0 1-2.24-.623v.062c0 2.406 1.707 4.412 3.978 4.867a4.958 4.958 0 0 1-2.234.084c.628 1.968 2.45 3.402 4.603 3.44A9.92 9.92 0 0 1 0 20.87a14 14 0 0 0 7.58 2.216c9.123 0 14.107-7.548 14.107-14.106 0-.214-.006-.428-.016-.64A10.086 10.086 0 0 0 24 4.968z"/>
</svg>
      </span>
    </a>

    <a href="https://www.github.com">
      <span class="social-icon-2 github-icon-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.386.6.112.793-.26.793-.574l-.007-2.003c-3.338.725-4.033-1.553-4.033-1.553-.546-1.387-1.334-1.757-1.334-1.757-1.09-.74.083-.726.083-.726 1.204.084 1.839 1.236 1.839 1.236 1.07 1.832 2.805 1.304 3.488.995.108-.764.419-1.285.762-1.58-2.665-.307-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.134-.308-.536-1.53.104-3.184 0 0 1.01-.323 3.3 1.23a11.54 11.54 0 0 1 3-.403c1.018.006 2.043.136 3 .403 2.29-1.553 3.3-1.23 3.3-1.23.642 1.654.24 2.876.12 3.184.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.432.37.824 1.1.824 2.22l-.006 3.29c0 .31.195.688.8.57C20.565 21.794 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
</svg>
      </span>
    </a>

    <a href="https://www.linkedin.com">
      <span class="social-icon-2 linkedin-icon-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.199 20.199h-3.196V13.17c0-1.505-.03-3.44-2.097-3.44-2.098 0-2.419 1.636-2.419 3.32v6.15H9.802V9H12.62v1.76h.046c.577-1.095 1.986-2.255 4.087-2.255 4.366 0 5.166 2.874 5.166 6.615v7.079h-.001zM4.8 7.724c-1.408 0-2.496-.999-2.496-2.22 0-1.224 1.089-2.221 2.496-2.221s2.496.997 2.496 2.22c0 1.221-1.088 2.22-2.496 2.22zm-1.599 12.475h3.195V9h-3.195v11.2z"/>
</svg>
      </span>
    </a>
  </div>
  </div>
<div className="div5">
  <p className="chance-email">chancepc69@gmail.com Mckinney, TX, Unites States</p>
  <p className="text-call">Text or Call +1 (714)609-2404</p>
    </div>
  </div>
</div>
    
  );
}

export default App;
