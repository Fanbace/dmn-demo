import evaluateDecisionTableField from './evaluate-decision-table-field'

/**
 * @param row
 * @param inputs
 * @param context
 *
 * @returns {string[]} The outputs expected
 */
const evaluateDecisionTableRow = async (
  row: string[],
  inputs: { [key: string]: string },
  context: DmnContext,
): Promise<boolean> => {
  const evaluationOutcomes: any[] = await Promise.all(context.inputs.map(
    (input, i) => evaluateDecisionTableField(
      inputs[input as string],
      row[i + 1],
      context.inputTypes[i],
    ),
  ))
  return !evaluationOutcomes.some((outcome) => !outcome)
}

export default evaluateDecisionTableRow
