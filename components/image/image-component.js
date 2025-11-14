class ImageComponent extends HTMLElement {
  static get observedAttributes() {
    return ["tag", "source", "subtitle"];
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
    <div class="image-wrapper">
      <img id="${this.tag}" src="${this.source}" alt="${this.subtitle}" class="image">
      <div class="image-overlay"></div>
    </div>
    <p class="subtitle">${this.subtitle}</p>
    <style>
      :host {
        display: block;
        text-align: center;
        margin: 40px 0;
      }

      .image-wrapper {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        background: #f3f4f6;
      }

      .image-wrapper:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
      }

      .image {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.3s ease;
      }

      .image-wrapper:hover .image {
        transform: scale(1.02);
      }

      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(124, 58, 237, 0.05));
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
      }

      .image-wrapper:hover .image-overlay {
        opacity: 1;
      }

      .subtitle {
        font-size: 0.95rem;
        font-style: italic;
        color: #6b7280;
        margin-top: 12px;
        text-align: center;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("image-component", ImageComponent);
