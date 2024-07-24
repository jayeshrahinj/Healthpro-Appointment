import { Component, h } from '@stencil/core';

@Component({
  tag: 'about-us',
  styleUrl: 'about-us.css',
  shadow: true,
})
export class AboutUs {
  render() {
    return (
      <div class="about-us">
        <h2>About Us</h2>
        <hr />
        <p>
          Welcome to HealthPro Appointments! We are dedicated to providing top-quality healthcare services and appointments to our patients. Our team of experienced doctors and
          healthcare professionals is committed to your well-being.
        </p>
        <p>
          At HealthPro Appointments, we strive to make the appointment booking process seamless and convenient for you. Whether you need a routine check-up or specialized
          treatment, we're here to help you find the right healthcare provider and schedule an appointment that fits your needs.
        </p>
        <p>
          Our mission is to improve access to healthcare and ensure that everyone receives the care they deserve. We believe in patient-centered care and are passionate about
          delivering personalized services to each individual.
        </p>
        <p>Thank you for choosing HealthPro Appointments for your healthcare needs. We look forward to serving you and providing you with exceptional care.</p>
      </div>
    );
  }
}
