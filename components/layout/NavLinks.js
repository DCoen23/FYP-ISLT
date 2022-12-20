const NavLinks= (props) =>{    
    return(
        <ul>
          <li onclick={()=> props.isNav&&props.closeNavMenu()}>
            <a href='/isl-signs'>Sign Language</a>            
          </li>
        </ul>
         
    );
}

export default NavLinks;