import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { IDataBaseAdapter } from './adapter';
import { ConnectionType } from './types';

@Injectable()
export class PostgresService implements Partial<IDataBaseAdapter> {
  getConnection<TOpt = TypeOrmModuleOptions & { url: string }>({
    URI,
  }: ConnectionType): TOpt {
    return {
      type: 'postgres',
      url: URI,
      database: 'product-db',
    } as TOpt;
  }
}
