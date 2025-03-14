// PageTemplate.tsx

import { type LoaderFunctionArgs } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export function loader(_args: LoaderFunctionArgs) {
  return { data: `coming soon!` }
}

export default function PageTemplate() {
  const location = useLocation()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Page Template</h1>
      <p className="mt-2 text-lg">{`${location?.pathname} coming soon!`}</p>
    </div>
  )
}
