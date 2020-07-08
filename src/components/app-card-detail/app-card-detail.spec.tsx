import { newSpecPage } from '@stencil/core/testing';
import { AppCardDetail } from './app-card-detail';

describe('app-card-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppCardDetail],
      html: `<app-card-detail></app-card-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <app-card-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-card-detail>
    `);
  });
});
