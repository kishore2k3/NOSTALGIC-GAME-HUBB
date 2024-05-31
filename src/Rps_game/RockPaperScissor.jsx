import React from "react";
import { useNavigate } from "react-router-dom";
import '../Rps_game/RockPaperScissor.css';
const RockPaperScissor = () => {
    const navigate = useNavigate();
    const BackNav0 = () =>{
        navigate('/gamepage');
    }
        return(
            <>
            <div class='Fix0'>
                <div class="TopBar0">
                    <div><img id={'GameIcon0'} src={require('./game-console.png')} alt="GameIcon"></img></div>
                    <div class="Font0">
                        <div class='GameHead0'><span class='Color01'>Nostalgic</span><br></br><span class='Color02'>     Game Hubb</span></div>
                        <div class='Slogan0'>Play For Memories</div>
                    </div>
                </div>
                <div>
                    <h1 class='Head0'>Rock Paper Scissor</h1>
                </div>
                <div class="score-board">
                    <div class="badge" id="user-badge">you</div>
                    <div class="badge" id="oppo-badge">opponent</div>
                    <span id="user-score" class='Score'>0</span> <span class='Div'>:</span> <span id="oppo-score" class='Score'>0</span>
                </div>
                <div class="ChoiceUO">
                    <div class="badge1" id="fontuser">your choice</div>
                    <div class="badge1" id="fontoppo">oppo choice</div>
                    <div class="Inline"><span class="Choice" id="userFont">🤜</span><span id="deco">v/s</span><span class="Choice" id="oppoFont">🤛</span></div>
                </div>
                <div class='Button0'>
                    <button class="Stonebutton">✊</button><button class="Paperbutton">🖐️</button><button class="Scissorbutton">✌️</button>
                </div>
                <div>
                    <h1 class='UserInput'>Make Your Choice</h1>
                </div>
                <div>
                    <button class='ButtonReturn0' id='Reset0'>🔃Reset</button>
                    <br></br>
                    <button onClick={BackNav0} class='ButtonReturn0' id='Back0'>🔙 Back</button>
                </div>
            </div>
            </>
        )
}
export default RockPaperScissor;