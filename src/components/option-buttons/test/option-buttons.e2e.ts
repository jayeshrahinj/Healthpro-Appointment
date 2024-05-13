import { newE2EPage } from '@stencil/core/testing';

describe('option-buttons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<option-buttons></option-buttons>');

    const element = await page.find('option-buttons');
    expect(element).toHaveClass('hydrated');
  });
});
