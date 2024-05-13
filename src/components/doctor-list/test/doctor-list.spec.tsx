import { newSpecPage } from '@stencil/core/testing';
import { DoctorList } from '../doctor-list';

describe('doctor-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DoctorList],
      html: `<doctor-list></doctor-list>`,
    });
    expect(page.root).toEqualHtml(`
      <doctor-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </doctor-list>
    `);
  });
});
