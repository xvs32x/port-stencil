import { newSpecPage } from '@stencil/core/testing';
import { AppNotFoundPage } from './app-not-found-page';

describe('app-not-found-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppNotFoundPage],
      html: `<app-not-found-page></app-not-found-page>`,
    });
    expect(page.root).toEqualHtml(`
      <app-not-found-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-not-found-page>
    `);
  });
});
