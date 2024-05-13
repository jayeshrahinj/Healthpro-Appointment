import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'logo-login',
  styleUrl: 'logo-login.css',
  shadow: true,
})
export class LogoLogin {

 
  render() {
    return (
      <Host>
       <header class="container-fluid bg-light py-3 backcolor">
        <div class="row align-items-center">
        
           <h1>HealthPro Appointments</h1>
      
        </div>
      </header>
      </Host>
    );
  }

}
