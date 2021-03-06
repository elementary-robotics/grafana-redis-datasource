import { DataSourceJsonData } from '@grafana/data';

/**
 * Options configured for each DataSource instance
 */
export interface RedisDataSourceOptions extends DataSourceJsonData {
  /**
   * Pool Size
   *
   * @type {number}
   */
  poolSize: number;

  /**
   * Timeout
   *
   * @type {number}
   */
  timeout: number;

  /**
   * Pool Ping Interval
   *
   * @type {number}
   */
  pingInterval: number;

  /**
   * Pool Pipeline Window
   *
   * @type {number}
   */
  pipelineWindow: number;

  /**
   * TLS Authentication
   *
   * @type {boolean}
   */
  tlsAuth: boolean;

  /**
   * TLS Skip Verify
   *
   * @type {boolean}
   */
  tlsSkipVerify: boolean;

  /**
   * Client Type
   *
   * @type {string}
   */
  client: ClientTypeValue;
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface RedisSecureJsonData {
  /**
   * Database password
   *
   * @type {string}
   */
  password?: string;

  /**
   * TLS Client Certificate
   *
   * @type {string}
   */
  tlsClientCert?: string;

  /**
   * TLS Client Key
   *
   * @type {string}
   */
  tlsClientKey?: string;

  /**
   * TLS Authority Certificate
   *
   * @type {string}
   */
  tlsCACert?: string;
}

/**
 * Client Type Values
 */
export enum ClientTypeValue {
  CLUSTER = 'cluster',
  SENTINEL = 'sentinel',
  STANDALONE = 'standalone',
}

/**
 * Client Types
 */
export const ClientType = [
  { label: 'Redis Cluster', value: ClientTypeValue.CLUSTER },
  //  { label: 'Sentinel', value: ClientTypeValue.SENTINEL },
  { label: 'Standalone', value: ClientTypeValue.STANDALONE },
];
