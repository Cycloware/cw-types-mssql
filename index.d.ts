/**
 * Modified type definitions for `mssql`
 * that support `bluebird`
 */

// Type definitions for mssql 3.3
// Project: https://www.npmjs.com/package/mssql
// Definitions by: COLSA Corporation <http://www.colsa.com/>, Ben Farr <https://github.com/jaminfarr>, Vitor Buzinaro <https://github.com/buzinas>, Matt Richardson <https://github.com/mrrichar/>, Jørgen Elgaard Larsen <https://github.com/elhaard/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="bluebird" />

import events = require('events');
import * as Promise from 'bluebird';

export interface ISqlType {
  type: ISqlTypeFactory;
}
export interface ISqlTypeWithNoParams extends ISqlType { type: ISqlTypeFactoryWithNoParams }
export interface ISqlTypeWithLength extends ISqlType { type: ISqlTypeFactoryWithLength; length: number }
export interface ISqlTypeWithScale extends ISqlType { type: ISqlTypeFactoryWithScale; scale: number }
export interface ISqlTypeWithPrecisionScale extends ISqlType { type: ISqlTypeFactoryWithPrecisionScale; precision: number, scale: number }
export interface ISqlTypeWithTvpType extends ISqlType { type: ISqlTypeFactoryWithTvpType; tvpType: any }

export interface ISqlTypeFactory {
}
export interface ISqlTypeFactoryWithNoParams extends ISqlTypeFactory { (): ISqlTypeWithNoParams; }
export interface ISqlTypeFactoryWithLength extends ISqlTypeFactory { (length?: number): ISqlTypeWithLength }
export interface ISqlTypeFactoryWithScale extends ISqlTypeFactory { (scale?: number): ISqlTypeWithScale }
export interface ISqlTypeFactoryWithPrecisionScale extends ISqlTypeFactory { (precision?: number, scale?: number): ISqlTypeWithPrecisionScale; }
export interface ISqlTypeFactoryWithTvpType extends ISqlTypeFactory { (tvpType: any): ISqlTypeWithTvpType }


export var VarChar: ISqlTypeFactoryWithLength;
export var NVarChar: ISqlTypeFactoryWithLength;
export var Text: ISqlTypeFactoryWithNoParams;
export var Int: ISqlTypeFactoryWithNoParams;
export var BigInt: ISqlTypeFactoryWithNoParams;
export var TinyInt: ISqlTypeFactoryWithNoParams;
export var SmallInt: ISqlTypeFactoryWithNoParams;
export var Bit: ISqlTypeFactoryWithNoParams;
export var Float: ISqlTypeFactoryWithNoParams;
export var Numeric: ISqlTypeFactoryWithPrecisionScale;
export var Decimal: ISqlTypeFactoryWithPrecisionScale;
export var Real: ISqlTypeFactoryWithNoParams;
export var Date: ISqlTypeFactoryWithNoParams;
export var DateTime: ISqlTypeFactoryWithNoParams;
export var DateTime2: ISqlTypeFactoryWithScale;
export var DateTimeOffset: ISqlTypeFactoryWithScale;
export var SmallDateTime: ISqlTypeFactoryWithNoParams;
export var Time: ISqlTypeFactoryWithScale;
export var UniqueIdentifier: ISqlTypeFactoryWithNoParams;
export var SmallMoney: ISqlTypeFactoryWithNoParams;
export var Money: ISqlTypeFactoryWithNoParams;
export var Binary: ISqlTypeFactoryWithNoParams;
export var VarBinary: ISqlTypeFactoryWithLength;
export var Image: ISqlTypeFactoryWithNoParams;
export var Xml: ISqlTypeFactoryWithNoParams;
export var Char: ISqlTypeFactoryWithLength;
export var NChar: ISqlTypeFactoryWithLength;
export var NText: ISqlTypeFactoryWithNoParams;
export var TVP: ISqlTypeFactoryWithTvpType;
export var UDT: ISqlTypeFactoryWithNoParams;
export var Geography: ISqlTypeFactoryWithNoParams;
export var Geometry: ISqlTypeFactoryWithNoParams;

export var TYPES: {
  VarChar: ISqlTypeFactoryWithLength;
  NVarChar: ISqlTypeFactoryWithLength;
  Text: ISqlTypeFactoryWithNoParams;
  Int: ISqlTypeFactoryWithNoParams;
  BigInt: ISqlTypeFactoryWithNoParams;
  TinyInt: ISqlTypeFactoryWithNoParams;
  SmallInt: ISqlTypeFactoryWithNoParams;
  Bit: ISqlTypeFactoryWithNoParams;
  Float: ISqlTypeFactoryWithNoParams;
  Numeric: ISqlTypeFactoryWithPrecisionScale;
  Decimal: ISqlTypeFactoryWithPrecisionScale;
  Real: ISqlTypeFactoryWithNoParams;
  Date: ISqlTypeFactoryWithNoParams;
  DateTime: ISqlTypeFactoryWithNoParams;
  DateTime2: ISqlTypeFactoryWithScale;
  DateTimeOffset: ISqlTypeFactoryWithScale;
  SmallDateTime: ISqlTypeFactoryWithNoParams;
  Time: ISqlTypeFactoryWithScale;
  UniqueIdentifier: ISqlTypeFactoryWithNoParams;
  SmallMoney: ISqlTypeFactoryWithNoParams;
  Money: ISqlTypeFactoryWithNoParams;
  Binary: ISqlTypeFactoryWithNoParams;
  VarBinary: ISqlTypeFactoryWithLength;
  Image: ISqlTypeFactoryWithNoParams;
  Xml: ISqlTypeFactoryWithNoParams;
  Char: ISqlTypeFactoryWithLength;
  NChar: ISqlTypeFactoryWithLength;
  NText: ISqlTypeFactoryWithNoParams;
  TVP: ISqlTypeFactoryWithTvpType;
  UDT: ISqlTypeFactoryWithNoParams;
  Geography: ISqlTypeFactoryWithNoParams;
  Geometry: ISqlTypeFactoryWithNoParams;
};

export var MAX: number;
export var fix: boolean;

// still need this to change promise library
// export var Promise: any;


interface IMap extends Array<{ js: any, sql: any }> {
  register(jstype: any, sql: any): void;
}

export var map: IMap;

export var DRIVERS: string[];
export interface IColumnMetadata {
  [name: string]: {
    index: number;
    name: string;
    length: number;
    type: ISqlType;
    udt?: any;
  }
}
export interface IRecordSet<T> extends Array<T> {
  columns: IColumnMetadata;
}

export interface IResult<T> {
  recordsets: IRecordSet<T>[];
}

type IIsolationLevel = number;

export var ISOLATION_LEVEL: {
  READ_UNCOMMITTED: IIsolationLevel
  READ_COMMITTED: IIsolationLevel
  REPEATABLE_READ: IIsolationLevel
  SERIALIZABLE: IIsolationLevel
  SNAPSHOT: IIsolationLevel
}

export interface IOptions {
  encrypt?: boolean;
  instanceName?: string;
  useUTC?: boolean;
  tdsVersion?: string;
  appName?: string;
  abortTransactionOnError?: boolean;
  trustedConnection?: boolean;
}


export interface IPool {
  min: number;
  max: number;
  idleTimeoutMillis: number;
}

export var pool: IPool;

export interface config {
  driver?: string;
  user?: string;
  password?: string;
  server: string;
  port?: number;
  domain?: string;
  database: string;
  connectionTimeout?: number;
  requestTimeout?: number;
  stream?: boolean;
  options?: IOptions;
  pool?: IPool;
}

export class Connection extends events.EventEmitter {
  public connected: boolean;
  public connecting: boolean;
  public driver: string;
  public constructor(config: config, callback?: (err?: any) => void);
  public connect(): Promise<Connection>;
  public connect(callback: (err: any) => void): void;
  public close(): Promise<void>;
  public close(callback: (err: any) => void): void;
}

export class ConnectionError implements Error {
  constructor(message: string, code?: any)
  public name: string;
  public message: string;
  public code: string;
}

declare class columns {
  public add(name: string, type: any, options: any): void;
}

declare class rows {
  public add(...row: any[]): void;
}

export class Table {
  public create: boolean;
  public columns: columns;
  public rows: rows;
  public constructor(tableName: string);
}

interface IRequestParameters {
  [name: string]: {
    name: string;
    type: any;
    io: number;
    value: any;
    length: number;
    scale: number;
    precision: number;
    tvpType: any;
  }
}

export class Request extends events.EventEmitter {
  public connection: Connection;
  public transaction: Transaction;
  public pstatement: PreparedStatement;
  public parameters: IRequestParameters;
  public verbose: boolean;
  public multiple: boolean;
  public canceled: boolean;
  public stream: any;
  public constructor(connection?: Connection);
  public constructor(transaction: Transaction);
  public constructor(preparedStatement: PreparedStatement);
  public execute(procedure: string): Promise<IRecordSet<any>>;
  public execute<Entity>(procedure: string): Promise<IRecordSet<Entity>>;
  public execute<Entity>(procedure: string, callback: (err?: any, recordsets?: IRecordSet<Entity>, returnValue?: any, rowsAffected?: number) => void): void;
  public input(name: string, value: any): Request;
  public input(name: string, type: any, value: any): Request;
  public output(name: string, type: any, value?: any): Request;
  public pipe(stream: NodeJS.WritableStream): NodeJS.WritableStream;
  public query(command: string): Promise<IRecordSet<any>>;
  public query<Entity>(command: string): Promise<IRecordSet<Entity>>;
  public query<Entity>(command: string, callback: (err?: Error, recordset?: IRecordSet<Entity>, rowsAffected?: number) => void): void;
  public query<Entity>(command: string, callback: (err?: Error, recordset?: IRecordSet<Entity>) => void): void;
  public batch(batch: string): Promise<IRecordSet<any>>;
  public batch<Entity>(batch: string): Promise<IRecordSet<Entity>>;
  public batch(batch: string, callback: (err?: Error, recordset?: IRecordSet<any>) => void): void;
  public batch<Entity>(batch: string, callback: (err?: any, recordset?: IRecordSet<Entity>) => void): void;
  public bulk(table: Table): Promise<number>;
  public bulk(table: Table, callback: (err: Error, rowCount: any) => void): void;
  public cancel(): void;
}

export class RequestError implements Error {
  constructor(message: string, code?: any)
  public name: string;
  public message: string;
  public code: string;
}

export class Transaction extends events.EventEmitter {
  public connection: Connection;
  public isolationLevel: IIsolationLevel;
  public constructor(connection?: Connection);
  public begin(isolationLevel?: IIsolationLevel): Promise<void>;
  public begin(isolationLevel?: IIsolationLevel, callback?: (err?: any) => void): void;
  public commit(): Promise<void>;
  public commit(callback: (err?: any) => void): void;
  public rollback(): Promise<void>;
  public rollback(callback: (err?: any) => void): void;
}

export class TransactionError implements Error {
  constructor(message: string, code?: any)
  public name: string;
  public message: string;
  public code: string;
}

export class PreparedStatement extends events.EventEmitter {
  public connection: Connection;
  public transaction: Transaction;
  public prepared: boolean;
  public statement: string;
  public parameters: IRequestParameters;
  public multiple: boolean;
  public stream: any;
  public constructor(connection?: Connection);
  public input(name: string, type: ISqlType): PreparedStatement;
  public output(name: string, type: ISqlType): PreparedStatement;
  public prepare(statement?: string): Promise<void>;
  public prepare(statement?: string, callback?: (err?: Error) => void): PreparedStatement;
  public execute(values: Object): Promise<void>;
  public execute(values: Object, callback: (err?: Error) => void): Request;
  public unprepare(): Promise<void>;
  public unprepare(callback: (err?: Error) => void): PreparedStatement;
}

export class PreparedStatementError implements Error {
  constructor(message: string, code?: any)
  public name: string;
  public message: string;
  public code: string;
}