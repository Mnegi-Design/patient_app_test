import { Link, useNavigate } from 'react-router-dom'
import Chip from '../components/Chip'

export default function CreateProposalDefault() {
  const navigate = useNavigate()

  return (
    <section className="flow-section">
      <div className="section-title">
        <h2>Create Proposal - Default</h2>
        <span className="pill">State 1</span>
      </div>
      <div className="screen">
        <aside className="sidebar">
          <img src="https://www.figma.com/api/mcp/asset/f61e0739-ba91-4e7b-9e7d-5cda6f0e9dd7" alt="Sidebar" />
        </aside>
        <div className="content">
          <Link className="back-link" to="/table">
            <img src="https://www.figma.com/api/mcp/asset/baffeebd-a62d-498b-8a80-e3b7d618f5ab" alt="" />
            Back to Lead page
          </Link>
          <div className="page-title">
            <h3>Create New Proposal</h3>
            <p>Create a proposal for this lead and submit it for approval.</p>
          </div>

          <div className="card">
            <div className="card-title">Lead Information</div>
            <div className="info-grid">
              <div className="info-item">
                <img src="https://www.figma.com/api/mcp/asset/e0f2b924-7c06-4894-a2e5-b15731d07a18" alt="" />
                <div>
                  <span className="label">Lead Name</span>
                  <strong>Devesh Agrawal</strong>
                  <a className="link" href="#">
                    View Lead Profile
                    <img src="https://www.figma.com/api/mcp/asset/1798e71e-a476-4210-890e-b412c0c82360" alt="" />
                  </a>
                </div>
              </div>
              <div className="info-item">
                <img src="https://www.figma.com/api/mcp/asset/e2661408-77b0-427a-a4f6-6943e9b1c217" alt="" />
                <div>
                  <span className="label">Contact Number</span>
                  <strong>+91 98765 43210</strong>
                </div>
              </div>
              <div className="info-item">
                <img src="https://www.figma.com/api/mcp/asset/895ef3b9-2c43-411b-b737-a3c095540c38" alt="" />
                <div>
                  <span className="label">Store Name</span>
                  <strong>Agrawal Store</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title">Plan Detail</div>
              <Chip label="Expires in 4 days" tone="info" variant="filled" size="lg" />
            </div>
            <div className="field">
              <label>
                Proposal Title <span>*</span>
              </label>
              <input placeholder="e.g., Healthcare Package - Premium Plan" />
            </div>
          </div>

          <div className="card">
            <div className="card-title">Basic Details</div>
            <div className="two-col">
              <div className="field">
                <label>
                  Valid From <span>*</span>
                </label>
                <div className="input-icon">
                  <img src="https://www.figma.com/api/mcp/asset/6ac5a25b-9f17-468f-a27c-0749c8632e87" alt="" />
                  <input />
                </div>
              </div>
              <div className="field">
                <label>
                  Valid From <span>*</span>
                </label>
                <div className="input-icon">
                  <img src="https://www.figma.com/api/mcp/asset/6ac5a25b-9f17-468f-a27c-0749c8632e87" alt="" />
                  <input />
                </div>
              </div>
            </div>
            <div className="field">
              <label>
                Description <span>*</span>
              </label>
              <textarea>Test Input</textarea>
              <small>Add details about your discussion so far and client's plan of signing up and requirements.</small>
            </div>
          </div>

          <div className="card">
            <div className="card-title">Plan & Pricing</div>
            <div className="field">
              <label>
                Plan <span>*</span>
              </label>
              <input />
              <small>Select a plan to auto-populate pricing and payment structure.</small>
            </div>
          </div>

          <div className="card">
            <div className="card-title">Payment Structure</div>
            <p className="muted">
              Enter number of installments and duration, then click Create Schedule to generate payment installments.
            </p>
            <div className="two-col">
              <div className="field">
                <label>Number of Installments</label>
                <input placeholder="e.g., 3" />
              </div>
              <div className="field">
                <label>Installment End Date</label>
                <div className="input-icon">
                  <img src="https://www.figma.com/api/mcp/asset/6ac5a25b-9f17-468f-a27c-0749c8632e87" alt="" />
                  <input />
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="ghost">Schedule Installment</button>
              <button className="ghost">Add Installment</button>
            </div>
          </div>

          <div className="card">
            <div className="card-title">Special Terms</div>
            <div className="field">
              <label>
                Special Terms & Conditions <span className="optional">(Optional)</span>
              </label>
              <textarea placeholder="Add any special terms, conditions, or agreements relevant to this proposal..."></textarea>
            </div>
          </div>

          <button className="cta" onClick={() => navigate('/manager-review')}>
            Submit for Approval
          </button>
        </div>
      </div>
    </section>
  )
}
