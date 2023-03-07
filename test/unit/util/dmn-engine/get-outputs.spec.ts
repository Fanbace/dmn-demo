import getOutputs from '../../../../src/util/dmn-engine/get-outputs'

describe('getOutputs', () => {
  it('finds any number of outputs', () => {
    expect(getOutputs([
      [],
      ['U', 'Inputs', '', 'Outputs', 'Notes'],
      ['', 'Artist Country Code', 'Artist Has VAT Code', 'VAT', ''],
    ])).toEqual(['VAT'])

    expect(getOutputs([
      [],
      ['U', 'Inputs', 'Outputs', '', 'Notes'],
      ['', 'Artist Has VAT Code', 'VAT', 'VAT', ''],
    ])).toEqual(['VAT', 'VAT'])
  })
})
