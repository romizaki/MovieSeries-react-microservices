import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { ApolloProvider } from '@apollo/client'
import client from './config/apolloClient'
import AddMovie from './pages/AddMovie'
import Movies from './pages/Movies'
import Series from './pages/Series'
import HomeImage from './components/HomeImage'
import Detail from './pages/Detail'
import Favourites from './pages/Favourites'
import EditMovie from './pages/EditMovie'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Navbar />
            <Switch>
                <Route exact path="/">
                  <HomeImage/>
                  <div className="container">
                    <Home />
                  </div>
                </Route>
                <Route exact path="/favourites">
                  <HomeImage/>
                  <div className="container">
                    <Favourites />
                  </div>
                </Route>
                <Route exact path="/movies">
                  <div className="container">
                    <Movies />
                  </div>
                </Route>
                <Route exact path="/detail/:_id">
                  <div className="container">
                    <Detail />
                  </div>
                </Route>
                <Route exact path="/edit/:_id">
                  <div className="container">
                    <EditMovie />
                  </div>
                </Route>
                <Route exact path="/series">
                  <div className="container">
                    <Series />
                  </div>
                </Route>
                <Route exact path="/add-movie">
                  <div className="container">
                    <AddMovie />
                  </div>
                </Route>
            </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
