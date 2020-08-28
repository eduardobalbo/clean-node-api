import { Validation } from '../../protocols/validation'
import { InvalidParamError } from '../../errors'

// recebe input especifico e valida se existe no corpo da requisicao

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) {}

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
