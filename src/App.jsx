import './App.css'
import { MapPin, GraduationCap } from 'lucide-react'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <span className="nav-name">Kavya Desai</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <span>|</span>
          <a href="#projects">Projects</a>
          <span>|</span>
          <a href="#experience">Experience</a>
          <span>|</span>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="main">
        <div className="sidebar">
          <h1 className="sidebar-name">Kavya Desai</h1>
          <p className="sidebar-title">Student | Data Scientist</p>
          <img src="/headshot2.png" alt="Kavya Desai" className="headshot" />

          <div className="sidebar-info">
            <div className="sidebar-info-item">
              <MapPin size={16} />
              <span>Los Angeles, CA</span>
            </div>
            <div className="sidebar-info-item">
              <GraduationCap size={16} />
              <span>UCLA</span>
            </div>
          </div>

          <div className="sidebar-buttons">
            <a href="https://www.linkedin.com/in/profile-kavya-desai/" target="_blank" className="sidebar-btn">
              LinkedIn
            </a>
            <a href="https://github.com/kavya-desai-ds" target="_blank" className="sidebar-btn">
              GitHub
            </a>
          </div>
        </div>

        <div className="content">
          <div className="section" id="about">
  <h2>About</h2>
  <p>I'm a UCLA student pursuing a double major in <strong>Data Science</strong> and <strong>Economics</strong> with a minor in <strong>Bioinformatics</strong>. I'm passionate about using data to solve meaningful problems, especially at the intersection of technology and health sciences.</p>
  <p>My experience spans the full data science pipeline, from cleaning and analyzing large datasets to building and deploying machine learning models. I'm comfortable working in <strong>Python, R, and SQL</strong>.</p>
  <p>I'm <strong>currently seeking internship and research opportunities</strong> where I can apply my skills to real-world challenges.</p>
  <p>Outside of data science, I love traveling, exploring new cafes and restaurants (and documenting every food adventure on Beli!), and getting creative through graphic design and hands-on art projects.</p>
</div>

          <div className="section" id="projects">
  <h2>Featured Projects</h2>
  <div className="projects-grid">

    <div className="project-card">
      <div className="project-header">
        <h3>Sex-Stratified Statin Toxicity Predictor</h3>
        <span className="project-award">🏆 Best Algorithm — UCLA InTranscription BioHackathon 2026</span>
      </div>
      <p>Built a stacked ensemble model on 150,468 FAERS patient records to predict individualized risk of statin-induced myopathy, glucose intolerance, and hepatotoxicity in women, incorporating hormonal covariates and SNP variants. Achieved cross-validated AUCs of 0.682, 0.733, and 0.696.</p>
      <div className="project-tags">
        <span>XGBoost</span><span>LightGBM</span><span>Random Forest</span><span>Python</span><span>FAERS</span>
      </div>
      <div className="project-links">
        <a href="https://github.com/kierro1209/statin_predictor" target="_blank">GitHub</a>
        <a href="https://drive.google.com/file/d/19Ue-6CqoLvPpSbCugQXXjlMiGehNIezX/view?usp=drive_link" target="_blank">Research Poster</a>
      </div>
    </div>

    <div className="project-card">
      <div className="project-header">
        <h3>Blood Cell Classification CV Model</h3>
      </div>
      <p>Developed a custom sequential deep CNN model to classify 17,000+ microscopic blood cell images across 8 categories using morphological features for diagnostic validation. Achieved 92.4% accuracy on testing data.</p>
      <div className="project-tags">
        <span>PyTorch</span><span>Torchvision</span><span>CNN</span><span>Python</span><span>Computer Vision</span>
      </div>
      <div className="project-links">
        <a href="https://github.com/kavya-desai-ds/blood-cell-classification" target="_blank">GitHub</a>
      </div>
    </div>

    <div className="project-card">
      <div className="project-header">
        <h3>Retail Fragrance Recommendation System</h3>
      </div>
      <p>Implemented a semantic search-based fragrance recommendation system using Sentence Transformer embeddings and a FAISS-backed vector database to provide scalable recommendations across 24,000 retail perfumes and colognes.</p>
      <div className="project-tags">
        <span>Sentence Transformers</span><span>FAISS</span><span>NLP</span><span>Python</span><span>Vector Search</span>
      </div>
      <div className="project-links">
        <a href="https://github.com/kavya-desai-ds/fragrance-recommendation-system" target="_blank">GitHub</a>
      </div>
    </div>

    <div className="project-card">
  <div className="project-header">
    <h3>Orange County GHG Emissions Dashboard</h3>
  </div>
  <p>Built an interactive Tableau dashboard processing and spatially filtering 6,780+ records across 10 sectors and 111 named facilities in Orange County to visualize GHG emission trends, facility-level accountability, and sector breakdowns from 2021 to 2025.</p>
  <div className="project-tags">
    <span>Tableau</span><span>Data Visualization</span><span>Geospatial Analysis</span><span>EDA</span><span>Environmental Data</span>
  </div>
  <div className="project-links">
    <a href="https://public.tableau.com/app/profile/kavya.desai7780/viz/OrangeCountyCAUSACO2Emissions2021-2025/Dashboard1" target="_blank">Tableau Dashboard</a>
  </div>
</div>

  </div>
</div>

          <div className="section" id="experience">
  <h2>Experience</h2>
  <div className="experience-grid">

    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>The Data Science Union</h3>
          <span className="experience-role">Technical Project Manager</span>
        </div>
        <span className="experience-date">October 2025 – Present</span>
      </div>
      <ul className="experience-bullets">
        <li>Leading development of BruinQuest, a student-focused itinerary app for LA that aggregates data from Google Maps, Yelp, and LA Metro APIs to generate constraint-based outings tailored to student budgets, schedules, and transit preferences.</li>
      </ul>
    </div>

    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>UCLA DataRes</h3>
          <span className="experience-role">Project Lead</span>
        </div>
        <span className="experience-date">October 2025 – Present</span>
      </div>
      <ul className="experience-bullets">
        <li>Led and supported teams of 3–4 on investigative data journalism projects by creating structured project outlines and timelines, overseeing data preparation and visualization, and producing and presenting final deliverables.</li>
        <li>Analyzed 10+ years of iPhone release data by applying inflation adjustment to pricing data, analyzing trends in customer reviews, and conducting VADER sentiment analysis to quantify consumer satisfaction against media-driven "iPhone fatigue" narratives.</li>
      </ul>
    </div>

    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>United Nations Association Orange County</h3>
          <span className="experience-role">Data Science Intern</span>
        </div>
        <span className="experience-date">February 2025 – October 2025</span>
      </div>
      <ul className="experience-bullets">
        <li>Synthesized and evaluated external emissions data sources for quality, reliability, and relevance, and prepared actionable recommendations for project managers and stakeholders.</li>
        <li>Analyzed and cleaned 30+ multi-year emissions datasets with R, Python, and Excel to build a structured data inventory to support future visualization and machine learning use cases.</li>
      </ul>
    </div>

    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>Science Gurus</h3>
          <span className="experience-role">Bioinformatics Intern</span>
        </div>
        <span className="experience-date">June 2023 – August 2023</span>
      </div>
      <ul className="experience-bullets">
        <li>Engaged in 8-week professional seminar series on pharmaceutical industry practices and clinical trial operations.</li>
        <li>Conducted exploratory analysis on large-scale genomic datasets using The Cancer Genome Atlas to identify genetic trends in cancer case studies; authored and presented a paper on HER2/EGFR-Associated Cancers.</li>
      </ul>
    </div>

  </div>
</div>

          <div className="section" id="contact">
  <h2>Contact</h2>
  <p>Feel free to reach out — I'm always open to new opportunities, collaborations, or just a chat!</p>
  <div className="contact-links">
    <a href="mailto:kavyadesai@ucla.edu" className="contact-item">
      <span>Email</span>
      <span>kavyadesai@ucla.edu</span>
    </a>
    <a href="https://www.linkedin.com/in/profile-kavya-desai/" target="_blank" className="contact-item">
      <span>LinkedIn</span>
      <span>linkedin.com/in/profile-kavya-desai</span>
    </a>
    <a href="https://github.com/kavya-desai-ds" target="_blank" className="contact-item">
      <span>GitHub</span>
      <span>github.com/kavya-desai-ds</span>
    </a>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default App