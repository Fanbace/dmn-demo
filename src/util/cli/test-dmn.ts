import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import minimist from 'minimist'
import { exit } from 'process'
import evaluateDecisionTable from '../dmn-engine/evaluate-decision-table'

/**
 *
 * @returns {Promise<string[]>} The result
 */
const testRule = async () => {
  const argv = minimist(process.argv.slice(2))

  const fileContents = fs.readFileSync(path.join(
    __dirname,
    '..',
    '..',
    '..',
    'data',
    'dmn',
    'vat-rules.csv',
  ))

  const vatRules = parse(fileContents, { columns: false, trim: true })

  const result = await evaluateDecisionTable(vatRules, {
    'Artist Country Code': argv.countryCode,
    'Artist Has VAT Code': argv.hasVat,
    Type: argv.type,
  })

  return result
}

testRule().then((result) => {
  console.log(result)
  exit()
}).catch((err) => {
  console.error(err)
  exit()
})
