import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux'
import store from "../store/store"
import { saveState } from '../services/localstorage'

store.subscribe(() => {
  saveState({
    // user: store.getState().user,
    // subscription: store.getState().subscription,
    // profile: { profiles: store.getState().profile.profiles },
  })
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
