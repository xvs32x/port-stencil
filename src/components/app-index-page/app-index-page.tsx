import { Component, ComponentInterface, h, State } from '@stencil/core';
import { CardItemI } from '../../models/card-item';

@Component({
  tag: 'app-index-page',
  styleUrl: 'app-index-page.scss',
  shadow: true,
})
export class AppIndexPage implements ComponentInterface {
  @State() cards: CardItemI[] = [];

  async componentWillLoad(): Promise<any> {
    this.cards = await fetch('/assets/data.json')
      .then(res => res.json());
  }

  render() {
    return (<app-cards cards={this.cards} />);
  }

}
