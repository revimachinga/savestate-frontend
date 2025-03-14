import { Outlet } from 'react-router-dom'

export default function AboutLayout() {
  return (
    <div>
      <Outlet /> {/* Isso permite carregar Team e History */}
    </div>
  )
}
