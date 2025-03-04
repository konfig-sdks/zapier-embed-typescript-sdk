/* tslint:disable */
/* eslint-disable */
/*
Zapier Embed API

The Zapier Embed API.

The version of the OpenAPI document: 1.0.0
Contact: contact@zapier.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ActionsListAvailableActions404Response } from '../models';
// @ts-ignore
import { ActionsListAvailableActions406Response } from '../models';
// @ts-ignore
import { ActionsListAvailableActions415Response } from '../models';
// @ts-ignore
import { ActionsListAvailableActionsdefaultResponse } from '../models';
// @ts-ignore
import { AuthenticationsCreateNewAuthenticationRequest } from '../models';
// @ts-ignore
import { AuthenticationsCreateNewAuthenticationRequestData } from '../models';
// @ts-ignore
import { AuthenticationsCreateNewAuthenticationResponse } from '../models';
// @ts-ignore
import { AuthenticationsGetAvailableResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AuthenticationsApi - axios parameter creator
 * @export
 */
export const AuthenticationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new Authentication for the provided App.  This endpoint requires the `authentication:write` OAuth scope.  This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.
         * @summary Create Authentication
         * @param {AuthenticationsCreateNewAuthenticationRequest} authenticationsCreateNewAuthenticationRequest Inputs to create a new Authentication
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewAuthentication: async (authenticationsCreateNewAuthenticationRequest: AuthenticationsCreateNewAuthenticationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authenticationsCreateNewAuthenticationRequest' is not null or undefined
            assertParamExists('createNewAuthentication', 'authenticationsCreateNewAuthenticationRequest', authenticationsCreateNewAuthenticationRequest)
            const localVarPath = `/authentications`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: authenticationsCreateNewAuthenticationRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/authentications',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(authenticationsCreateNewAuthenticationRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch the available Authentications for the provided App. This will only return Authentications that are owned by the user and not those that are shared with them, since it\'\'s not possible to create Zaps with Authentications you don\'\'t own.  This endpoint requires the `authentication` OAuth scope.  This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.
         * @summary Get Authentications
         * @param {string} app A canonical App ID, as provided by the &#x60;/apps&#x60; endpoint.
         * @param {number} [limit] Used for paginating results. Specifies the maximum number of items to return per page. If this value is not set, it defaults to 10.
         * @param {number} [offset] Used for paginating results. Specifies the offset to use.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAvailable: async (app: string, limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'app' is not null or undefined
            assertParamExists('getAvailable', 'app', app)
            const localVarPath = `/authentications`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (app !== undefined) {
                localVarQueryParameter['app'] = app;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/authentications',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationsApi - functional programming interface
 * @export
 */
export const AuthenticationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new Authentication for the provided App.  This endpoint requires the `authentication:write` OAuth scope.  This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.
         * @summary Create Authentication
         * @param {AuthenticationsApiCreateNewAuthenticationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewAuthentication(requestParameters: AuthenticationsApiCreateNewAuthenticationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationsCreateNewAuthenticationResponse>> {
            const authenticationsCreateNewAuthenticationRequest: AuthenticationsCreateNewAuthenticationRequest = {
                data: requestParameters.data
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewAuthentication(authenticationsCreateNewAuthenticationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch the available Authentications for the provided App. This will only return Authentications that are owned by the user and not those that are shared with them, since it\'\'s not possible to create Zaps with Authentications you don\'\'t own.  This endpoint requires the `authentication` OAuth scope.  This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.
         * @summary Get Authentications
         * @param {AuthenticationsApiGetAvailableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAvailable(requestParameters: AuthenticationsApiGetAvailableRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationsGetAvailableResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAvailable(requestParameters.app, requestParameters.limit, requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationsApi - factory interface
 * @export
 */
export const AuthenticationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationsApiFp(configuration)
    return {
        /**
         * Creates a new Authentication for the provided App.  This endpoint requires the `authentication:write` OAuth scope.  This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.
         * @summary Create Authentication
         * @param {AuthenticationsApiCreateNewAuthenticationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewAuthentication(requestParameters: AuthenticationsApiCreateNewAuthenticationRequest, options?: AxiosRequestConfig): AxiosPromise<AuthenticationsCreateNewAuthenticationResponse> {
            return localVarFp.createNewAuthentication(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch the available Authentications for the provided App. This will only return Authentications that are owned by the user and not those that are shared with them, since it\'\'s not possible to create Zaps with Authentications you don\'\'t own.  This endpoint requires the `authentication` OAuth scope.  This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.
         * @summary Get Authentications
         * @param {AuthenticationsApiGetAvailableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAvailable(requestParameters: AuthenticationsApiGetAvailableRequest, options?: AxiosRequestConfig): AxiosPromise<AuthenticationsGetAvailableResponse> {
            return localVarFp.getAvailable(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewAuthentication operation in AuthenticationsApi.
 * @export
 * @interface AuthenticationsApiCreateNewAuthenticationRequest
 */
export type AuthenticationsApiCreateNewAuthenticationRequest = {
    
} & AuthenticationsCreateNewAuthenticationRequest

/**
 * Request parameters for getAvailable operation in AuthenticationsApi.
 * @export
 * @interface AuthenticationsApiGetAvailableRequest
 */
export type AuthenticationsApiGetAvailableRequest = {
    
    /**
    * A canonical App ID, as provided by the `/apps` endpoint.
    * @type {string}
    * @memberof AuthenticationsApiGetAvailable
    */
    readonly app: string
    
    /**
    * Used for paginating results. Specifies the maximum number of items to return per page. If this value is not set, it defaults to 10.
    * @type {number}
    * @memberof AuthenticationsApiGetAvailable
    */
    readonly limit?: number
    
    /**
    * Used for paginating results. Specifies the offset to use.
    * @type {number}
    * @memberof AuthenticationsApiGetAvailable
    */
    readonly offset?: number
    
}

/**
 * AuthenticationsApiGenerated - object-oriented interface
 * @export
 * @class AuthenticationsApiGenerated
 * @extends {BaseAPI}
 */
export class AuthenticationsApiGenerated extends BaseAPI {
    /**
     * Creates a new Authentication for the provided App.  This endpoint requires the `authentication:write` OAuth scope.  This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.
     * @summary Create Authentication
     * @param {AuthenticationsApiCreateNewAuthenticationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationsApiGenerated
     */
    public createNewAuthentication(requestParameters: AuthenticationsApiCreateNewAuthenticationRequest, options?: AxiosRequestConfig) {
        return AuthenticationsApiFp(this.configuration).createNewAuthentication(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch the available Authentications for the provided App. This will only return Authentications that are owned by the user and not those that are shared with them, since it\'\'s not possible to create Zaps with Authentications you don\'\'t own.  This endpoint requires the `authentication` OAuth scope.  This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.
     * @summary Get Authentications
     * @param {AuthenticationsApiGetAvailableRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationsApiGenerated
     */
    public getAvailable(requestParameters: AuthenticationsApiGetAvailableRequest, options?: AxiosRequestConfig) {
        return AuthenticationsApiFp(this.configuration).getAvailable(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
