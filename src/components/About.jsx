import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';



class About extends React.Component{

    scrollDown=(x)=>{
        window.scrollTo(0, parseInt(x));
    }
   
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="row aboutMeParagraph">
                        
                        <div className="col-lg-4 aboutImage animated fadeIn">
                            <img src={require('../images/aboutImage3.jpg')} alt=""/>
                        </div>

                        <div className="col-lg-7 aboutMeDescription">
                            <div className="descriptionTitle animated slideInDown">
                                Kilka słów o mnie :D
                            </div>
                        <div className="descriptionText animated slideInUp">
                            Jestem osobą o niezaspokojonym apetycie na wiedzę. Interesuję mnie wiele dziedzić ale szczególne 
                            miejsce zajmuje u mnie programowanie. Staram się być spokojny , nie planować za wiele, żyć chwilą
                            i cieszyć się życiem. Pracuje gdy przychodzi na to pora, odpoczywam gdy przychodzi na to czas.
                            Nie przesadzam ani z jednym ani z drugim :D 
                            <br/>
                            <br/>
                            <blockquote>    
                            "Dont lose your faith. Promise yourself that you will be a success story, and I promise you that 
                            all the forces of the universe will unite to come to your aid; you might not feel today or for a while,
                            but the longer you wait the bigger the prize" <br/>
                            George Bernard Shaw
                            </blockquote>
                          
                        </div>
                        </div>
                    </div>

                  <div className="row sectionBreakerRow">
                  
                    <div className="col-11">
                         <div className="sectionBreaker animated fadeIn" onClick={this.scrollDown.bind(null,700)}>
                         <i class="fas fa-arrow-down"></i>  Edukacja <i class="fas fa-arrow-down"></i>
                         </div>                   
                    </div>
                  
                  </div>

                   <ScrollAnimation
                     animateIn="fadeInUp"
                     duration=".7s"
                     animateOnce="true"> 

                    <div className="row">                
                        <div className="col-11 education">
                            <div className="educationImage" id="zsp">
                            </div>
                            <div>
                                 <h2> 2012-2015 Liceum </h2>
                                 <hr/> 
                                 Uczęszczałem do Publicznego Zespołu Szkół Ponadgimnazjalnych im. Generała Leopolda Okulickiego. <br/>
                                 Głównymi przedmiotami na moim profilu były Matematyka,Fizyka,Informatyka, a więc był to kierunek ścisły.
                                 Wiele godzin matematyki w tygodniu dobrze przygotowały mnie z tego przedmioty.
                            </div>    
                        </div>                      
                  </div>
                  </ScrollAnimation>
                </div>

                <ScrollAnimation 
                animateIn="fadeInDown"
                duration=".7s"
                animateOnce="true"> 
                  <div className="row">
                   
                            <div className="col-11 education">
                            <div className="educationImage" id="pwsz">
                            </div>
                            <div>
                            <h2>2015-2019 Studia</h2>
                             <hr/>
                             Obecnie studiuje na PWSZ Tarnów na kierunku Informatyka. Jestem na 4 roku studiów inżynierskich
                             obejmujących 7 semestrów.
                             W tym semestrze będe przystępował do obrony pracy inżynierskiej. 
                             Uczelnia staje się coraz bardziej popularna i wysoko klasyfikowana wśród Państwowych Wyższych Szkół Zawodowych
                             Wybrałem specjalizacje Inżynieria Systemów Informatycznych. 
                             Nauczyłem się przetwarzać obrazy, tworzyć aplikacje mobilne i sieciowe, projektować i zarządzać bazy danych.
                            </div>
                            </div>
          
                    
                  </div>
                  </ScrollAnimation>

                <div className="row sectionBreakerRow">
                  
                  <div className="col-11">
                       <div className="sectionBreaker interesingSign animated fadeIn" onClick={this.scrollDown.bind(null,1300)}>
                       <i class="fas fa-arrow-down"></i>  Zainteresowania <i class="fas fa-arrow-down"></i>
                       </div>                   
                  </div>
                
                </div>

                 <ScrollAnimation
                 animateIn="slideInLeft"
                duration=".7s"
                animateOnce="true"> 
                  <div className="row">
                    <div className="col-1"></div>
                   
                            <div className="col-10 interesting">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                                officia deserunt mollit anim id est laborum.At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident.
                            </div>
          
                   

                    <div className="col-1">
                    </div>
                  </div>
                  </ScrollAnimation>

                   <ScrollAnimation
                 animateIn="slideInRight"
                duration=".7s"
                animateOnce="true"> 
                  <div className="row">
                    <div className="col-1"></div>
                   
                            <div className="col-10 interesting">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                                officia deserunt mollit anim id est laborum.At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident.
                            </div>
          
                   

                    <div className="col-1">
                    </div>
                  </div>
                  </ScrollAnimation>
               
            </div>
        );
    }
}

export default About


