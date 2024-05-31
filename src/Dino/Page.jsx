import React from 'react'
import '../Dino/Dino.css'
import { useNavigate } from 'react-router-dom'
const Dino =() =>{
  const navigate = useNavigate();
  const BackNav8 =() =>{
    navigate('/gamepage')
  }
    return (
      <div class='Fix8'>
        <div class="TopBar8">
                    <div><img id={'GameIcon8'} src={require('../Dino/game-console.png')} alt="GameIcon"></img></div>
                    <div class="Font8">
                        <div class='GameHead8'><span class='Color81'>Nostalgic</span><br></br><span class='Color82'>     Game Hubb</span></div>
                        <div class='Slogan8'>Play For Memories</div>
                    </div>
                </div>
            <div class='game8'>
                <div id='dino8'></div>
                <div id='cactus8'></div>
            </div>
            <div class='Move8'>
              <button class='ButtonReturn8' id='Reset8'>🔃Reset</button>
              <br></br>
              <button onClick={BackNav8} class='ButtonReturn8' id='Back8'>🔙 Back</button>
            </div>
      </div>
    )
  }
  export default Dino;