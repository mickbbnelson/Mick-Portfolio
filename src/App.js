import React from 'react';
import './App.css';
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import NoMatch from './Pages/NoMatch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './Components/Layout';
import { Container } from 'react-bootstrap'
import Header from './Components/Header';
import Jumbotron from './Components/Jumbotron'

class App extends React.Component {

  render() {
  return (
    <>
    <Header />
    <Jumbotron />
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route exact path="/" component={routerProps => <Home routerProps={routerProps} />} /> */}
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>
      </Container>
    </>
  );
  }
}

export default App;
