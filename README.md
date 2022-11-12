<p align="center">
  <a href="https://openapi-generator.tech/">
    <img src="https://avatars.githubusercontent.com/u/37325267?s=280&v=4" width="60" />
  </a>
</p>
<h1 align="center">
  Study project for automatically generating frontend TS code from an OpenAPI schema 
</h1>

## 🚀 Local development

1. Install `Java` on your machine.
2. Install `openapi-generator-cli`.
```
npm install @openapitools/openapi-generator-cli -g
```

3. Generate TS API client code into target folder (`/lib/api`)
```
npx @openapitools/openapi-generator-cli generate -i schema.yml -g typescript-axios -o /lib/api
```

## 📚 Resources
https://openapi-generator.tech/
