import { Outlet } from 'react-router-dom'

export default function TemplateLayout() {
  return (
    <div>
      <h1>Template</h1>
      <Outlet /> {/* Isso permite carregar Team e History */}
    </div>
  )
}
