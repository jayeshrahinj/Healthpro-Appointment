import { Component, Host, h } from '@stencil/core';

interface Feedback {
  name: string;
  email: string;
  message: string;
}

@Component({
  tag: 'my-contactform',
  styleUrl: 'my-contactform.css',
  shadow: true,
})
export class MyContactform {
  handleSubmit = async (event: Event) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const feedbackData: Feedback = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      await this.postFeedback(feedbackData);
      console.log(feedbackData);
      alert('Feedback submitted successfully!');
      // Optionally reset form fields or show a success message
      // (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Something Went Wrong');
      // Handle error (e.g., show error message to user)
    }
  };

  async postFeedback(feedbackData) {
    try {
      const response = await fetch('http://localhost:8080/feedback/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const responseData = await response.json();
      console.log('Response from server:', responseData);
    } catch (error) {
      window.location.href = '/error';
      throw new Error(error);
    }
  }

  render() {
    return (
      <Host>
        <slot>
          <form onSubmit={this.handleSubmit}>
            <p id="heading" class="text-center">
              Contact Form
            </p>
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
