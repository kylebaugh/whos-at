import './App.css';
import './responsive.css'
import routes from './routes'
import headerIcon from './assets/headerIcon.png'
import footerIcon from './assets/footerIcon.png'

import {Link} from 'react-router-dom'
import {useState} from 'react'
// import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect'

function App() {

  const [showMenu, setShowMenu] = useState(false)

  const mobileMenu = () => {
    setShowMenu(!showMenu)
  }

  const appRedirect = () => {
    if(navigator.userAgent.match(/Android/i)){
      window.open('https://play.google.com/store', '_blank').focus()
    }else if(navigator.userAgent.match(/iPhone/i)){
      window.open('https://www.apple.com/app-store', '_blank').focus()
    }else{
      alert('Open site on your mobile device to redirect to your app store')
    }
  }

  // const openGoogle = () => {
  //   window.location.href = 'https://play.google.com/store'
  // }

  // const openAppStore = () => {
  //   window.location.href = 'https://www.apple.com/app-store/'
  // }

  return (
    
    <div className="App">


      <div className='header'>

        <div className='headerLeft'>
          <Link to='/' style={{textDecoration:'none'}}>
            <img className='headerIcon' src={`${headerIcon}`} alt='icon'/>
          </Link>
          <p className='headerText'>Who's At</p>
        </div>

        <div className='headerRight'>
          
        <Link to='/' style={{textDecoration:'none'}}>
          <div 
            className='headerMenuItem'
            onClick={() => appRedirect()}
            >
            Get the App
          </div>
        </Link>
          
          {/* <Link to='/contact' style={{textDecoration:'none'}}>
          <div className='headerMenuItem'>
            Contact
          </div>
          </Link> */}
          
          <Link to='termsAndConditions' style={{textDecoration:'none'}}>
            <div className='headerMenuItem'>
              Terms &amp; Conditions
            </div>
          </Link>
          
          <Link to='PrivacyPolicy' style={{textDecoration:'none'}}>
            <div className='headerMenuItem'>
              Privacy Policy
            </div>
          </Link>
          
        </div>
     
        <div className='mobileMenu' onClick={() => mobileMenu()}>
            <div className='menuBox'></div>
            <div className='menuBox'></div>
            <div className='menuBox'></div>
        </div>

      </div>

      {showMenu && <div className='headerRightMobile'>
          
        <Link to='/' style={{textDecoration:'none'}}>
          <div className='headerMenuItem'>
            Get the App
          </div>
        </Link>

        {/* <Link to='/contact' style={{textDecoration:'none'}}>
          <div className='headerMenuItem'>
            Contact
          </div>
        </Link> */}

        <Link to='termsAndConditions' style={{textDecoration:'none'}}>
          <div className='headerMenuItem'>
            Terms &amp; Conditions
          </div>
        </Link>

        <Link to='PrivacyPolicy' style={{textDecoration:'none'}}>
          <div className='headerMenuItem'>
            Privacy Policy
          </div>
        </Link>

        </div>}
        
      <div className='divider'></div>

        {routes}

      {/* <div className='body'>
        <div className='bodyLeft'>
          <img className='bigIcon' src={`${bigIcon}`} alt='bigIcon'/>
          <p className='problem'>Problem</p>
          <p className='problemText'>Fugiat quis amet eiusmod consectetur ut irure adipisicing officia. Eu occaecat elit ut reprehenderit irure. Cillum aute dolore velit laboris voluptate ullamco mollit nulla culpa eu. Proident culpa amet sint culpa ea fugiat officia eiusmod. Eiusmod nulla consequat ex officia consequat. Ipsum incididunt id est fugiat velit occaecat elit laborum mollit.</p>
          <div className='appIcons'>
            <img 
              className='googleIcon' 
              src={`${GooglePlay}`} 
              alt='googlePlay.png'
              onClick={() => openGoogle()}
              />
            <img 
              className='appleIcon' 
              src={`${AppStore}`} 
              alt='appStore.png'
              onClick={() => openAppStore()}
              />
          </div>
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

      <div className='bodyMobile'>
        <div className='bodyLeftMobile'>
          <img className='bigIcon' src={`${bigIcon}`} alt='bigIcon'/>
          <p className='problem'>Problem</p>
          <p className='problemText'>Fugiat quis amet eiusmod consectetur ut irure adipisicing officia. Eu occaecat elit ut reprehenderit irure. Cillum aute dolore velit laboris voluptate ullamco mollit nulla culpa eu. Proident culpa amet sint culpa ea fugiat officia eiusmod. Eiusmod nulla consequat ex officia consequat. Ipsum incididunt id est fugiat velit occaecat elit laborum mollit.</p>
          <button className='actionButton'>Call to Action</button>
        </div>

        <div className='bodyRightMobile'>

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
      </div> */}

      <div className='footer'>
        <div className='footerLeft'>
        <Link to='/' style={{textDecoration:'none'}}>
          <img className='footerIcon' src={`${footerIcon}`} alt='icon'/>
        </Link>
          <p className='footerLeftText'>Who's At</p>
        </div>

        <div className='footerRight'>
          
        <Link to='/' style={{textDecoration:'none'}}>
          <div 
          className='footerMenuItem'
          onClick={() => appRedirect()}
          >
            Get the App
          </div>
        </Link>

        {/* <Link to='/contact' style={{textDecoration:'none'}}>
          <div className='footerMenuItem'>
            Contact
          </div>
        </Link> */}

        <Link to='termsAndConditions' style={{textDecoration:'none'}}>
          <div className='footerMenuItem'>
            Terms &amp; Conditions
          </div>
          </Link>

        <Link to='PrivacyPolicy' style={{textDecoration:'none'}}>
          <div className='footerMenuItem'>
            Privacy Policy
          </div>
        </Link>

          <div className='copyright'>
            &#169; Copyright 2021
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
