import React from 'react'
import '../LeaderBoard/LeaderBoard.css'
import { useNavigate } from 'react-router-dom'
const LeaderBoard = () => {
  const navigate = useNavigate();
   const BackNav4 = () =>{
      navigate('/gamepage')
   }
    return (
      
        <div class='Fix4'>
        <br/>
        <div class='Order4'>
        <div class="top4">
          <h1>LeaderBoard</h1>
        </div>
        
        <div>
            
            <table style={{width:"100%"}}>
                <tr style={{backgroundColor:"#050505"}}>
                  <th style={{color:"red"}}>Rank</th> 
                  <th style={{color:"red"}}>UserName</th>
                  <th style={{color:"red"}}>Score</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Akash</td>
                  <td>210</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kishore</td>
                  <td>194</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Doe</td>
                  <td>190</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jon</td>
                  <td>180</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Cersei</td>
                  <td>165</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Jamie</td>
                  <td>145</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Joffrey</td>
                  <td>90</td>
                </tr>
              </table>

        </div>

        <div>
            <button class='Button4' onClick={BackNav4} id="reset">Back</button>
        </div>
        </div>
    </div>
    )
}
export default LeaderBoard;