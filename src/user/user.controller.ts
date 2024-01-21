// src/user/user.controller.ts
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }
  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.userService.findOne(id);
  }
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.userService.remove(id);
  }
}