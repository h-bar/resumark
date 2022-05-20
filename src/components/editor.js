
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";

export const ResumarkEditor = (props) => {
    return (
        <div className="flex-fill">
            <AceEditor
                theme="github"
                className="h-100 w-100"
                onChange={props.onChange}
                value={props.content}
                editorProps={{ $blockScrolling: true }}
                fontSize={16}
                showPrintMargin={false}
                highlightActiveLine={true}
                wrapEnabled={true}
                setOptions={{
                    showLineNumbers: true,
                    tabSize: 2,
            }}/>
        </div>
)}