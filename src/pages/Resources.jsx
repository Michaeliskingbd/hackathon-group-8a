import React from 'react'
import { PDF_ROLE_TO_HTML_ROLE } from 'react-pdf/src/shared/constants.js';

const Resources = () => {
  return (
    <div>
        <h1>PDF Viewer</h1>

        <iframe className='lg:w-[100%] w-fit' src="public/html,css,javascript.pdf" frameborder="0" width="100%" height="600px"></iframe>
    </div>
  )
}

export default Resources;