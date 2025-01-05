import { Controller, Get } from '@nestjs/common';

@Controller(['health', "/"])
export class HealthController {
  @Get()
  getHello(): string {
    return 'payment UP!';
  }
}
