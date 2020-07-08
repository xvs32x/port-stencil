import { Component, ComponentInterface, h, State } from '@stencil/core';
import { CardItemI } from '../../models/card-item';
import Axios from 'axios';

@Component({
  tag: 'app-index-page',
  styleUrl: 'app-index-page.scss',
  shadow: true,
})
export class AppIndexPage implements ComponentInterface {
  @State() cards: CardItemI[] = [];

  async componentWillLoad(): Promise<void> {
    this.cards = await Axios.get('assets/data.json').then(res => res.data)
  }

  render() {
    return (<app-cards cards={this.cards} />);
  }

}
