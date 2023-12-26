import React, { useState } from "react";
import "./App.css";
import { convertMarkupToHtml } from "./services/api";
import { CopyBlock, dracula } from 'react-code-blocks';
var showdown = require("showdown");

function App() {
  const [markupValue, setMarkupValue] = useState<any>("");
  const [previewMode, setPreviewMode] = useState<any>(true);
  const converter = new showdown.Converter();
  const handleValueChange = (event: any) => {
    let html = converter.makeHtml(event.target.value);
    if (html.length > 0) {
      let markup = convertMarkupToHtml(html);
      markup.then((res: any) => {
        console.log(res);
        setMarkupValue(res["message"]["html"]);
      });
    }else{
      setMarkupValue(null)
    }
  };

  return (
    <div className="App">
      <div className="container py-0">
        <div className="navbar">
          <div className="navbar-container">
            <a className="navbar-brand">Markdown Converter</a>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">
            <textarea
              style={{
                width: "98%",
                height: "98%",
                overflowY: "scroll",
                border: "none",
                resize: "none",
                paddingLeft: "10px",
                paddingTop: "10px",
              }}
              placeholder="Start typing your markup"
              onChange={handleValueChange}
            ></textarea>
          </div>
          <div className="flex-item no-border">
            <div style={{ textAlign: "left",  overflowY: "scroll", }}>
              <div>
                <ul className="tabs">
                  <li className="tab-item">
                    <a
                      className={previewMode ? "active" : ""}
                      onClick={() => setPreviewMode(true)}
                    >
                      Preview
                    </a>
                  </li>
                  <li className="tab-item">
                    <a
                      className={previewMode ? "" : "active"}
                      onClick={() => setPreviewMode(false)}
                    >
                      Output
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className=""
              style={{
                height: "600px",
                overflowY: "scroll",
                textAlign: "left",
                borderTop: "1px solid #ccc",
              }}
            >
              {previewMode && (
                <div dangerouslySetInnerHTML={{ __html: markupValue }} style={{paddingLeft: '10px'}}></div>
              )}
              {!previewMode && (
                 <CopyBlock
                 codeBlockStyle={{height: '600px'}}
                 text={markupValue}
                 language={'html'}
                 showLineNumbers={true}
                 theme={dracula}
               />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
