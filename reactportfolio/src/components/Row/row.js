import React from "react"

 function Row(props) {
   return <div className={'col-12 ${props.classes}'}>{props.children}</div>
 }

 export default Row;