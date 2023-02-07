import {useState} from 'react';

const ComboDropdown = ({props}) => {
  const [value, setValue] = useState(props.value);

  const comboTextChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const comboTextBlurHandler = (e) => {
    checkComboValue(e.target.value);
  };
  const checkComboValue = (value) => {
    let remainingOptions = props.options.filter((option) =>
      value.startsWith(option)
    );
    if (remainingOptions.length === 1) {
      setValue(value);
    }
  };
  const comboTextEnterKeyDownHandler = (e) => {
    //e.key = "Enter"
    console.log(e);
  };
  const comboSelectChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='new-expense__control'>
      <label htmlFor={props.name}>Category</label>
      <input
        id={props.name}
        type='text'
        value={value}
        /*         onChange={comboTextChangeHandler}
        onblur={comboTextBlurHandler}
        onKeyDown={comboTextEnterKeyDownHandler} */
      />
      <div>
        {/*         {props.options.map((option) => (
          <p
            key={option.id}
            onClick={comboSelectChangeHandler}
          >
            {option.name}
          </p>
        ))} */}
      </div>
    </div>
  );
};

export default ComboDropdown;
