/**
 * @param input
 * @param condition
 *
 * @returns {Promise<boolean>} True on a match
 */
const evaluateNumber = async (
  input: number,
  condition: string,
):Promise<boolean> => {
  // eslint-disable-next-line global-require
  const { feel } = require('js-feel')()

  const parsedGrammar = feel.parse(condition.includes('n')
    ? condition
    : `n=${condition}`)
  return parsedGrammar.build({ n: input })
}

export default evaluateNumber
