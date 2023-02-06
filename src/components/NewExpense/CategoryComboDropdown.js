import {useState} from 'react';
import ComboDropdown from '../UI/ComboDropdown';

const CategoryComboDropdown = () => {
  const [category, setCategory] = useState('');
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
  ];

  const comboChangeHandler = (e) => {};
  return (
    <div>
      <CategoryComboDropdown
        name='category'
        value={category}
        onComboChange={comboChangeHandler}
        options={categories}
      />
    </div>
  );
};
export default CategoryComboDropdown;
