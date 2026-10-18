
import { carType } from "./cartypes";
import { postType } from "./postType";
import { vehicleModelType } from "./vehicleModels";

export const schemaTypes = [
  carType,
  postType,
  vehicleModelType,
];

export const schema = {
  types: schemaTypes,
};
