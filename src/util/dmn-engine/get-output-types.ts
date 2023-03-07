import getInputs from './get-inputs'
import getOutputs from './get-outputs'

/**
 * @param parsedModel
 *
 * @returns {string[]} The outputs expected
 */
const getOutputTypes = (parsedModel: string[][]): DmnFieldType[] => {
  const inputCount = getInputs(parsedModel).length
  const outputs = getOutputs(parsedModel)

  const outputTypes: DmnFieldType[] = []
  const typesRow = parsedModel[3]

  for (let i = 0; i < outputs.length; i += 1) {
    outputTypes.push(typesRow[i + 1 + inputCount] as DmnFieldType)
  }

  return outputTypes
}

export default getOutputTypes
