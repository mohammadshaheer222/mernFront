import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Filtering = ({ min, max, handlePriceRange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative w-full sm:w-[20%] pt-4">
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-center sm:justify-between cursor-pointer gap-x-2 py-2 px-2 bg-black text-white tracking-wider sm:bg-transparent sm:border-2 sm:text-black"
      >
        {max < 200 ? `$${max}` : "Filter"}  <MdOutlineKeyboardArrowDown />
      </div>

      {isOpen && (
        <form className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-full">
          <label >
            Filter by price: ${min} - ${max}
          </label>
          <input
            className="w-full bg-black"
            type="range"
            min="0"
            max="200"
            step="50"
            value={max}
            onChange={handlePriceRange}
          />
        </form>
      )}
    </div>
  );
};

export default Filtering;
