import { newE2EPage } from '@stencil/core/testing';

describe('show-doctor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<show-doctor></show-doctor>');

    const element = await page.find('show-doctor');
    expect(element).toHaveClass('hydrated');
  });
});
