/*
Zapier Embed API

The Zapier Embed API.

The version of the OpenAPI document: 1.0.0
Contact: contact@zapier.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface AuthenticationsCreateNewAuthenticationRequestData
 */
export interface AuthenticationsCreateNewAuthenticationRequestData {
    /**
     * The title of the authentication.
     * @type {string}
     * @memberof AuthenticationsCreateNewAuthenticationRequestData
     */
    'title': string;
    /**
     * A canonical App ID, as provided by the `/apps` endpoint.
     * @type {string}
     * @memberof AuthenticationsCreateNewAuthenticationRequestData
     */
    'app': string;
    /**
     * Required values to create an authentication. These values will be used by the target integration to successfully create the Authentication https://platform.zapier.com/build/auth.
     * @type {object}
     * @memberof AuthenticationsCreateNewAuthenticationRequestData
     */
    'authentication_fields': object;
}

