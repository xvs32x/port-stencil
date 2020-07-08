import { newE2EPage } from '@stencil/core/testing';

describe('app-index-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-index-page></app-index-page>');

    const element = await page.find('app-index-page');
    expect(element).toHaveClass('hydrated');
  });
});
