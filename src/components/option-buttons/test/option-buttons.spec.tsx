import { newSpecPage } from '@stencil/core/testing';
import { OptionButtons } from '../option-buttons';

describe('option-buttons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OptionButtons],
      html: `<option-buttons></option-buttons>`,
    });
    expect(page.root).toEqualHtml(`
      <option-buttons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </option-buttons>
    `);
  });
});
