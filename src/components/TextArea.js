import React from 'react';

const TextArea = (props) => (
  <div className="">
    <label className="">{props.title}
      <textarea
        className=""
        style={props.resize ? null : {resize: 'none'}}
        name={props.name}
        rows={props.rows}
        value={props.content}
        onChange={props.controlFunc}
        placeholder={props.placeholder} />
    </label>
  </div>
);

TextArea.propTypes = {
  title: React.PropTypes.string.isRequired,
  rows: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  content: React.PropTypes.string,
  resize: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  controlFunc: React.PropTypes.func.isRequired
};

export default TextArea;
