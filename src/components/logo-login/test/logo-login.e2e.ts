import { newE2EPage } from '@stencil/core/testing';

describe('logo-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<logo-login></logo-login>');

    const element = await page.find('logo-login');
    expect(element).toHaveClass('hydrated');
  });
});
