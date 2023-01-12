import logo from './logo.svg'
import './App.css'
import {FcGoogle} from 'react-icons/fc'
import {CiFacebook} from 'react-icons/ci'
import {BsTwitter} from 'react-icons/bs'

function App() {
  return (
    <div className="App">
      <div
        style={{
          border: '1px solid red',
          width: '320PX',
          height: '600px',
          margin: 'auto',
        }}
      >
        <div
          style={{
            border: '1px solid red',
            display: 'flex',
            width: '300PX',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            margin: 'auto',
          }}
        >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p
              style={{
                textDecoration: 'underline',
                marginTop: '-10px',
                fontSize: '15px',
              }}
            >
              This is an assignment of INFOSEC BRIDGE.This is basically a login
              UI.
            </p>
          </header>
        </div>
        <div className="stage1">
          <div className="logindiv">
            <p>Login</p>
          </div>
          <div>
            <p>SignUP</p>
          </div>
        </div>
        <div className="logindata">
          <div>
            <input type="text" name="" placeholder="Email Address" />
          </div>
          <div>
            <input type="text" name="" placeholder="Password" />
          </div>
          <div>
            <button type="">Login</button>
          </div>
          <div className="forgotpassDiv">
          <p>Forgot Password?</p>
        </div>
         
         <div className="loginwithdiv">
          <p>or login with</p>
         </div>

         <div className="socialmediadiv">
          <FcGoogle/>
           <CiFacebook/> 
          <BsTwitter/> 
         </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
