import getInputTypes from '../../../../src/util/dmn-engine/get-input-types'

describe('getInputsTypes', () => {
  it('finds the number of input types', () => {
    expect(getInputTypes([
      [],
      ['U', 'Inputs', '', 'Outputs', 'Notes'],
      ['', 'Artist Country Code', 'Artist Has VAT Code', 'VAT', ''],
      ['', 'String', 'Boolean', 'Number', ''],
    ])).toEqual(['String', 'Boolean'])

    expect(getInputTypes([
      [],
      ['U', 'Inputs', 'Outputs', 'Notes'],
      ['', 'Artist Has VAT Code', 'VAT', ''],
      ['', 'String', 'Number', ''],
    ])).toEqual(['String'])
  })
})
