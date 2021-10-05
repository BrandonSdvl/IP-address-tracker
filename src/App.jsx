import './App.scss';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="app">
      <Header />
      <Details />
      <Map />
    </div>
  );
}

export default App;
