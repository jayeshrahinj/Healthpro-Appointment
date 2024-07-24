// src/components/my-register/my-register.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-register',
  styleUrl: 'my-register.css',
  shadow: true,
})
export class Register {
  handleSubmit = async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('http://localhost:8080/User/AddUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('username'),
          email: formData.get('email'),
          city: formData.get('city'),
          password: formData.get('password'),
          mobile: formData.get('mobile'), // Add mobile field
          // Add more fields as needed
        }),
      });

      if (response.ok) {
        console.log('User added successfully');
        // Optionally reset form fields or show success message
        form.reset();
        window.location.href = '/login';
      } else {
        window.location.href = '/error';
        console.error('Failed to add user');
        // Handle error or show error message
      }
    } catch (error) {
      console.error('Error adding user:', error);
      // Handle network or other errors
    }
  };

  render() {
    return (
      <div class="register-form">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <label>
            City:
            <input type="text" name="city" required />
          </label>
          <label>
            Mobile:
            <input type="text" name="mobile" required />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
