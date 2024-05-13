import { newSpecPage } from '@stencil/core/testing';
import { BookAppointment } from '../book-appointment';

describe('book-appointment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BookAppointment],
      html: `<book-appointment></book-appointment>`,
    });
    expect(page.root).toEqualHtml(`
      <book-appointment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </book-appointment>
    `);
  });
});
