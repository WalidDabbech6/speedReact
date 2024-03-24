import {useEffect, useState} from "react"
import {useResolvedPath} from "react-router-dom"

const Content = ({ children }) => {
  const match =  useResolvedPath("").pathname;
  const animationEndClass = "grid-animateContent-finished"
  const [cssClassesState, setCssClassesState] = useState([
    "grid-animateContent",
    animationEndClass
  ])

  useEffect(() => {
    const fullClasses = [...cssClassesState]
    const startAnimation = fullClasses.filter(el => el !== animationEndClass)
    setCssClassesState(fullClasses)

    return () => {
      if (document.getElementById("kt_content")){
        document.getElementById("kt_content").scrollTo(0,0)
      }
      setCssClassesState(startAnimation)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.url])

  return children
}


export default Content
