import { useState } from "react"

export default function FilterDropdown() {
        
    const [open, setOpen] = useState(false)
    
    const toggleDropdown = () => (
        setOpen(!open)
    )
    
    return(
        <div className="inline-block text-left">
            <div>
            <button onClick={toggleDropdown} type="button" className="inline-flex w-full justify-center gap-x-1.5  bg-grey-500 text-sm font-semibold text-gray-900 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Filter
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            </div>
            {open && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-500 border-2 bg-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                    <div className="py-1" role="none">
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0"><b>Status</b></p>
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><input type="checkbox" /> Hadir</p>
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><input type="checkbox" /> Izin</p>
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><input type="checkbox" /> Tidak Hadir</p>
                    </div>
                    <div className="py-1" role="none">
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2"><b>Shift</b></p>
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><input type="checkbox" /> Shift Pagi</p>
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><input type="checkbox" /> Shift Middle</p>
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><input type="checkbox" /> Shift Siang</p>
                    </div>
                    <div className="py-1" role="none">
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-4"><b>Kantor</b></p>
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><input type="checkbox" /> Kantor 1</p>
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><input type="checkbox" /> Kantor 2</p>
                        <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><input type="checkbox" /> Kantor 4</p>
                    </div>
                </div>
            )}
        </div>
    )
}