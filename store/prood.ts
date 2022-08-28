export const state = () => ({
    prood: [1, 2, 3]
  })
  
  export const mutations = {
    add (state: RootState, text: string) {
        state.prood = [...state.prood, text]
    },
  }

type RootState = {
    prood: Array<{}>
}