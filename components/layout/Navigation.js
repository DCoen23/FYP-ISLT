import NavLinks from './NavLinks'
import classes from './MainNavigation.module.css'
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import {useState} from 'react'
const Navigation = () =>{

    const [open, setOpen] = useState(false);

    const hamburgerIcon =   <CgMenuRound className={classes.Hamburger} 
                            size ='40px' color='white'
                            onClick={()=> setOpen(!open)}
                            />

    const closeIcon =   <CgCloseO className={classes.Hamburger} 
                        size ='40px' color='white'
                        onClick={()=> setOpen(!open)}
                        />

    const closeNavMenu = ()=>setOpen(false);
    return( 
        <nav className={classes.Navigation}>
            {open ? closeIcon: hamburgerIcon}
            {open && <NavLinks isNav={true} closeNavMenu={closeNavMenu}/>}
        </nav>
    );
}
export default Navigation;