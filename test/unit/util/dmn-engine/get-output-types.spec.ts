import getOutputTypes from '../../../../src/util/dmn-engine/get-output-types'

describe('getOutputsTypes', () => {
  it('finds the number of input types', () => {
    expect(getOutputTypes([
      [],
      ['U', 'Inputs', '', 'Outputs', 'Notes'],
      ['', 'Artist Country Code', 'Artist Has VAT Code', 'VAT', ''],
      ['', 'String', 'Boolean', 'Number', ''],
    ])).toEqual(['Number'])

    expect(getOutputTypes([
      [],
      ['U', 'Inputs', 'Outputs', 'Notes'],
      ['', 'Artist Has VAT Code', 'VAT', ''],
      ['', 'String', 'Number', ''],
    ])).toEqual(['Number'])
  })
})
