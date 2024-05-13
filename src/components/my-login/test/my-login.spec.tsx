import { newSpecPage } from '@stencil/core/testing';
import { MyLogin } from '../my-login';

describe('my-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyLogin],
      html: `<my-login></my-login>`,
    });
    expect(page.root).toEqualHtml(`
      <my-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-login>
    `);
  });
});
