// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Messages extends APIResource {
  /**
   * Clear all messages from a given agent session.
   */
  clear(params: MessageClearParams, options?: RequestOptions): APIPromise<MessageClearResponse> {
    const { session } = params;
    return this._client.post('/clear-messages', { query: { session }, ...options });
  }

  /**
   * Retrieve the entire message history for a given agent session.
   * Messages include user messages, the agent’s internal thoughts, agent responses,
   * and tool usage records.
   */
  get(params: MessageGetParams, options?: RequestOptions): APIPromise<MessageGetResponse> {
    const { session } = params;
    return this._client.post('/get-messages', { query: { session }, ...options });
  }
}

export interface MessageClearResponse {
  /**
   * Human‑readable status message.
   */
  message?: string;

  /**
   * Indicates whether messages were successfully cleared.
   */
  success?: boolean;
}

export type MessageGetResponse = Array<MessageGetResponse.MessageGetResponseItem>;

export namespace MessageGetResponse {
  export interface MessageGetResponseItem {
    /**
     * The textual content of the message.
     */
    content: string;

    /**
     * Type of the message (e.g., user_message, agent_thinking, agent_response,
     * agent_tool_use).
     */
    type: string;
  }
}

export interface MessageClearParams {
  /**
   * The session ID to clear messages from.
   */
  session: string;
}

export interface MessageGetParams {
  /**
   * The session ID to retrieve messages from.
   */
  session: string;
}

export declare namespace Messages {
  export {
    type MessageClearResponse as MessageClearResponse,
    type MessageGetResponse as MessageGetResponse,
    type MessageClearParams as MessageClearParams,
    type MessageGetParams as MessageGetParams,
  };
}
