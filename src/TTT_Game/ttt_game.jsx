import React from "react";
import "../TTT_Game/ttt_game.css"
import "../TTT_Game/ttt_game2.css"
import { useNavigate } from "react-router-dom";
const TTTGame = () =>{
    const navigate = useNavigate();
    const BackNav7 =() =>{
        navigate('/gamepage')
    }
        return(
            <>
            <div class='Fix7'>
                <div class="TopBar7">
                    <div><img id={'GameIcon7'} src={require('./game-console.png')} alt="GameIcon"></img></div>
                    <div class="Font7">
                        <div class='GameHead7'><span class='Color71'>Nostalgic</span><br></br><span class='Color72'>     Game Hubb</span></div>
                        <div class='Slogan7'>Play For Memories</div>
                    </div>
                </div>
                <div>
                    <h1 class='Head7'>Tic Tac Toe</h1>
                </div>
                <div class="box7">
                    <div class="row7" ><input class="btn7" type="text" readOnly placeholder="X"></input><input className="btn7" type="text" readOnly></input>
                    <input className="btn7" type="text"  readOnly placeholder="O"></input></div>
                    <div class="row7"><input class="btn7" type="text" readOnly></input><input className="btn7" type="text"  readOnly placeholder="X"></input>
                    <input className="btn7" type="text" readOnly placeholder="O"></input></div>
                    <div class="row7"><input class="btn7" type="text"  readOnly placeholder="O"></input><input className="btn7" type="text"  readOnly></input>
                    <input className="btn7" type="text"  readOnly placeholder="X"></input></div>
                </div>
                <p class="result7">Player X turn</p>
                <div><button className="ButtonReturn7" id="reset7">Reset</button></div>
                <div><button className="ButtonReturn7" onClick={BackNav7} id="reset7">Back</button></div>
            </div>
            </>
        )
    }
export default TTTGame;