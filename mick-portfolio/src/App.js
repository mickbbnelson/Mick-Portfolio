import './App.css';
import Header from './Components/header'
import Footer from './Components/footer'
import Home from './Pages/home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/" component={routerProps => <Home routerProps={routerProps} />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
