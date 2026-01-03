import { useEffect } from 'react'

import type { RootState } from '@src/App'
import { setActiveActiveMenuItem } from '@src/applicationSlice'
import { useDispatch, useSelector } from 'react-redux'

export function useSetActiveMenuItem(index: number) {
  const activeMenuItem = useSelector(
    (s: RootState) => s.application.activeMenuItem,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (index !== activeMenuItem) {
      dispatch(setActiveActiveMenuItem(index))
    }
  }, [index, activeMenuItem, dispatch])
}
