import { Component, Host, h, getAssetPath } from '@stencil/core';
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
  tag: 'doctor-list',
  styleUrl: 'doctor-list.css',
  shadow: true,
})
export class DoctorList {
  doctors: Doctor[] = [];

  async componentWillLoad() {
    await this.fetchDoctors();
  }

  async fetchDoctors() {
    try {
      const response = await fetch('http://localhost:8080/Doctor/AllDoctor/');
      const data = await response.json();
      this.doctors = data;
      console.log(this.doctors); // Print API data in console
    } catch (error) {
      console.error('Error fetching doctors:', error);
      window.location.href = '/error';
    }
  }

  render() {
    return (
      <Host>
        <div class="row">
          {this.doctors.map((doctor, index) => (
            <div class="col-md-6 mb-4" key={index}>
              <div class="card">
                <img src={getAssetPath(`./assets/${doctor.imageUrl}`)} class="card-img" alt="Doctor" />
                <div class="card-body">
                  <h5 class="card-title">{doctor.name}</h5>
                  <p class="card-text">Diseases: {doctor.diseases}</p>
                </div>
                <a {...href('/showdoctor')}>
                  <button class="btn btn-primary" onClick={() => this.handleBookClick(doctor)}>
                    Book
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Host>
    );
  }

  handleBookClick(doctor: Doctor) {
    console.log(doctor);
    localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
  }
}
