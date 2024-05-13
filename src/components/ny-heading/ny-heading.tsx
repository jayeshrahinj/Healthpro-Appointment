import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ny-heading',
  styleUrl: 'ny-heading.css',
  shadow: true,
})

export class NyHeading {

  @Prop() name:string;


  render() {
    return (
      <Host>
       <div>    
       <p >{this.name}</p>
          </div>
      </Host>
    );
  }

}
