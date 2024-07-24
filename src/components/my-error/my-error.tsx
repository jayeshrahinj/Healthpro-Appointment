// src/components/error-component/error-component.tsx

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-error',
  styleUrl: 'my-error.css',
  shadow: true, // Enable Shadow DOM for encapsulation
})
export class ErrorComponent {
  @Prop() message: string;

  render() {
    return (
      <div class="error-container">
        <p>
          <strong>Error:</strong> {this.message}
        </p>
      </div>
    );
  }
}
