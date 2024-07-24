import { createRouter } from 'stencil-router-v2';
import { Route } from 'stencil-router-v2';
import { Component, h } from '@stencil/core';

const Router = createRouter();
@Component({
  tag: 'my-home',
  styleUrl: 'my-home.css',
})
export class MyHome {
  foundUser: string | null = null;
  async componentWillLoad() {
    // Retrieve foundUser from localStorage
    this.foundUser = localStorage.getItem('foundUser');
    console.log(this.foundUser);
  }
  
  render() {
    let navigationComponent =
      this.foundUser === 'admin' ? (
        <my-adminnav backColor="brown" textColor="black" fontSize="5vh" fontFamily="Arial, sans-serif"></my-adminnav>
      ) : (
        <my-navbar backColor="brown" textColor="black" fontSize="5vh" fontFamily="Arial, sans-serif"></my-navbar>
      );
    return (
      <div>
        <Router.Switch>
          <Route path="/">
            {navigationComponent}
            <option-buttons></option-buttons>
            <my-footer></my-footer>
          </Route>
          <Route path="/patient">
            <div>
              <my-navbar backColor="brown" textColor="black" fontSize="5vh" fontFamily="Arial, sans-serif"></my-navbar>

              <my-image></my-image>
              <hr></hr>
              {/* <ny-heading name="Book an appointment for an in-clinic consultation"></ny-heading> */}
              <my-heading text="Book an appointment for an in-clinic consultation "></my-heading>

              <doctor-list></doctor-list>
              <hr />

              <my-heading text=" Clinic and Specialities"></my-heading>

              <circle-card></circle-card>
              <hr />
              <my-contactform></my-contactform>
              <hr />
              <my-footer Color="green"></my-footer>
            </div>
          </Route>
          <Route path="/appointment">
            {navigationComponent}
            <my-appointment></my-appointment>
            <my-footer></my-footer>
          </Route>
          <Route path="/showdoctor">
            <my-navbar backColor="brown" textColor="black" fontSize="5vh" fontFamily="Arial, sans-serif"></my-navbar>
            <show-doctor></show-doctor>
            <my-footer></my-footer>
          </Route>
          <Route path="/bookappointment">
            <my-navbar backColor="brown" textColor="black" fontSize="5vh" fontFamily="Arial, sans-serif"></my-navbar>
            {this.foundUser ? <book-appointment /> : <my-login />}
          </Route>
          <Route path="/appoint">
            {navigationComponent}
            <hr />
            <my-image></my-image>

            <book-appointment></book-appointment>
            <hr />

            <my-footer></my-footer>
          </Route>

          <Route path="/showAppointment">
            {navigationComponent}
            <hr />
            <showAppointment></showAppointment>
          </Route>
          <Route path="/about">
            <my-navbar backColor="brown" textColor="black" fontSize="5vh" fontFamily="Arial, sans-serif"></my-navbar>

            <about-us></about-us>
            <hr />
            <my-contactform></my-contactform>
            <my-footer></my-footer>
          </Route>
          <Route path="/login">
            {navigationComponent}
            <my-login></my-login>

            <my-footer></my-footer>
          </Route>
          <Route path="/doctorlogin">
            {navigationComponent}
            <my-login name="Doctor"></my-login>

            <my-footer></my-footer>
          </Route>
          <Route path="/register">
            {navigationComponent}
            <my-register></my-register>

            <my-footer></my-footer>
          </Route>
          <Route path="/admin">
            {navigationComponent}
            <my-appointment></my-appointment>

            <my-footer></my-footer>
          </Route>
          <Route path="/user">
            {navigationComponent}
            <my-user></my-user>
            <my-footer></my-footer>
          </Route>
          <Route path="/feedback">
            {navigationComponent}

            <my-feedback></my-feedback>
          </Route>
          <Route path="/error">
            {navigationComponent}
            <my-error message="Something went wrong!"></my-error>
          </Route>
        </Router.Switch>
      </div>
    );
  }
}
