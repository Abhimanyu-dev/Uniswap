import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '5jvxmg1q',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skYKtqDhSKVlftZu3fEkHSsNz2AgE7svsCaj8AqWLXywkj8P9LEptjWKkdO7M2fnRzlJhBqV0YFeetCr0407MDDm6MTpBHlAEBL7slwxlD1hnELk5JYo6GyqvHXX3rzKuOmRnHghndcr9px8uXnJatDLBjIWO9NKaOxnZ61hpn8upx55FHTg',
    useCdn: false
})