import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css',
  shadow: true,
})
export class MyFooter {

    render()
    {
        return(
            <Host>
           <h1>about page</h1>
            </Host>

        );
    }
}
