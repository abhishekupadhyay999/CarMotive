import {carType} from './cartypes'
import { postType } from './postType'

export const schemaTypes = [
  carType,
  postType
]

export const schema = {
  types: schemaTypes,
}