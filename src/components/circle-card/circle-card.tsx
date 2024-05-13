import { Component, Host, h } from '@stencil/core';

interface Circledetails {
  name: string;
  imageUrl: string;
}

@Component({
  tag: 'circle-card',
  styleUrl: 'circle-card.css',
  shadow: true,
})
export class CircleCard {
  
  circleCards: Circledetails[] = [
    { name: "Urology", imageUrl: "../../assests/c1.png" },
    { name: "Neurology", imageUrl: "../../assests/c2.webp" },
    { name: "Orthopedic", imageUrl: "../../assests/c3.webp" },
    { name: "Cardiologist", imageUrl:"../../assests/c4.webp" },
    { name: "Dentist", imageUrl: "../../assests/c5.webp" },
  ];
  
  render() {
    return (
      <Host>
        <div class="row">
          {this.circleCards.map((card, index) => (
            <div class="col" key={index}>
              <div class="circle-card">
                <img src={card.imageUrl} alt={card.name} />
                <p>{card.name}</p>
              </div>
            </div>
          ))}
        </div>

      </Host>
    );
  }

}
