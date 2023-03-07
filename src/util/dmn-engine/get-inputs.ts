/**
 * @param parsedModel
 *
 * @returns {string[]} The inputs expected
 */
const getInputs = (parsedModel: string[][]): string[] => {
  const inputWidth = parsedModel[1].indexOf('Outputs') - 1
  const inputNamesRow = parsedModel[2]

  const inputNames: string[] = []

  for (let i = 0; i < inputWidth; i += 1) {
    inputNames.push(inputNamesRow[i + 1])
  }

  return inputNames
}

export default getInputs
