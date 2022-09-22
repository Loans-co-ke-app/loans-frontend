import { AxiosError } from 'axios'
import React from 'react'
import { axiosQuery } from './api'
import AppRouter from './router'
import { AppContext } from './state/providers/PostsProvider'

const App = () => {

  const {dispatch } = React.useContext(AppContext)
  const fetchPosts = async () => {
    try {
      dispatch({ type: 'POST_LOAD_START', payload: {} })
      const res = await axiosQuery.get('')
      const data = res.data
      console.log("Data", data);

      dispatch({ type: 'POST_LOAD_SUCCESS', payload: data })
    } catch (err: any) {
      if (err instanceof AxiosError) {
        dispatch({ type: 'LOAD_POST_FAILURE', payload: { err: err.response?.data } })
      }
    }
  }
  React.useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <AppRouter />
  )
}

export default App