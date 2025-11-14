import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <Link to="/blogs">Go to VIKTOR Blog</Link>
    </div>
  )
}
