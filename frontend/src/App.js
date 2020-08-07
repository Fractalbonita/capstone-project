import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import AddPlayForm from './domains/plays/AddPlayForm/AddPlayForm'
import GameOverViewPage from './domains/games/GameOverviewPage/GameOverviewPage'
import GamesPage from './domains/games/GamesPage/GamesPage'
import Navigation from './components/Navigation'
import PlayOverviewPage from './domains/plays/PlayOverviewPage/PlayOverviewPage'
import PlayTimelinePage from './domains/plays/PlayTimelinePage/PlayTimelinePage'
import WelcomePage from './domains/welcome/WelcomePage'

function App() {
  return (
    <div className="App">
      <StyledMain>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/games" component={GamesPage} />
          <Route exact path="/games/:id" component={GameOverViewPage} />
          <Route exact path="/log" component={PlayTimelinePage} />
          <Route exact path="/log/addplay" component={AddPlayForm} />
          <Route path="/log/:id" component={PlayOverviewPage} />
          <Redirect to="/log" />
        </Switch>
      </StyledMain>
      <Navigation />
    </div>
  )
}

const StyledMain = styled.main`
  &::after {
    content: '';
    display: block;
    height: 60px;
  }
`

export default App