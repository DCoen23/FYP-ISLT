import classes from "./Popup.module.css"
import { useState } from 'react'
export default function Popup(props) {
  let [hideMe, setHideMe] = useState(false)
 
  function validation() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if(username == 'darragh' && password == 'coen' ){
      setHideMe(true)
      console.log('correct sign in');
    }
    else{
      setHideMe(false)
      console.log("incorrect sign in");
    }
  }
  if(props.hide) { /* Move the show / hide code to the component itself: */
    return null
  }
  if(hideMe) { /* Move the show / hide code to the component itself: */
    return null
  }
  return (
    <div className={classes.mainDiv} >
      <div className={classes.greyBackground}></div>
      <div className={classes.thePopup}>
        <div className={classes.exit} onClick={() => setHideMe(true)}>
        <h1>X</h1>
        </div>
       <div className={classes.log}>
        <form>
          <h2 className="sign-in">Please sign in</h2>
          <div >
            <input type="text" id="username" placeholder="name@example.com" />
            <label htmlFor="floatingInput"></label>
          </div>
          <div >
            <input type="password" id="password" placeholder="Password" />
            <label htmlFor="floatingPassword"></label>
          </div>
          <div className={classes.checkbox}>
            <label>
              <input type="checkbox" value="remember-me" />Remember me</label>
          </div>
          <h2 className={classes.signbtn} type="submit" onClick={() => validation()}>Sign in</h2>
        </form>
        </div>
      </div>
      </div>
  )
}