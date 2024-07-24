import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-heading',
  styleUrl: 'my-heading.css',
  shadow: true,
})
export class MyHeading {
  @Prop() text: string;

  render() {
    return <p class="headings">{this.text}</p>;
  }
}
