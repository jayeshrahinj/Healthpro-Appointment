import { Component, Host, State, h } from '@stencil/core';
import {href} from 'stencil-router-v2'

@Component({
  tag: 'option-buttons',
  styleUrl: 'option-buttons.css',
  shadow: true,
})
export class OptionButtons {
  @State() isPatient:boolean;

  render() {
    return (
      <Host>
         <div class="content">
          <h2>Welcome to HealthPro!</h2>
          <p>You can choose to continue as a Patient or a Doctor.</p>
        </div>
         <div class="button-container">
        <button class="patient-button">
        <a {...href('/patient')}><img src="../../assests/patient.jpg" alt="Patient" /></a>
          <span>Patient</span>
        </button>
        <button class="doctor-button">
          <img src="../../assests/doctor.png" alt="Doctor" />
          <span>Doctor</span>
        </button>
      </div>
      </Host>
    );
  }

}
