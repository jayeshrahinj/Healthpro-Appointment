import { newSpecPage } from '@stencil/core/testing';
import { MyContactform } from '../my-contactform';

describe('my-contactform', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyContactform],
      html: `<my-contactform></my-contactform>`,
    });
    expect(page.root).toEqualHtml(`
      <my-contactform>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-contactform>
    `);
  });
});
