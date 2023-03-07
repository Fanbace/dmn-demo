import evaluateDecisionTableField
  from '../../../../src/util/dmn-engine/evaluate-decision-table-field'

describe('evaluateDecisionTable', () => {
  it('evaluates numbers correctly', async () => {
    expect(await evaluateDecisionTableField('5', 'n = 5', 'Number')).toBe(true)
    expect(await evaluateDecisionTableField('1', '1', 'Number')).toBe(true)
    expect(await evaluateDecisionTableField('0', '0', 'Number')).toBe(true)
    expect(await evaluateDecisionTableField('0.123', 'n=0.123', 'Number'))
      .toBe(true)
    expect(await evaluateDecisionTableField('-1', '-1', 'Number')).toBe(true)
    expect(await evaluateDecisionTableField('-1', 'n<=1', 'Number')).toBe(true)

    expect(await evaluateDecisionTableField('-1', '0', 'Number')).toBe(false)
    expect(await evaluateDecisionTableField('-1', '1', 'Number')).toBe(false)
    expect(await evaluateDecisionTableField('123', '456', 'Number')).toBe(false)
    expect(await evaluateDecisionTableField('-123', '-456', 'Number'))
      .toBe(false)
  })

  it('splits numbers correctly', async () => {
    expect(await evaluateDecisionTableField('2', 'n in (1,2,3)', 'Number'))
      .toBe(true)
    expect(await evaluateDecisionTableField('6.7', 'n in (-1,5,6.7)', 'Number'))
      .toBe(true)

    expect(await evaluateDecisionTableField('4,5', '1', 'Number')).toBe(false)
  })

  it('evaluates strings correctly', async () => {
    expect(await evaluateDecisionTableField('5', '5', 'String')).toBe(true)
    expect(await evaluateDecisionTableField('5a', '5a', 'String')).toBe(true)
    expect(await evaluateDecisionTableField('S', 'S', 'String')).toBe(true)
    expect(await evaluateDecisionTableField('ASD', 'ASD', 'String')).toBe(true)
    expect(await evaluateDecisionTableField('false', 'false', 'String'))
      .toBe(true)
    expect(await evaluateDecisionTableField('true', 'true', 'String'))
      .toBe(true)

    expect(await evaluateDecisionTableField('ASD', 'ASD', 'String')).toBe(true)
    expect(await evaluateDecisionTableField('ASD', 'ASD', 'String')).toBe(true)
  })

  it('splits strings correctly', async () => {
    expect(await evaluateDecisionTableField('ab', 'ab,cd,ef', 'String'))
      .toBe(true)
    expect(await evaluateDecisionTableField('cd', 'ab,cd,ef', 'String'))
      .toBe(true)

    expect(await evaluateDecisionTableField('gh', 'ab,cd,ef', 'String'))
      .toBe(false)
  })

  it('evaluates booleans correctly', async () => {
    expect(await evaluateDecisionTableField('true', 'true', 'Boolean'))
      .toBe(true)
    expect(await evaluateDecisionTableField('True', 'true', 'Boolean'))
      .toBe(true)
    expect(await evaluateDecisionTableField('TRUE', 'true', 'Boolean'))
      .toBe(true)
    expect(await evaluateDecisionTableField('True', '1', 'Boolean'))
      .toBe(true)
    expect(await evaluateDecisionTableField('false', 'false', 'Boolean'))
      .toBe(true)
    expect(await evaluateDecisionTableField('FALSE', 'false', 'Boolean'))
      .toBe(true)
    expect(await evaluateDecisionTableField('FALSE', '0', 'Boolean')).toBe(true)

    expect(await evaluateDecisionTableField('1', '0', 'Boolean')).toBe(false)
    expect(await evaluateDecisionTableField('true', 'false', 'Boolean'))
      .toBe(false)
  })

  it('evaluates empty values correctly', async () => {
    expect(await evaluateDecisionTableField('6.7', '', 'Number')).toBe(true)
    expect(await evaluateDecisionTableField('gh', '', 'String')).toBe(true)
    expect(await evaluateDecisionTableField('false', '', 'Boolean')).toBe(true)
  })
})
