import { createRouter } from 'stencil-router-v2';
import { Route } from 'stencil-router-v2';
import { Component, h } from '@stencil/core';

  const Router = createRouter();
  @Component({
    tag: 'my-home',
    styleUrl: 'my-home.css',
    
  })
  export class MyHome {
    render() {
      return (
        <div>
        <Router.Switch>
          <Route path="/">
            <my-navbar  backColor="brown" 
             textColor="black" 
             fontSize="5vh" 
             fontFamily="Arial, sans-serif"></my-navbar>
            <option-buttons></option-buttons>
            <my-footer></my-footer>

          </Route>
          <Route path= "/patient">
            <div>
             <my-navbar backColor="black" 
              textColor="white" 
              fontSize="5vh" 
              fontFamily="Arial, sans-serif">
              </my-navbar> 

              <img src="../assests/d1.jpg" class="card-img-top" alt="Doctor images show" />
              <hr></hr>
            {/* <ny-heading name="Book an appointment for an in-clinic consultation"></ny-heading> */}
            <p class="headings"> Book an appointment for an in-clinic consultation</p>
            <doctor-list></doctor-list>
            <hr />
            <p class="headings"> Clinic and Specialities</p>
            <circle-card></circle-card>
            <hr />
            <my-contactform></my-contactform>
            <hr />
            <my-footer Color='green' ></my-footer>
            </div> 
          </Route>
          <Route path="/appointment">
          <my-navbar  backColor="brown" 
             textColor="black" 
             fontSize="5vh" 
             fontFamily="Arial, sans-serif"></my-navbar>
             <my-appointment></my-appointment>
             <my-footer></my-footer>

          </Route>
          <Route path="/showdoctor">
            <my-navbar  backColor="brown" 
             textColor="black" 
             fontSize="5vh" 
             fontFamily="Arial, sans-serif"></my-navbar>
            <show-doctor></show-doctor>

          </Route>
      <Route path="/bookappointment">
       <my-navbar  backColor="brown" 
         textColor="black" 
         fontSize="5vh" 
         fontFamily="Arial, sans-serif">
       </my-navbar>
       <book-appointment></book-appointment>
      </Route>
          <Route path="/appoint">
            <my-navbar  backColor="brown" 
            textColor="black" 
            fontSize="5vh" 
             fontFamily="Arial, sans-serif"></my-navbar>
            <hr />
            <img src="../../assests/home1.jpg" alt="" class="card-img-top" />
  
            <book-appointment></book-appointment>
            <hr />

            <my-footer></my-footer>
           
          </Route>

          <Route path="/showAppointment">
            <my-navbar  backColor="brown" 
             textColor="black" 
             fontSize="5vh" 
             fontFamily="Arial, sans-serif"></my-navbar>
            <hr />
            <showAppointment></showAppointment>
          </Route>
          <Route path="/about">
          <my-navbar  backColor="brown" 
             textColor="black" 
             fontSize="5vh" 
             fontFamily="Arial, sans-serif"></my-navbar>
          
            <about-us></about-us>
            <hr />
            <my-contactform></my-contactform>
            <my-footer></my-footer>
          </Route>
          <Route path="/login">
          <my-navbar  backColor="brown" 
             textColor="black" 
             fontSize="5vh" 
             fontFamily="Arial, sans-serif"></my-navbar>
          <my-login></my-login>
    
          <my-footer></my-footer>

          </Route>

          </Router.Switch>
                    </div>
      );
    }
  }
  