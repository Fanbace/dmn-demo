import getInputs from './get-inputs'

/**
 * @param parsedModel
 *
 * @returns {string[]} The outputs expected
 */
const getOutputs = (parsedModel: string[][]): string[] => {
  const inputWidth = getInputs(parsedModel).length

  const outputWidth = parsedModel[1].indexOf('Notes') - inputWidth - 1
  const outputNamesRow = parsedModel[2]
  const outputNames: string[] = []

  for (let i = 0; i < outputWidth; i += 1) {
    outputNames.push(outputNamesRow[i + inputWidth + 1])
  }

  return outputNames
}

export default getOutputs
