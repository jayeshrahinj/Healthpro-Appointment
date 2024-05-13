import { newSpecPage } from '@stencil/core/testing';
import { LogoLogin } from '../logo-login';

describe('logo-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LogoLogin],
      html: `<logo-login></logo-login>`,
    });
    expect(page.root).toEqualHtml(`
      <logo-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </logo-login>
    `);
  });
});
