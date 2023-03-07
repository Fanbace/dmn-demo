import evaluateDecisionTableRow
  from '../../../../src/util/dmn-engine/evaluate-decision-table-row'

describe('evaluateDecisionTable', () => {
  it('evaluates a row and returns true when fitting', async () => {
    expect(await evaluateDecisionTableRow(
      ['1', 'NL', 'FALSE', '123', ''],
      {
        'Artist Country Code': 'NL',
        'Artist Has VAT Code': 'false',
      }, {
        inputs: ['Artist Country Code', 'Artist Has VAT Code'],
        inputTypes: ['String', 'Boolean'],
      },
    )).toBe(true)
  })

  it('evaluates a row and returns false when not fitting', async () => {
    expect(await evaluateDecisionTableRow(
      ['1', 'NL', 'FALSE', '123', ''],
      {
        'Artist Country Code': 'NL',
        'Artist Has VAT Code': 'true',
      }, {
        inputs: ['Artist Country Code', 'Artist Has VAT Code'],
        inputTypes: ['String', 'Boolean'],
      },
    )).toBe(false)
  })

  it('matches against empty specs', async () => {
    expect(await evaluateDecisionTableRow(
      ['1', '', 'FALSE', '123', ''],
      {
        'Artist Country Code': 'NL',
        'Artist Has VAT Code': 'true',
      }, {
        inputs: ['Artist Country Code', 'Artist Has VAT Code'],
        inputTypes: ['String', 'Boolean'],
      },
    )).toBe(false)
  })
})
