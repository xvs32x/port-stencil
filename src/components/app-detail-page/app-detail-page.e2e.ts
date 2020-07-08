import { newE2EPage } from '@stencil/core/testing';

describe('app-detail-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-detail-page></app-detail-page>');

    const element = await page.find('app-detail-page');
    expect(element).toHaveClass('hydrated');
  });
});
