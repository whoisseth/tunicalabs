import Navbar from './../components/Navbar'
import Sidebar from './../components/Sidebar'
import ViewStudents from './../components/ViewStudents'
import AddStudent from './../components/AddStudent'
import { useStore } from './../store/store'
export default function Home() {
  const { viewStudent } = useStore()
  return (
    <>
      <Navbar />
      <div className="p-8">
        <div className=" shadow-xl w-fit flex  border rounded mx-auto">
          <Sidebar />
          <div className="p-4  pb-16  border-black min-w-[950px]  h-[552px] transition-all  ">
            {viewStudent && <ViewStudents />}
            {!viewStudent && <AddStudent />}
          </div>
        </div>
      </div>
    </>
  )
}
