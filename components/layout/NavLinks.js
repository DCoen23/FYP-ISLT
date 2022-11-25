const NavLinks= (props) =>{    
    return(
        <ul>
          <li onclick={()=> props.isNav&&props.closeNavMenu()}>
            <a href='/'>All Meetups</a>            
          </li>
          <li onclick={()=> props.isNav&&props.closeNavMenu()}>
            <a href='/new-meetup'>Add New Meetup</a>
          </li>
          <li onclick={()=> props.isNav&&props.closeNavMenu()}>
            <a href='/isl-signs'>Sign Language</a>            
          </li>
        </ul>
         
    );
}

export default NavLinks;