import deepEvaluateNumber
  from '../../../../../src/util/dmn-engine/evaluators/number'

describe('the numbers evaluator', () => {
  it('understands lgt etc', async () => {
    expect(await deepEvaluateNumber(4, 'n<5')).toBe(true)
    expect(await deepEvaluateNumber(5, 'n<5')).toBe(false)
    expect(await deepEvaluateNumber(6, 'n<5')).toBe(false)

    expect(await deepEvaluateNumber(4, 'n<=5')).toBe(true)
    expect(await deepEvaluateNumber(5, 'n<=5')).toBe(true)
    expect(await deepEvaluateNumber(6, 'n<=5')).toBe(false)

    expect(await deepEvaluateNumber(4, 'n>5')).toBe(false)
    expect(await deepEvaluateNumber(5, 'n>5')).toBe(false)
    expect(await deepEvaluateNumber(6, 'n>5')).toBe(true)

    expect(await deepEvaluateNumber(4, 'n>=5')).toBe(false)
    expect(await deepEvaluateNumber(5, 'n>=5')).toBe(true)
    expect(await deepEvaluateNumber(6, 'n>=5')).toBe(true)
  })

  it('understands ranges', async () => {
    expect(await deepEvaluateNumber(4, 'n in ([1..5])')).toBe(true)
    expect(await deepEvaluateNumber(1, 'n in ([-1..5])')).toBe(true)
    expect(await deepEvaluateNumber(6, 'n in ([1..5])')).toBe(false)
    expect(await deepEvaluateNumber(1, 'n in ([1.1..5])')).toBe(false)
    expect(await deepEvaluateNumber(1.3, 'n in ([1.1..5])')).toBe(true)
    expect(await deepEvaluateNumber(-1.29, 'n in ([-1.3..5])')).toBe(true)

    expect(await deepEvaluateNumber(4, 'n in (1,4,5)')).toBe(true)
    expect(await deepEvaluateNumber(2, 'n in (1,4,5)')).toBe(false)
  })
})
