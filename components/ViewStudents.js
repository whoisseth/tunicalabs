import classnames from 'classnames'
import { HiDownload } from 'react-icons/hi'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { selectData } from './data'
const commonInputStyles = 'w-32 bg-gray-200 rounded outline-none py-1'
const tableStyle = '-ml-6 grid place-items-center grid-cols-7 gap-4 align-center  '

export default function ViewStudents({ hidden }) {
  return (
    <div className={classnames({ hidden: hidden })}>
      <h2 className="text-red-400 font-semibold mb-4 ">View Students </h2>
      <Search />
      <Table />
      <PaginateButtons />
      <button className="flex gap-2 bg-brand text-white rounded px-3 py-2 items-center">
        <span>Download Excel</span>
        <HiDownload />
      </button>
    </div>
  )
}
function Search() {
  return (
    <div className="flex items-center gap-4 flex-wrap mb-8 justify-between">
      <Input placeholder="Name" />
      <Input placeholder="Age" type="number" />
      {selectData.map((data, index) => (
        <InputSelect key={index} placeholder={data.name} options={data.data} />
      ))}
      {/* <InputSelect placeholder="Class" options={standards[0].class} />
      <InputSelect placeholder="Division" options={divisions[0].division} /> */}
      <button className=" rounded bg-brand text-white py-1 w-32">Search</button>
    </div>
  )
}

function Input({ placeholder, type = 'text' }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={classnames(' px-2  border', commonInputStyles)}
    />
  )
}
function InputSelect({ placeholder, options }) {
  return (
    <select
      placeholder="schools "
      className={classnames('border capitalize', commonInputStyles)}
    >
      <option>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

function Table() {
  return (
    <div className="rounded overflow-hidden mb-4 ">
      <header
        className={classnames(' px-4 bg-brand text-white  py-3', tableStyle)}
      >
        <div>ID</div>
        <div>Name</div>
        <div>School</div>
        <div>Class</div>
        <div>Division</div>
        <div>Status</div>
        <div />
      </header>
      <div className="border-2 border-t-0  pb-2">
        <DataRow />
        <DataRow />
        <DataRow />
      </div>
    </div>
  )
}
function DataRow() {
  return (
    <div className={classnames(' gap-10 px-4  py-3', tableStyle)}>
      <div>1</div>
      <div>Utkarsh</div>
      <div>U.P School</div>
      <div>6</div>
      <div>B</div>
      <div>Active</div>
      <div>
        <div className="flex gap-2 text-blue-400">
          <button className="underline"> Edit</button>
          <button className="underline text-red-400">Delete </button>
        </div>
      </div>
    </div>
  )
}

function PaginateButtons() {
  return (
    <div className=" justify-end flex gap-2 mb-4">
      <FiChevronLeft />
      <div className="flex gap-2">
        <div className="bg-brand text-white font-semibold h-5 w-5 flex items-center justify-center rounded">
          1
        </div>
        <div className="bg-gray-300 text-black font-semibold  h-5 w-5 flex items-center justify-center rounded">
          2
        </div>
        <div className="bg-gray-300 text-black font-semibold  h-5 w-5 flex items-center justify-center rounded">
          3
        </div>
      </div>
      <FiChevronRight />
    </div>
  )
}
