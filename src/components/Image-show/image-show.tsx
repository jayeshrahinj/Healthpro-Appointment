import { Component, h } from '@stencil/core';
@Component({
  tag: 'image-show',
  styleUrl: 'image-show.css',
  shadow: true,
})
export class ImageShow {
  render() {
    return (
      <host>
        <img src="d1.jpg" alt="show" />
      </host>
    );
  }
}
