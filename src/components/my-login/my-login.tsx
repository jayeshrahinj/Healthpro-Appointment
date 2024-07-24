import { Component, h, Prop, State } from '@stencil/core';

interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  password: string;
  mobileNo: string;
}

@Component({
  tag: 'my-login',
  styleUrl: 'my-login.css',
  shadow: true,
})
export class MyLogin {
  @Prop() name: string;

  @State() username: string = '';
  @State() password: string = '';
  Users: User[] = [];

  handleUsernameChange(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }

  handlePasswordChange(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  async componentWillLoad() {
    await this.fetchUsers();
  }

  async handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    const foundUser = this.Users.find(user => user.name === this.username && user.password === this.password);

    if (foundUser) {
      alert('Login successful!');
      localStorage.setItem('foundUser', foundUser.name);
      console.log('Logged in as:', foundUser.name);
      if (foundUser.name === 'admin') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/patient';
      }
    } else {
      alert('Invalid username or password.');
    }
  }

  async fetchUsers() {
    try {
      const response = await fetch('http://localhost:8080/User/AllUser');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      this.Users = data;
      console.log('Fetched users:', this.Users);
    } catch (error) {
      window.location.href = '/error';
      console.error('Error fetching users:', error);
    }
  }

  render() {
    return (
      <div class="my-login">
        <h2>{this.name} Login</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" placeholder="Username" value={this.username} onInput={event => this.handleUsernameChange(event)} autocomplete="username" />
          <input type="password" placeholder="Password" value={this.password} onInput={event => this.handlePasswordChange(event)} autocomplete="current-password" />
          <button type="submit">Login</button>
        </form>
        <p class="mt-3">Or login with:</p>
        <div class="create-account">
          <p>
            Don't have an account? <a href="/register">Create one</a>.
          </p>
        </div>
      </div>
    );
  }
}
