import '../Login/LoginPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
   const navigate = useNavigate();
   const LoginNav1 = () =>{
      navigate('/gamepage')
   }
   const SigninNav1 = () =>{
      navigate('/signup')
   }
   const GuestNav1 = () =>{
      navigate('/guestpage')
   }
    return (
       <>
      <div className='Fix1'>
            <div class="TopBar2">
              <img id={'GameIcon2'} src={require('./game-console.png')} alt="GameIcon"></img>
              <div class="Font2">
                  <h2 class='GameHead2'><span class='Color21'>Nostalgic</span><br></br><span class='Color22'>     Game Hubb</span></h2>
                  <h2 class='Slogan2'>Play For Memories</h2>
              </div>
          </div>
         <div class='signin1'>
            <div><h1 class="new_account1">CREATE NEW ACCOUNT</h1></div>
            <div><button class='signin_button1' onClick={SigninNav1}>SIGN UP</button></div>
         </div>
         <div className='login1'>
            <div class='email1'><h2>EMAIL/PHONE : <input type='text'></input></h2></div>
            <div className='hellopass1'><h2>PASSWORD : <input type='password'/></h2></div>
            <div ><button class='login_button1' onClick={LoginNav1}>LOGIN</button></div>
            <div><h3 className='or1'>OR</h3> </div>
            <div><button onClick={GuestNav1} className='guest1 button-desc'>CONTINUE AS GUEST</button></div>
         </div>
      </div>
   </>
  )
}
export default LoginPage;