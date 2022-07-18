import { FaBell } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Image from 'next/image'
import userImg from '../public/images/random-user.png'

export default function Navbar() {
  return (
    <div className="bg-brand text-white flex items-center justify-between px-8 py-6 sticky top-0  h-16 ">
      <h2 className="text-lg">TUNICALABS MEDIA</h2>
      <div className="flex items-center gap-10 ">
        <div className="relative ">
          <FaBell className="text-2xl" />
          <div className="absolute h-4 w-4 bg-red-500 rounded-full -top-1 -right-1 text-xs flex items-center justify-center ">
            3
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden border border-white h-8 w-8">
            <Image src={userImg} layout="fill" objectFit="cover" />
          </div>
          <div className="flex items-center gap-1">
            <h3>Rajan</h3>
            <MdKeyboardArrowDown className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
