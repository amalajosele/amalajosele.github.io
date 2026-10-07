# Microsoft IT Consultant Website

A professional, high-performance static website for an independent Microsoft IT consultant with **7+ years of IT experience**, specializing in **Microsoft Intune, Microsoft Entra ID, Microsoft 365, and Endpoint Management**.

Built with clean HTML5, modern CSS3 (inspired by Microsoft's enterprise design language), and lightweight Vanilla JavaScript. Designed specifically for hosting on **GitHub Pages** with zero build steps or external dependencies.

---

## 🚀 Key Website Features

- **Strategic Positioning:** Tailored specifically for an independent Microsoft consultant transitioning into a growing technology services practice.
- **Accurate & Honest Messaging:** Zero fake testimonials, fake client metrics, or exaggerated MSP claims. Prominently highlights 7+ years of real-world IT experience and the Microsoft SC-300 certification without spamming repetitive phrases.
- **Client Value Focus:** Showcases device visibility, identity security, reduced IT complexity, and scalable cloud foundations.
- **Modern Responsive Design:** Clean layout, Fluent-inspired styling, accessible contrast, mobile-friendly navigation, and interactive FAQ accordion.
- **Contact & Inquiry Workflow:** Inquiry form with direct `mailto:` generator and prompt acknowledgment.

---

## 📁 Project Structure

```text
website/
├── index.html          # Main landing page with all structured sections
├── css/
│   └── style.css       # Clean, modern, responsive CSS design system
├── js/
│   └── main.js         # Mobile menu, smooth scrolling, FAQ accordions & contact flow
└── README.md           # Documentation & GitHub Pages deployment guide
```

---

## 🛠️ How to Test & Preview Locally

You can preview the website immediately in any modern web browser:

### Option 1: Direct File Open
Double-click `index.html` or drag it into any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (PowerShell / Python)
Run a lightweight HTTP server in the project folder:

```powershell
python -m http.server 8080
```
Then navigate to `http://localhost:8080` in your browser.

---

## 🌐 How to Deploy to GitHub Pages

Because this website is completely static (no npm, no node_modules, no build step), deploying to GitHub Pages takes under 2 minutes:

1. **Initialize Git Repository (if not already done):**
   ```powershell
   git init
   git add .
   git commit -m "Initial release of Microsoft IT Consultant website"
   ```

2. **Link to your GitHub Repository:**
   Create a new public or private repository on [GitHub](https://github.com), then run:
   ```powershell
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - In your GitHub repository, go to **Settings** > **Pages** (under the "Code and automation" section).
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.

4. **Your Live Site:**
   Within 1–2 minutes, GitHub will publish your site to:
   `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/` (or custom domain).

---

## ✏️ Customization Checklist

Before public launch, feel free to update the following placeholders in `index.html` and `js/main.js`:

1. **Consultant Name & Brand:**
   - Update `<title>` and `<meta>` tags in `index.html`.
   - Add your legal business name or personal brand name in the header and footer.
2. **Contact Email:**
   - Search for `contact@example.com` in `index.html` and `js/main.js` and replace with your actual business email.
3. **LinkedIn Link:**
   - Update the `https://linkedin.com` link in the contact section to your personal or company profile.
4. **Certifications & Badges:**
   - The site currently highlights **Microsoft Certified: Identity and Access Administrator Associate (SC-300)**. If you have additional certifications (e.g., MS-102, MD-102), you can add them to the About section skills matrix.
