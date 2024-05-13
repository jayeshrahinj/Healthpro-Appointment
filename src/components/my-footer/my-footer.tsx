import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: true,
})
export class MyFooter {
  @Prop()  Color:string;

  render() {
    return (
      <Host>
        <footer class="footer" style={{color:this.Color}}>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h4>Contact Us</h4>
                <p>Email: HealthPro@gmail.com</p>
                <p>Phone: 789-829-5105</p>
            </div>
            <div class="col-md-4">
                <h4 >Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Doctors</a></li>
                    <li><a href="#">Appointment</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
           
        </div>
    </div>
</footer>

      </Host>
    );
  }

}
