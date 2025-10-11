# Agentbase

Types:

- <code><a href="./src/resources/top-level.ts">RunAgentResponse</a></code>

Methods:

- <code title="post /">client.<a href="./src/index.ts">runAgent</a>({ ...params }) -> string</code>

# Agent

Types:

- <code><a href="./src/resources/agent.ts">AgentRunResponse</a></code>

Methods:

- <code title="post /">client.agent.<a href="./src/resources/agent.ts">run</a>({ ...params }) -> string</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageClearResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageGetResponse</a></code>

Methods:

- <code title="post /clear-messages">client.messages.<a href="./src/resources/messages.ts">clear</a>({ ...params }) -> MessageClearResponse</code>
- <code title="post /get-messages">client.messages.<a href="./src/resources/messages.ts">get</a>({ ...params }) -> MessageGetResponse</code>
