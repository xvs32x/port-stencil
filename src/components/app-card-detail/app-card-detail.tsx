import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { CardItemI } from '../../models/card-item';

@Component({
  tag: 'app-card-detail',
  styleUrl: 'app-card-detail.scss',
  shadow: true,
})
export class AppCardDetail implements ComponentInterface {
  @Prop() card: CardItemI;

  render() {
    return (
      <Host>
        <div class="main-card">
          <div class="title">{this.card.name}</div>
          <div class="tags">{this.card.tags}</div>
          <div class="preview">
            <img src={this.card.preview} alt={this.card.name}/>
          </div>
        </div>
        <div>
          {this.card.images.map(cardImage => (
            <div class="images-box">
              <div class="title">{cardImage.name}</div>
              <div class="preview">
                {cardImage.src ? cardImage.src.map(image => (
                  <img src={image} alt={cardImage.name}/>
                )) : null}
              </div>
            </div>
          ))}
        </div>
      </Host>
    );
  }

}
