import { newE2EPage } from '@stencil/core/testing';

describe('my-contactform', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-contactform></my-contactform>');

    const element = await page.find('my-contactform');
    expect(element).toHaveClass('hydrated');
  });
});
