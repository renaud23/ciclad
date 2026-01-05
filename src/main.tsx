import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { App } from './App.tsx'

// Create Worker
export const instance = new ComlinkWorker<typeof import('./worker.js')>(
  new URL('./worker', import.meta.url),
  {
    /* normal Worker options*/
  },
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
