// Helper function to create client objects
const debug = require("debug")("mobile-center-cli:util:apis:create-client");
import { inspect } from "util";
import { IncomingMessage } from "http";

import MobileCenterClient = require("./generated/MobileCenterClient");
import { MobileCenterClientCredentials } from "./mobile-center-client-credentials";
import { userAgentFilter } from "./user-agent-filter";
const BasicAuthenticationCredentials = require("ms-rest").BasicAuthenticationCredentials;
import { ServiceCallback, ServiceError, WebResource } from "ms-rest";

const createLogger = require('ms-rest').LogFilter.create;

import { isDebug } from "../interaction";
import { Profile } from "../profile";

export function createMobileCenterClient(userName: string, password: string, endpoint: string): MobileCenterClient;
export function createMobileCenterClient(token: Promise<string>, endpoint:string): MobileCenterClient;
export function createMobileCenterClient(token: string, endpoint: string): MobileCenterClient;
export function createMobileCenterClient(user: Profile): MobileCenterClient;
export function createMobileCenterClient(...args: any[]): MobileCenterClient {
  if (args.length === 3) {
    return createBasicAuthClient(args[0], args[1], args[2]);
  }
  else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      return createMobileCenterAuthClientFromToken(Promise.resolve(args[0]), args[1]);
    }
    return createMobileCenterAuthClientFromToken(args[0], args[1]);
  }
  return createMobileCenterAuthClient(args[0]);
}

function createClientOptions(): any {
  debug(`Creating client options, isDebug = ${isDebug()}`);
  const filters = [ userAgentFilter ];
  return {
    filters: isDebug() ? [createLogger()].concat(filters) : filters
  };
}


function createBasicAuthClient(userName: string, password: string, endpoint: string): MobileCenterClient {
  debug(`Creating client from user name and password for endpoint ${endpoint}`);
  return new MobileCenterClient(new BasicAuthenticationCredentials(userName, password), endpoint, createClientOptions());
}

function createMobileCenterAuthClientFromToken(token: Promise<string>, endpoint: string): MobileCenterClient {
  debug(`Creating client from token for endpoint ${endpoint}`);
  return new MobileCenterClient(new MobileCenterClientCredentials(token), endpoint, createClientOptions());
}

function createMobileCenterAuthClient(user: Profile): MobileCenterClient {
  if (!user) {
    debug(`No current user, not creating client`);
    return null;
  }
  debug(`Creating client from user for user ${inspect(user)}`);
  return new MobileCenterClient(new MobileCenterClientCredentials(user.accessToken), user.endpoint, createClientOptions());
}

// Helper function to wrap client calls into promises while maintaining some type safety.
export function clientCall<T>(action: {(cb: ServiceCallback<any>): void}): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    action((err: Error, result: T) => {
      if (err) { reject(err); }
      else { resolve(result); }
    });
  });
}

//
// Response type for clientRequest<T> - returns both parsed result and the HTTP response.
//
export interface ClientResponse<T> {
  result: T;
  response: IncomingMessage;
}

// Helper function to wrap client calls into pormises and returning both HTTP response and parsed result
export function clientRequest<T>(action: {(cb: ServiceCallback<any>): void}): Promise<ClientResponse<T>> {
  return new Promise<ClientResponse<T>>((resolve, reject) => {
    action((err: Error | ServiceError, result: T, request: WebResource, response: IncomingMessage) => {
      if (err) { reject(err); }
      else {
        resolve({ result, response});
      }
    });
  });
}