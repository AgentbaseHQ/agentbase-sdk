// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export type RunAgentResponse = string;

export interface RunAgentParams {
  /**
   * Body param: The task or message to run the agent with.
   */
  message: string;

  /**
   * Query param: The session ID to continue the agent session conversation. If not
   * provided, a new session will be created.
   */
  session?: string;

  /**
   * Body param: A list of MCP server configurations. Each object must include a
   * `serverName` and `serverUrl`.
   */
  mcp_servers?: Array<RunAgentParams.McpServer>;

  /**
   * Body param: The agent mode. Allowed values are `flash`, `fast` or `max`.
   * Defaults to `fast` if not supplied.
   */
  mode?: 'flash' | 'fast' | 'max';

  /**
   * Body param: A list of constraints that the agent must follow.
   */
  rules?: Array<string>;

  /**
   * Body param: Whether to stream the agent messages token by token.
   */
  streaming_tokens?: boolean;

  /**
   * Body param: A system prompt to provide system information to the agent.
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
