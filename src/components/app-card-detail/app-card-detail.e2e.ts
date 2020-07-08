import { newE2EPage } from '@stencil/core/testing';

describe('app-card-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-card-detail></app-card-detail>');

    const element = await page.find('app-card-detail');
    expect(element).toHaveClass('hydrated');
  });
});
