import classes from './islSigns.module.css'
import islAlphabet from './img/islAlphabet.jpg'

function islSigns() {
    return ( 
        <div className={classes.Title}>
            <div className={classes.Container}>
                <h1>hello</h1>
                <h1 className={classes.hello}>ISL</h1>                
            </div>
             <img className={classes.islAlphabet} src={islAlphabet} aly= "islAlphabet"></img>
        </div>
     );
}
 
export default islSigns;