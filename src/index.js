import React from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import "./index.less"

const ReactHighMark = ({source}) => {
  const renderer = new marked.Renderer()
  console.log(renderer)
  marked.setOptions({
    renderer,
    highlight: (code) => hljs.highlightAuto(code).value,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  })
  let htmlCode = marked(source)
  return(
    <div className="reactBox">
      <div dangerouslySetInnerHTML={{__html: htmlCode}} ></div>
    </div>
  )
}

export default ReactHighMark