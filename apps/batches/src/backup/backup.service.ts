import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import * as childProcess from 'child_process';
import fs from 'fs';
// import psql from 'psql';

@Injectable()
export class BackupService {
  constructor(
    private readonly configService: ConfigService,
    private readonly dataSource: DataSource,
  ) {}

  async createBackup() {
    try {
      const username = this.configService.get('POSTGRES_USER');
      const database = this.configService.get('POSTGRES_DATABASE');
      const password = this.configService.get('POSTGRES_PASSWORD');
      const host = this.configService.get('POSTGRES_HOST');
      const port = this.configService.get('POSTGRES_PORT');

      // const command = `pg_dump -U ${username} -h ${host} -p ${port} -d ${database} > backup.sql`;
      const command = `docker exec  card_tracker-postgres-1 pg_dump -U ${username} -h ${host} -p ${port} -d ${database} > backup.sql`;
      const options = {
        env: {
          PGPASSWORD: password,
        },
      };

      childProcess.exec(command, options, (error, stdout, stderr) => {
        if (error) {
          throw error;
        }
        console.log('Executing backup');
        if (stdout) {
          console.log(`pg_dump stdout: ${stdout}`);
        }
        if (stderr) {
          console.error(`pg_dump stderr: ${stderr}`);
        }
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // ...
  async restoreBackup(backupFile: string) {
    try {
      const username = this.configService.get('POSTGRES_USER');
      const database = this.configService.get('POSTGRES_DATABASE');
      const host = this.configService.get('POSTGRES_HOST');
      const port = this.configService.get('POSTGRES_PORT');

      const command = `psql -U ${username} -d ${database} -h ${host} -p ${port} < backup.sql`;
      const ps = childProcess.exec(
        command,
        (error: any, stdout: any, stderr: any) => {
          if (error) {
            throw error;
          }
          console.log('Executing backup');
          console.log(`pg_dump stdout: ${stdout}`);
          console.error(`pg_dump stderr: ${stderr}`);
        },
      );

      ps.stdout.on('data', (data) => {
        console.log(`psql stdout: ${data}`);
      });

      ps.stderr.on('data', (data) => {
        console.error(`psql stderr: ${data}`);
      });

      ps.on('close', (code) => {
        if (code === 0) {
          console.log(`Backup restored from: ${backupFile}`);
        } else {
          console.error(`Error restoring backup: ${code}`);
        }
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
