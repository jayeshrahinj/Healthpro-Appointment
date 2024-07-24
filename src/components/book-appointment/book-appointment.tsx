import { Component, State, h } from '@stencil/core';
import { state } from '../store';

@Component({
  tag: 'book-appointment',
  styleUrl: 'book-appointment.css',
  shadow: true,
})
export class BookAppointment {
  @State() selectedDoctor = { name: ' Dr.John' };
  @State() fullName: string;
  @State() email: string;
  @State() phoneNumber: string;
  @State() appointmentDate: string;
  @State() bloodGroup: string;
  @State() diseases: string;
  @State() bloodGroupsList: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  @State() appointmentTimesList: string[] = ['9:00:00 ', '10:00:00', '11:00:00 ', '2:00:00', '3:00:00', '4:00:00'];
  @State() appointmentTime: string = '';

  foundUser: string | null = null;
  handleSubmit(event: Event) {
    event.preventDefault();
    console.log(this.selectedDoctor.name);
    // Here you can handle form submission, such as sending data to a server or performing validation
    const appointmentData = {
      fullName: this.foundUser,
      email: this.email,
      phoneNumber: this.phoneNumber,
      appointmentDate: this.appointmentDate,
      bloodGroup: this.bloodGroup,
      diseases: this.diseases,

      appointmentTime: this.appointmentTime,
      doctorName: this.selectedDoctor.name,
      status: 'UnComplete',
    };
    window.alert('Booking Confirmed!');

    console.log(appointmentData);
    const appointmentDataJson = JSON.stringify(appointmentData);
    console.log(appointmentDataJson);
    this.postData(appointmentDataJson);

    // Store the appointment data in local storage
    // localStorage.setItem('appointment', appointmentDataJson);
    window.location.href = '/patient'; //
  }
  async postData(appointmentDataJson: string) {
    try {
      const response = await fetch('http://localhost:8080/appointments/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: appointmentDataJson,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const responseData = await response.json();
      console.log('Response from server:', responseData);
    } catch (error) {
      window.location.href = '/error';
      console.error('Error posting data:', error);
    }
  }

  componentWillLoad() {
    this.foundUser = localStorage.getItem('foundUser');
    const selectedDoctorStr = localStorage.getItem('selectedDoctor');
    if (selectedDoctorStr) {
      this.selectedDoctor = JSON.parse(selectedDoctorStr);
    }
  }

  render() {
    console.log(state.username);
    return (
      <div class="form-container">
        <h1 class="text-center"> Book Appointment</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div class="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={this.foundUser}
              placeholder="Enter Full Name"
              onInput={event => (this.fullName = (event.target as HTMLInputElement).value)}
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={this.email} placeholder="Enter Your Email" onInput={event => (this.email = (event.target as HTMLInputElement).value)} required />
          </div>
          <div class="form-group">
            <label htmlFor="text">Doctor Name:</label>
            <input
              type="text"
              id="Doctor_name"
              value={this.selectedDoctor.name}
              onInput={event => (this.selectedDoctor.name = (event.target as HTMLInputElement).value)}
              required
            />
          </div>

          <div class="form-group">
            <label  >Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={this.phoneNumber}
              placeholder="Enter Your Mobile Number"
              onInput={event => (this.phoneNumber = (event.target as HTMLInputElement).value)}
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="appointmentDate">Appointment Date:</label>
            <input type="date" id="appointmentDate" value={this.appointmentDate} onInput={event => (this.appointmentDate = (event.target as HTMLInputElement).value)} required />
          </div>
          <div class="form-group">
            <label htmlFor="bloodGroup">Blood Group:</label>
            <select id="bloodGroup" onInput={event => (this.bloodGroup = (event.target as HTMLSelectElement).value)} required>
              {this.bloodGroupsList.map(group => (
                <option value={group}>{group}</option>
              ))}
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="appointmentTime">Appointment Time:</label>
            <select id="appointmentTime" onInput={(event: Event) => (this.appointmentTime = (event.target as HTMLSelectElement).value)} required>
              <option value="" disabled>
                Select an appointment time
              </option>
              {this.appointmentTimesList.map(time => (
                <option value={time}>{time}</option>
              ))}
            </select>
          </div>

          <div class="form-group">
            <label htmlFor="diseases">Diseases:</label>
            <input
              type="text"
              id="diseases"
              value={this.diseases}
              placeholder="Enter Diseases"
              onInput={event => (this.diseases = (event.target as HTMLInputElement).value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
