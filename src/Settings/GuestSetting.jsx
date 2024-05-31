import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Settings/Setting.css'
const GuestSetting = () => {
  const navigate = useNavigate();
  const BackNav5 = () =>{
      navigate('/guestpage');
  }
  const SignUpNav5 =() => {
    navigate('/signup')
  }
    return (
      <>
      <div class='Fix5'>
                <div class="TopBar5">
                    <div><img id={'GameIcon5'} src={require('./game-console.png')} alt="GameIcon"></img></div>
                    <div class="Font5">
                        <div class='GameHead5'><span class='Color51'>Nostolagic</span><br></br><span class='Color52'>     Game Hubb</span></div>
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
                    <button onClick={SignUpNav5} class='ButtonReturn5' id='SignUp5'>Sign Up</button>
                </div>
           </div>
      </>
    )
}
export default GuestSetting;