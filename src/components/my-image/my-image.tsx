import { Component, State, h, getAssetPath } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'my-image',
  styleUrl: 'my-image.css',
  shadow: true,
  assetsDirs: ['assets'], // Ensure assets directory is specified here if not already set in stencil.config.ts
})
export class MyImage {
  @State() currentImageIndex: number = 0;
  private images: string[] = [
    'd1.jpg',
    'home1.jpg',
    // Add more image filenames as needed
  ];

  componentDidLoad() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 3000); // 3 seconds interval
  }

  render() {
    const currentImage = this.images[this.currentImageIndex];

    return (
      <div>
        <div class="image-container">
          <img src={getAssetPath(`./assets/${currentImage}`)} alt={`Image ${this.currentImageIndex + 1}`} />
        </div>
        <div class="centered">
          <a {...href('/appoint')} class="button">
            BOOK NOW
          </a>
        </div>
      </div>
    );
  }
}
