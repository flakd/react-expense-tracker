import {useState} from 'react';
import ComboDropdown from '../UI/ComboDropdown';

const CategoryComboDropdown = (props) => {
  const [category, setCategory] = useState('Choose One...');
  //const categories = props.categories;

  const categories = [
    {id: 0, name: 'Toiletries'},
    {id: 1, name: 'Electronics'},
    {id: 2, name: 'Insurance'},
    {id: 3, name: 'Furniture'},
    {id: 4, name: 'Utilities'},
    {id: 5, name: 'Groceries'},
    {id: 6, name: 'Pharmacy'},
    {id: 7, name: 'Doctors'},
    {id: 8, name: 'Auto'},
    {id: 9, name: 'Internet'},
    {id: 10, name: 'Entertainment'},
    {id: 11, name: 'Travel'},
    {id: 12, name: 'Exercise'},
  ];
  console.log('categories = ', categories);
  const comboChangeHandler = (e) => {};
  return (
    <div>
      {
        <ComboDropdown
          name='category'
          value={category}
          onComboChange={comboChangeHandler}
          options={categories}
        />
      }
    </div>
  );
};
export default CategoryComboDropdown;
