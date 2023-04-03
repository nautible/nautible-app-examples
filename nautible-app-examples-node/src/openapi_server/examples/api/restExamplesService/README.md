# RestExamplesService

## Operations

### hello

```http
GET /examples/hello
```

Return Hello

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
async function hello(): Promise<t.HelloResponse> {
	throw 'Unimplemented'
}


const api: t.RestExamplesServiceApi = {
	hello,
}

export default api
```
