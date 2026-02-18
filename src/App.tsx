import { Link, Route, Routes } from 'react-router-dom'
import CreateProposalDefault from './pages/CreateProposalDefault'
import CreateProposalManager from './pages/CreateProposalManager'
import ProposalTable from './pages/ProposalTable'

export default function App() {
  return (
    <main className="flow">
      <header className="flow-header">
        <div>
          <p className="eyebrow">Proposal Flow</p>
          <h1>Lead Proposal States</h1>
        </div>
        <nav className="top-nav">
          <Link to="/">Create Proposal</Link>
          <Link to="/manager-review">Manager Review</Link>
          <Link to="/table">Proposal Table</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<CreateProposalDefault />} />
        <Route path="/manager-review" element={<CreateProposalManager />} />
        <Route path="/table" element={<ProposalTable />} />
      </Routes>
    </main>
  )
}
