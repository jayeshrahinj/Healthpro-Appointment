import { newE2EPage } from '@stencil/core/testing';

describe('book-appointment', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<book-appointment></book-appointment>');

    const element = await page.find('book-appointment');
    expect(element).toHaveClass('hydrated');
  });
});
