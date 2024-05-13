import { newE2EPage } from '@stencil/core/testing';

describe('doctor-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<doctor-list></doctor-list>');

    const element = await page.find('doctor-list');
    expect(element).toHaveClass('hydrated');
  });
});
