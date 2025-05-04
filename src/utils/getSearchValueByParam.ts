export const getSearchValueByParam = (param: string, values: string[], defaultValue: string) => {
  return values.find(item => item.toLowerCase() === param.toLowerCase()) ?? defaultValue
}
