<div align="center">

[![Visit Zapier](./header.png)](https://zapier.com)

# [Zapier](https://zapier.com)<a id="zapier"></a>

The Zapier Embed API.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`zapierembed.actions.getChoices`](#zapierembedactionsgetchoices)
  * [`zapierembed.actions.getInputFields`](#zapierembedactionsgetinputfields)
  * [`zapierembed.actions.getOutputFields`](#zapierembedactionsgetoutputfields)
  * [`zapierembed.actions.listAvailableActions`](#zapierembedactionslistavailableactions)
  * [`zapierembed.actions.testActionExecution`](#zapierembedactionstestactionexecution)
  * [`zapierembed.apps.listPopular`](#zapierembedappslistpopular)
  * [`zapierembed.authentications.createNewAuthentication`](#zapierembedauthenticationscreatenewauthentication)
  * [`zapierembed.authentications.getAvailable`](#zapierembedauthenticationsgetavailable)
  * [`zapierembed.experimental.getZapRuns`](#zapierembedexperimentalgetzapruns)
  * [`zapierembed.zaps.createZap`](#zapierembedzapscreatezap)
  * [`zapierembed.zaps.getFilteredZaps`](#zapierembedzapsgetfilteredzaps)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Zapier&serviceName=Embed&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { ZapierEmbed } from "zapier-embed-typescript-sdk";

const zapierembed = new ZapierEmbed({
  // Defining the base path is optional and defaults to https://api.zapier.com/v2
  // basePath: "https://api.zapier.com/v2",
  accessToken: "ACCESS_TOKEN",
});

const getChoicesResponse = await zapierembed.actions.getChoices({
  page: "1",
  data: {
    authentication: "J2PlD7Rt",
  },
});

console.log(getChoicesResponse);
```

## Reference<a id="reference"></a>


### `zapierembed.actions.getChoices`<a id="zapierembedactionsgetchoices"></a>

Get the possible values for an Input Field that is marked as `SELECT`.

This endpoint requires the `zap` OAuth scope.

This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChoicesResponse = await zapierembed.actions.getChoices({
  page: "1",
  data: {
    authentication: "J2PlD7Rt",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`ActionsGetChoicesRequestData`](./models/actions-get-choices-request-data.ts)<a id="data-actionsgetchoicesrequestdatamodelsactions-get-choices-request-datats"></a>

##### action: `string`<a id="action-string"></a>

An Action ID, as provided by the `/actions` endpoint.

##### input: `string`<a id="input-string"></a>

An Input Field ID, as provided by the `/inputs` endpoint.

##### page: `string`<a id="page-string"></a>

The page of choices to return, defaults to the first

#### 🔄 Return<a id="🔄-return"></a>

[ActionsGetChoicesResponse](./models/actions-get-choices-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{action}/inputs/{input}/choices` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `zapierembed.actions.getInputFields`<a id="zapierembedactionsgetinputfields"></a>

Get the Input Fields for a particular Action, using the provided authentication and inputs.

This endpoint requires the `zap:write` OAuth scope.

This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInputFieldsResponse = await zapierembed.actions.getInputFields({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### action: `string`<a id="action-string"></a>

An Action ID, as provided by the `/actions` endpoint.

##### data: [`InputsWithAuthenticationId`](./models/inputs-with-authentication-id.ts)<a id="data-inputswithauthenticationidmodelsinputs-with-authentication-idts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ActionsGetInputFieldsResponse](./models/actions-get-input-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{action}/inputs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `zapierembed.actions.getOutputFields`<a id="zapierembedactionsgetoutputfields"></a>

Get the Output Fields for a particular Action, using the provided authentication and inputs.

This endpoint requires the `zap:write` OAuth scope.

This API is rate limited by IP address (60 requests per min).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOutputFieldsResponse = await zapierembed.actions.getOutputFields({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### action: `string`<a id="action-string"></a>

An Action ID, as provided by the `/actions` endpoint.

##### data: [`InputsWithAuthenticationIdAndFetchLiveSamples`](./models/inputs-with-authentication-id-and-fetch-live-samples.ts)<a id="data-inputswithauthenticationidandfetchlivesamplesmodelsinputs-with-authentication-id-and-fetch-live-samplests"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ActionsGetOutputFieldsResponse](./models/actions-get-output-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{action}/outputs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `zapierembed.actions.listAvailableActions`<a id="zapierembedactionslistavailableactions"></a>

Fetch the available actions for the provided App. It's typical to filter by type so that only actions that make sense for a particular step are shown. For example only showing reads for the first step in a Zap.

This endpoint requires the `zap` OAuth scope.

This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAvailableActionsResponse =
  await zapierembed.actions.listAvailableActions({
    app: "868f9d3c-2ea0-4f19-a32d-a61b276ab8de",
    actionType: "READ",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### app: `string`<a id="app-string"></a>

A canonical App ID, as provided by the `/apps` endpoint.

##### actionType: `'READ' | 'WRITE'`<a id="actiontype-read--write"></a>

The type of Action to filter for.

#### 🔄 Return<a id="🔄-return"></a>

[ActionsListAvailableActionsResponse](./models/actions-list-available-actions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `zapierembed.actions.testActionExecution`<a id="zapierembedactionstestactionexecution"></a>

Tests the action (step) in the third party api, using the provided authentication and inputs. On a successful test returns 200 and the result of executing the action, otherwise it returns a 400 and details about the failure.

This endpoint requires the `zap:write` OAuth scope.

This API is rate limited by IP address (60 requests per min).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const testActionExecutionResponse =
  await zapierembed.actions.testActionExecution({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### action: `string`<a id="action-string"></a>

An Action ID, as provided by the `/actions` endpoint.

##### data: [`InputsWithAuthenticationIdNoPage`](./models/inputs-with-authentication-id-no-page.ts)<a id="data-inputswithauthenticationidnopagemodelsinputs-with-authentication-id-no-pagets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ActionsTestActionExecutionResponse](./models/actions-test-action-execution-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/actions/{action}/test` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `zapierembed.apps.listPopular`<a id="zapierembedappslistpopular"></a>

This endpoint returns a list of popular apps.  Keep in mind that Zapier built-in apps will not be returned and the order of the result is by app popularity.

This endpoint requires the `zap` OAuth scope.

This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPopularResponse = await zapierembed.apps.listPopular({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Used for paginating results. Specifies the amount of apps to return.

##### offset: `number`<a id="offset-number"></a>

Used for paginating results. Specifies the offset of the apps to return.

##### category: `string`<a id="category-string"></a>

Categories that apps must have in order to be returned in the response. E.g. Accounting (`accounting`), AI Tools (`ai-tools`), and All (`all`). The full list of valid categories can be retrieved using the `category` endpoint, detailed [here](https://platform.zapier.com/embed/partner-api#get-v1categories).

##### query: `string`<a id="query-string"></a>

Parameter to limit the results to apps whose titles match the provided query.

##### ids: `string`<a id="ids-string"></a>

Parameter to restrict the results to apps whose ID matches those in the provided comma-separated value. Cannot be combined with `category`.

#### 🔄 Return<a id="🔄-return"></a>

[AppsListPopularResponse](./models/apps-list-popular-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/apps` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `zapierembed.authentications.createNewAuthentication`<a id="zapierembedauthenticationscreatenewauthentication"></a>

Creates a new Authentication for the provided App.

This endpoint requires the `authentication:write` OAuth scope.

This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAuthenticationResponse =
  await zapierembed.authentications.createNewAuthentication({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`AuthenticationsCreateNewAuthenticationRequestData`](./models/authentications-create-new-authentication-request-data.ts)<a id="data-authenticationscreatenewauthenticationrequestdatamodelsauthentications-create-new-authentication-request-datats"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationsCreateNewAuthenticationResponse](./models/authentications-create-new-authentication-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authentications` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `zapierembed.authentications.getAvailable`<a id="zapierembedauthenticationsgetavailable"></a>

Fetch the available Authentications for the provided App. This will only return Authentications that are owned by the user and not those that are shared with them, since it''s not possible to create Zaps with Authentications you don''t own.

This endpoint requires the `authentication` OAuth scope.

This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAvailableResponse = await zapierembed.authentications.getAvailable({
  app: "868f9d3c-2ea0-4f19-a32d-a61b276ab8de",
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### app: `string`<a id="app-string"></a>

A canonical App ID, as provided by the `/apps` endpoint.

##### limit: `number`<a id="limit-number"></a>

Used for paginating results. Specifies the maximum number of items to return per page. If this value is not set, it defaults to 10.

##### offset: `number`<a id="offset-number"></a>

Used for paginating results. Specifies the offset to use.

#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationsGetAvailableResponse](./models/authentications-get-available-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authentications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `zapierembed.experimental.getZapRuns`<a id="zapierembedexperimentalgetzapruns"></a>

This endpoint is a first version tool that delivers basic yet essential details about their executed Zap runs. As an evolving interface, this first version serves foundational information about Zap runs.

_However, it's important to note that this is an initial implementation and the **response payload is not definitive**. Our aim is to continually iterate and enhance this API, refining its capabilities and data output, to progressively deliver more valuable and useful information in future versions._

This endpoint requires the `zap:runs` OAuth scope.

This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.

Please note that since this is an experimental tool, if you're interested in gaining access, you must contact our support team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getZapRunsResponse = await zapierembed.experimental.getZapRuns({
  fromDate: "2024-01-01T10:09:08.07",
  toDate: "2023-01-02T11:10:09.08",
  zapId: "001fa849-dc8e-aca6-a09b-ba705bceada1",
  limit: 10,
  offset: 10,
  statuses: "throttled",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fromDate: `string`<a id="fromdate-string"></a>

Find Zap runs equal to or newer than this date. If not provided, results default to last 30 days\' Zap Runs.

##### toDate: `string`<a id="todate-string"></a>

Find Zap runs less than this date.

##### zapId: `string`<a id="zapid-string"></a>

Find Zap runs for the specified Zap ID.

##### limit: `number`<a id="limit-number"></a>

Maximum number of returned Zap Runs.

##### offset: `number`<a id="offset-number"></a>

Number of Zap Runs to skip.

##### search: `string`<a id="search-string"></a>

Performs a text search against the `zap_title`, `data_in`, and `data_out` fields, returning only zap runs that match the specified keywords.

##### statuses: `'delayed' | 'scheduled' | 'pending' | 'error' | 'error_handled' | 'halted' | 'throttled' | 'held' | 'filtered' | 'skipped' | 'success'`<a id="statuses-delayed--scheduled--pending--error--error_handled--halted--throttled--held--filtered--skipped--success"></a>

Accepts one or more status values separated by commas, enabling the filtering of zap runs based on the specified status or statuses provided.

#### 🔄 Return<a id="🔄-return"></a>

[ExperimentalGetZapRunsResponse](./models/experimental-get-zap-runs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/zap-runs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `zapierembed.zaps.createZap`<a id="zapierembedzapscreatezap"></a>

This URL creates a new Zap based on a series of steps and a given title. `is_enabled` must be set to true when creating a new Zap.

This endpoint requires the `zap:write` OAuth scope.

This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createZapResponse = await zapierembed.zaps.createZap({
  data: {
    title: "My Zap",
    type: "zap",
    id: "00000000-0000-c000-8000-000000012345",
    is_enabled: true,
    steps: [
      {
        action: null,
        inputs: {},
        authentication: null,
      },
    ],
    updated_at: "2019-08-24T14:15:22Z",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`Zap`](./models/zap.ts)<a id="data-zapmodelszapts"></a>

##### expand: `string`<a id="expand-string"></a>

A comma separated list of Zap fields that should be expanded from ids to full objects in the response. If a field may not be expanded, its encoded form will be returned instead.

#### 🔄 Return<a id="🔄-return"></a>

[ZapsCreateZapResponse](./models/zaps-create-zap-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/zaps` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `zapierembed.zaps.getFilteredZaps`<a id="zapierembedzapsgetfilteredzaps"></a>

This endpoint returns a list of Zaps for the authenticated Zapier user.

The `expand` array can be used to expand selected fields into full objects in the response.  Inputs with keys can also be passed to filter Zaps by certain criteria.

This endpoint requires the `zap` OAuth scope.

This API is rate limited by IP address (60 requests per min), or partner (150 requests per min), whichever occurs first.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFilteredZapsResponse = await zapierembed.zaps.getFilteredZaps({
  expand: "steps.action",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Used for paginating results. Specifies the amount of apps to return

##### offset: `number`<a id="offset-number"></a>

Used for paginating results. Specifies the offset of the apps to return

##### inputs: Record<string, Record<string, `string`><a id="inputs-record"></a>
                             `{ [key: string]: string; }`>

You may pass inputs[KEY]=VALUE1,VALUE2 to filter for Zaps that contain those settings. For example, if your OAuth app is Trello you may filter for Zaps that contain a certain Trello board using inputs[board]=BOARD_ID — Keys are defined by your app on the developer platform.

##### expand: `string`<a id="expand-string"></a>

A comma separated list of Zap fields that should be expanded from ids to full objects in the response. If a field may not be expanded, its encoded form will be returned instead.

#### 🔄 Return<a id="🔄-return"></a>

[ZapsGetFilteredZapsResponse](./models/zaps-get-filtered-zaps-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/zaps` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
