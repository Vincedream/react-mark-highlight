## Installing
```
npm install react-mark-highlight -save
```
## Basic usage
```
import React from 'react'
import ReactHighMark from 'react-mark-highlight'

const ContentBox = ({}) => {
  const content = `## Nice to meet you!`
  return(
    <div>
      <ReactHighMark source={content} />
    </div>
  )
}

export default ContentBox
```
