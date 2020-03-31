import React from 'react';
import '../App.css';

const Editor = (props) => {
    return (
        <div className="col-6">
          <textarea id="text" className="form-control" onChange={props.onChange} value={props.value}/>
        </div>
    );
}

export default Editor;