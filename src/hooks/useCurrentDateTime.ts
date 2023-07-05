import { useState, useEffect } from 'react'

const useCurrentDateTime = () => {
  const formaterDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })
  const formaterTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  const getCurrentDateTime = (): string => {
    const currentDate = new Date()
    const date = formaterDate.format(currentDate)
    const time = formaterTime.format(currentDate)
    return `${date} | Time: ${time}`
  }

  const [dateTime, setDateTime] = useState<string>(getCurrentDateTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getCurrentDateTime())
    }, 60000)

    return () => {
      clearInterval(interval)
    }
  })

  return dateTime
}

export default useCurrentDateTime
