import React, { useState } from 'react';
import CodeEditor from './editor/code-editor'
import SceneEditor from './editor/scene-editor'
import '@annotationhub/react-golden-layout/dist/css/goldenlayout-base.css';
import '@annotationhub/react-golden-layout/dist/css/themes/goldenlayout-dark-theme.css';
import { GoldenLayoutComponent } from '@annotationhub/react-golden-layout';

const layoutStyle = {
  height: 'calc(100vh - (56px))'
}

const shaders = {vertexShader: '', fragmentShader: ''}
const uniforms = {}
const attributes = {}
const shaderMat = ''
const bufferedGeometry = ''

function LayoutRoot() {
  const [layoutManager, setLayoutManager] = useState(undefined);

  return (
    <div style={layoutStyle}>
      <GoldenLayoutComponent
          config={{
            content: [{
              type: 'row',
              content:[{
                component: () => <SceneEditor shaders={shaders} variables={{uniforms, attributes}}/>,
                  title: 'Preview'
              }, {
                type: 'column',
                content:[{
                  type: 'stack',
                  content:[{
                    component: () => <CodeEditor text={shaders.vertexShader} />,
                    title: 'Vertex Shader'
                  },{
                    component: () => <CodeEditor text={shaders.fragmentShader} />,
                    title: 'Fragment Shader'
                  }]
                },{
                  type: 'stack',
                  content:[{
                    component: () => <CodeEditor text={shaderMat} />,
                    title: 'Material'
                  },{
                    component: () => <CodeEditor text={bufferedGeometry} />,
                    title: 'Geometry'
                  }]
                }]
              }]
            }]
          }}
          // (Optional) Set up auto-resizing. Layout will resize when the window resizes.
          autoresize={true}
          // (Optional) (Milliseconds) Debounce resize to prevent excessive re-renders.
          debounceResize={100}
          onLayoutReady={setLayoutManager}
        />
      </div>);
}

export default LayoutRoot;
