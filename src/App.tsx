import { type OidcConfiguration, OidcProvider } from '@axa-fr/react-oidc'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router'

import applicationReducer from './applicationSlice'
import { useOidcConfiguration } from './hooks/useOidcConfiguration'
import { Accueil } from './pages/accueil/Accueil'
import { PlanDuSite } from './pages/planDuSite/PlanDuSite'
import { UploadCsv } from './pages/uploadCsv/UploadCsv'
import uploadCsvSlideReducer from './pages/uploadCsv/slice/uploadCsvSlice'

const router = createBrowserRouter([
  { path: '/', Component: Accueil },
  { path: '/plan-du-site', Component: PlanDuSite },
  { path: '/upload-csv', Component: UploadCsv },
])

const store = configureStore({
  reducer: {
    application: applicationReducer,
    uploadCsv: uploadCsvSlideReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

/**
 *
 * @param param0
 * @returns
 */
function AppOrWaiting({
  configuration,
}: {
  configuration?: OidcConfiguration
}) {
  if (configuration) {
    return (
      <OidcProvider configuration={configuration}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </OidcProvider>
    )
  }
  return <div>Loading configuration...</div>
}

/**
 *
 * @returns
 */
export function App() {
  const configuration = useOidcConfiguration()
  return <AppOrWaiting configuration={configuration} />
}
