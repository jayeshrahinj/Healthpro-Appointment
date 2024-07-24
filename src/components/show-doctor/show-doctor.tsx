import { Component, Host, h,getAssetPath } from '@stencil/core';
import { href } from 'stencil-router-v2';

interface Doctor {
  name: string;
  diseases: string[];
  imageUrl: string;
  specialist: string;
  availability: string;
  time: string;
}

@Component({
  tag: 'show-doctor',
  styleUrl: 'show-doctor.css',
  shadow: true,
})
export class ShowDoctor {
  doctors: Doctor = null;
  selectedDoctor: Doctor | null = null;
  foundUser: string | null = null;
  handleBooking() {
    window.alert('Do you really want to book?');
    if(this.foundUser)
      {
        window.location.href="/bookappointment";
      }
      else{
        window.location.href="/login";
      }
  }

  async componentWillLoad() {
    this.foundUser = localStorage.getItem('foundUser');
    const selectedDoctorStr = localStorage.getItem('selectedDoctor');
    if (selectedDoctorStr) {
      this.selectedDoctor = JSON.parse(selectedDoctorStr);
    }

    if (this.selectedDoctor) {
      await this.fetchDoctorDetails(this.selectedDoctor.name);
    }
  }

  async fetchDoctorDetails(doctorName: string) {
    try {
      const response = await fetch(`http://localhost:8080/Doctor/${(doctorName)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      this.doctors = data;
      console.log("from api")
      console.log(this.doctors); // Print API data in console
    } catch (error) {
      console.error('Error fetching doctor details:', error);
       window.location.href="/error"
    }
  }

  render() {
    return (
      <Host>
        {this.selectedDoctor && (
          <div class="card">
            <div class="card-body">
              <img class="card-img-top" src={ getAssetPath(`./assets/${this.doctors.imageUrl}`)} alt="Doctor" />
              <p class="card-text">Name: {this.doctors.name}</p>
              <p class="card-text">Specialist: {this.doctors.specialist}</p>
              <p class="card-text">Availability: {this.doctors.availability}</p>
              <p class="card-text">Time: {this.doctors.time}</p>
              <p class="card-text">Diseases: {this.doctors.diseases}</p>
              <a {...href('/bookappointment')}>
                <button class="btn btn-primary" onClick={() => this.handleBooking()}>Book Appointment</button>
              </a>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
