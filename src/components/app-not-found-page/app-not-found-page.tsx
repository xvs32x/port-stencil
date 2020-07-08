import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-not-found-page',
  styleUrl: 'app-not-found-page.scss',
  shadow: true,
})
export class AppNotFoundPage implements ComponentInterface {

  render() {
    return (
      <Host>
        <div>Page not found</div>
      </Host>
    );
  }

}
