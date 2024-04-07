/* eslint-disable */

export const combinePathRoutes = ( routeProps = {}, ...routes ) => {

    let combinedRoutes = {}
    for (let i = 0; i < routes.length ; i++){
      combinedRoutes = Object.assign({}, combinedRoutes, Object.keys(routes[i]).reduce((combinePath, key) => {
        combinePath[key] = { ...routes[i][key] }
        Object.keys(routeProps).forEach((prop) => {
          if (combinePath[key].hasOwnProperty(prop)){
            combinePath[key][prop] = routeProps[prop] + combinePath[key][prop]
          }else {
            combinePath[key][prop] = routeProps[prop]
          }
        })
        return combinePath
      }, {}))
    }
  
    return combinedRoutes
  }