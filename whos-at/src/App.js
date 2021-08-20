import './App.css';
import './responsive.css'
import headerIcon from './assets/headerIcon.png'
import bigIcon from './assets/bigIcon.png'
import clock from './assets/clock.png'
import graph from './assets/graph.png'
import shield from './assets/shield.png'
import footerIcon from './assets/footerIcon.png'


function App() {
  return (
    <div className="App">
      <div className='header'>

        <div className='headerLeft'>
          <img className='headerIcon' src={`${headerIcon}`} alt='icon'/>
          <p className='headerText'>Who's At</p>
        </div>

        <div className='headerRight'>
          <div className='headerMenuItem'>
            Get the App
          </div>
          <div className='headerMenuItem'>
            Contact
          </div>
          <div className='headerMenuItem'>
            Terms &amp; Conditions
          </div>
          <div className='headerMenuItem'>
            Privacy Policy
          </div>
        </div>
     
      </div>

      <div className='divider'></div>

      <div className='body'>
        <div className='bodyLeft'>
          <img className='bigIcon' src={`${bigIcon}`} alt='bigIcon'/>
          <p className='problem'>Problem</p>
          <p className='problemText'>Fugiat quis amet eiusmod consectetur ut irure adipisicing officia. Eu occaecat elit ut reprehenderit irure. Cillum aute dolore velit laboris voluptate ullamco mollit nulla culpa eu. Proident culpa amet sint culpa ea fugiat officia eiusmod. Eiusmod nulla consequat ex officia consequat. Ipsum incididunt id est fugiat velit occaecat elit laborum mollit.</p>
          <button className='actionButton'>Call to Action</button>
        </div>

        <div className='bodyRight'>

          <div className='bodyRightTop'>
            <div className='bodyRightImage'>
              <img className='bodyRightIcon' src={`${clock}`} alt='clock'/>
            </div>
            <div className='bodyRightWords'>
              <p className='bodyRightHeader'>Time and Effort</p>
              <p className='bodyRightText'>Who’s At provides a quick and simple way to market yourself to your regulars within the hospitality industry. 
                It takes the pressure out of finding the perfect picture, video, banner, and clever caption for your post only to hope an 
                algorithm gives you adequate exposure on social media</p>
            </div>
          </div>

          <div className='bodyRightMiddle'>
            <div className='bodyRightImage'>
              <img className='bodyRightIcon' src={`${graph}`} alt='graph'/>
            </div>
            <div className='bodyRightWords'>
              <p className='bodyRightHeader'>Missing Out</p>
              <p className='bodyRightText'>Who’s At not only targets a specific audience but actually provides real time information which is 
                searchable up to 2 weeks in advance and in an organized, simple, and effective structure</p>
            </div>
          </div>

          <div className='bodyRightBottom'>
            <div className='bodyRightImage'>
              <img className='bodyRightIcon' src={`${shield}`} alt='shield'/>
            </div>
            <div className='bodyRightWords'>
              <p className='bodyRightHeader'>Privacy</p>
              <p className='bodyRightText'>We at Who’s At understand that service industry professionals may have patrons who they would 
                prefer not to be able to access this information. This is why we have included an extra layer of security between the 
                connection of patron and professional which requires mutual consent. Professionals may also remove and block if the relationship 
                should change</p>
            </div>
          </div>

        </div>
      </div>

      <div className='footer'>
        <div className='footerLeft'>
          <img className='footerIcon' src={`${footerIcon}`} alt='icon'/>
          <p className='footerLeftText'>Who's At</p>
        </div>

        <div className='footerRight'>
          
          <div className='footerMenuItem'>
            Get the App
          </div>
          <div className='footerMenuItem'>
            Contact
          </div>
          <div className='footerMenuItem'>
            Terms &amp; Conditions
          </div>
          <div className='footerMenuItem'>
            Privacy Policy
          </div>
          <div className='footerMenuItem'>
            &#169; Copyright 2021
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
