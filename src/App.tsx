import './App.css';
import profilePic from '../src/images/profile_pic.png'; // Tell webpack this JS file uses this image

function App() {

  return (
    <div className='container'>
      <div className="column">
        <h1>Hi, my name is Noemi</h1>
        <h2>I'm a software developer</h2>
      </div>
      <div className="column">
        <img src={profilePic} alt="profile"></img>
      </div>
    </div>
  )
}

export default App;
