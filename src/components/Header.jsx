import React from 'react'
import {NavLink} from 'react-router-dom'
import history from './history';


class Header extends React.Component{

    constructor(){
        super();
        this.state={
            listShown: false
        }
    }
    

    componentDidMount(){
        window.onresize = this.handleResize;
    }

    handleResize= ()=>{
        if(window.innerWidth >=1000){
            this.refs.menuList.classList.remove('menuListShown');
            if(this.state.listShown){
                this.refs.hambContainer.classList.toggle("change");
                this.setState({
                    listShown:false
                })
            }
        }
    }
    toogleHamburger=()=>{
        this.refs.hambContainer.classList.toggle("change");
        this.refs.menuList.classList.toggle("menuListShown");

        var menuListItems = document.querySelectorAll(".menuListItem");
        var i=0;
        for(var mli of menuListItems){
            i++;
            mli.style.animationDelay =`.${i}s`
            mli.style.animationDuration =`.3s`
           if(i%2===0){
            mli.classList.toggle("slideInLeft");
           }
           else{
            mli.classList.toggle("slideInRight");
           }
        }
        this.setState({
            listShown : !this.state.listShown
        });
        
    }

    render(){
        return(
            <div>
                <div className="hamburgerContainer">
                    <div class="hamburger" ref="hambContainer" onClick={this.toogleHamburger}>
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </div>
                <ul className="menuList" ref="menuList">
                    <li className="menuListItem animated">
                      <NavLink exact activeClassName="activeLink" to={"/"}>Home</NavLink>
                      
                    </li>
                    <li className="menuListItem animated">
                        <NavLink activeClassName="activeLink" to={"/portfolio"}>Portfolio</NavLink> 
                    </li>
                    <li className="menuListItem animated">
                        <NavLink activeClassName="activeLink" to={"/skills"}>Umiejętności</NavLink> 
                    </li>
                    <li className="menuListItem animated">
                        <NavLink activeClassName="activeLink" to={"/about"}>O mnie</NavLink>
                    </li>
                    <li className="menuListItem animated">
                        <NavLink activeClassName="activeLink" to={"/contact"}>Kontakt</NavLink>
                    </li>
                </ul>
                <div className="clearBoth"></div>
            </div>
        );
    }
}

export default Header;