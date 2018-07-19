import React from 'react';
import {printStyles} from '../utils/style-formatter';

export const CssSnippet = ({styles}) => {
  return (
    <code
      dangerouslySetInnerHTML={
        {
          __html: printStyles(JSON.stringify(styles))
        }}
      >
    </code>
  )
}
