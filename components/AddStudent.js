import classnames from 'classnames'
const commonInputStyles = 'w-52 px-2 bg-gray-200 rounded outline-none py-1'
import { selectData } from './data'

export default function AddStudent({ hidden }) {
  return (
    <div className={classnames({ hidden: hidden })}>
      <h2 className="text-red-400 font-semibold mb-4 ">Add Student </h2>
      <form className="w-96 flex flex-col gap-8 ">
        <div className="flex justify-between">
          <label> Full Name</label>
          <input type="text" placeholder="Name" className={commonInputStyles} />
        </div>
        <Date />
        {selectData.map((data, index) => (
          <InputSelect
            placeholder="select"
            key={index}
            label={data.name}
            options={data.data}
          />
        ))}
        <Status />
        <button className="bg-brand text-white flex items-center justify-center w-44 h-10 ml-44 rounded ">
          Save
        </button>
      </form>
    </div>
  )
}

function InputSelect({ label, placeholder, options }) {
  return (
    <div className="flex justify-between">
      <label className="capitalize"> {label}</label>
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
    </div>
  )
}

function Status() {
  return (
    <div className="flex gap-36   ">
      <label>Status</label>
      <div className="flex gap-6 justify-start -ml-1 ">
        <div>
          <input type="radio" name="status" id="status" />
          <label className="ml-3 ">Active</label>
        </div>
        <div>
          <input type="radio" name="status" id="status" />
          <label id="status" className="ml-3  ">
            Inactive
          </label>
        </div>
      </div>
    </div>
  )
}

function Date() {
  return (
    <div className="flex justify-between">
      <label>Date</label>
      <input type="date" className={commonInputStyles} />
    </div>
  )
}
