import { newSpecPage } from '@stencil/core/testing';
import { MyAppointment } from '../my-appointment';

describe('my-appointment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyAppointment],
      html: `<my-appointment></my-appointment>`,
    });
    expect(page.root).toEqualHtml(`
      <my-appointment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-appointment>
    `);
  });
});
