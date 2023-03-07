type DmnFieldType = 'String' | 'Number' | 'Boolean'

interface DmnContext {
  inputs: string[]
  outputs:string[]
  inputTypes: DmnFieldType[]
  outputTypes: DmnFieldType[]
}
