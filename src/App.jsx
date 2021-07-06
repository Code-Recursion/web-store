import Home from './components/Home'
import Cart from './components/Cart'
import { Switch, Route, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Redirect to='/' />
      </Switch>
    </>
  )
}

export default App
