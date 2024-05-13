import { newSpecPage } from '@stencil/core/testing';
import { ShowDoctor } from '../show-doctor';

describe('show-doctor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShowDoctor],
      html: `<show-doctor></show-doctor>`,
    });
    expect(page.root).toEqualHtml(`
      <show-doctor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </show-doctor>
    `);
  });
});
