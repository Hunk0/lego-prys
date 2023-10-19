import React from 'react'
import {OBJModel} from 'react-3d-viewer'
import explorerobj from '../files/models/explorador.obj'

function ElementData({filename}) {
  return (
    <div>
        <OBJModel 
            src={require(`../files/models/${filename}`)} 
            texPath=""
        />
    </div>
  )
}

export default ElementData