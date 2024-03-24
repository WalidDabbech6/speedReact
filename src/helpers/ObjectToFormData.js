import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'
import isString from "lodash/isString"
//import isNumber from 'lodash/isNumber'
const FILE_ALREADY_UPLOADED = "file@file_already_uploaded"

const isBlob = (value) => value instanceof Blob
const isFile = (value) => value instanceof File
const isBoolean = (value) => typeof value === 'boolean'
const isNull = (value) => value === null
const isArrayContainesString = (value) => isArray(value) ? value.every((val) => isString(val)) : false
const isArrayContainesFile = (value) => isArray(value) ? value.every((val) => isFile(val) ||  isString(val)) : false

const isUndefined = (value) => value === undefined

const processData = (value, options, formData, parent) => {
  const processedKey = parent || ''

  if (value === FILE_ALREADY_UPLOADED){
    return
  }

  if (isNull(value) || isUndefined(value)) {
    if (!options.excludeNull) {
      formData.append(processedKey, '')
    }
    return
  }

  if (isFile(value)) {
    formData.append(processedKey, value)
    return
  }

  if (isBlob(value)) {
    formData.append(processedKey, value)
    return
  }

  if (isArrayContainesString(value) || isArrayContainesFile(value)) {
    value.forEach((item) => {
      const computedKey = `${processedKey}`
      processData(item, options, formData, computedKey)
    })
    return
  }

  if (isArray(value)) {
    value.forEach((item, index) => {
      const computedKey = `${processedKey}[${options.arrayIndexes ? index : ''}]`
      processData(item, options, formData, computedKey)
    })
    return
  }

  if (isObject(value)) {
    Object.entries(value).forEach(([key, data]) => {
      const computedKey = parent ? `${parent}[${key}]` : key
      processData(data, options, formData, computedKey)
    })
    return
  }

  if (isBoolean(value)) {
    formData.append(processedKey, value ? 'true' : 'false')
    return
  }

  formData.append(processedKey, value)
}

const defaultOptions = {
  arrayIndexes: true,
  excludeNull: true,
}

export const objectToFormData = (payload, options = {}, formData = new FormData()) => {
  if (!payload) return formData
  
  options = Object.assign(defaultOptions, options)

  processData(payload, options, formData)

  return formData
}
