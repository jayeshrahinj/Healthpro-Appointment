import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: true,
})
export class MyFooter {
  @Prop() Color: string;
  foundUser: string | null = null;

  componentWillLoad() {
    this.foundUser = localStorage.getItem('foundUser');
  }
  render() {
    return (
      <Host>
        <footer class="footer" style={{ color: this.Color }}>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h4>Contact Us</h4>
                <p > <a href="mailto:HealthPro@gmail.com" style={{color:'green'}}>Email: HealthPro@gmail.com</a></p>

                <p>Phone: 789-829-5105</p>
              </div>
              <div class="col-md-4">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="/patient">Home</a>
                  </li>
                  <li>
                    <a href="appoint">Book Appointment</a>
                  </li>
                  <li>
                    <a href="/appointment">Appointment</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  {this.foundUser !== null ? (
                    <li>
                      <a href="/user">profile</a>
                    </li>
                  ) : (
                    <li>
                      <a href="/login">login</a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Host>
    );
  }
}
