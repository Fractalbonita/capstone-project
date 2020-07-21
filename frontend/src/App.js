import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AddPlayForm from './domains/plays/AddPlayForm/AddPlayForm'
import PlayDetails from './domains/plays/PlayDetails/PlayDetails'
import PlayTimelinePage from './domains/plays/PlayTimelinePage/PlayTimelinePage'

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