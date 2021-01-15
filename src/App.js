
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import templatesConfig from './config/templates.json';
import { initTemplate, compile } from './resumark';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";

class App extends React.Component {
  state = {
    content: "",
    template: ""
  }

  componentDidMount = async () => {
    const config = templatesConfig.DevResume;
    const dir = process.env.PUBLIC_URL + '/templates/';
   
    let resp = await fetch(dir + config.name + '/default.rmk');
    let content = await resp.text();
    let template = await initTemplate(config, dir);

    this.setState({
      content: content,
      template: template
    })
  }

  setContent = (content) => {
    console.log(content)
    this.setState({
      content: content
    })
  }

  render = () => {
    return (
      <div className="container-fluid">
        <div className="d-flex" style={{height: "100vh"}}>
          <div className="flex-fill">
            <AceEditor
              theme="github"
              className="h-100 w-100"
              onChange={this.setContent}
              value={this.state.content}
              editorProps={{ $blockScrolling: true }}
              fontSize={16}
              showPrintMargin={false}
              highlightActiveLine={true}
              wrapEnabled={true}
              setOptions={{
                showLineNumbers: true,
                tabSize: 2,
              }}
            ></AceEditor>
          </div>
          <iframe className="h-100" style={{width: '8.5in'}} frameBorder={0} srcDoc={compile(this.state.content, this.state.template)} title="preview"></iframe>
        </div>
      </div>  
    )
  }
}

export default App;
