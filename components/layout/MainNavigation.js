import classes from './MainNavigation.module.css'
import Navigation from './Navigation'
function MainNavigation() {

 // setInterval(() => {testTest++; console.log(testTest)}, 1000);

  return (
    
    <header className={classes.header}>
      <div className={classes.logo} href='/isl-signs'>ISLT</div>
      <div className={classes.mainDiv} onClick={() => props.toggleMenuHide()}></div>
      <Navigation/>
    </header>
  );
}

export default MainNavigation
