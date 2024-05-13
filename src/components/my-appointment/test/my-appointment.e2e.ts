import { newE2EPage } from '@stencil/core/testing';

describe('my-appointment', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-appointment></my-appointment>');

    const element = await page.find('my-appointment');
    expect(element).toHaveClass('hydrated');
  });
});
