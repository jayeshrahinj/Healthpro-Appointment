import { Component, h, State } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'my-user',
  styleUrl: 'my-user.css',
  shadow: true,
})
export class MyUser {
  @State() user: {
    id: number;
    name: string;
    email: string;
    city: string;
    password: string;
    mobileNo: string | null;
  } | null = null;

  async componentWillLoad() {
    // Retrieve username from localStorage
    const username = localStorage.getItem('foundUser');

    if (username) {
      try {
        // Make HTTP request to fetch user data
        const response = await fetch(`http://localhost:8080/User/${username}`);
        if (response.ok) {
          // Parse JSON response
          const userData = await response.json();
          // Set user state with fetched data
          this.user = userData;
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        window.location.href = '/error';
      }
    }
  }

  handleLogout() {
    // Clear localStorage item

    localStorage.removeItem('foundUser');
    // Reset user state to null

    location.reload();
    
  }

  render() {
    return (
      <div class="profile-container">
        <div class="profile-header">
          <h2>User Profile</h2>
        </div>
        {this.user ? (
          <div class="profile-details">
            <div class="profile-item">
              <span class="profile-label">Name:</span>
              <span class="profile-value">{this.user.name}</span>
            </div>
            <div class="profile-item">
              <span class="profile-label">Email:</span>
              <span class="profile-value">{this.user.email}</span>
            </div>
            {this.user.name !== 'admin' ? (
              <div>
                <div class="profile-item">
                  <span class="profile-label">City:</span>
                  <span class="profile-value">{this.user.city}</span>
                </div>
                <div class="profile-item">
                  <span class="profile-label">Mobile No:</span>
                  <span class="profile-value">{this.user.mobileNo || 'Not provided'}</span>
                </div>
              </div>
            ) : (
              ''
            )}
            <div>
              <button id="logout" onClick={() => this.handleLogout()}>
                {' '}
                <a {...href('/login')}>logout</a>
              </button>
            </div>
          </div>
        ) : (
          <p>Loading user profile...</p>
        )}
      </div>
    );
  }
}
