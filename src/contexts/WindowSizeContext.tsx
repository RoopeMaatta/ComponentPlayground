import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  ReactNode,
} from 'react'
import { debounce } from 'lodash'

type WindowSizeContextType = {
  windowWidth: number
}

const WindowSizeContext = createContext<WindowSizeContextType | undefined>(
  undefined
)

type WindowSizeProviderProps = {
  children: ReactNode
}

export const WindowSizeProvider: React.FC<WindowSizeProviderProps> = ({
  children,
}) => {
  const getWindowWidth = () => document.documentElement.clientWidth

  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth())
  // Update the resize handler
  const handleResize = useRef(
    debounce(() => {
      setWindowWidth(getWindowWidth())
    }, 100)
  ).current

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      handleResize.cancel()
    }
  }, [handleResize])

  return (
    <WindowSizeContext.Provider value={{ windowWidth }}>
      {children}
    </WindowSizeContext.Provider>
  )
}

export const useWindowSizeContext = (): WindowSizeContextType => {
  const context = useContext(WindowSizeContext)
  if (context === undefined) {
    throw new Error(
      'useWindowSizeContext must be used within a WindowSizeProvider'
    )
  }
  return context
}
