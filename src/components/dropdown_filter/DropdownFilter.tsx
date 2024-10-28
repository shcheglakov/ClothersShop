import { useState } from "react";
import { IDropdownFilter } from "./DropdownFilter-Types";
import styles from './DropdownFilter.module.scss';

const DropdownFilter = ({ title, options, onSelect }: IDropdownFilter) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
      };
    
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

  return (
    <div className={styles.dropdown_block}>
      <button onClick={toggleDropDown}>
        {selectedOption || title}
      </button>
      {isOpen && (
        <ul>
          <li onClick={() => handleOptionClick('')}>
            ✖ 
          </li>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownFilter
