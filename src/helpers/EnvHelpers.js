import  { isEmpty } from "lodash"

export const getEnv = (str) => {

  if (!isEmpty(window._ENV_)) {
    return window._ENV_[str]
  }

  return import.meta.env[str]
}
