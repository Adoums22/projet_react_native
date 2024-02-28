import React, { useState, useEffect, useRef } from 'react'
import { Text } from 'react-native'
function useInterval(callback:any, delay:any) {
  const savedCallback:any = useRef()
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => {
        savedCallback.current()
      }, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
export function SinceCounter() {
    const [count, setCount] = useState(0);
    useInterval(() => {
      setCount(count + 1);
    }, 1000)
    return (
        <>
        <Text>Time since the page is open(seconde) :</Text>
        <Text style={{ fontSize: 120 }}>{count}</Text>
        </>
    )
  }
  