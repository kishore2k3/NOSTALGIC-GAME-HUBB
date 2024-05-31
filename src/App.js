import React from 'react';
import LoginPage from './Login/LoginPage';
import SignUpPage from './Signin/Signup';
import GamePage from './GamePage/GamePage';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import Setting from './Settings/Setting';
import RockPaperScissor from './Rps_game/RockPaperScissor';
import GuestPage from './GamePage/GuestPage';
import GuestSetting from './Settings/GuestSetting';
import TTTGame from './TTT_Game/ttt_game';
import Draw from './Drawing/Draw';
import Dino from './Dino/Page';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/signup' element={<SignUpPage/>}></Route>
      <Route path='/rps_game' element={<RockPaperScissor/>}></Route>
      <Route path='/gamePage' element={<GamePage/>}></Route>
      <Route path='/leaderboard' element={<LeaderBoard/>}></Route>
      <Route path='/settings' element={<Setting/>}></Route>
      <Route path='/guestpage' element={<GuestPage/>}></Route>
      <Route path='/settings_guest' element={<GuestSetting/>}></Route>
      <Route path='/TikTakToe' element={<TTTGame/>}></Route>
      <Route path='/Painting' element={<Draw/>}></Route>
      <Route path='/dino' element={<Dino/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
