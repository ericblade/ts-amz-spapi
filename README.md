# ts-amz-spapi

TypeScript interfaces for Amazon SP-API, derived from running openapi-typescript on selling-partner-api-models

This is the output of

```javascript
npx openapi-typescript@5.0.0 "models/**/*.json" --output schemas/
```

I'm not right at this moment sure if this is useful, but it's something i ran across that looks like it could be.

It does look like you can use something like

```typescript
import type { definitions as FBAInboundDefinitions } from 'ts-amz-spapi/schemas/models/fba-inbound-eligibility-api-model/fbaInbound';
```

although that's a bit verbose.  going to do some work to see how to make this easier.

... you can now use

```typescript
import type { FBAInboundEligibility } from 'ts-amz-spapi';
// FBAInboundEligibility.definitions["ItemEligibilityPreview"]["program"] = 'INBOUND' | 'COMMINGLING'
```
