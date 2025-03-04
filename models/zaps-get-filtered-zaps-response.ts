/*
Zapier Embed API

The Zapier Embed API.

The version of the OpenAPI document: 1.0.0
Contact: contact@zapier.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Links } from './links';
import { Meta } from './meta';
import { Zap } from './zap';

/**
 * 
 * @export
 * @interface ZapsGetFilteredZapsResponse
 */
export interface ZapsGetFilteredZapsResponse {
    /**
     * 
     * @type {Links}
     * @memberof ZapsGetFilteredZapsResponse
     */
    'links'?: Links;
    /**
     * 
     * @type {Meta}
     * @memberof ZapsGetFilteredZapsResponse
     */
    'meta'?: Meta;
    /**
     * 
     * @type {Array<Zap>}
     * @memberof ZapsGetFilteredZapsResponse
     */
    'data'?: Array<Zap>;
}

