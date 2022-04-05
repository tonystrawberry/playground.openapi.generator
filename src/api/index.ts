import { Configuration, PetsApi } from "../../lib/api";

const config = new Configuration({
  basePath: "https://pets.co.jp",
});

const petsApi = new PetsApi(config);

export { petsApi };
