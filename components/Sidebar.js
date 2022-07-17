import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaUserFriends, FaUserPlus } from 'react-icons/fa'
import { useStore } from '../store/store'
import classnames from 'classnames'
export default function Sidebar() {
  const { setViewStudent } = useStore()
  const { setAddStudent } = useStore()
  const { viewStudent } = useStore()
  // console.log(setViewStudent(false))
  // console.log(setViewStudent(true))
  const style = 'cursor-pointer flex gap-2 items-center transition-all '
  return (
    <div className="w-48  max-h-full   py-4 border-l-none border-r-2 border-black flex flex-col ">
      <div className="px-6 pb-4 ">
        <div className="flex items-center justify-between font-semibold mb-4">
          <h2>Student</h2>
          <MdKeyboardArrowDown className="text-xl" />
        </div>
        <div className="flex flex-col gap-2">
          <div
            onClick={setViewStudent}
            className={classnames(style, {
              'text-red-400': viewStudent,
              'text-gray-400': !viewStudent,
            })}
          >
            <FaUserFriends />
            <p className="whitespace-nowrap">View Students</p>
          </div>
          <div
            onClick={setAddStudent}
            className={classnames(style, {
              'text-red-400': !viewStudent,
              'text-gray-400': viewStudent,
            })}
          >
            <FaUserPlus />
            <p className="whitespace-nowrap">Add Students</p>
          </div>
        </div>
      </div>
      <hr className="mx-2 mb-8" />
    </div>
  )
}
