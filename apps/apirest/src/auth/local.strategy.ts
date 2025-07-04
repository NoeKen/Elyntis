// local.strategy.ts
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // On indique que l'on utilisera "email" au lieu de "username"
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}

// This strategy uses the Passport library to authenticate users using a local strategy.
// It overrides the default username field to use 'email' instead of 'username'.
// The `validate` method checks the user's credentials and throws an `UnauthorizedException` if they are invalid.
// If the credentials are valid, it returns the user object, which can be used in the application for further processing, such as generating a JWT token or fetching user details.
// This strategy is typically used in conjunction with a login endpoint where users submit their email and password.
// It integrates with the AuthService to validate the user credentials against the database or any other user store.
// The `AuthService` should implement the `validateUser` method to handle the actual validation logic, such as checking the password hash against the stored hash in the database.
// This strategy is part of the authentication module in a NestJS application and can be used to secure routes that require user authentication.
// The `LocalStrategy` is registered in the `AuthModule` to make it available for use in the application.
// It is typically used in conjunction with a login controller that handles user login requests and returns appropriate responses based on the authentication outcome.
// The `LocalStrategy` can be extended or modified to include additional features such as account locking, password reset, or multi-factor authentication.
// It is a fundamental part of the authentication flow in a NestJS application, providing a simple
// and effective way to authenticate users using their email and password.
// The strategy can be tested using integration tests to ensure that it correctly validates user credentials and handles
// various scenarios such as invalid credentials, user not found, or account locked.
