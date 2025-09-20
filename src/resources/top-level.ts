// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export type RunAgentResponse = string;

export interface RunAgentParams {
  /**
   * Body param: The task or message to run the agent
   * with【360266723038398†L112-L118】.
   */
  message: string;

  /**
   * Query param: The session ID to continue the agent session conversation. If not
   * provided, a new session will be created【360266723038398†L99-L106】.
   */
  session?: string;

  /**
   * Body param: A list of MCP server configurations. Each object must include a
   * `serverName` and `serverUrl`【360266723038398†L137-L145】.
   */
  mcpServers?: Array<RunAgentParams.McpServer>;

  /**
   * Body param: The agent mode. Allowed values are `flash`, `fast` or
   * `max`【360266723038398†L120-L128】. Defaults to `fast` if not
   * supplied【360266723038398†L120-L128】.
   */
  mode?: 'flash' | 'fast' | 'max';

  /**
   * Body param: A list of constraints that the agent must
   * follow【360266723038398†L157-L163】.
   */
  rules?: Array<string>;

  /**
   * Body param: Whether to stream the agent messages token by
   * token【360266723038398†L164-L168】.
   */
  streaming?: boolean;

  /**
   * Body param: A system prompt to provide system information to the
   * agent【360266723038398†L130-L135】.
   */
  system?: string;
}

export namespace RunAgentParams {
  export interface McpServer {
    /**
     * Name of the MCP server.
     */
    serverName: string;

    /**
     * URL of the MCP server.
     */
    serverUrl: string;
  }
}

export declare namespace TopLevel {
  export { type RunAgentResponse as RunAgentResponse, type RunAgentParams as RunAgentParams };
}
