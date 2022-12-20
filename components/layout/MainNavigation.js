import classes from './MainNavigation.module.css'
import { useRouter } from 'next/router'
import Navigation from './Navigation'


function MainNavigation() {
  const router = useRouter()

  function homeHandler() {
    router.push('/');
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={homeHandler}>MiniProj</div>
      <div className={classes.mainDiv} onClick={() => props.toggleMenuHide()}></div>
      <Navigation/>
    </header>
  );
}

export default MainNavigation
