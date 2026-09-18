import "./App.css";

function App() {
  const invoiceSummary = {
    draft: 5,
    generated: 12,
    sent: 20,
  };

  const user = {
    name: "Priya",
    role: "Admin",
  };

  const navigationItems = [
    {
      title: "Properties",
      description: "Manage rental properties",
      icon: "🏢",
    },
    {
      title: "Landlords",
      description: "Manage landlord details",
      icon: "👤",
    },
    {
      title: "Tenants",
      description: "Manage tenant details",
      icon: "👥",
    },
    {
      title: "Rental Rates",
      description: "Manage rental rates",
      icon: "💰",
    },
    {
      title: "Invoices",
      description: "Create and manage invoices",
      icon: "🧾",
    },
    {
      title: "Reports",
      description: "View rental reports",
      icon: "📊",
    },
  ];

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo-section">
          <div className="logo-icon">RI</div>

          <div>
            <h2>Rental Invoice</h2>
            <p>Management System</p>
          </div>
        </div>

        <nav className="sidebar-nav">

          <a href="#" className="nav-item active">
            <span>📊</span>
            Dashboard
          </a>

          <a href="#" className="nav-item">
            <span>🏢</span>
            Properties
          </a>

          <a href="#" className="nav-item">
            <span>👤</span>
            Landlords
          </a>

          <a href="#" className="nav-item">
            <span>👥</span>
            Tenants
          </a>

          <a href="#" className="nav-item">
            <span>💰</span>
            Rental Rates
          </a>

          <a href="#" className="nav-item">
            <span>🧾</span>
            Invoices
          </a>

          <a href="#" className="nav-item">
            <span>📊</span>
            Reports
          </a>

        </nav>

        <div className="sidebar-bottom">
          <a href="#" className="nav-item">
            <span>⚙️</span>
            Settings
          </a>

          <a href="#" className="nav-item logout">
            <span>↪</span>
            Logout
          </a>
        </div>

      </aside>


      {/* Main Content */}
      <main className="main-content">

        {/* Top Header */}
        <header className="top-header">

          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's your rental overview.</p>
          </div>

          <div className="user-profile">

            <div className="notification">
              🔔
            </div>

            <div className="avatar">
              P
            </div>

            <div className="user-details">
              <strong>{user.name}</strong>
              <span>{user.role}</span>
            </div>

          </div>

        </header>


        {/* Role Information */}
        <section className="role-banner">

          <div className="role-icon">
            👋
          </div>

          <div>
            <h3>Welcome, {user.name}</h3>
            <p>
              You are logged in as <strong>{user.role}</strong>.
            </p>
          </div>

        </section>


        {/* Invoice Summary */}
        <section className="section">

          <div className="section-header">
            <div>
              <h2>Invoice Status</h2>
              <p>Current invoice summary</p>
            </div>

            <button className="view-button">
              View All
            </button>
          </div>


          <div className="invoice-grid">

            <div className="invoice-card draft">

              <div className="card-top">
                <div className="status-icon">
                  📝
                </div>

                <span className="status-label">
                  Draft
                </span>
              </div>

              <h3>{invoiceSummary.draft}</h3>
              <p>Invoices in draft</p>

            </div>


            <div className="invoice-card generated">

              <div className="card-top">
                <div className="status-icon">
                  📄
                </div>

                <span className="status-label">
                  Generated
                </span>
              </div>

              <h3>{invoiceSummary.generated}</h3>
              <p>Invoices generated</p>

            </div>


            <div className="invoice-card sent">

              <div className="card-top">
                <div className="status-icon">
                  📤
                </div>

                <span className="status-label">
                  Sent
                </span>
              </div>

              <h3>{invoiceSummary.sent}</h3>
              <p>Invoices sent</p>

            </div>

          </div>

        </section>


        {/* Navigation Cards */}
        <section className="section">

          <div className="section-header">

            <div>
              <h2>Quick Navigation</h2>
              <p>Access your frequently used modules</p>
            </div>

          </div>


          <div className="navigation-grid">

            {navigationItems.map((item) => (

              <div
                className="navigation-card"
                key={item.title}
              >

                <div className="navigation-icon">
                  {item.icon}
                </div>

                <div className="navigation-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="arrow">
                  →
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* Bottom Information */}
        <section className="bottom-grid">

          <div className="info-card">

            <div className="info-icon">
              📅
            </div>

            <div>
              <h3>Current Month</h3>
              <p>September 2026</p>
            </div>

          </div>


          <div className="info-card">

            <div className="info-icon">
              🏠
            </div>

            <div>
              <h3>Rental Management</h3>
              <p>Manage properties and tenants</p>
            </div>

          </div>


          <div className="info-card">

            <div className="info-icon">
              📈
            </div>

            <div>
              <h3>Reports</h3>
              <p>View rental and invoice reports</p>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;
