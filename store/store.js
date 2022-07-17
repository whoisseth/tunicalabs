import create from 'zustand'
import persist from 'zustand/middleware'

export const useStore = create((set) => ({
  viewStudent: true,
  //   setViewStudent: set((state) => !state.viewStudent),
  setAddStudent: (viewStudent) => set((state) => ({ viewStudent: false })),
  setViewStudent: (viewStudent) => set((state) => ({ viewStudent: true })),
}))
// export const useStore = create(
//   persist({
//     viewStudent: true,
//     setViewStudent: (state) => !state.viewStudent,
//   }),
// )
