import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-circle">R</div>
          <span>RentFlow</span>
        </div>

        <nav className="menu">

          <a className="menu-item active">
            <span>⌂</span>
            Dashboard
          </a>

          <a className="menu-item">
            <span>▣</span>
            Properties
          </a>

          <a className="menu-item">
            <span>♙</span>
            Landlords
          </a>

          <a className="menu-item">
            <span>♧</span>
            Tenants
          </a>

          <a className="menu-item">
            <span>₹</span>
            Rental Rates
          </a>

          <a className="menu-item">
            <span>▤</span>
            Invoices
          </a>

          <a className="menu-item">
            <span>▥</span>
            Reports
          </a>

        </nav>

        <div className="sidebar-bottom">

          <a className="menu-item">
            <span>⚙</span>
            Settings
          </a>

          <div className="user-profile">
            <div className="avatar">H</div>
            <div>
              <strong>Haridharani</strong>
              <small>Admin</small>
            </div>
          </div>

        </div>

      </aside>


      {/* Main Content */}
      <main className="main-content">

        {/* Header */}
        <header className="top-header">

          <div>
            <p className="greeting">Good morning, Haridharani</p>
            <h1>Dashboard</h1>
          </div>

          <div className="header-actions">
            <button className="icon-button">⌕</button>
            <button className="icon-button">♧</button>

            <div className="profile-small">
              <div className="avatar">H</div>
            </div>
          </div>

        </header>


        {/* Overview Cards */}
        <section className="overview-grid">

          <div className="stat-card mint-card">
            <div className="stat-top">
              <span>Total Properties</span>
              <span className="stat-icon">▣</span>
            </div>

            <h2>24</h2>
            <p>+3 this month</p>
          </div>


          <div className="stat-card lavender-card">
            <div className="stat-top">
              <span>Total Tenants</span>
              <span className="stat-icon">♙</span>
            </div>

            <h2>86</h2>
            <p>+8 this month</p>
          </div>


          <div className="stat-card yellow-card">
            <div className="stat-top">
              <span>Invoices Generated</span>
              <span className="stat-icon">▤</span>
            </div>

            <h2>142</h2>
            <p>September 2026</p>
          </div>


          <div className="stat-card pink-card">
            <div className="stat-top">
              <span>GST Amount</span>
              <span className="stat-icon">₹</span>
            </div>

            <h2>₹1.28L</h2>
            <p>This month</p>
          </div>

        </section>


        {/* Middle Section */}
        <section className="content-grid">

          {/* Invoice Summary */}
          <div className="panel invoice-panel">

            <div className="panel-header">
              <div>
                <span className="small-label">INVOICE SUMMARY</span>
                <h2>September Overview</h2>
              </div>

              <button className="view-button">
                View All
              </button>
            </div>


            <div className="invoice-stats">

              <div>
                <div className="circle-icon green">✓</div>
                <strong>112</strong>
                <span>Generated</span>
              </div>

              <div>
                <div className="circle-icon purple">◷</div>
                <strong>18</strong>
                <span>Draft</span>
              </div>

              <div>
                <div className="circle-icon peach">↗</div>
                <strong>12</strong>
                <span>Sent</span>
              </div>

            </div>

          </div>


          {/* Quick Actions */}
          <div className="panel quick-panel">

            <div className="panel-header">
              <div>
                <span className="small-label">QUICK ACTIONS</span>
                <h2>Manage</h2>
              </div>
            </div>

            <div className="quick-actions">

              <button>
                <span className="action-icon mint">+</span>
                <div>
                  <strong>Add Property</strong>
                  <small>Create a new property</small>
                </div>
              </button>

              <button>
                <span className="action-icon lavender">+</span>
                <div>
                  <strong>Add Tenant</strong>
                  <small>Register tenant details</small>
                </div>
              </button>

              <button>
                <span className="action-icon yellow">₹</span>
                <div>
                  <strong>Generate Invoice</strong>
                  <small>Create monthly invoice</small>
                </div>
              </button>

            </div>

          </div>

        </section>


        {/* Bottom Section */}
        <section className="bottom-grid">

          {/* Recent Invoices */}
          <div className="panel recent-panel">

            <div className="panel-header">
              <div>
                <span className="small-label">RECENT ACTIVITY</span>
                <h2>Recent Invoices</h2>
              </div>

              <button className="view-button">
                View All
              </button>
            </div>


            <div className="invoice-table">

              <div className="table-row table-heading">
                <span>Invoice</span>
                <span>Tenant</span>
                <span>Amount</span>
                <span>Status</span>
              </div>


              <div className="table-row">
                <span className="invoice-number">INV-2026-0142</span>
                <span>Arun Kumar</span>
                <span>₹28,500</span>
                <span className="status generated">
                  Generated
                </span>
              </div>


              <div className="table-row">
                <span className="invoice-number">INV-2026-0141</span>
                <span>Priya S</span>
                <span>₹32,000</span>
                <span className="status sent">
                  Sent
                </span>
              </div>


              <div className="table-row">
                <span className="invoice-number">INV-2026-0140</span>
                <span>Rahul M</span>
                <span>₹25,500</span>
                <span className="status draft">
                  Draft
                </span>
              </div>


              <div className="table-row">
                <span className="invoice-number">INV-2026-0139</span>
                <span>Divya R</span>
                <span>₹30,000</span>
                <span className="status generated">
                  Generated
                </span>
              </div>

            </div>

          </div>


          {/* Monthly Revenue */}
          <div className="panel revenue-panel">

            <div className="panel-header">
              <div>
                <span className="small-label">RENTAL REVENUE</span>
                <h2>Monthly Revenue</h2>
              </div>
            </div>


            <div className="revenue-number">
              ₹8.42L
              <span>+12.5%</span>
            </div>


            <div className="chart">

              <div className="bar" style={{ height: "45%" }}>
                <span>Apr</span>
              </div>

              <div className="bar" style={{ height: "58%" }}>
                <span>May</span>
              </div>

              <div className="bar" style={{ height: "52%" }}>
                <span>Jun</span>
              </div>

              <div className="bar" style={{ height: "70%" }}>
                <span>Jul</span>
              </div>

              <div className="bar" style={{ height: "82%" }}>
                <span>Aug</span>
              </div>

              <div className="bar current" style={{ height: "95%" }}>
                <span>Sep</span>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;