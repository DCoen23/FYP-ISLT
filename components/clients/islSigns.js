import classes from './islSigns.module.css'

const islSigns = () => {
    return ( 
        <div className={classes.Title}>
            <div className={classes.Container}>
                <h1 className={classes.hello}>ISL</h1>                
            </div>
            <img className={classes.islAlphabet} src= "https://i.etsystatic.com/6037992/r/il/cfa802/1812213624/il_fullxfull.1812213624_f02d.jpg"></img>
        </div>
     );
}
 
export default islSigns;