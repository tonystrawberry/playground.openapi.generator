# Learn how to use OpenAPI Generator to generate Typescript frontend client code

 
0. Prerequisites: installing Java on your machine.

1. Installing openapi-generator-cli

```
npm install @openapitools/openapi-generator-cli -g
```

2. Generate typescript code into target folder which will be our API client

```
npx @openapitools/openapi-generator-cli generate -i schema.yml -g typescript-axios -o /lib/api
```

## Resources

https://openapi-generator.tech/
