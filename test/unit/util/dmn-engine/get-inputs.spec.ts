import getInputs from '../../../../src/util/dmn-engine/get-inputs'

describe('getInputs', () => {
  it('finds any number of inputs', () => {
    expect(getInputs([
      [],
      ['U', 'Inputs', '', 'Outputs', 'Notes'],
      ['', 'Artist Country Code', 'Artist Has VAT Code', 'VAT', ''],
    ])).toEqual(['Artist Country Code', 'Artist Has VAT Code'])

    expect(getInputs([
      [],
      ['U', 'Inputs', 'Outputs', 'Notes'],
      ['', 'Artist Has VAT Code', 'VAT', ''],
    ])).toEqual(['Artist Has VAT Code'])
  })
})
