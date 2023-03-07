import getInputs from './get-inputs'

/**
 * @param parsedModel
 *
 * @returns {string[]} The inputs expected
 */
const getInputTypes = (parsedModel: string[][]): DmnFieldType[] => {
  const inputs = getInputs(parsedModel)
  const inputTypes: DmnFieldType[] = []
  const typesRow = parsedModel[3]

  for (let i = 0; i < inputs.length; i += 1) {
    inputTypes.push(typesRow[i + 1] as DmnFieldType)
  }

  return inputTypes
}

export default getInputTypes
