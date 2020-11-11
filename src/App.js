import React from 'react';
import CodeEditor from './editor/code-editor'
import SceneEditor from './editor/scene-editor'
import '@annotationhub/react-golden-layout/dist/css/goldenlayout-base.css';
import '@annotationhub/react-golden-layout/dist/css/themes/goldenlayout-dark-theme.css';
import { GoldenLayoutComponent } from '@annotationhub/react-golden-layout';

const appStyle = {
  height: '100%',
}

const shaders = {vertexShader: '', fragmentShader: ''}
const uniforms = {}
const attributes = {}

function App() {
  return (<div className="app" style={appStyle}>
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
                component: () => <CodeEditor text={shaders.vertexShader} />,
                title: 'Vertex Shader'
              },{
                component: () => <CodeEditor text={shaders.fragmentShader} />,
                title: 'Fragment Shader'
              }]
            }]
          }]
        }}
        // (Optional) Set up auto-resizing. Layout will resize when the window resizes.
        autoresize={true}
        // (Optional) (Milliseconds) Debounce resize to prevent excessive re-renders.
        debounceResize={100}
      />
  </div>);
}

export default App;
