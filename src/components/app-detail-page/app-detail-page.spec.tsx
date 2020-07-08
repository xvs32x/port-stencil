import { newSpecPage } from '@stencil/core/testing';
import { AppDetailPage } from './app-detail-page';

describe('app-detail-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppDetailPage],
      html: `<app-detail-page></app-detail-page>`,
    });
    expect(page.root).toEqualHtml(`
      <app-detail-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-detail-page>
    `);
  });
});
