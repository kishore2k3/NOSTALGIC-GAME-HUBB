import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Settings/Setting.css'
const Setting = () => {
  const navigate = useNavigate();
  const BackNav5 = () =>{
      navigate('/gamepage');
  }
  const LogoutNav5 = () =>{
      navigate('/');
  }
    return (
      <>
      <div class='Fix5'>
                <div class="TopBar5">
                    <div><img id={'GameIcon5'} src={require('./game-console.png')} alt="GameIcon"></img></div>
                    <div class="Font5">
                        <div class='GameHead5'><span class='Color51'>Nostalgic</span><br></br><span class='Color52'>     Game Hubb</span></div>
                        <div class='Slogan5'>Play For Memories</div>
                    </div>
                </div>
                <div class="Setting5">
                    <h3 class="SetText">Settings</h3>
                    <div><img id={'SetIcon'} src={require('./setting.png')} alt="SetIcon"></img></div>
                </div>
                <div class='Volume'>
                    <div><button class="ButtonVol"></button><input id="VolIcon" type="range" class="tree"/></div>
                </div>
                <div class='DivRB'>
                    <button onClick={BackNav5} class='ButtonReturn5' id='back5'>🔙 Back</button>
                    <br></br>
                    <button onClick={LogoutNav5} class='ButtonReturn5' id='logout5'>Log Out</button>
                </div>
           </div>
      </>
    )
}
export default Setting;