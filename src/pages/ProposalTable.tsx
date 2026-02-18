export default function ProposalTable() {
  return (
    <section className="flow-section">
      <div className="section-title">
        <h2>Proposal Table</h2>
        <span className="pill">State 3</span>
      </div>
      <div className="table-card">
        <div className="table">
          <div className="table-row header">
            <div>Plan Name</div>
            <div>Intent</div>
            <div>Amount</div>
            <div>Created By</div>
            <div>Created Date</div>
            <div>Validity</div>
            <div>Status</div>
            <div>Details</div>
          </div>
          <div className="table-row">
            <div className="strong">PROP-2023-042</div>
            <div>Enterprise Health Solution</div>
            <div>
              <div className="strong">₹200,000</div>
              <div className="muted small">14 Installments</div>
            </div>
            <div className="muted">Neha Patel</div>
            <div className="muted">2023-09-12</div>
            <div className="muted">30 days</div>
            <div>
              <span className="tag success">
                <img src="https://www.figma.com/api/mcp/asset/e788262e-9754-4ca4-943b-392de4015fad" alt="" />
                Approved
              </span>
            </div>
            <div className="view">
              <img src="https://www.figma.com/api/mcp/asset/0d2c0584-e86e-4631-9d61-5845c77fd90e" alt="" />
              View
            </div>
          </div>
          <div className="table-row">
            <div className="strong">PROP-2023-065</div>
            <div>Standard Healthcare Plan</div>
            <div>
              <div className="strong">₹200,000</div>
              <div className="muted small">3 Installments</div>
            </div>
            <div className="muted">Amit Kumar</div>
            <div className="muted">2023-11-05</div>
            <div className="muted">30 days</div>
            <div>
              <span className="tag neutral">
                <img src="https://www.figma.com/api/mcp/asset/2e9331a4-cd68-4944-a3f4-ce95f88b5364" alt="" />
                Pulled Back
              </span>
            </div>
            <div className="view">
              <img src="https://www.figma.com/api/mcp/asset/0d2c0584-e86e-4631-9d61-5845c77fd90e" alt="" />
              View
            </div>
          </div>
          <div className="table-row">
            <div className="strong">PROP-2023-015</div>
            <div>Premium Plus Package</div>
            <div>
              <div className="strong">₹200,000</div>
              <div className="muted small">7 Installments</div>
            </div>
            <div className="muted">Rahul Sharma</div>
            <div className="muted">2023-06-18</div>
            <div className="muted">30 days</div>
            <div>
              <span className="tag danger">
                <img src="https://www.figma.com/api/mcp/asset/2ce5c39d-4af4-402a-90ce-8bf37f8ecd3b" alt="" />
                REJECTED
              </span>
            </div>
            <div className="view">
              <img src="https://www.figma.com/api/mcp/asset/0d2c0584-e86e-4631-9d61-5845c77fd90e" alt="" />
              View
            </div>
          </div>
          <div className="table-row">
            <div className="strong">PROP-2023-028</div>
            <div>Family Healthcare Bundle</div>
            <div>
              <div className="strong">₹200,000</div>
              <div className="muted small">3 Installments</div>
            </div>
            <div className="muted">Vikram Desai</div>
            <div className="muted">2023-08-03</div>
            <div className="muted">30 days</div>
            <div>
              <span className="tag info">
                <img src="https://www.figma.com/api/mcp/asset/45dd88ff-6d0a-4431-8d9d-bdf35954962a" alt="" />
                Awaiting Changes
              </span>
            </div>
            <div className="view">
              <img src="https://www.figma.com/api/mcp/asset/0d2c0584-e86e-4631-9d61-5845c77fd90e" alt="" />
              View
            </div>
          </div>
          <div className="table-row">
            <div className="strong">PROP-2023-087</div>
            <div>Basic Health Checkup Package</div>
            <div>
              <div className="strong">₹200,000</div>
              <div className="muted small">8 Installments</div>
            </div>
            <div className="muted">Priya Singh</div>
            <div className="muted">2023-12-20</div>
            <div className="muted">30 days</div>
            <div>
              <span className="tag success-alt">
                <img src="https://www.figma.com/api/mcp/asset/d1716f80-38cc-4f86-8f1d-56d87cf36ac9" alt="" />
                Payment Received
              </span>
            </div>
            <div className="view">
              <img src="https://www.figma.com/api/mcp/asset/0d2c0584-e86e-4631-9d61-5845c77fd90e" alt="" />
              View
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
