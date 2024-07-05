// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as EbirdAPI from './ebird';

export class Ebird extends APIResource {
  /**
   * Get the taxonomy used by eBird. #### Notes Each entry in the taxonomy contains a
   * species code for example, barswa for Barn Swallow. You can download the taxonomy
   * for selected species using the _species_ query parameter with a comma separating
   * each code. Otherwise the full taxonomy is downloaded.
   */
  retrieve(query?: EbirdRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<string>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<string>;
  retrieve(
    query: EbirdRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/ref/taxonomy/ebird', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type EbirdRetrieveResponse = string;

export interface EbirdRetrieveParams {
  /**
   * Only fetch records from these taxonomic categories.
   */
  cat?: string;

  /**
   * Fetch the records in CSV or JSON format.
   */
  fmt?: 'csv' | 'json';

  /**
   * Use this language for common names.
   */
  locale?: string;

  /**
   * Only fetch records for these species.
   */
  species?: string;

  /**
   * Fetch a specific version of the taxonomy.
   */
  version?: string;
}

export namespace Ebird {
  export import EbirdRetrieveResponse = EbirdAPI.EbirdRetrieveResponse;
  export import EbirdRetrieveParams = EbirdAPI.EbirdRetrieveParams;
}
