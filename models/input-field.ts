/*
Zapier Embed API

The Zapier Embed API.

The version of the OpenAPI document: 1.0.0
Contact: contact@zapier.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InputFieldItems } from './input-field-items';

/**
 * A field that is an input to an Action, often eventually used to form the HTTP request that is made to a Partner API.
 * @export
 * @interface InputField
 */
export interface InputField {
    /**
     * The title of this Input Field
     * @type {string}
     * @memberof InputField
     */
    'title': string;
    /**
     * A longer markdown formatted description of this Input Field, often containing helpful hints on how to fill this particular field in.
     * @type {string}
     * @memberof InputField
     */
    'description': string;
    /**
     * The type of this object.
     * @type {string}
     * @memberof InputField
     */
    'type': InputFieldTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InputField
     */
    'id': string;
    /**
     * The default value of this Input Field
     * @type {string}
     * @memberof InputField
     */
    'default_value': string;
    /**
     * An array of ids that this field has a dependency on. If the value of these fields changes, the value of this field is no longer valid.
     * @type {Array<string>}
     * @memberof InputField
     */
    'depends_on': Array<string>;
    /**
     * An optional formatting hint, only provided when the `value_type` field is `STRING`. Useful for displaying more friendly inputs to a user. If the format is `SELECT`, you are expected to fetch the possible Choices from the `/choices` endpoint.
     * @type {string}
     * @memberof InputField
     */
    'format'?: InputFieldFormatEnum;
    /**
     * If true, changes to this field invalidate the presence of all other fields for this action and they must be refetched.
     * @type {boolean}
     * @memberof InputField
     */
    'invalidates_input_fields': boolean;
    /**
     * If true, this field must be filled in for the action to execute.
     * @type {boolean}
     * @memberof InputField
     */
    'is_required': boolean;
    /**
     * 
     * @type {InputFieldItems}
     * @memberof InputField
     */
    'items'?: InputFieldItems;
    /**
     * A placeholder for this Input Field.
     * @type {string}
     * @memberof InputField
     */
    'placeholder': string;
    /**
     * The type of this Input Field. The `OBJECT` type accepts a flat key-value dictionary where the values can only be strings. The `ARRAY` type accepts an array of values - see `items` for the type. All other types accept string values.
     * @type {string}
     * @memberof InputField
     */
    'value_type': InputFieldValueTypeEnum;
}

type InputFieldTypeEnum = 'input_field' | 'info_field' | 'fieldset'
type InputFieldFormatEnum = 'DATETIME' | 'MULTILINE' | 'PASSWORD' | 'CODE' | 'FILE' | 'SELECT'
type InputFieldValueTypeEnum = 'STRING' | 'NUMBER' | 'INTEGER' | 'BOOLEAN' | 'ARRAY' | 'OBJECT'


