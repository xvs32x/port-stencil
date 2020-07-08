import { newSpecPage } from '@stencil/core/testing';
import { AppCards } from './app-cards';

describe('app-cards', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppCards],
      html: `<app-cards></app-cards>`,
    });
    expect(page.root).toEqualHtml(`
      <app-cards>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-cards>
    `);
  });
});
