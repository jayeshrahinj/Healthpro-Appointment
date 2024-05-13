import { Component, Host, h } from '@stencil/core';
interface Doctor {
  name: string;
  diseases: string[];
  imageUrl: string;
  specialist:string;
  availability:string;
  time:string;
}
interface appointment {
  fullName: string;
  email: string;
  phoneNumber: string;
  appointmentDate: string; // Assuming appointment date is a string for simplicity, you can use Date type if needed
  bloodGroup: string;
  diseases: string[];
  time: string[]; // Assuming appointment times are stored as an array of strings
  DoctorName: string;
 
}
@Component({
  tag: 'my-appointment',
  styleUrl: 'my-appointment.css',
  shadow: true,
})


export class MyAppointment {
  selectedDoctor: Doctor|null = null;
  handleBooking() {
    window.alert('Confirm ?');
  }
  appointmentStr:appointment|null=null;
  componentWillLoad() {
    const appointmentStr = localStorage.getItem('appointment');
    console.log(appointmentStr);
    if (appointmentStr) {
      this.appointmentStr = JSON.parse(appointmentStr);
    }

    const selectedDoctorStr = localStorage.getItem('selectedDoctor');
    if (selectedDoctorStr) {
      this.selectedDoctor = JSON.parse(selectedDoctorStr);
    }
  }
  

  render() {
    if (!this.appointmentStr) {
      // If appointmentStr is null, return early or render a loading state
      return (
        <Host>
          <div class="loading-container">
            <div class="loading-message">Loading...</div>
          </div>
        </Host>
      );
    }
    return (
      <Host>
         <div class="card">
    <div class="card-body">
    <h1 >BOOKING DETAILS</h1>
    <ul class="card-text">
  <li>Name: {this.appointmentStr.email}</li>
  <li>Contact Number: {this.appointmentStr.phoneNumber}</li>
  <li>Appointment Date: {this.appointmentStr.appointmentDate}</li>
  <li>Blood Group: {this.appointmentStr.bloodGroup}</li>
  <li>Diseases: {this.appointmentStr.diseases}</li>
  <li>Appointment Time: {this.appointmentStr.time}</li>
  <li>Doctor Name: {this.appointmentStr.DoctorName}</li>
</ul> 
       </div>
  </div>
      </Host>
    );
  }

}
