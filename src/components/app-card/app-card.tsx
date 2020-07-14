import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { CardItemI } from '../../models/card-item';
import { getSrc, getSrcSet } from '../../helpers/img-helper';

@Component({
  tag: 'app-card',
  styleUrl: 'app-card.scss',
  shadow: true,
})
export class AppCard implements ComponentInterface {
  @Prop() card: CardItemI;

  render() {
    return (
      <Host>
        <stencil-route-link url={`/items/${this.card.id}`}>
          <div class="title">{this.card.name}</div>
          <div class="tags">{this.card.tags}</div>
          <div class="preview">
            <img
              src={getSrc(this.card.preview)}
              srcset={getSrcSet(this.card.preview)}
              alt={this.card.name} />
          </div>
        </stencil-route-link>
      </Host>
    );
  }

}
