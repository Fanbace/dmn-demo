import evaluateDecisionTableRow from './evaluate-decision-table-row'
import getInputTypes from './get-input-types'
import getInputs from './get-inputs'
import getOutputTypes from './get-output-types'
import getOutputs from './get-outputs'

/** */
export class DecisionTableEvaluationHadNoResultError extends Error {}

/**
 * @param parsedModel
 * @param values
 *
 * @returns {string[]} The outputs expected
 */
const evaluateDecisionTable = async (
  parsedModel: string[][],
  values: { [key: string]: string },
): Promise<any> => {
  const context: DmnContext = {
    inputs: getInputs(parsedModel),
    inputTypes: getInputTypes(parsedModel),
    outputs: getOutputs(parsedModel),
    outputTypes: getOutputTypes(parsedModel),
  }

  for (let i = 4; i < parsedModel.length; i += 1) {
    const row = parsedModel[i]
    // eslint-disable-next-line no-await-in-loop
    const rowMatches = await evaluateDecisionTableRow(
      row,
      values,
      context,
    )

    if (rowMatches) {
      return row.slice(
        context.inputs.length + 1,
        context.inputs.length + context.outputs.length + 1,
      )
    }
  }

  throw new DecisionTableEvaluationHadNoResultError()
}

export default evaluateDecisionTable
