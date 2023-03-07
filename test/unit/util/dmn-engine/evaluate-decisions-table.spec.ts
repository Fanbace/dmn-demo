import evaluateDecisionTable, { DecisionTableEvaluationHadNoResultError }
  from '../../../../src/util/dmn-engine/evaluate-decision-table'

describe('evaluateDecisionTable', () => {
  it('evaluates every row and finds a result', async () => {
    expect(await evaluateDecisionTable([
      [],
      ['U', 'Inputs', '', 'Outputs', 'Notes'],
      ['', 'Artist Country Code', 'Artist Has VAT Code', 'VAT', ''],
      ['', 'String', 'Boolean', 'Number', ''],
      ['1', 'NL', 'FALSE', '123', ''],
    ], {
      'Artist Country Code': 'NL',
      'Artist Has VAT Code': 'false',
    })).toEqual(['123'])

    expect(await evaluateDecisionTable([
      [],
      ['U', 'Inputs', '', 'Outputs', 'Notes'],
      ['', 'Artist Country Code', 'Artist Has VAT Code', 'VAT', ''],
      ['', 'String', 'Boolean', 'Number', ''],
      ['1', 'FR', 'FALSE', '456', ''],
      ['2', 'NL', 'FALSE', '567', ''],
    ], {
      'Artist Country Code': 'NL',
      'Artist Has VAT Code': 'false',
    })).toEqual(['567'])
  })

  /**
   * In this test, the only available row should match because the value for
   * Artist Country Code is empty.
   */
  it('does the falling back correctly', async () => {
    expect(await evaluateDecisionTable([
      [],
      ['U', 'Inputs', '', 'Outputs', 'Notes'],
      ['', 'Artist Country Code', 'Artist Has VAT Code', 'VAT', ''],
      ['', 'String', 'Boolean', 'Number', ''],
      ['1', '', 'FALSE', '123', ''],
    ], {
      'Artist Country Code': 'NL',
      'Artist Has VAT Code': 'false',
    })).toEqual(['123'])
  })

  it('returns all result values', async () => {
    expect(await evaluateDecisionTable([
      [],
      ['U', 'Inputs', '', 'Outputs', '', 'Notes'],
      ['', 'Artist Country Code', 'Artist Has VAT Code', 'VAT', 'Also Vat', ''],
      ['', 'String', 'Boolean', 'Number', 'Number', ''],
      ['1', '', 'FALSE', '123', '456', ''],
    ], {
      'Artist Country Code': 'NL',
      'Artist Has VAT Code': 'false',
    })).toEqual(['123', '456'])
  })

  it('returns false if there is no result result', () => {
    expect(async () => evaluateDecisionTable([
      [],
      ['U', 'Inputs', '', 'Outputs', 'Notes'],
      ['', 'Artist Country Code', 'Artist Has VAT Code', 'VAT', ''],
      ['', 'String', 'Boolean', 'Number', ''],
      ['1', 'NL', 'FALSE', '123', ''],
    ], {
      'Artist Country Code': 'NL',
      'Artist Has VAT Code': 'true',
    })).rejects.toThrow(DecisionTableEvaluationHadNoResultError)
  })
})
