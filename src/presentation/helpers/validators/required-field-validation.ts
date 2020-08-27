import { Validation } from '../../protocols/validation'
import { MissingParamError } from '../../errors'

// recebe input especifico e valida se existe no corpo da requisicao

export class RequiredFieldValidation implements Validation {
  private readonly fieldName: string

  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
