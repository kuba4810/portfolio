import React from 'react'
import {CSSTransition} from 'react-transition-group';
import history from './history';






class Home extends React.Component{

     constructor(){
         super();
    
     }

    render(){
        return(            
            <div className="home">
                  <p className=" homeP homeP1 animated fadeIn">Jakub Kozioł</p>
                  <p className="homeP homeP2 animated fadeIn">Web Developer</p>

                    <div className="cvLink animated slideInUp">
                        Curriculum Vitae
                    </div>            
                         
            </div>
        );
    }
}

export default Home;