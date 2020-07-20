import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AddPlayForm from './domains/plays/AddPlayForm/AddPlayForm'
import PlayTimelinePage from './domains/plays/PlayTimelinePage/PlayTimelinePage'
import PlayDetails from './domains/plays/PlayDetails/PlayDetails'

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