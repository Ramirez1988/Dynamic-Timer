import React from 'react';

import './App.css';
import Timer from "./components/timer"


const dynamic = {nbr:55632365}

function App() {
  return (
    <div >
      <Timer dynamic={dynamic} />
      
    </div>
  );
}

export default App;
