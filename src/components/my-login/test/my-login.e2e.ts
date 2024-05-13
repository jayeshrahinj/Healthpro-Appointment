import { newE2EPage } from '@stencil/core/testing';

describe('my-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-login></my-login>');

    const element = await page.find('my-login');
    expect(element).toHaveClass('hydrated');
  });
});
