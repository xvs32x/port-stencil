import { newSpecPage } from '@stencil/core/testing';
import { AppCard } from './app-card';

describe('app-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppCard],
      html: `<app-card></app-card>`,
    });
    expect(page.root).toEqualHtml(`
      <app-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-card>
    `);
  });
});
