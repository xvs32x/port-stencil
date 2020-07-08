import { newSpecPage } from '@stencil/core/testing';
import { AppIndexPage } from './app-index-page';

describe('app-index-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppIndexPage],
      html: `<app-index-page></app-index-page>`,
    });
    expect(page.root).toEqualHtml(`
      <app-index-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-index-page>
    `);
  });
});
