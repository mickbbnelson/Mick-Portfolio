import './App.css';
import Home from './Pages/home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route exact path="/" component={routerProps => <Home routerProps={routerProps} />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
