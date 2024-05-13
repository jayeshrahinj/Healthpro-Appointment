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
  tag: 'doctor-list',
  styleUrl: 'doctor-list.css',
  shadow: true,
})
export class DoctorList {
  doctors: Doctor[] = [
    { 
      name: "Dr. Jain", 
      diseases: ["Diabetes"], 
      imageUrl: "../../assests/doc1.jpg",
      specialist: "Endocrinologist",
      availability: "Monday, Wednesday, Friday",
      time: "9:00 AM - 12:00 PM"
    },
    { 
      name: "Dr. Sharma", 
      diseases: ["Dental"], 
      imageUrl: "../../assests/doc2.jpg",
      specialist: "Dentist",
      availability: "Tuesday, Thursday",
      time: "10:00 AM - 2:00 PM"
    },
    { 
      name: "Dr. Hafiz", 
      diseases: ["Orthopedic"], 
      imageUrl: "../../assests/doc3.jpg",
      specialist: "Orthopedic Surgeon",
      availability: "Monday, Wednesday, Friday",
      time: "8:00 AM - 1:00 PM"
    },
    { 
      name: "Dr. Patel", 
      diseases: ["Asthma"], 
      imageUrl: "../../assests/doc4.jpg",
      specialist: "Pulmonologist",
      availability: "Tuesday, Thursday",
      time: "11:00 AM - 3:00 PM"
    },
    { 
      name: "Dr. Agarwal", 
      diseases: ["Osteoporosis"], 
      imageUrl: "../../assests/doc5.jpg",
      specialist: "Rheumatologist",
      availability: "Monday, Wednesday, Friday",
      time: "9:30 AM - 12:30 PM"
    },
    { 
      name: "Dr. Jayesh", 
      diseases: ["Arthritis"], 
      imageUrl: "../../assests/doc6.jpg",
      specialist: "Rheumatologist",
      availability: "Tuesday, Thursday",
      time: "12:00 PM - 4:00 PM"
    }  ];
   selectedDoctor:Doctor|null=null;
  handleBookClick(doctor: Doctor) {
    this.selectedDoctor = doctor;
    console.log(this.selectedDoctor)
    localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
  }

  render() {
    return (
      <Host>
        <div class="row">
          {this.doctors.map((doctor, index) => (
            <div class="col-md-6 mb-4" key={index}>
              <div class="card">
                <img src={doctor.imageUrl} class="card-img" alt="Doctor" />
                <div class="card-body">
                  <h5 class="card-title">{doctor.name}</h5>
                  <p class="card-text">Diseases: {doctor.diseases.join(", ")}</p>
                </div>
                <a {...href('/showdoctor')}> <button class="btn btn-primary" onClick={() => this.handleBookClick(doctor)}>Book</button></a>
        
              </div>
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
