// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetMessages extends APIResource {
  /**
   * Retrieve the entire message history for a given agent
   * session【422460015970428†L110-L141】.
   * Messages include user messages, the agent’s internal thoughts, agent responses,
   * and tool usage records【422460015970428†L145-L169】.
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
     * The textual content of the message.【422460015970428†L117-L139】
     */
    content: string;

    /**
     * Type of the message (e.g., user_message, agent_thinking, agent_response,
     * agent_tool_use)【422460015970428†L145-L169】.
     */
    type: string;
  }
}

export interface GetMessageRetrieveParams {
  /**
   * The session ID to retrieve messages from【422460015970428†L99-L106】.
   */
  session: string;
}

export declare namespace GetMessages {
  export {
    type GetMessageRetrieveResponse as GetMessageRetrieveResponse,
    type GetMessageRetrieveParams as GetMessageRetrieveParams,
  };
}
