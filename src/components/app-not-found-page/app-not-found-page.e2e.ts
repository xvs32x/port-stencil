import { newE2EPage } from '@stencil/core/testing';

describe('app-not-found-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-not-found-page></app-not-found-page>');

    const element = await page.find('app-not-found-page');
    expect(element).toHaveClass('hydrated');
  });
});
