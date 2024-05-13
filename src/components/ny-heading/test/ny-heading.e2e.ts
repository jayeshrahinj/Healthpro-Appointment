import { newE2EPage } from '@stencil/core/testing';

describe('ny-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ny-heading></ny-heading>');

    const element = await page.find('ny-heading');
    expect(element).toHaveClass('hydrated');
  });
});
