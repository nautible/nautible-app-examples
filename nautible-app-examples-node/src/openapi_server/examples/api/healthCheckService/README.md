# HealthCheckService

## Operations

### healthz

```http
GET /healthz
```

Returns a status code

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
async function healthz(): Promise<t.HealthzResponse> {
	throw 'Unimplemented'
}


const api: t.HealthCheckServiceApi = {
	healthz,
}

export default api
```
