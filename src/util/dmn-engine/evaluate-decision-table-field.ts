import evalNumber from './evaluators/number'

/**
 * @param value
 * @param input
 * @returns {boolean} True if a match is found
 */
const parseBoolean = (
  value: string,
): boolean => value.toLowerCase() === 'true' || value.toLowerCase() === '1'

/**
 * @param condition
 * @param input
 * @returns {boolean} True if a match is found
 */
const evalString = (condition: string, input: string): boolean => condition
  .split(',')
  .includes(input)

/**
 * @param input
 * @param condition
 * @param type
 *
 * @returns {string[]} The outputs expected
 */
const evaluateDecisionTableField = async (
  input: string,
  condition: string,
  type: DmnFieldType,
): Promise<any> => {
  if (condition === '' || condition === undefined) {
    return true
  }

  let result = false

  switch (type) {
    case 'Boolean':
      result = parseBoolean(input) === parseBoolean(condition)
      break

    case 'Number':
      result = await evalNumber(parseFloat(input), condition)
      break

    case 'String':
      result = evalString(condition, input)
      break

    default:
      break
  }

  return result
}

export default evaluateDecisionTableField
