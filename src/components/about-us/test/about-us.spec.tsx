import { newSpecPage } from '@stencil/core/testing';
import { AboutUs } from '../about-us';

describe('about-us', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AboutUs],
      html: `<about-us></about-us>`,
    });
    expect(page.root).toEqualHtml(`
      <about-us>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </about-us>
    `);
  });
});
