import { Component, Host, h } from '@stencil/core';
import { href,Router } from 'stencil-router-v2';

interface Appointment {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  appointmentDate: string;
  bloodGroup: string;
  diseases: string;
  appointmentTime: string;
  doctorName: string;
  status: string;
}

@Component({
  tag: 'my-appointment',
  styleUrl: 'my-appointment.css',
  shadow: true,
})
export class MyAppointment {
  appointmentStr: Appointment[] = [];
  foundUser: string | null = null;

  async componentWillLoad() {
    this.foundUser = localStorage.getItem('foundUser');
    if (this.foundUser === 'admin') {
      await this.fetchAppointments();
    } else {
      await this.fetchAppointmentsByUser();
    }
  }

  async fetchAppointmentsByUser() {
    try {
      const response = await fetch(`http://localhost:8080/appointments/appoint/${this.foundUser}`);

      const data = await response.json();
      this.appointmentStr = data;
      console.log('Appointments fetched successfully:', this.appointmentStr);
    } catch (error) {
      window.location.href = '/error';
      console.error('Error fetching appointments:', error);
    }
  }

  async fetchAppointments() {
    try {
      const response = await fetch(`http://localhost:8080/appointments/all`);

      const data = await response.json();
      this.appointmentStr = data;
      console.log('Appointments fetched successfully:', this.appointmentStr);
    } catch (error) {
      window.location.href = '/error';
      console.error('Error fetching appointments:', error);
    }
  }

  async cancelAppointmentById(appointmentId: number) {
    try {
      const response = await fetch(`http://localhost:8080/appointments/delete/${appointmentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      console.log(`Appointment with ID ${appointmentId} deleted successfully`);
      window.location.reload(); // Refresh the page after deletion
    } catch (error) {
      window.location.href = '/error';
      console.error(`Error deleting appointment with ID ${appointmentId}:`, error);
    }
  }

  async completeAppointmentById(appointmentId: number) {
    try {
      const response = await fetch(`http://localhost:8080/appointments/update/${appointmentId}`, {
        method: 'PUT', // Use PUT method to update
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'Completed' }), // Update status to 'Completed'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      console.log(`Appointment with ID ${appointmentId} marked as Completed successfully`);
      window.location.reload(); // Refresh the page after update
    } catch (error) {
      window.location.href = '/error';
      console.error(`Error marking appointment with ID ${appointmentId} as Completed:`, error);
    }
  }
  async acceptAppointmentById(appointmentId: number) {
    try {
      debugger;
      const response = await fetch(`http://localhost:8080/appointments/update/${appointmentId}`, {
        method: 'PUT', // Use PUT method to update
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'Accepted', hsabsjh: 'hsvhgjsah' }), // Update status to 'Completed'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      console.log(`Appointment with ID ${appointmentId} marked as Completed successfully`);
      window.location.reload(); // Refresh the page after update
    } catch (error) {
      window.location.href = '/error';
      console.error(`Error marking appointment with ID ${appointmentId} as Completed:`, error);
    }
  }

  render() {
    if (!this.foundUser) {
      return (
        <Host>
          <div class="login-message">
           <p> Please <a {...href('/login')}>login</a> first to view appointments</p>
          </div>
        </Host>
      );
    }

    if (this.appointmentStr.length === 0) {
      return (
        <Host>
          <div class="loading-container">
            <div class="loading-message">
              You don't have any appointments. If you want to book an appointment <a {...href('/appoint')}>click here</a>.
            </div>
          </div>
        </Host>
      );
    }
    return (
      <Host>
        {this.appointmentStr.map(appointment => (
          <div class="card" key={appointment.id}>
            <div class="card-body">
              <h1>BOOKING DETAILS</h1>
              <ul class="card-text">
                <li>ID: {appointment.id}</li>
                <li>Name: {appointment.fullName}</li>
                <li>Contact Number: {appointment.phoneNumber}</li>
                <li>Appointment Date: {new Date(appointment.appointmentDate).toLocaleDateString()}</li>
                <li>Blood Group: {appointment.bloodGroup}</li>
                <li>Diseases: {appointment.diseases}</li>
                <li>Appointment Time: {appointment.appointmentTime}</li>
                <li>Doctor Name: {appointment.doctorName}</li>
                <li>
                  Status:{' '}
                  {appointment.status.toString() === 'UnComplete' ? (
                    <span style={{ color: 'red' }}>{appointment.status}</span>
                  ) : (
                    <span style={{ color: 'green' }}>{appointment.status}</span>
                  )}
                </li>
              </ul>
              {this.foundUser === 'admin' && appointment.status !== 'Completed' ? (
                <span>
                  <button id="Completed" onClick={() => this.completeAppointmentById(appointment.id)}>
                    Complete
                  </button>
                  <button id="Completed" onClick={() => this.acceptAppointmentById(appointment.id)}>
                    Accepted
                  </button>
                  <button id="cancel" onClick={() => this.cancelAppointmentById(appointment.id)}>
                    Cancel
                  </button>
                </span>
              ) : (
                <button id="cancel" onClick={() => this.cancelAppointmentById(appointment.id)}>
                  Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      </Host>
    );
  }
}
