import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { BackupService } from './backup.service';

@Injectable()
export class BackupCron {
  constructor(private readonly backupService: BackupService) {}

  @Cron('0 0 12 * * *') // runs every day at 12:00 PM
  // @Cron('0 * * * * *') // runs every minuite for testing
  async createBackup() {
    console.log('Creating backup');
    // return;
    await this.backupService.createBackup();
  }
}
