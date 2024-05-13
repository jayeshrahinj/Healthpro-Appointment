import { Component, State, h } from '@stencil/core';

// interface Doctor {
//   name: string;
//   diseases: string[];
//   imageUrl: string;
//   specialist:string;
//   availability:string;
// //   time:string;
// }
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
  @State() appointmentTimesList: string[] = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];
  @State() appointmentTime: string = '';
  handleSubmit(event: Event) {
    event.preventDefault();
    // Here you can handle form submission, such as sending data to a server or performing validation
    const appointmentData ={
      fullName: this.fullName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      appointmentDate: this.appointmentDate,
      bloodGroup: this.bloodGroup,
      diseases: this.diseases,
      time: this. appointmentTime,
      DoctorName : this.selectedDoctor,

    };
    window.alert("Booking Confirmed!");
   
    console.log(appointmentData);
    const appointmentDataJson = JSON.stringify(appointmentData);
    
    // Store the appointment data in local storage
    localStorage.setItem('appointment', appointmentDataJson);
    window.location.href = '/patient'; //
  
  }
  
  componentWillLoad() {
    const selectedDoctorStr = localStorage.getItem('selectedDoctor');
    if (selectedDoctorStr) {
      this.selectedDoctor = JSON.parse(selectedDoctorStr);
    }
  }

  render() {
    return (
      <div class="form-container">
        <h1 class='text-center'> Book Appointment</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div class="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" value={this.fullName} placeholder="Jayesh Rahinj" onInput={(event) => this.fullName = (event.target as HTMLInputElement).value} required />
          </div>
          <div class="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={this.email} placeholder='rahinjjayesh@gmail.com' onInput={(event) => this.email = (event.target as HTMLInputElement).value} required />
          </div>
          <div class="form-group">
            <label htmlFor="text">Doctor Name:</label>
            <input type="text" id="Doctor_name" value={this.selectedDoctor.name}  onInput={(event) => this.email = (event.target as HTMLInputElement).value} required />
          </div>
          <div class="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" value={this.phoneNumber} placeholder="9874732836" onInput={(event) => this.phoneNumber = (event.target as HTMLInputElement).value} required />
          </div>
          <div class="form-group">
            <label htmlFor="appointmentDate">Appointment Date:</label>
            <input type="date" id="appointmentDate" value={this.appointmentDate} onInput={(event) => this.appointmentDate = (event.target as HTMLInputElement).value} required />
          </div>
          <div class="form-group">
            <label htmlFor="bloodGroup">Blood Group:</label>
            <select id="bloodGroup"  onInput={(event) => this.bloodGroup = (event.target as HTMLSelectElement).value} required>
              {this.bloodGroupsList.map((group) => (
                <option value={group}>{group}</option>
              ))}
            </select>
          </div>
          <div class="form-group">
  <label htmlFor="appointmentTime">Appointment Time:</label>
  <select id="appointmentTime" onInput={(event) => this.appointmentTime = (event.target as HTMLSelectElement).value} required>
    <option value="" disabled selected>Select an appointment time</option>
    {this.appointmentTimesList.map((time) => (
      <option value={time}>{time}</option>
    ))}
  </select>
</div>

          <div class="form-group">
            <label htmlFor="diseases">Diseases:</label>
            <input type="text" id="diseases" value={this.diseases} placeholder="fever" onInput={(event) => this.diseases = (event.target as HTMLInputElement).value} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
