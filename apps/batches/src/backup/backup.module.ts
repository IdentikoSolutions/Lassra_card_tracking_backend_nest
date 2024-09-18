import { Module } from '@nestjs/common';
import { BackupService } from './backup.service';
import { BackupController } from './backup.controller';
import { BackupCron } from './backup.cron';

@Module({
  controllers: [BackupController],
  providers: [BackupService, BackupCron],
})
export class BackupModule {}
