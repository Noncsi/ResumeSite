import './App.css';
import profilePic from '../src/images/profile_pic.png';
import referenceIntelligence from '../src/images/reference_Intelligence.png';

function App() {

  const currentDate = new Date();
  const careerStartDate = new Date(2018, 0, 1);
  const yearsOfExperience = currentDate.getFullYear() - careerStartDate.getFullYear();

  const emailAddress = "lengyel.noemi96@gmail.com"

  const CopyEmailAddressToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
  }

  return (
    <>
      <div className='line-decoration'></div>

      <div className='content'>
        <div className='intr-container'>
          <div className="column">
            <h2>Hi, I'm </h2>
            <div className='name-container'>
              <h1 className='glitching-text-layer'>Noémi Lengyel</h1>
              <h1 className='glitching-text-layer'>Noémi Lengyel</h1>
              <h1 className='glitching-text-layer'>Noémi Lengyel</h1>
            </div>
            <h3>Software Developer</h3>
            <h4>With a passion for <span className='yellow-text'>design</span></h4>
            <div className='description'>
              <h5>
              <p>{yearsOfExperience}+ years of experience in designing and developing user interfaces, also writing, testing and debugging features.</p>
              <p>HTML, CSS, JavaScript, TypeScript, React, Python, C#, SQL, Cypress, Git, Jira</p>
              <p>Trouble pronuncing my name? Just call me ' No - Amy ' or simply Naomi.</p>
              </h5>
            </div>
          </div>
          <div className="column">

            <div className='glitching-image-container'>
              <img src={profilePic} alt="profile"></img>
              <div className="glitch_layers">
                <div className="glitch_layer"></div>
                <div className="glitch_layer"></div>
                <div className="glitch_layer"></div>
                <div className="glitch_layer"></div>
                <div className="glitch_layer"></div>
                <div className="glitch_layer"></div>
              </div>
	          </div>

            <div className='contacts'>
              <a className="fa fa-linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/noemilengyel/"></a>
              <a className="fa fa-github" target="_blank" rel="noreferrer" href="https://github.com/Noncsi"></a>
              <a className="fa fa-google tooltip" onClick={(CopyEmailAddressToClipboard)}>
                <span className="tooltip-text">{emailAddress} Click to copy!</span>
              </a>
            </div>
          </div>
        </div>

        <h4 style={{textAlign:"center"}}>References (Work in progess)</h4>
        <div className="references">
          <a target="_blank" rel="noreferrer" href='https://int-elligence.azurewebsites.net/'>
            <img className='reference' src={referenceIntelligence} alt="Int elligence;"></img>
          </a>
        </div>
      </div>
    </>
  )
}

export default App;
