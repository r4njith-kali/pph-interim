class TeamMember extends HTMLElement {
  static get observedAttributes() {
    return ["avatar", "name", "department", "year", "role"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="team-card">
      <div class="avatar-container">
        <img src="${this.avatar}" alt="${this.name}" class="avatar">
        <div class="avatar-overlay"></div>
      </div>
      <div class="card-content">
        <h3 class="name">${this.name}</h3>
        <p class="role">${this.role || ""}</p>
        <p class="department">${this.department}</p>
        <p class="year">Class of ${this.year}</p>
      </div>
    </div>
    <style>
      :host {
        display: block;
        width: 100%;
      }

      .team-card {
        background: #ffffff;
        border-radius: 16px;
        padding: 24px;
        text-align: center;
        box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
        transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid rgba(15, 23, 42, 0.05);
        position: relative;
        overflow: hidden;
        animation: cardFadeIn 0.6s ease-out;
      }

      @keyframes cardFadeIn {
        from {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      .team-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 25px 40px rgba(15, 23, 42, 0.15);
      }

      .avatar-container {
        position: relative;
        width: 120px;
        height: 120px;
        margin: 0 auto 20px;
        border-radius: 50%;
        padding: 4px;
        background: linear-gradient(135deg, #0ea5e9, #6366f1);
      }

      .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        display: block;
        border: 4px solid white;
        transition: transform 0.3s ease;
      }

      .team-card:hover .avatar {
        transform: scale(1.1);
      }

      .avatar-overlay {
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(99, 102, 241, 0.15));
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .team-card:hover .avatar-overlay {
        opacity: 1;
      }

      .card-content {
        position: relative;
        z-index: 1;
      }

      .name {
        font-size: 1.2rem;
        font-weight: 600;
        color: #0f172a;
        margin: 0 0 8px 0;
      }

      .role {
        font-size: 0.95rem;
        color: #475569;
        margin: 0 0 12px 0;
        font-weight: 500;
      }

      .department {
        font-size: 0.9rem;
        color: #64748b;
        margin: 6px 0;
        font-weight: 500;
      }

      .year {
        font-size: 0.85rem;
        color: #94a3b8;
        margin: 4px 0 0 0;
        font-weight: 400;
      }

      @media (max-width: 768px) {
        .team-card {
          padding: 20px;
        }

        .avatar-container {
          width: 100px;
          height: 100px;
        }
      }

      @media (max-width: 480px) {
        .team-card {
          padding: 16px;
        }

        .avatar-container {
          width: 80px;
          height: 80px;
        }

        .name {
          font-size: 1.05rem;
        }

        .department,
        .role {
          font-size: 0.8rem;
        }

        .year {
          font-size: 0.75rem;
        }
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("team-member", TeamMember);
