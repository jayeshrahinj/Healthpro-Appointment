import { Component, Host, h, getAssetPath } from '@stencil/core';

interface CircleDetails {
  name: string;
  imageUrl: string;
}

@Component({
  tag: 'circle-card',
  styleUrl: 'circle-card.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class CircleCard {
  circleCards: CircleDetails[] = [
    { name: 'Urology', imageUrl: 'c1.png' },
    { name: 'Neurology', imageUrl: 'c2.webp' },
    { name: 'Orthopedic', imageUrl: 'c3.webp' },
    { name: 'Cardiologist', imageUrl: 'c4.webp' },
    { name: 'Dentist', imageUrl: 'c5.webp' },
  ];

  render() {
    return (
      <Host>
        <div class="row">
          {this.circleCards.map((card, index) => (
            <div class="col" key={index}>
              <div class="circle-card">
                <img src={getAssetPath(`./assets/${card.imageUrl}`)} alt={card.name} />
                <p>{card.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
