import { Component, Host, h } from '@stencil/core';
import { href } from 'stencil-router-v2';
interface Doctor {
  name: string;
  diseases: string[];
  imageUrl: string;
  specialist:string;
  availability:string;
  time:string;
}
@Component({
  tag: 'show-doctor',
  styleUrl: 'show-doctor.css',
  shadow: true,
})
export class ShowDoctor {
  selectedDoctor: Doctor|null = null;
  handleBooking() {
    window.alert('Your really want to book ?');
  }

  componentWillLoad() {
    const selectedDoctorStr = localStorage.getItem('selectedDoctor');
    if (selectedDoctorStr) {
      this.selectedDoctor = JSON.parse(selectedDoctorStr);
    }
  }
  render() {
    return (
      <Host>
      {this.selectedDoctor && (
  <div class="card">
    <div class="card-body">
      <img class="card-img-top" src={this.selectedDoctor.imageUrl} alt="Doctor" />
      <p class="card-text">Name: {this.selectedDoctor.name}</p>
      <p class="card-text">Specialist: {this.selectedDoctor.specialist}</p>
      <p class="card-text">Availability: {this.selectedDoctor.availability}</p>
      <p class="card-text">Time: {this.selectedDoctor.time}</p>
      <p class="card-text">Diseases: {this.selectedDoctor.diseases.join(", ")}</p>
      <a {...href('/bookappointment')}> <button class="btn btn-primary" onClick={() => this.handleBooking()}>Book Appointment</button></a>
   </div>
  </div>
)}

      </Host>
     
    );
  
  }

}