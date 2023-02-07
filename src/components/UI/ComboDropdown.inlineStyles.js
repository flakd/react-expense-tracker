const inlineStyles = {
  textInput: function (isComboOpen) {
    const defaultStyle = {
      width: '280px',
    };
    let condStyle = {};
    if (isComboOpen) {
      condStyle = {borderRadius: '6px 0px 0px 0px'};
    } else {
      condStyle = {borderRadius: '6px 0px 0px 6px'};
    }
    return {...defaultStyle, ...condStyle};
  },
  dropdownButton: function (isComboOpen) {
    const defaultStyle = {
      height: '36px',
      width: '40px',
      padding: '0px',
    };
    let condStyle = {};
    if (isComboOpen) {
      condStyle = {borderRadius: '0px 6px 0px 0px'};
    } else {
      condStyle = {borderRadius: '0px 6px 6px 0px'};
    }
    return {...defaultStyle, ...condStyle};
  },
  dropdown: {
    lineHeight: '1.2rem',
    Color: 'black',
    width: '318px',
    marginLeft: '1px',
    position: 'absolute',
    paddingLeft: '5px',
    backgroundColor: 'white',
    boxShadow: '1px 1px 0px 0px #E8EDE9',
    zIndex: 2,
  },
};
export default inlineStyles;
