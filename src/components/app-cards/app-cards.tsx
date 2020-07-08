import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { CardItemI } from '../../models/card-item';

@Component({
  tag: 'app-cards',
  styleUrl: 'app-cards.scss',
  shadow: true,
})
export class AppCards implements ComponentInterface {
  @Prop() cards: CardItemI[];

  render() {
    return (
      <Host>{this.cards.map(card => <app-card card={card} />)}</Host>
    );
  }

}
