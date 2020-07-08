import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: true,
})
export class AppHeader implements ComponentInterface {

  render() {
    return (
      <Host>
        <div>
          <slot></slot>
        </div>
        <div class="space"></div>
        <a
          href="https://github.com/xvs32x"
          target="_blank"
        >
          <img src="/assets/icon/github.png"
               alt="github"
               title="Github profile" />
        </a>
      </Host>
    );
  }

}
