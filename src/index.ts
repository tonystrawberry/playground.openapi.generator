import { Pet } from "../lib/api";
import { petsApi } from "./api";

async function callShowPetById(petId: string) {
  const response = await petsApi.showPetById("1");
  const pet: Pet = response.data;
  console.log("pet", pet);
}

callShowPetById("1");
