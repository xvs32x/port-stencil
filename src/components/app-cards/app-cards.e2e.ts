import { newE2EPage } from '@stencil/core/testing';

describe('app-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-cards></app-cards>');

    const element = await page.find('app-cards');
    expect(element).toHaveClass('hydrated');
  });
});
