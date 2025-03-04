/*
Zapier Embed API

The Zapier Embed API.

The version of the OpenAPI document: 1.0.0
Contact: contact@zapier.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The common data object that includes inputs and an authentication id.
 * @export
 * @interface InputsWithAuthenticationId
 */
export interface InputsWithAuthenticationId {
    /**
     * An Authentication ID, as provided by the `/authentications` endpoint.
     * @type {any}
     * @memberof InputsWithAuthenticationId
     */
    'authentication': any;
    /**
     * The current set of input fields in a JSON object, where each key is the `id` of an Input Field, and the corresponding value the current value of the field.
     * @type {object}
     * @memberof InputsWithAuthenticationId
     */
    'inputs': object;
    /**
     * Used for paginating results. Specifies the maximum number of items to return per page.
     * @type {number}
     * @memberof InputsWithAuthenticationId
     */
    'limit'?: number;
    /**
     * Used for paginating results. Specifies the offset to use.
     * @type {number}
     * @memberof InputsWithAuthenticationId
     */
    'offset'?: number;
}

