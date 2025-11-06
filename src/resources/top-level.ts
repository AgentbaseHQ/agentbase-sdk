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
   * Body param: A set of agent configurations that enables the agent to transfer
   * conversations to other specialized agents. When provided, the main agent will
   * have access to seamless handoffs between agents based on the conversation
   * context.
   */
  agents?: Array<RunAgentParams.Agent>;

  /**
   * Body param: Whether to run the agent asynchronously on the server. When set to
   * true, use callback parameter to receive events.
   */
  background?: boolean;

  /**
   * Body param: A callback endpoint configuration to send agent message events back
   * to. Use with background true.
   */
  callback?: RunAgentParams.Callback;

  /**
   * Body param: A set of datastores for the agent to utilize. Each object must
   * include a `id` and `name`.
   */
  datastores?: Array<RunAgentParams.Datastore>;

  /**
   * Body param: Configuration for an extra final output event that processes the
   * entire agent message thread and produces a structured output based on the
   * provided JSON schema.
   */
  final_output?: RunAgentParams.FinalOutput;

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
   * Body param: A set of custom actions based on datastore (database) queries.
   * Allows you to quickly define actions that the agent can use to query your
   * datastores.
   */
  queries?: Array<RunAgentParams.Query>;

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

  /**
   * Body param: A set of declarative workflows for the agent to execute. Each
   * workflow is a DAG (Directed Acyclic Graph) of steps that the agent interprets
   * and executes dynamically.
   */
  workflows?: Array<RunAgentParams.Workflow>;
}

export namespace RunAgentParams {
  export interface Agent {
    /**
     * Description of what this agent handles
     */
    description: string;

    /**
     * The name of the agent to transfer to
     */
    name: string;
  }

  /**
   * A callback endpoint configuration to send agent message events back to. Use with
   * background true.
   */
  export interface Callback {
    /**
     * The webhook URL to send events to.
     */
    url: string;

    /**
     * Optional headers to include in the callback request.
     */
    headers?: { [key: string]: string };
  }

  export interface Datastore {
    /**
     * The ID of the datastore.
     */
    id: string;

    /**
     * The name of the datastore.
     */
    name: string;
  }

  /**
   * Configuration for an extra final output event that processes the entire agent
   * message thread and produces a structured output based on the provided JSON
   * schema.
   */
  export interface FinalOutput {
    /**
     * Name for the final output.
     */
    name: string;

    /**
     * JSON schema defining the structure of the final output.
     */
    schema: unknown;

    /**
     * Whether to enforce strict schema validation.
     */
    strict?: boolean;
  }

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

  export interface Query {
    /**
     * Description of what the query does.
     */
    description: string;

    /**
     * Name of the query action.
     */
    name: string;

    /**
     * The SQL query to execute.
     */
    query: string;
  }

  export interface Workflow {
    /**
     * Unique identifier for the workflow.
     */
    id: string;

    /**
     * What the workflow accomplishes.
     */
    description: string;

    /**
     * Name of the workflow.
     */
    name: string;

    /**
     * Array of step objects.
     */
    steps: Array<Workflow.Step>;
  }

  export namespace Workflow {
    export interface Step {
      /**
       * Unique identifier for the step.
       */
      id: string;

      /**
       * Array of step IDs that must complete before this step runs.
       */
      depends_on: Array<string>;

      /**
       * What the step should accomplish.
       */
      description: string;

      /**
       * Name of the step.
       */
      name: string;

      /**
       * Whether the step can be skipped if it fails.
       */
      optional?: boolean;

      /**
       * JSON schema for expected output validation.
       */
      output_schema?: unknown;

      /**
       * Retry configuration for the step.
       */
      retry_policy?: Step.RetryPolicy;
    }

    export namespace Step {
      /**
       * Retry configuration for the step.
       */
      export interface RetryPolicy {
        backoff?: string;

        max_attempts?: number;
      }
    }
  }
}

export declare namespace TopLevel {
  export { type RunAgentResponse as RunAgentResponse, type RunAgentParams as RunAgentParams };
}
