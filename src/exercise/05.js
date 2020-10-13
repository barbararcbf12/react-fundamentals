// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

//ANSWER EXTRA CREDIT 1
// function Box({child, className = '', styles, ...otherProps}){
//   return <div className={`box ${className}`} style={{fontStyle: 'italic', ...styles}} {...otherProps} >{child}</div>
// }

// function App() {
  // const smallBox = <div>small lightblue box</div>
  // const mediumBox = <div>medium pink box</div>
  // const largeBox = <div>large orange box</div>
//   return (
//     <div>
//       <Box className={'box--small'} styles={{backgroundColor: 'lightblue'}}>{smallBox}</Box>
//       <Box className={'box--medium'} styles={{backgroundColor: 'pink'}}>{mediumBox}</Box>
//       <Box className={'box--large'} styles={{backgroundColor: 'orange'}}>{largeBox}</Box>
//     </div>
//   )
// }

//ANSWER EXTRA CREDIT 2
function Box({size, style, className = '', children, ...otherProps}){
  const sizeClassName = size ? `box--${size}` : ''
  return size==='small' ? (
    <div 
     className={`box ${className} ${sizeClassName}`} 
     style={{fontStyle: 'italic', ...style}} 
     {...otherProps}
    >{children}</div>
  ) : 
  size==='medium' ? (
    <div 
      className={`box ${className} ${sizeClassName}`} 
      style={{fontStyle: 'italic', ...style}} 
      {...otherProps}
    >{children}</div>
  ):(
    <div 
      className={`box ${className} ${sizeClassName}`} 
      style={{fontStyle: 'italic', ...style}} 
      {...otherProps}
    >{children}</div>
  )
}

function App() {
  const smallBox = 'small lightblue box'
  const mediumBox = 'medium pink box'
  const largeBox = 'large orange box'
  return (
    <div>
      <Box size='small' style={{backgroundColor: 'lightblue'}}>{smallBox}</Box>
      <Box size='medium' style={{backgroundColor: 'pink'}}>{mediumBox}</Box>
      <Box size='large' style={{backgroundColor: 'lightgreen'}}>{largeBox}</Box>
    </div>
  )
}

export default App
