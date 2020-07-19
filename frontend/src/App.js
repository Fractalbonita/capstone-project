import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PlayTimelinePage from './components/PlayTimelinePage'
import PlayDetails from './components/PlayDetails'
import AddPlayForm from './components/AddPlayForm'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/log" component={PlayTimelinePage} />
        <Route exact path="/log/addplay" component={AddPlayForm} />
        <Route path="/log/:id" component={PlayDetails} />  
      </Switch>
    </div>
  )
}

export default App