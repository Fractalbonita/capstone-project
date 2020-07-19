import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import PlayTimelinePage from './components/PlayTimelinePage'
import PlayDetails from './components/PlayDetails'
import AddPlayForm from './components/AddPlayForm'

const localStorageKey = 'plays'

function App() {
  const [plays, setPlays] = useState([])
  
  useEffect(() => {
    setPlays(JSON.parse(localStorage.getItem(localStorageKey) || '[]')) 
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(plays))
  }, [plays])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/log">
          <PlayTimelinePage addToPlayCollection={updatePlays} plays={plays} />
        </Route>    
        <Route exact path="/log/addplay" component={AddPlayForm} />
        <Route path="/log/:id" component={PlayDetails} />  
      </Switch>
    </div>
  )

    /*
  <Route path="/:playId" component={PlayTimelinePage}>
  const PlayTimelinePage = ({ match }) => (
    <div>
      <Route path={match.url + "/:playId"} component={PlayTimelinePage} />
      {match.params.playId}
    </div>
  )
*/
  function updatePlays(play) {
    setPlays([...plays, play])
    return Promise.resolve()
  }
}

export default App