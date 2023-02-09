const inlineStyles = {
  textInput: function (isComboOpen) {
    const defaultStyle = {
      /*       width: '250px',
      height: '36px',
      fontSize: '13pt',
      paddingLeft: '5px', */
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
    lineHeight: '1.5rem',
    Color: 'black',
    width: '318px',
    maxHeight: '250px',
    overFlow: 'scroll',
    marginLeft: '1px',
    position: 'absolute',
    padding: '0px',
    backgroundColor: 'white',
    boxShadow: '1px 1px 0px 0px #E8EDE9',
    zIndex: 2,
  },
  tooltip: {
    backgroundColor: 'white',
    borderRadius: '6px',
    position: 'absolute',
    borderStyle: 'solid',
    height: 'auto',
    width: '180px',
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingBottom: '2%',
    zIndex: 3,
    float: 'right',
    top: '-35px',
    right: '60px',
  },
  reset: {
    /* display: 'inline-block', */
    backgroundColor: 'white',
    color: 'black',
    height: '35px',
    width: '30px',
    padding: '0',
    top: '-4px',
    margin: '0',
    textAlign: 'center',
    /* verticalAlign: 'middle', */
    cursor: 'pointer',
    borderRadius: '0',
    borderStyle: 'none',
  },
  option: {
    width: '285px',
    textAlign: 'left',
    backgroundColor: 'white',
    borderRadius: '3px',
    color: 'black',
    paddingLeft: '5px',
    borderStyle: 'none',
  },
};
export default inlineStyles;
