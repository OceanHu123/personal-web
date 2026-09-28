import { Link } from 'react-router-dom'
import { site } from '../content/site'
import { projects } from '../content/projects'
import { PromoPhoneStrip } from '../components/PromoPhoneStrip'
import '../styles/codepen-KwNNyjg.css'
import '../styles/repplate-frame.css'

/**
 * Home built on CodePen KwNNyjg UI (jerora98).
 * Nav/cursor live in SiteChrome; this page owns sections only.
 * RepPlate showcase uses a light promo phone strip (not stacked App UI chrome).
 */
export function HomePage() {
  const setbite = projects.find((p) => p.id === 'setbite')!
  const bilingual = projects.find((p) => p.id === 'bilingual')!
  const bilingualImg = bilingual.cardImage
  const setbitePhones = setbite.gallery.filter((g) => g.aspect === 'phone')

  const marqueeItems = [
    'AI 应用落地',
    'Agent 工程',
    'SwiftUI · iOS',
    'Chrome 扩展',
    'TypeScript',
    'Dalyell Scholar',
    'WAM 83.5',
    'Cursor / Claude',
  ]

  return (
    <div className="codepen-home">
      <main className="hero" id="top">
        <div className="hero-bg-img" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            {site.availableLabel}
          </div>
          <h1>
            {site.hero.titleBefore}
            <br />
            <em>{site.hero.titleAccent}</em>
            <span className="sub-line">{site.hero.keywords}</span>
          </h1>
          <p className="hero-desc">{site.hero.body}</p>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {site.profile.status}
            </div>
            <span className="hero-meta-sep" />
            <div className="hero-meta-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {site.footerNote}
            </div>
            <span className="hero-meta-sep" />
            <div className="hero-meta-item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              xihu0989@uni.sydney.edu.au
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll
        </div>
      </main>

      <div className="wave-divider" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: 80, background: '#1D9E75' }}
        >
          <path
            d="M0,80 L0,30 C180,70 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1360,20 1440,40 L1440,80 Z"
            fill="#F0EAD8"
          />
        </svg>
      </div>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`}>
              {item}
              <span className="dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      <section className="special-section" id="special">
        <div className="special-ribbon">精选项目</div>
        <div className="special-inner">
          <div className="reveal-left">
            <div className="special-label">{setbite.cardTag}</div>
            <h2 className="special-title">
              RepPlate食练记
              <br />
              <em>iOS 饮食与训练</em>
            </h2>
            <p className="special-desc">{setbite.description}</p>
            <div className="special-price">
              <span className="amt">{setbite.timeline}</span>
              <span className="label"> / {setbite.role}</span>
            </div>
            <div className="special-tags">
              {setbite.tags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
            <div className="special-actions">
              <Link to={`/projects/${setbite.id}`} className="nav-cta">
                进入项目详情 →
              </Link>
              <Link to={`/projects/${setbite.id}`} className="special-ghost">
                查看案例研究
              </Link>
            </div>
          </div>
          {/* LOCKED composition: overlapping promo phones + badge — do not relocate */}
          <div className="special-img special-img--promo reveal">
            <div className="special-promo-stage">
              <PromoPhoneStrip items={setbitePhones} size="lg" />
            </div>
            <div className="special-img-badge">
              {setbite.state} · App Store 宣传图
            </div>
          </div>
        </div>
      </section>

      <div className="wave-divider" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: 60, background: '#FFF3DC' }}
        >
          <path
            d="M0,0 C360,60 720,0 1080,40 C1260,60 1380,20 1440,30 L1440,60 L0,60 Z"
            fill="#FDFAF5"
          />
        </svg>
      </div>

      <section className="menu-section" id="menu">
        <div className="container">
          <div className="menu-top reveal">
            <div className="menu-header menu-header--left">
              <div className="section-label">
                <span className="section-label-dot" aria-hidden="true" />
                PROJECT CATALOG
              </div>
              <h2 className="section-title section-title--catalog">
                精选项目 / <em>Selected Projects</em>
              </h2>
              <p className="menu-sub">{site.projectsSection.subtitle}</p>
            </div>

            <div className="cat-filter cat-filter--tray">
              <button type="button" className="cat-btn active" data-filter="all">
                全部
              </button>
              <button type="button" className="cat-btn" data-filter="setbite">
                RepPlate食练记
              </button>
              <button type="button" className="cat-btn" data-filter="bilingual">
                Bilingual
              </button>
            </div>
          </div>

          <div className="menu-grid" id="menuGrid">
            <div className="menu-card reveal" data-cat="setbite">
              <div className="card-img-wrap card-img-wrap--promo">
                <img
                  src={setbite.cardImage}
                  alt={setbite.shortTitle}
                  loading="lazy"
                />
                <div className="card-promo-overlay">
                  <PromoPhoneStrip items={setbitePhones} size="sm" limit={4} />
                </div>
                <span className="card-cat-badge">iOS APP · NATIVE</span>
                <span className="card-stack-badge">SwiftData + LLM</span>
              </div>
              <div className="card-body">
                <div className="card-meta-row">
                  <span className="card-index">PROJECT {setbite.index}</span>
                  <span className="card-meta-sep">/</span>
                  <span className="card-meta-date">{setbite.timeline}</span>
                </div>
                <div className="card-header">
                  <span className="card-name">{setbite.title}</span>
                </div>
                <p className="card-kicker">iOS 饮食与运动管理助手</p>
                <p className="card-desc">{setbite.summary}</p>
                <div className="card-chips">
                  {setbite.tags.slice(0, 4).map((t) => (
                    <span key={t} className="card-chip chip-gf">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="card-footer card-footer--case">
                  <Link to={`/projects/${setbite.id}`} className="case-link">
                    查看案例研究 →
                  </Link>
                  <span className="card-of">01 OF 02</span>
                </div>
              </div>
            </div>

            <div
              className="menu-card reveal"
              data-cat="bilingual"
              style={{ transitionDelay: '.07s' }}
            >
              <div className="card-img-wrap">
                <img
                  src={bilingualImg}
                  alt={bilingual.shortTitle}
                  loading="lazy"
                />
                <span className="card-cat-badge">CHROME EXTENSION · MV3</span>
                <span className="card-stack-badge">TypeScript + Stream LLM</span>
              </div>
              <div className="card-body">
                <div className="card-meta-row">
                  <span className="card-index">PROJECT {bilingual.index}</span>
                  <span className="card-meta-sep">/</span>
                  <span className="card-meta-date">{bilingual.timeline}</span>
                </div>
                <div className="card-header">
                  <span className="card-name">{bilingual.title}</span>
                </div>
                <p className="card-kicker">网页沉浸式双语对照阅读</p>
                <p className="card-desc">{bilingual.summary}</p>
                <div className="card-chips">
                  {bilingual.tags.slice(0, 4).map((t) => (
                    <span key={t} className="card-chip chip-gf">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="card-footer card-footer--case">
                  <Link to={`/projects/${bilingual.id}`} className="case-link">
                    查看案例研究 →
                  </Link>
                  <span className="card-of">02 OF 02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wave-divider" aria-hidden="true">
        <svg
          viewBox="0 0 1440 70"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: 70, background: '#FDFAF5' }}
        >
          <path
            d="M0,70 L0,30 C240,70 480,0 720,35 C960,70 1200,10 1440,40 L1440,70 Z"
            fill="#F5EFE0"
          />
        </svg>
      </div>

      <section className="info-section" id="info">
        <div className="container">
          <div className="section-label reveal" style={{ marginBottom: 28 }}>
            <span className="section-label-dot" aria-hidden="true" />
            ABOUT THE BUILDER
          </div>
          <div className="about-grid">
            <div className="about-bio reveal-left">
              <div className="about-bio-head">
                <div className="about-avatar" aria-hidden="true">
                  胡
                </div>
                <div>
                  <h3 className="about-name">胡馨月 (Ocean Hu)</h3>
                  <p className="about-role">{site.profile.status}</p>
                </div>
              </div>
              <p className="about-lead">
                喜欢在人与 AI 协作里找真实痛点，做成自己天天能用的小闭环——克制一点、温润一点，不堆虚概念。
              </p>
              <ul className="about-points">
                <li>
                  <strong>技术栈与实践：</strong>
                  {site.profile.bio[1]}
                </li>
                <li>
                  <strong>设计与工程：</strong>
                  工具型产品的克制与温润；把结构化数据和生活流程打通。
                </li>
                <li>
                  <strong>学业背景：</strong>
                  悉尼大学 BAC · Dalyell Scholar · WAM 83.5。
                </li>
              </ul>
            </div>

            <div className="about-side">
              <div className="about-contact reveal" style={{ transitionDelay: '.08s' }}>
                <div className="info-title">联系我</div>
                <ul className="about-contact-list">
                  <li>
                    <span className="about-contact-label">大学邮箱</span>
                    <a href="mailto:xihu0989@uni.sydney.edu.au">
                      xihu0989@uni.sydney.edu.au
                    </a>
                  </li>
                  <li>
                    <span className="about-contact-label">GitHub</span>
                    <a
                      href="https://github.com/OceanHu123"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/OceanHu123
                    </a>
                  </li>
                  <li>
                    <span className="about-contact-label">微信 / 电话</span>
                    <span>18536805799</span>
                  </li>
                </ul>
                <a
                  href={site.profile.resumeHref}
                  className="about-resume"
                  download
                >
                  查看完整简历 PDF
                </a>
              </div>
              <div
                className="about-standing reveal"
                style={{ transitionDelay: '.16s' }}
              >
                <div className="about-standing-label">ACADEMIC STANDING</div>
                <div className="about-standing-title">
                  悉尼大学 · Dalyell Scholar
                </div>
                <div className="about-standing-sub">
                  Bachelor of Advanced Computing · 常驻悉尼
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">
          胡馨月<span> / Portfolio</span>
        </div>
        <p>
          {site.footerCopy} · {site.signature}
          <br />
          <span style={{ opacity: 0.7, fontSize: 12 }}>
            Home UI &amp; cursor adapted from{' '}
            <a
              href="https://codepen.io/jerora98/pen/KwNNyjg"
              target="_blank"
              rel="noreferrer"
            >
              CodePen KwNNyjg
            </a>{' '}
            by jerora98 (Jerome Rassweiler)
          </span>
        </p>
        <ul className="footer-links">
          <li>
            <Link to="/projects/setbite">RepPlate食练记</Link>
          </li>
          <li>
            <Link to="/projects/bilingual">Bilingual</Link>
          </li>
          <li>
            <a href="https://github.com/OceanHu123" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={site.profile.resumeHref} download>
              Resume
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
