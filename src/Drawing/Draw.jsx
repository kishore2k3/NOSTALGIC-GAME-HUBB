import React from 'react'
import '../Drawing/Draw.css'
import { useNavigate } from 'react-router-dom';
const  Draw =()=> {
  const navigate = useNavigate();
  const BackNav9 =() =>{
    navigate('/gamepage')
  }
    return (
      <div class='Fix9'>
              <div class="TopBar9">
                    <div><img id={'GameIcon9'} src={require('./game-console.png')} alt="GameIcon"></img></div>
                    <div class="Font9">
                        <div class='GameHead9'><span class='Color91'>Nostalgic</span><br></br><span class='Color92'>     Game Hubb</span>
                        
                        <div class='Slogan9'>Play For Memories</div>
                        </div>
                    </div>
                </div>
      <div class='Move9'>
        <canvas class="canvas9"></canvas>
        <div class='toolbox9'>
          <button id="decrease9">-</button>
          <span id='size9'>10</span>
          <button id='increase9'>+</button>
          <input type='color' id="color9"></input>
          <button id="clear9">X</button>
        </div>
      </div>
      <div class='Down9'>
        <button class='ButtonReturn9' id='Reset9'>🔃Reset</button>
        <br></br>
        <button onClick={BackNav9} class='ButtonReturn9 button-desc' id='Back9'>🔙 Back</button>
      </div>
    </div>
    )
}
export default Draw;