import {useState} from 'react';
import './ComboDropdown.css';
import inlineStyles from './ComboDropdown.inlineStyles';

const ComboDropdown = (props) => {
  const [isComboOpen, setIsComboOpen] = useState(false);
  const [category, setCategory] = useState('');
  let filteredOptions = [];

  const clickHandler = (e) => {
    setIsComboOpen(!isComboOpen);
  };
  const comboTextBlurHandler = (e) => {};
  const onDropdownBlurHandler = (e) => {
    setIsComboOpen(false);
  };
  const comboTextChangeHandler = (e) => {
    setCategory(e.target.value);
  };
  const optionClickHandler = (e) => {
    setIsComboOpen(false);
    setCategory(e.target.innerHTML);
  };
  filteredOptions = props.options.filter((option) =>
    option.name.toLowerCase().startsWith(category.toLowerCase())
  );

  return (
    <div
      className='new-expense__control'
      style={{position: 'relative'}}
    >
      <label htmlFor='category'>Category</label>
      <input
        className='dropdown'
        style={inlineStyles.textInput(isComboOpen)}
        id='category'
        type='text'
        value={category}
        onChange={comboTextChangeHandler}
        onBlur={comboTextBlurHandler}
        /*onKeyDown={comboTextEnterKeyDownHandler} */
      />
      <button
        className='dropdown'
        /* I need the following inline to override the styles that get 
        inherited, but I don't know how to list the duplicated styles 
        only once - I'll try making a var/const above and using a 
        condition there  */
        style={inlineStyles.dropdownButton(isComboOpen)}
        onClick={clickHandler}
      >
        &#x25BC;
      </button>
      {isComboOpen && (
        <div
          tabIndex='-1'
          className='dropdown'
          style={inlineStyles.dropdown}
          onBlur={onDropdownBlurHandler}
        >
          {filteredOptions.map((option) => (
            <div
              className='option'
              key={option.id}
              onClick={optionClickHandler}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComboDropdown;
