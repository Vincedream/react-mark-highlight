

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
      <ReactHighMark source={content} style="diablo" />
    </div>
  )
}

export default ContentBox
```

## Options
- `source` - string The Markdown source to parse (**require**)
- `style` - There are two styles to choose from: diablo and fresh. (default: fresh)

## Developing

```bash
git clone git@github.com:Vincedream/react-mark-highlight.git
cd examples/testproject
npm install
npm start
```

## License

MIT © [Vince Hua](https://vince.xin/)