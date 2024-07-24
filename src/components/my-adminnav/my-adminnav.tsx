import { Component, h, Prop, State } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'my-adminnav',
  styleUrl: 'my-adminnav.css',
  shadow: true,
})
export class MyNavbar {
  @Prop() backColor: string = '#ffffff';
  @Prop() textColor: string = '#000000';
  @Prop() fontSize: string = '16px';
  @Prop() fontFamily: string = 'Arial';

  @State() showLinks: boolean = true; // State for toggling links

  foundUser: string | null = null;

  async componentWillLoad() {
    // Retrieve foundUser from localStorage
    this.foundUser = localStorage.getItem('foundUser');
  }

  toggleLinks = () => {
    this.showLinks = !this.showLinks; // Toggle the state
    console.log(this.showLinks);
  };

  render() {
    let navLinks = (
      <div class={`collapse navbar-collapse `}>
        <ul class="navbar-nav mr-auto" style={{ color: this.textColor }}>
          <li class="nav-item">
            <a class="nav-link" {...href('/appointment')}>
              Appointments
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" {...href('/FeedBack')}>
              FeedBack
            </a>
          </li>
          {this.foundUser ? (
            <li class="nav-item">
              <a class="nav-link" {...href('/user')}>
                {this.foundUser}
              </a>
            </li>
          ) : (
            <li class="nav-item">
              <a class="nav-link" {...href('/login')}>
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    );
    let nav = (
      <header>
        <nav id="mynav" class={`navbar navbar-expand-lg navbar-light`} style={{ backgroundColor: this.backColor }}>
          <p id="healthProHeading" style={{ fontFamily: this.fontFamily, color: this.textColor }}>
            HealthPro Appointments
          </p>

          <button class="navbar-toggler" id="togglevisible" type="button" onClick={this.toggleLinks}>
            <span class="navbar-toggler-icon"></span>
          </button>

          {this.showLinks ? navLinks : ' '}
        </nav>
      </header>
    );
    return nav;
  }
}
