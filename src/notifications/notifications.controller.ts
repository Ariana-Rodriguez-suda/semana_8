import { Controller, Post, Body, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationService: NotificationsService) {}

    @Post()
    async sendNotification(@Body() body: { message: string; type:string }) {
        return
    this.notificationService.sendNotification(body.message, body.type);
    }

    @Get()
    async getAll() {
        return this.notificationService.findAll();
    }
}
