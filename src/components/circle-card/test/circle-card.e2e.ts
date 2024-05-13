import { newE2EPage } from '@stencil/core/testing';

describe('circle-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<circle-card></circle-card>');

    const element = await page.find('circle-card');
    expect(element).toHaveClass('hydrated');
  });
});
