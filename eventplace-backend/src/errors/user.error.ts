import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistsException extends HttpException {
  constructor() {
    super(
      {
        message: 'Usuário já existe',
        error: 'USER_ALREADY_EXISTS',
      },
      HttpStatus.CONFLICT,
    );
  }
}
