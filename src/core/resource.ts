// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Agentbase } from '../client';

export abstract class APIResource {
  protected _client: Agentbase;

  constructor(client: Agentbase) {
    this._client = client;
  }
}
