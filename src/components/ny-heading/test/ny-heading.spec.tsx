import { newSpecPage } from '@stencil/core/testing';
import { NyHeading } from '../ny-heading';

describe('ny-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NyHeading],
      html: `<ny-heading></ny-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <ny-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ny-heading>
    `);
  });
});
