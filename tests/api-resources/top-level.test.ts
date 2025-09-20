// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Agentbase from 'agentbase-sdk';

const client = new Agentbase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  // Prism doesn't support text/event-stream responses
  test.skip('runAgent: only required params', async () => {
    const responsePromise = client.runAgent({ message: 'message' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support text/event-stream responses
  test.skip('runAgent: required and optional params', async () => {
    const response = await client.runAgent({
      message: 'message',
      session: 'session',
      mcpServers: [{ serverName: 'serverName', serverUrl: 'https://example.com' }],
      mode: 'flash',
      rules: ['string'],
      streaming: true,
      system: 'system',
    });
  });
});
