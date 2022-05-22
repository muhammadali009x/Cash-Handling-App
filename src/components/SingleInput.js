import React from 'react'

const SingleInput = (props) => {
  return (
    <div>
      <label className="">{props.title}
        <input
          className=""
          name={props.name}
          type={props.inputType}
          value={props.content}
          onChange={props.controlFunc}
          placeholder={props.placeholder} />
      </label>
    </div>
  )
}

SingleInput.propTypes = {
  inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
  title: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  controlFunc: React.PropTypes.func.isRequired,
  content: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  placeholder: React.PropTypes.string,
};

export default SingleInput
