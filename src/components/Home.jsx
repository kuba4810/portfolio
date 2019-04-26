import React from 'react'
import {CSSTransition} from 'react-transition-group';
import history from './history';
import {Link} from 'react-router-dom';

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
                        <Link to={'/cv'}>
                            Curriculum Vitae
                        </Link>
                    </div>            
                         
            </div>
        );
    }
}

export default Home;