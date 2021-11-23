import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Thanks from "../Thanks/Thanks";

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <body className='App-body'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Feeling />}></Route>
            <Route path='/understanding' element={<Understanding />}></Route>
            <Route path='/support' element={<Support />}></Route>
            <Route path='/comments' element={<Comments />}></Route>
            <Route path='/review' element={<Review />}></Route>
            <Route path='/thanks' element={<Thanks />}></Route>
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;