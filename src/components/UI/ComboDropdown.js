import {useState} from 'react';
import './ComboDropdown.css';
import inlineStyles from './ComboDropdown.inlineStyles';
import StringHelper from '../../helpers/StringHelper';

const ComboDropdown = (props) => {
  const [isComboOpen, setIsComboOpen] = useState(false);
  const [doesComboMatch, setDoesComboMatch] = useState(false);
  const [value, setValue] = useState('');

  const buttonClickHandler = (e) => {
    setIsComboOpen(!isComboOpen);
  };
  const comboTextBlurHandler = (e) => {
    setTimeout(() => {
      setIsComboOpen(false);
    }, 200);
  };
  const onDropdownBlurHandler = (e) => {
    setIsComboOpen(false);
  };
  const comboTextFocusHandler = (e) => {
    setIsComboOpen(true);
  };
  const comboTextChangeHandler = (e) => {
    let matchVal = e.target.value;
    setValue(matchVal);
    setDoesComboMatch(isMatch(e.target.value));
    console.log('comboTextChange match: ', isMatch(matchVal));
    props.onComboChange(isMatch(matchVal), StringHelper.toTitleCase(matchVal));
  };
  const optionClickHandler = (e) => {
    let matchVal = e.target.innerHTML;
    setIsComboOpen(false);
    setValue(matchVal);
    setDoesComboMatch(true);
    console.log('optionClick match: ', isMatch(matchVal));
    props.onComboChange(isMatch(matchVal), StringHelper.toTitleCase(matchVal));
  };
  const resetClickHandler = (e) => {
    if (value === '') return;
    setIsComboOpen(true);
    setValue('');
  };
  const mouseOverHandler = (e) => {
    e.target.style.backgroundColor = '#40005d';
    e.target.style.color = 'white';
  };
  const mouseOutHandler = (e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black';
  };
  const comboTextEnterKeyDownHandler = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      e.target.value = sortedFilteredOptions[0].name;

      let matchVal = e.target.value;
      setValue(matchVal);
      setDoesComboMatch(true);
      console.log('comboTextEnter match: ', isMatch(matchVal));
      props.onComboChange(
        isMatch(matchVal),
        StringHelper.toTitleCase(matchVal)
      );
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsComboOpen(false);
    }
    console.log(e.key);
  };
  const isMatch = (matchValue) => {
    if (
      props.options
        .map((option) => option.name.toLowerCase())
        .includes(matchValue.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
    return doesComboMatch;
  };
  let filteredOptions = props.options.filter((option) =>
    option.name.toLowerCase().startsWith(value.toLowerCase())
  );
  let sortedFilteredOptions = filteredOptions.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase()
      ? 1
      : b.name.toLowerCase() > a.name.toLowerCase()
      ? -1
      : 0
  );

  return (
    <div className='new-expense__control'>
      <label htmlFor={props.name}>{StringHelper.toTitleCase(props.name)}</label>
      <div style={{position: 'relative'}}>
        {/* why do I have to use inline below as well, when div has no default styling... where is the inheritance coming from? */}
        {!doesComboMatch && value !== '' && (
          <div style={inlineStyles.tooltip}>choose from list only</div>
        )}
        <input
          className='categoryDD'
          style={inlineStyles.textInput(isComboOpen)}
          id={props.name}
          type='text'
          value={value}
          onChange={comboTextChangeHandler}
          onBlur={comboTextBlurHandler}
          onFocus={comboTextFocusHandler}
          onKeyDown={comboTextEnterKeyDownHandler}
        />
        <button
          type='button'
          className='reset'
          style={inlineStyles.reset}
          id='reset'
          onClick={resetClickHandler}
        >
          X
        </button>
        <button
          type='button'
          className='dropdown'
          /* I handle this all in an external file that I import above 
            this allows me to conditionally render these inline styles
            which I need to override the inherited styles*/
          style={inlineStyles.dropdownButton(isComboOpen)}
          onClick={buttonClickHandler}
        >
          &#x25BC;
        </button>
        {isComboOpen && (
          <div
            /* tabindex supposedly allows the div to receive focus and react to onBlur events */
            tabIndex='0'
            className='dropdown'
            style={inlineStyles.dropdown}
            onBlur={onDropdownBlurHandler}
          >
            {sortedFilteredOptions.map((option) => (
              /* why do even these get overriden by inherited styles? */
              <button
                type='button'
                style={inlineStyles.option}
                className='option'
                key={option.id}
                /*tabIndex={option.id + 1}*/
                onClick={optionClickHandler}
                onMouseOver={mouseOverHandler}
                onMouseOut={mouseOutHandler}
              >
                {option.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComboDropdown;
