import { useEffect, useRef } from 'react'

const useEffectExceptOnMount = (
  ...args: Parameters<typeof useEffect>
): ReturnType<typeof useEffect> => {
  const isRunningOnMount = useRef(true)

  useEffect(() => {
    if (isRunningOnMount.current) {
      isRunningOnMount.current = false
    } else {
      return args[0]()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, args[1])
}

export default useEffectExceptOnMount
