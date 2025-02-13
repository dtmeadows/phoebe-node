// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Top100 extends APIResource {
  /**
   * Get the top 100 contributors on a given date for a country or region.
   *
   * #### Notes
   *
   * The results are updated every 15 minutes.
   *
   * When ordering by the number of completed checklists, the number of species seen
   * will always be zero. Similarly when ordering by the number of species seen the
   * number of completed checklists will always be zero. <b>Selected Response Field
   * Notes</b>
   *
   * profileHandle - if a user has enabled their profile, this is the handle to reach
   * it via ebird.org/ebird/profile/{profileHandle}
   *
   * numSpecies - always zero when checklistSort parameter is true. Invalid
   * observations ARE included in this total numCompleteChecklists - always zero when
   * checklistSort parameter is false
   */
  retrieve(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    query?: Top100RetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Top100RetrieveResponse>;
  retrieve(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Top100RetrieveResponse>;
  retrieve(
    regionCode: string,
    y: number,
    m: number,
    d: number,
    query: Top100RetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Top100RetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(regionCode, y, m, d, {}, query);
    }
    return this._client.get(`/product/top100/${regionCode}/${y}/${m}/${d}`, { query, ...options });
  }
}

export type Top100RetrieveResponse = Array<Top100RetrieveResponse.Top100RetrieveResponseItem>;

export namespace Top100RetrieveResponse {
  export interface Top100RetrieveResponseItem {
    numCompleteChecklists?: number;

    numSpecies?: number;

    profileHandle?: string;

    rowNum?: number;

    userDisplayName?: string;

    userId?: string;
  }
}

export interface Top100RetrieveParams {
  /**
   * Only fetch this number of contributors.
   */
  maxResults?: number;

  /**
   * Order by number of complete checklists (cl) or by number of species seen (spp).
   */
  rankedBy?: 'spp' | 'cl';
}

export declare namespace Top100 {
  export {
    type Top100RetrieveResponse as Top100RetrieveResponse,
    type Top100RetrieveParams as Top100RetrieveParams,
  };
}
