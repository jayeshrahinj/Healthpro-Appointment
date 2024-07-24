import { newSpecPage } from '@stencil/core/testing';
import { CircleCard } from '../circle-card';

describe('circle-card', () => {
  it('renders circle cards correctly', async () => {
    const page = await newSpecPage({
      components: [CircleCard],
      html: '<circle-card></circle-card>',
    });

    // Access the shadow root
    const shadowRoot = page.root.shadowRoot;

    // Ensure shadow root exists
    expect(shadowRoot).toBeTruthy();

    // Get all circle-card elements
    const circleCardElements = shadowRoot.querySelectorAll('.circle-card');

    // Ensure the correct number of circle cards are rendered
    expect(circleCardElements.length).toBe(5); // Adjust the number if your circleCards array changes

    // Verify each circle card's content
    const expectedCircleCards = [
      { name: 'Urology', imageUrl: 'c1.png' },
      { name: 'Neurology', imageUrl: 'c2.webp' },
      { name: 'Orthopedic', imageUrl: 'c3.webp' },
      { name: 'Cardiologist', imageUrl: 'c4.webp' },
      { name: 'Dentist', imageUrl: 'c5.webp' },
    ];

    circleCardElements.forEach((circleCardElement, index) => {
     // const imgElement = circleCardElement.querySelector('img');
      const pElement = circleCardElement.querySelector('p');

    //   // Verify image source and alt text
    //   expect(imgElement).toHaveAttribute('src', expect.stringContaining(`./assets/${expectedCircleCards[index].imageUrl}`));
    //   expect(imgElement).toHaveAttribute('alt', expectedCircleCards[index].name);

      // Verify card name text content
      expect(pElement.textContent).toBe(expectedCircleCards[index].name);
    });
  });
});
