import { Controller, Post, Body } from '@nestjs/common';
import { BackupService } from './backup.service';
import fs from 'fs';

@Controller('backup')
export class BackupController {
  constructor(private readonly backupService: BackupService) {}

  @Post('restore')
  async restoreBackup(@Body('backupFile') backupFile: string) {
    if (!backupFile) throw new Error('provide backup file path');
    // const content = fs.readFileSync('backup.sql', 'utf8');
    // console.log(content);
    const result = await this.backupService.restoreBackup(backupFile);
    // const result = await this.backupService.restoreBackup(
    //   '../../../../backup.sql',
    // );
    return { message: 'Backup restored successfully' };
  }
  @Post('create')
  async createBackup() {
    try {
      await this.backupService.createBackup();
      return { message: 'Backup created successfully' };
    } catch (e: any) {
      console.log(e.message);
    }
  }
}
