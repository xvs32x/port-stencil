import { Component, ComponentInterface, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot implements ComponentInterface {

  render() {
    return (
      <div>

        <app-header>
          <stencil-route-link url="/">
            Nagser.ru - Портфолио
          </stencil-route-link>
        </app-header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-index-page" exact={true} />
              <stencil-route url="/items/:id" component="app-detail-page" />
              <stencil-route component="app-not-found-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>

      </div>
    );
  }
}
