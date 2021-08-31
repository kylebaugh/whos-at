import {Switch, Route} from 'react-router-dom'

import Home from './components/home'
import Contact from './components/contact'
import TandC from './components/termsAndConditions'
import PrivacyPolicy from './components/privacyPolicy'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/termsAndConditions' component={TandC} />
        <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
    </Switch>
)