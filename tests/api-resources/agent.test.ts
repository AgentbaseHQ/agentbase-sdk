// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Agentbase from 'agentbase-sdk';

const client = new Agentbase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agent', () => {
  // Prism doesn't support text/event-stream responses
  test.skip('run: only required params', async () => {
    const responsePromise = client.agent.run({ message: 'message' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support text/event-stream responses
  test.skip('run: required and optional params', async () => {
    const response = await client.agent.run({
      message: 'message',
      session: 'session',
      background: true,
      callback: { url: 'https://example.com', headers: { foo: 'string' } },
      datastores: [{ id: 'id', name: 'name' }],
      final_output: { name: 'name', schema: {}, strict: true },
      mcp_servers: [{ serverName: 'serverName', serverUrl: 'https://example.com' }],
      mode: 'flash',
      queries: [{ description: 'description', name: 'name', query: 'query' }],
      rules: ['string'],
      streaming_tokens: true,
      system: 'system',
      workflows: [
        {
          id: 'id',
          description: 'description',
          name: 'name',
          steps: [
            {
              id: 'id',
              depends_on: ['string'],
              description: 'description',
              name: 'name',
              optional: true,
              output_schema: {},
              retry_policy: { backoff: 'backoff', max_attempts: 0 },
            },
          ],
        },
      ],
    });
  });
});
