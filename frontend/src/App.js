import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AddPlayForm from './domains/plays/AddPlayForm/AddPlayForm'
import PlayTimelinePage from './domains/plays/PlayTimelinePage/PlayTimelinePage'
import PlayOverviewPage from './domains/plays/PlayOverviewPage/PlayOverviewPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/log" component={PlayTimelinePage} />
        <Route exact path="/log/addplay" component={AddPlayForm} />
        <Route path="/log/:id" component={PlayOverviewPage} />  
      </Switch>
    </div>
  )
}

export default App