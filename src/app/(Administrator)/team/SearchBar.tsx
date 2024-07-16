import { FaSearch } from "react-icons/fa";
// SearchBar component with clickable search logo inside input
export default function SearchBar() {
  return (
    <div className="flex items-center ml-auto relative">
      <div className="relative">
        <input
          type="text"
          className=" bg-neutral-200 font-inter border border-black px-32 py-1 rounded-md pl-8"
          placeholder="Cari Anggota Divisi"
        />
        <a
          href="/search"
          className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 hover:text-black"
        >
          {/* Use the anchor tag to wrap the search logo */}
          <FaSearch />
        </a>
      </div>
    </div>
  );
}
