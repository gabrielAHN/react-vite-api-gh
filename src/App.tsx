import { useQuery } from '@tanstack/react-query'
import fetchItems from './hooks/fetch-Items'
import './App.css'

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: [1],
    queryFn: () => fetchItems({ queryKey: [1] }),
  })
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  
  return (
    <div>
      {
        Object.keys(data).map((key) => {
          return <div key={key}>{key}: {data[key]}</div>
        })
      }
    </div>
  )
}

export default App
