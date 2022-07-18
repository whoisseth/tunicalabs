import create from 'zustand'
import { persist } from 'zustand/middleware'

export let useStore = create(
  persist(
    //
    (set) => ({
      viewStudent: true,
      setAddStudent: () => set({ viewStudent: false }),
      setViewStudent: () => set({ viewStudent: true }),
    }),
    { name: 'viewStudentState' },
  ),
)

// (set) => ({
//   studentData: [{ name: '' }],
//   setStudentData: () => set({ viewStudent: false }),
// }),
// { name: 'studentData' },
