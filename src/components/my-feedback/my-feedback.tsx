import { Component, h, State, Element } from '@stencil/core';

@Component({
  tag: 'my-feedback',
  styleUrl: 'my-feedback.css',
  shadow: true, // Using Shadow DOM for encapsulation
})
export class FeedbackList {
  @Element() element: HTMLElement;

  @State() feedbackData: any[] = [];

  async componentDidLoad() {
    // Fetch data from API when component is loaded
    try {
      const response = await fetch('http://localhost:8080/feedback/all'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.feedbackData = data; // Assuming API response is an array of feedback objects
    } catch (error) {
      console.error('Error fetching feedback:', error);
      window.location.href = '/error'; // Handle error state or retry mechanism if needed
    }
  }

  render() {
    return (
      <div class="feedback-list">
        <h1 id="center"> FeedBacks</h1>
        {this.feedbackData.map(feedback => (
          <div class="feedback-item" key={feedback.id}>
            <div class="field">
              <strong>Name:</strong> {feedback.name}
            </div>
            <div class="field">
              <strong>Email:</strong> {feedback.email}
            </div>
            <div class="field">
              <strong>Message:</strong> {feedback.message}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
