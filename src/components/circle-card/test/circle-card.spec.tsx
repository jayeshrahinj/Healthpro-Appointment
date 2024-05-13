import { newSpecPage } from '@stencil/core/testing';
import { CircleCard } from '../circle-card';

describe('circle-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CircleCard],
      html: `<circle-card></circle-card>`,
    });
    expect(page.root).toEqualHtml(`
      <circle-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </circle-card>
    `);
  });
});
