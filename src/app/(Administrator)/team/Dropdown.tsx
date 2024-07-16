import { useState, useEffect, useRef } from "react";

interface DropdownProps {
  items: string[];
  updatePilihan1: (stat: string) => void;
  updatePilihan2: (stat: string) => void;
}

export default function Dropdown({ items, updatePilihan1, updatePilihan2 }: DropdownProps) {
  const handlePilihan1Change = () =>{
    const stat = 'sunting'
    updatePilihan1(stat)
  }

  const handlePilihan2Change = () =>{
    const stat = 'nilai'
    updatePilihan2(stat)
  }

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button onClick={toggleDropdown} className="text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center relative z-10">
        <span className="mr-1">
          <svg width="7" height="27" viewBox="0 0 7 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.04839" cy="3.04839" r="3.04839" fill="black" />
            <circle cx="3.04839" cy="13.4996" r="3.04839" fill="black" />
            <circle cx="3.04839" cy="23.9507" r="3.04839" fill="black" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-1 py-0 px-0 bg-neutral-200 border-gray-300 rounded shadow z-40 w-600">
          <li className="text-xs py-2 px-4 cursor-pointer hover:bg-gray-100">

            <p onClick={handlePilihan1Change}>Sunting</p>
          </li>
          <li className="text-xs py-2 px-4 cursor-pointer hover:bg-gray-100">
            <p onClick={handlePilihan2Change}>Penilaian</p>
          </li>
          <li className="text-xs text-red-700 py-2 px-4 cursor-pointer hover:bg-gray-100">
            <p>Hapus</p>
          </li>
        </ul>
      )}
    </div>
  );
}

