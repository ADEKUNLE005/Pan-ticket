// import Section from './section';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Outlet/>
      <ScrollRestoration />
      {/* <Section/> */}
    </div>
  );
}

export default App;
