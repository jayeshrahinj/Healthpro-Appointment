import { newE2EPage } from '@stencil/core/testing';

describe('about-us', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<about-us></about-us>');

    const element = await page.find('about-us');
    expect(element).toHaveClass('hydrated');
  });
});
