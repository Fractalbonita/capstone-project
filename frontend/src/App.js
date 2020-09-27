import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AddPlayForm from './domains/plays/AddPlayForm/AddPlayForm'
import GameOverViewPage from './domains/games/GameOverviewPage/GameOverviewPage'
import GamesPage from './domains/games/GamesPage/GamesPage'
import Navigation from './components/Navigation'
import NotFound from './domains/NotFoundPage'
import PlayOverviewPage from './domains/plays/PlayOverviewPage/PlayOverviewPage'
import PlayTimelinePage from './domains/plays/PlayTimelinePage/PlayTimelinePage'
import WelcomePage from './domains/welcome/WelcomePage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route>
          <main>
            <Switch>
              <Route exact path="/games" component={GamesPage} />
              <Route exact path="/games/:id" component={GameOverViewPage} />
              <Route exact path="/log" component={PlayTimelinePage} />
              <Route exact path="/log/addplay" component={AddPlayForm} />
              <Route exact path="/log/:id" component={PlayOverviewPage} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Navigation />
        </Route>
      </Switch>
    </div>
  )
}

export default App
