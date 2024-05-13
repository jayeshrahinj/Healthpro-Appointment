import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-login',
  styleUrl: 'my-login.css',
  shadow: true,
})
export class MyLogin {
  @State() username: string = '';
  @State() password: string = '';

  handleUsernameChange(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }

  handlePasswordChange(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add your login logic here
  }

  render() {
    return (
      <div class="my-login">
        <h2>Login</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            placeholder="Username"
            value={this.username}
            onInput={(event) => this.handleUsernameChange(event)}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.password}
            onInput={(event) => this.handlePasswordChange(event)}
          />
          <button type="submit">Login</button>
        </form>
        <p class="mt-3">Or login with:</p>
                <div class="social-logins">
                <a href="#" class="btn btn-danger btn-block"><img src="../../assests/google.png" alt="Google Logo" /></a>
                <a href="#" class="btn btn-primary btn-block"><img src="../../assests/facebook.png" alt="Facebook Logo" /> </a>

                </div>
        <div class="create-account">
          <p>Don't have an account? <a href="/register">Create one</a>.</p>
        </div>
      </div>
    );
  }
}
