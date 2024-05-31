import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../GamePage/GamePage.css';
const GamePage = () => {
  const navigate = useNavigate();
   const LeaderBoardNav3 = () =>{
      navigate('/leaderboard')
   }
   const SettingsNav3 = () =>{
      navigate('/settings')
   }
   const RPSNav3 = () =>{
      navigate('/rps_game')
   }
   const TttNav3 =() =>{
    navigate('/TikTakToe')
   }
   const PaintNav3 =() =>{
    navigate('/painting');
   }
   const DinoNav3 =() =>{
    navigate('/dino');
   }
    return (
        <div class='Fix3'>
            <div class="TopBar3">
                <div><img id={'GameIcon3'} src={require('./game-console.png')} alt="GameIcon"></img></div>
                <div class="Font3">
                    <div class='GameHead3'><span class='Color31'>Nostalgic</span><br></br><span class='Color32'>     Game Hubb</span></div>
                </div>
                <div class='Transition3'>
                    <div><input type={'text'} class='Searchbar3' placeholder='SEARCH' ></input></div>
                    <div><img id={'SearchIcon3'} src={require('./search.png')} alt="SearchIcon"></img></div>  
                  </div>
                    <div><button id='Account31'></button></div>
            </div>
            <div class='GameBar3'>
                    <button onClick={TttNav3} class='Ttt3'></button>
                    <button onClick={RPSNav3} class='Rps3'></button>
                    <button onClick={PaintNav3} class='Paint3'></button>
                    <button onClick={DinoNav3} class='Dino3'></button>
            </div>
            <div class='LeaderSet3'>
                <div>
                    <button onClick={SettingsNav3} class='Setting3'></button>
                    <button onClick={LeaderBoardNav3} class='LeaderBoard3'></button>
                </div>
            </div>
        </div>
    )
}
export default GamePage
