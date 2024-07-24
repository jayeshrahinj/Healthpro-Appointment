import { newSpecPage } from '@stencil/core/testing';
import { AboutUs } from '../about-us';

describe('about-us', () => {
  it('renders About Us content correctly', async () => {
    const page = await newSpecPage({
      components: [AboutUs],
      html: `<about-us></about-us>`,
    });

    // Access the shadow root
    const shadowRoot = page.root.shadowRoot;

    expect(shadowRoot).toBeTruthy(); // Ensure shadow root exists

    // Verify the content inside shadow DOM with normalized whitespace
    
  });
});
