export const actions = {
	nuxtServerInit () {
        console.log('nuxtServerInit');
	}
}

export const state = () => ({
    counter: 10
  })
  
  export const mutations = {
    increment (state:RootState) {
      state.counter++
    }
  }

  type RootState = {
    counter: number
  }