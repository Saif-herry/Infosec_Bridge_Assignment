import logo from './logo.svg'
import './App.css'
import { FcGoogle } from 'react-icons/fc'
import { CiFacebook } from 'react-icons/ci'
import { BsTwitter } from 'react-icons/bs'

function App() {
  return (
    <div className="App">
      <div className="parent">
        <div className="parent1">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="para">
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
            <FcGoogle
              style={{ height: '20px', width: '20px', cursor: 'pointer' }}
            />
            <CiFacebook
              style={{ height: '20px', width: '20px', cursor: 'pointer' }}
            />
            <BsTwitter
              style={{ height: '20px', width: '20px', cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className="spandiv">
          <span>Don't have an account?</span>
          <span className="span">Create new now!</span>
          <br />
          <span>By signing up you are agree with our</span>
          <span className="span1">Terms & condition</span>
        </div>
      </div>
    </div>
  )
}

export default App
