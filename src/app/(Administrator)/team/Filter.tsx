import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import Invoice from "./invoice";
import { IoIosArrowBack } from "react-icons/io";

import Aktif from "./Aktif";
import axios from "axios";

interface FilterProps {
  updatePilihan1: (username: string, stat: string) => void;
  updatePilihan2: (stat: string, username: string, divisi_id: number) => void;
  namaDivisi: string;
}

interface AnggotaData {
  username: string;
  nama: string;
  nip: string;
  nilai_id: number;
  divisi_id: number;
}

interface CheckboxData {
  list: AnggotaData;
}

export default function Filter({
  updatePilihan1,
  updatePilihan2,
  namaDivisi,
}: FilterProps) {
  const handlePilihan1Change = (username: string) => {
    updatePilihan1(username, "sunting");
  };
  const [anggota, setAnggota] = useState<AnggotaData[]>([]);
  const [cekInvoice, setCekInvoice] = useState(false);
  const [username, setUsername] = useState("");
  const [filter, setFilter] = useState(true);
  const handleInvoice = () => {
    setFilter(!filter);
    setCekInvoice(!cekInvoice);
  };
  const handleInvoiceClick = (username: string) => {
    setUsername(username);
    handleInvoice();
  };

  const handlePilihan2Change = (
    stat: string,
    username: string,
    divisi_id: number
  ) => {
    stat = "nilai";
    updatePilihan2(stat, username, divisi_id);
  };

  const fetchAnggota = async () => {
    try {
      if (namaDivisi != "all") {
        const response = await axios.post(
          "http://127.0.0.1:8000/admin/divisi/anggota",
          {
            nama_divisi: namaDivisi,
          }
        );
        setAnggota(response.data.member);
        console.log(response.data.member);
      } else {
        const response = await axios.get(
          "http://127.0.0.1:8000/admin/all-team"
        );
        setAnggota(response.data.member);
        console.log(response.data.member);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnggota();
  }, []);

  const dropdownItems = ["Item 1", "Item 2", "Item 3"];

  const [initialCheckboxData, setInitialCheckboxData] = useState<
    CheckboxData[]
  >(anggota.map((item) => ({ list: item })));

  const [checkAll, setCheckAll] = useState(false);
  const [checkboxData, setCheckboxData] = useState(initialCheckboxData);
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>(() => {
    const initialState: { [key: string]: boolean } = {};
    initialCheckboxData.forEach((checkbox) => {
      initialState[checkbox.list.nip] = false;
    });

    return initialState;
  });

  const handleCheckAllChange = () => {
    const bulkActionElement = document.getElementById(
      "bulkAction"
    ) as HTMLSelectElement | null;
    // const selectedProject = bulkActionElement?.value || "";
    setCheckAll(!checkAll);
    setCheckboxStates((prevCheckboxStates) => {
      const updatedStates: { [key: string]: boolean } = {};

      checkboxData.forEach((checkbox) => {
        if (checkbox.list.nilai_id != null) {
          updatedStates[checkbox.list.nip] = !checkAll;
        } else {
          updatedStates[checkbox.list.nip] == false;
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
        const status = checkboxStates[checkboxData.list.nip] || false;
        return { ...checkboxData, status };
      })
      .filter(
        (checkboxData) =>
          selectedProject === "" || checkboxData.list.nilai_id === null
      );

    setCheckboxData(updatedCheckboxData);

    if (!checkAll) {
      setCheckboxStates((prevCheckboxStates) => {
        const updatedStates: { [key: string]: boolean } = {};

        updatedCheckboxData.forEach((checkbox) => {
          updatedStates[checkbox.list.nip] = checkbox.status;
        });

        return updatedStates;
      });
    }
  };

  const handleApplyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const bulkActionElement = document.getElementById(
      "bulkAction"
    ) as HTMLSelectElement | null;

    if (bulkActionElement) {
      const bulkActionValue = bulkActionElement.value;

      if (bulkActionValue === "1" || bulkActionValue === "2") {
        const isAnyCheckboxChecked = Object.values(checkboxStates).some(
          (isChecked) => isChecked
        );

        if (isAnyCheckboxChecked) {
          const updatedCheckboxData = checkboxData.map((checkboxData) => {
            if (checkboxStates[checkboxData.list.nip]) {
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
            updatedCheckboxStates[checkbox.list.nip] = true;
          });

          setCheckboxStates(updatedCheckboxStates);

          console.log(updatedCheckboxData);
        }
      }
    }
  };

  return (
    <>
      {filter && (
        <div className="w-100">
          <div className="flex flex-col border-2 border-solid border-[#404040] rounded-lg mt-14">
            <div>
              <p className="bg-[#404040] p-3 rounded-t text-[#FFFFFFCC]">
                Filter Data Anggota
              </p>
            </div>

            <div className="flex px-3 py-4 items-center">
              <input
                className="rounded bg-maroon-500 text-white w-3 h-3 accent-slate-600"
                type="checkbox"
                id="checkall"
                checked={checkAll}
                onChange={handleCheckAllChange}
              />
              <select
                className="ml-3 p-2 w-[12rem] font-inter text-[#404040] rounded border border-[#404040] bg-neutral-200 "
                placeholder="Bulk Action"
                name=""
                id="bulkAction"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Bulk Action
                </option>
                <option className="" value="1">
                  Tandai Selesai
                </option>
                <option className="" value="2">
                  Tandai Belum Selesai
                </option>
              </select>
              <button
                className="ml-3 p-1.5 w-auto font-inter text-[#404040] rounded border border-[#404040] bg-neutral-200 "
                onClick={(e) => handleApplyClick(e)}
              >
                Apply
              </button>
            </div>
          </div>

          <div className="card flex flex-row flex-wrap mt-4 gap-3 mb-5">
            {anggota.map((item) => (
              <div
                key={item.nip}
                className="relative basis-1/4 grow border-2 border-solid border-black rounded-b-lg"
              >
                <div className="flex bg-[#404040]  text-[#FFFFFFCC]   hover:bg-[rgb(74,7,27)]">
                  <div className="flex pr-15 p-3 items-center">
                    <input
                      className="rounded bg-maroon-500 text-white w-3 h-3 accent-slate-600"
                      type="checkbox"
                      id={item.nip}
                      // checked={checkboxStates[checkboxData.list.nip]}
                      // onChange={() => handleCheckboxChange(checkboxData.list.nip)}
                    />
                    <p className="ml-3">{item.nip}</p>
                  </div>
                  {item.nilai_id != null && (
                    <div className="checklist top-0 right-0 z-30 absolute">
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 1.00061L37 36V34.8334V1L33.5 1.00061H2Z"
                          fill="#15AB1B"
                          stroke="#404040"
                        />
                        <path
                          d="M25.1656 16.4992L20.8906 12.2242L21.9594 11.1555L25.1656 14.3617L32.0469 7.48047L33.1156 8.54922L25.1656 16.4992Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="p-3">{item.nama}</p>
                <div className="p-2 float-right">
                  <Dropdown
                    items={dropdownItems}
                    updatePilihan1={handlePilihan1Change}
                    updatePilihan2={handlePilihan2Change}
                    handleInvoice={handleInvoiceClick}
                    username={item.username}
                    divisi_id={item.divisi_id}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {cekInvoice && (
        <div>
          <p
            // className="absolute top-[310px] left-2 cursor-pointer"
            onClick={handleInvoice}
          >
            <IoIosArrowBack />
          </p>
          <Invoice username={username} />
        </div>
      )}
    </>
  );
}
