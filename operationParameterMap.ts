type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/actions/{action}/inputs/{input}/choices-POST': {
        parameters: [
            {
                name: 'data'
            },
            {
                name: 'action'
            },
            {
                name: 'input'
            },
            {
                name: 'page'
            },
        ]
    },
    '/actions/{action}/inputs-POST': {
        parameters: [
            {
                name: 'action'
            },
            {
                name: 'data'
            },
        ]
    },
    '/actions/{action}/outputs-POST': {
        parameters: [
            {
                name: 'action'
            },
            {
                name: 'data'
            },
        ]
    },
    '/actions-GET': {
        parameters: [
            {
                name: 'app'
            },
            {
                name: 'action_type'
            },
        ]
    },
    '/actions/{action}/test-POST': {
        parameters: [
            {
                name: 'action'
            },
            {
                name: 'data'
            },
        ]
    },
    '/apps-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
            {
                name: 'category'
            },
            {
                name: 'query'
            },
            {
                name: 'ids'
            },
        ]
    },
    '/authentications-POST': {
        parameters: [
            {
                name: 'data'
            },
        ]
    },
    '/authentications-GET': {
        parameters: [
            {
                name: 'app'
            },
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/zap-runs-GET': {
        parameters: [
            {
                name: 'from_date'
            },
            {
                name: 'to_date'
            },
            {
                name: 'zap_id'
            },
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
            {
                name: 'search'
            },
            {
                name: 'statuses'
            },
        ]
    },
    '/zaps-POST': {
        parameters: [
            {
                name: 'data'
            },
            {
                name: 'expand'
            },
        ]
    },
    '/zaps-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
            {
                name: 'inputs'
            },
            {
                name: 'expand'
            },
        ]
    },
}