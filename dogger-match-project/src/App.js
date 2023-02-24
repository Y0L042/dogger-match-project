

import './App.css';
import Header from './Header';
import DoggerCards from './DoggerCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    // BEM Class naming convention
    <div className="App">
      {/* header */}
      <Header />

      {/* dogger cards */}
      <DoggerCards />

      {/* swipe buttons */}
      <SwipeButtons />


    </div>
  );
}

export default App;
