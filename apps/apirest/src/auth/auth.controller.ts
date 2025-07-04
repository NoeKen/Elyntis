import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-auth.dto';
import { LocalAuthGuard } from './LocalAuthGuard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Inscription
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.register(createUserDto.email, createUserDto.password);
    if (!user) {
      return { message: 'User registration failed' };
    }
    console.log('=========> User registered:', user.email);
    // On peut retourner l'utilisateur ou un message de succès
    return { message: 'User registered', user };
  }

  // Connexion
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    // req.user est ajouté par Passport après validation
    return { message: 'Login successful', user: req.user };
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
