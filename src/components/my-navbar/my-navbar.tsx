import { Component, h, Prop } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'my-navbar',
  styleUrl: 'my-navbar.css',
  shadow: true,
})
export class MyNavbar {
  @Prop() backColor: string = '#ffffff';
  @Prop() textColor: string = '#000000';
  @Prop() fontSize: string = '16px';
  @Prop() fontFamily: string = 'Arial';

  render() {
    return (
      <header>
        <nav class={`navbar navbar-expand-lg navbar-light`} style={{ backgroundColor: this.backColor }}>

  <h1 id="healthProHeading" style={{ fontSize: this.fontSize, fontFamily: this.fontFamily, color: this.textColor }}>HealthPro Appointments</h1>


          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto" style={{color:this.textColor}}>
              <li class="nav-item">
                <a class="nav-link" style={{}}{...href('/patient')}>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" {...href('/appoint')}>Book Appointment</a>
              </li>
        
              <li class="nav-item">
                <a class="nav-link" {...href('/about')}>About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" {...href('/appointment')}>Appointments</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" {...href('/login')}> Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
