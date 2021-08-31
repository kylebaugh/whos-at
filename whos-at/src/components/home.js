import '../App.css';
import '../responsive.css'
import bigIcon from '../assets/bigIcon.png'
import clock from '../assets/clock.png'
import graph from '../assets/graph.png'
import shield from '../assets/shield.png'
import GooglePlay from '../assets/googlePlay.png'
import AppStore from '../assets/appStore.png'

const Home = (props) => {

    const openGoogle = (url) => {
        window.open(url, '_blank').focus()
      }
    
    const openAppStore = (url) => {
    window.open(url, '_blank').focus()

    }

    return(


    <div className='body'>
        <div className='bodyLeft'>
          <img className='bigIcon' src={`${bigIcon}`} alt='bigIcon'/>
          <p className='problem'>Personalize your <br></br>experience</p>
          <p className='problemText'>
            Have you ever had a great experience and want the same Server or Bartender during your next visit? You’re not alone. 
            However, following your favorites can be problematic between exchanging phone numbers, social media, 
            and the traditional call the store to ask. Who’s At is the answer.
          </p>
          <div className='appIcons'>
            <img 
              className='googleIcon' 
              src={`${GooglePlay}`} 
              alt='googlePlay.png'
              onClick={() => openGoogle('https://play.google.com/store')}
              />
            <img 
              className='appleIcon' 
              src={`${AppStore}`} 
              alt='appStore.png'
              onClick={() => openAppStore('https://www.apple.com/app-store/')}
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
              <p className='bodyRightText'>Who’s At provides a quick, simple way to market yourself to your regulars within the hospitality industry. 
                We take the pressure out of finding the perfect picture, video, banner, or clever caption for your post only to hope an 
                algorithm gives you adequate exposure on social media.</p>
            </div>
          </div>

          <div className='bodyRightMiddle'>
            <div className='bodyRightImage'>
              <img className='bodyRightIcon' src={`${graph}`} alt='graph'/>
            </div>
            <div className='bodyRightWords'>
              <p className='bodyRightHeader'>Missing Out</p>
              <p className='bodyRightText'>Who’s At not only targets a specific audience, but actually provides real time information which is 
                searchable - up to 2 weeks in advance - in an organized, simple, and effective structure.</p>
            </div>
          </div>

          <div className='bodyRightBottom'>
            <div className='bodyRightImage'>
              <img className='bodyRightIcon' src={`${shield}`} alt='shield'/>
            </div>
            <div className='bodyRightWords'>
              <p className='bodyRightHeader'>Privacy</p>
              <p className='bodyRightText'>Who's At understands that service industry professionals may have patrons who they would 
                prefer not to be able to access this information. This is why we have included an extra layer of security between the 
                connection of patron and professional which requires mutual consent. Professionals may also remove and block should the relationship 
                change.</p>
            </div>
          </div>

        </div>
      

      <div className='bodyMobile'>
        <div className='bodyLeftMobile'>
          <img className='bigIcon' src={`${bigIcon}`} alt='bigIcon'/>
          <p className='problem'>Personalize your experience</p>
          <p className='problemText'>
          Have you ever had a great experience and want the same Server or Bartender during your next visit? You’re not alone. 
            However, following your favorites can be problematic between exchanging phone numbers, social media, 
            and the traditional call the store to ask. Who’s At is the answer.
          </p>
          
          <div className='appIcons'>
            <img 
              className='googleIcon' 
              src={`${GooglePlay}`} 
              alt='googlePlay.png'
              onClick={() => openGoogle('https://play.google.com/store')}
              />
            <img 
              className='appleIcon' 
              src={`${AppStore}`} 
              alt='appStore.png'
              onClick={() => openAppStore('https://www.apple.com/app-store/')}
              />
          </div>
          
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
      </div>

    </div>
    )
}

export default Home