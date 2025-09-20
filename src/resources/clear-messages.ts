// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ClearMessages extends APIResource {
  /**
   * Clear all messages from a given agent session.
   */
  clear(params: ClearMessageClearParams, options?: RequestOptions): APIPromise<ClearMessageClearResponse> {
    const { session } = params;
    return this._client.post('/clear-messages', { query: { session }, ...options });
  }
}

export interface ClearMessageClearResponse {
  /**
   * Human‑readable status message.
   */
  message?: string;

  /**
   * Indicates whether messages were successfully cleared.
   */
  success?: boolean;
}

export interface ClearMessageClearParams {
  /**
   * The session ID to clear messages from.
   */
  session: string;
}

export declare namespace ClearMessages {
  export {
    type ClearMessageClearResponse as ClearMessageClearResponse,
    type ClearMessageClearParams as ClearMessageClearParams,
  };
}
