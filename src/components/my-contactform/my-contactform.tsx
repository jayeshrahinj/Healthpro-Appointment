import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-contactform',
  styleUrl: 'my-contactform.css',
  shadow: true,
})
export class MyContactform {
  handleSubmit(event: Event) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    // Handle form submission, e.g., send data to server
    console.log('Form submitted:', formData);
  }

  render() {
    return (
      <Host>
        <slot>
         <form onSubmit={this.handleSubmit}>
          <p class="text-center">Contact Form</p>
        <div class="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      </slot>
      </Host>
    );
  }

}
