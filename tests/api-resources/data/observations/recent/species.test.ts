// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Phoebe from 'phoebe-ebird';
import { Response } from 'node-fetch';

const client = new Phoebe({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource species', () => {
  test('retrieve', async () => {
    const responsePromise = client.data.observations.recent.species.retrieve('regionCode', 'speciesCode');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.observations.recent.species.retrieve('regionCode', 'speciesCode', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Phoebe.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.observations.recent.species.retrieve(
        'regionCode',
        'speciesCode',
        {
          back: 1,
          hotspot: true,
          includeProvisional: true,
          maxResults: 1,
          r: ['string'],
          sppLocale: 'sppLocale',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Phoebe.NotFoundError);
  });
});
