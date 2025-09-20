// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetMessages extends APIResource {
  /**
   * Retrieve the entire message history for a given agent session.
   * Messages include user messages, the agent’s internal thoughts, agent responses,
   * and tool usage records.
   */
  retrieve(
    params: GetMessageRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GetMessageRetrieveResponse> {
    const { session } = params;
    return this._client.post('/get-messages', { query: { session }, ...options });
  }
}

export type GetMessageRetrieveResponse = Array<GetMessageRetrieveResponse.GetMessageRetrieveResponseItem>;

export namespace GetMessageRetrieveResponse {
  export interface GetMessageRetrieveResponseItem {
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

export interface GetMessageRetrieveParams {
  /**
   * The session ID to retrieve messages from.
   */
  session: string;
}

export declare namespace GetMessages {
  export {
    type GetMessageRetrieveResponse as GetMessageRetrieveResponse,
    type GetMessageRetrieveParams as GetMessageRetrieveParams,
  };
}
