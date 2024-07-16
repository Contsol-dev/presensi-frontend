import { useState } from "react";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

import Aktif, {Anggota, anggotaBaru} from './Aktif';

interface FilterProps {
  updatePilihan1: (stat: string) => void;
  updatePilihan2: (stat: string) => void;
}

interface CheckboxData {
  list : Anggota;
}

export default function Filter({updatePilihan1, updatePilihan2}: FilterProps) {
  const handlePilihan1Change = () =>{
    const stat = 'sunting'
    updatePilihan1(stat)
  }

  const handlePilihan2Change = () =>{
    const stat = 'nilai'
    updatePilihan2(stat)
  }

  const dropdownItems = ["Item 1", "Item 2", "Item 3"];

  // interface CheckboxData {
  //   id: string;
  //   label: string;
  //   nama: string;
  //   status: boolean;
  //   project: string;
  // }

  const [initialCheckboxData, setInitialCheckboxData] = useState<CheckboxData[]>(anggotaBaru.map(item => ({ list: item })));

  const [checkAll, setCheckAll] = useState(false);
  const [checkboxData, setCheckboxData] = useState(initialCheckboxData);
  const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>(() => {
    const initialState: { [key: string]: boolean } = {};
    initialCheckboxData.forEach((checkbox) => {

    initialState[checkbox.list.id] = false;
    });

    return initialState;
  });

  const handleCheckAllChange = () => {
    const bulkActionElement = document.getElementById("bulkAction") as HTMLSelectElement | null;
    const selectedProject = bulkActionElement?.value || "";
    setCheckAll(!checkAll);
    setCheckboxStates((prevCheckboxStates) => {
      const updatedStates: { [key: string]: boolean } = {};

      checkboxData.forEach((checkbox) => {
        if (checkbox.list.project === selectedProject || selectedProject === "") {
          updatedStates[checkbox.list.id] = !checkAll;
        } else {
          updatedStates[checkbox.list.id] == checkbox.list.status || false;
        }
      });

      return updatedStates;
    });
  };

  const handleCheckboxChange = (checkboxName: string) => {
    setCheckboxStates((prevCheckboxStates) => ({
      ...prevCheckboxStates,
      [checkboxName]: !prevCheckboxStates[checkboxName],
    }));
  };

  const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProject = event.target.value;

    const updatedCheckboxData = initialCheckboxData
      .map((checkboxData) => {

        const status = checkboxStates[checkboxData.list.id] || false;
        return { ...checkboxData, status };
      })
      .filter((checkboxData) => selectedProject === "" || checkboxData.list.project === selectedProject);
    
    setCheckboxData(updatedCheckboxData);

    if (!checkAll) {
      setCheckboxStates((prevCheckboxStates) => {
        const updatedStates: { [key: string]: boolean } = {};

        updatedCheckboxData.forEach((checkbox) => {
          updatedStates[checkbox.list.id] = checkbox.status;
        });

        return updatedStates;
      });
    }
  };

  const handleApplyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const bulkActionElement = document.getElementById("bulkAction") as HTMLSelectElement | null;

    if (bulkActionElement) {
      const bulkActionValue = bulkActionElement.value;

      if (bulkActionValue === "1" || bulkActionValue === "2") {
        const isAnyCheckboxChecked = Object.values(checkboxStates).some((isChecked) => isChecked);

        if (isAnyCheckboxChecked) {
          const updatedCheckboxData = checkboxData.map((checkboxData) => {
            if (checkboxStates[checkboxData.list.id]) {
              return {
                ...checkboxData,
                status: bulkActionValue === "1",
              };
            }
            return checkboxData;
          });

          setCheckboxData(updatedCheckboxData);

          const updatedCheckboxStates: { [key: string]: boolean } = {};
          updatedCheckboxData.forEach((checkbox) => {
            updatedCheckboxStates[checkbox.list.id] = checkbox.list.status;
          });

          setCheckboxStates(updatedCheckboxStates);

          console.log(updatedCheckboxData);
        }
      }
    }
  };

  return (
    <div>

      <div className="relative items-center justify-between">
        <div className="absolute mb-3 right-0">
          <SearchBar />
        </div>
      </div>

      <div className="flex flex-col border-2 border-solid border-[#404040] rounded-lg mt-14">

        <div>
          <p className="bg-[#404040] p-3 rounded-t text-[#FFFFFFCC]">Filter Data Anggota</p>
        </div>
  
        <div className="flex px-3 py-4 items-center">
          <input className="rounded bg-maroon-500 text-white w-3 h-3 accent-slate-600" type="checkbox" id="checkall" checked={checkAll} onChange={handleCheckAllChange} />
          <select className="ml-3 p-2 w-[12rem] font-inter text-[#404040] rounded border border-[#404040] bg-neutral-200 " placeholder="Bulk Action" name="" id="bulkAction" defaultValue="">
            <option value="" disabled hidden>Bulk Action</option>
            <option className="" value="1">Tandai Selesai</option>
            <option className="" value="2">Tandai Belum Selesai</option>
          </select>
          <button className="ml-3 p-1.5 w-auto font-inter text-[#404040] rounded border border-[#404040] bg-neutral-200 " onClick={(e) => handleApplyClick(e)}>
            Apply
          </button>
          <p className="ml-3 text-[#404040]">Project :</p>
          <select className="ml-3 p-2 w-[12rem] font-inter text-[#404040] rounded border border-[#404040] bg-neutral-200 " placeholder="Pilih Project" name="" id="" defaultValue="" onChange={handleProjectChange}>
            <option value="" disabled hidden>Pilih Project</option>
            <option value="Titip Sini">Titip Sini</option>
            <option value="Presensi">Presensi</option>
          </select>
        </div>
      </div>

      <div className="card flex flex-row flex-wrap mt-4 gap-3 mb-5">
        {checkboxData.map((checkboxData) => (
          <div key={checkboxData.list.id} className="relative basis-1/4 grow border-2 border-solid border-black rounded-b-lg">
            <div className="flex bg-[#404040]  text-[#FFFFFFCC]   hover:bg-[rgb(74,7,27)]">
              <div className="flex pr-15 p-3 items-center">
                <input className="rounded bg-maroon-500 text-white w-3 h-3 accent-slate-600" type="checkbox" id={checkboxData.list.id} checked={checkboxStates[checkboxData.list.id]} onChange={() => handleCheckboxChange(checkboxData.list.id)} />
                <p className="ml-3">{checkboxData.list.NIP}</p>
              </div>
              {checkboxData.list.status && (
                <div className="checklist top-0 right-0 z-30 absolute">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.00061L37 36V34.8334V1L33.5 1.00061H2Z" fill="#15AB1B" stroke="#404040" />
                    <path d="M25.1656 16.4992L20.8906 12.2242L21.9594 11.1555L25.1656 14.3617L32.0469 7.48047L33.1156 8.54922L25.1656 16.4992Z" fill="white" />
                  </svg>
                </div>
              )}
            </div>
            <p className="p-3">{checkboxData.list.nama}</p>
            <div className="p-2 float-right">
              <Dropdown items={dropdownItems} updatePilihan1={handlePilihan1Change} updatePilihan2={handlePilihan2Change}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

