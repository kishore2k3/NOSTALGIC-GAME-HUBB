import '../Signin/Signup.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';
const SignUpPage = () => {
  const navigate = useNavigate();
  const signupNav2 = () =>{
      navigate('/');
  }
    return (
      <>
      <div class='Fix2'>
          <div class="TopBar2">
              <img id={'GameIcon2'} src={require('./game-console.png')} alt="GameIcon"></img>
              <div class="Font2">
                  <h2 class='GameHead2'><span class='Color21'>Nostalgic</span><br></br><span class='Color22'>     Game Hubb</span></h2>
                  <h2 class='Slogan2'>Play For Memories</h2>
              </div>
          </div>
          <div class='title'>
            <div class='TopHead'>
              <div class='user'><div><img id={'Avatar'} src={require('./user (2).png')} alt="user"></img></div></div>
              <div class='account'><h2>CREATE ACCOUNT</h2></div>
            </div>
            <br></br><br></br>
            <div><h3>NAME :  <input class='input2' type='text'></input><br></br><br></br></h3></div>
            <div class='title1'><h3>EMAIL/PHONE : <input class='input2' type='text'></input><br></br><br></br></h3></div>
            <div class='title2'><h3>PASSWORD : <input class='input2' type='password'></input><br></br></h3></div>
            <div><button onClick={signupNav2} class='Button2'>SIGN UP</button></div>
          </div>
      </div>
    </>
  )
}
export default SignUpPage;