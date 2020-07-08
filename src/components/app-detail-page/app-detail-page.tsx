import { Component, ComponentInterface, Host, h, State, Prop } from '@stencil/core';
import { CardItemI } from '../../models/card-item';
import Axios from 'axios';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-detail-page',
  styleUrl: 'app-detail-page.scss',
  shadow: true,
})
export class AppDetailPage implements ComponentInterface {
  @Prop() match: MatchResults;
  @State() card: CardItemI;

  async componentWillLoad(): Promise<void> {
    console.log(this.match);
    this.card = await Axios.get('/assets/data.json')
      .then(res => res.data)
      .then(items => items.find(item => item.id === +this.match.params.id))
  }
  render() {
    return (
      <Host>
        <app-card-detail card={this.card} />
      </Host>
    );
  }

}
