import { Component, Host, h, getAssetPath } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'option-buttons',
  styleUrl: 'option-buttons.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class OptionButtons {
  foundUser: string | null = null;
  componentWillLoad() {
    this.foundUser = localStorage.getItem('foundUser');
  }
  render() {
    return (
      <Host>
        <div class="content">
          <h2>Welcome to HealthPro!</h2>
          <p>You can choose to continue as a Patient or a Doctor.</p>
        </div>
        <div class="button-container">
          <button class="patient-button">
            <a {...href('/patient')}>
              <img src={getAssetPath(`./assets/patient.jpg`)} alt="Patient" />
            </a>
            <span>Patient</span>
          </button>
          <button class="doctor-button">
            <a {...href('/admin')}>
              {' '}
              <img src={getAssetPath(`./assets/doctor.png`)} alt="Doctor" />
            </a>
            <span>Doctor</span>
          </button>
        </div>
      </Host>
    );
  }
}
