import { Link, useNavigate } from 'react-router-dom'
import Chip from '../components/Chip'

export default function CreateProposalManager() {
  const navigate = useNavigate()

  return (
    <section className="flow-section">
      <div className="section-title">
        <h2>Create Proposal - Manager Notes</h2>
        <span className="pill">State 2</span>
      </div>
      <div className="screen">
        <aside className="sidebar">
          <img src="https://www.figma.com/api/mcp/asset/2be02185-fc0c-4807-8e31-d94f198aa603" alt="Sidebar" />
        </aside>
        <div className="content">
          <Link className="back-link" to="/">
            <img src="https://www.figma.com/api/mcp/asset/b43bb796-aaea-4657-8e76-1f3c8f8ce81a" alt="" />
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
                <img src="https://www.figma.com/api/mcp/asset/0a33c54d-132b-40f8-bbc1-0198d5de0fee" alt="" />
                <div>
                  <span className="label">Lead Name</span>
                  <strong>Devesh Agrawal</strong>
                  <a className="link" href="#">
                    View Lead Profile
                    <img src="https://www.figma.com/api/mcp/asset/6f881303-1338-4377-9741-366fff0f9fdd" alt="" />
                  </a>
                </div>
              </div>
              <div className="info-item">
                <img src="https://www.figma.com/api/mcp/asset/3a314339-fd42-4167-a62e-9d6227a8cb70" alt="" />
                <div>
                  <span className="label">Contact Number</span>
                  <strong>+91 98765 43210</strong>
                </div>
              </div>
              <div className="info-item">
                <img src="https://www.figma.com/api/mcp/asset/d4a4fd51-02ec-46c1-8daa-a15a1b7ea43f" alt="" />
                <div>
                  <span className="label">Store Name</span>
                  <strong>Agrawal Store</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="alert">
            <strong>Change the plan</strong>
            <p>We need to change to plan for this lead</p>
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

          <div className="note">
            <div className="note-title">Manager Note</div>
            <div className="alert">
              <strong>Validity</strong>
              <p>We need to change to plan for this lead</p>
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
                  <img src="https://www.figma.com/api/mcp/asset/19dffb18-8c4f-4dd5-b0b2-a835609cd717" alt="" />
                  <input />
                </div>
              </div>
              <div className="field">
                <label>
                  Valid From <span>*</span>
                </label>
                <div className="input-icon">
                  <img src="https://www.figma.com/api/mcp/asset/19dffb18-8c4f-4dd5-b0b2-a835609cd717" alt="" />
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

          <div className="note">
            <div className="note-title">Manager Note</div>
            <div className="alert">
              <strong>Special Terms</strong>
              <p>We need to change to plan for this lead</p>
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

          <div className="note">
            <div className="note-title">Manager Note</div>
            <div className="alert">
              <strong>Installment Issue</strong>
              <p>We need to change to plan for this lead</p>
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
                  <img src="https://www.figma.com/api/mcp/asset/19dffb18-8c4f-4dd5-b0b2-a835609cd717" alt="" />
                  <input />
                </div>
              </div>
            </div>
            <div className="actions">
              <button className="ghost">Schedule Installment</button>
              <button className="ghost">Add Installment</button>
            </div>
          </div>

          <div className="note">
            <div className="note-title">Manager Note</div>
            <div className="alert">
              <strong>Installment Issue</strong>
              <p>We need to change to plan for this lead</p>
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

          <button className="cta" onClick={() => navigate('/table')}>
            Submit for Approval
          </button>
        </div>
      </div>
    </section>
  )
}
