import { Link } from 'react-router-dom'
import { site } from '../content/site'
import { projects } from '../content/projects'
import { useCodePenEffects } from '../hooks/useCodePenEffects'
import '../styles/codepen-KwNNyjg.css'

/**
 * Home built on CodePen KwNNyjg UI + cursor (jerora98).
 * Markup/structure follows vendor/codepen-KwNNyjg/html.html;
 * copy mapped to 胡馨月 content — no invented achievements.
 */
export function HomePage() {
  useCodePenEffects(true)

  const setbite = projects.find((p) => p.id === 'setbite')!
  const bilingual = projects.find((p) => p.id === 'bilingual')!
  const setbitePhone = setbite.gallery.find((g) => g.aspect === 'phone')
  const bilingualImg = bilingual.cardImage

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
      {/* Credit: CodePen KwNNyjg · jerora98 · cursor + UI structure */}
      <div id="cur" aria-hidden="true" />
      <div id="cur-ring" aria-hidden="true" />

      <nav id="main-nav">
        <a href="#top" className="nav-logo">
          胡馨月<span> / Portfolio</span>
        </a>
        <ul className="nav-cats" id="nav-cats">
          <li>
            <a href="#menu" className="active" data-cat="projects">
              项目
            </a>
          </li>
          <li>
            <a href="#special" data-cat="setbite">
              食练记
            </a>
          </li>
          <li>
            <a href="#menu" data-cat="profile">
              能力
            </a>
          </li>
          <li>
            <a href="#info" data-cat="contact">
              联系
            </a>
          </li>
        </ul>
        <a href={site.profile.resumeHref} className="nav-cta" download>
          {site.profile.resumeLabel}
        </a>
        <button type="button" className="hamburger" aria-label="菜单">
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className="mobile-nav" id="mobileNav">
        <a href="#menu">项目</a>
        <a href="#special">食练记</a>
        <a href="#menu">能力</a>
        <a href="#info">联系</a>
        <a href={site.profile.resumeHref} className="mob-cta" download>
          下载简历
        </a>
      </div>

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
              食练记 <em>SetBite</em>
              <br />
              iOS 饮食与训练
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
            <div style={{ marginTop: 24 }}>
              <Link to={`/projects/${setbite.id}`} className="nav-cta">
                进入项目详情 →
              </Link>
            </div>
          </div>
          <div className="special-img reveal">
            <img
              src={setbitePhone?.src ?? setbite.cardImage}
              alt={setbitePhone?.alt ?? setbite.shortTitle}
              loading="lazy"
            />
            <div className="special-img-badge">
              {setbite.state} · {setbite.geometry}
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
          <div className="menu-header">
            <div className="section-label reveal">
              {site.projectsSection.eyebrow}
            </div>
            <h2
              className="section-title reveal"
              style={{ transitionDelay: '.08s' }}
            >
              {site.projectsSection.title.split(' / ')[0]}{' '}
              <em>Selected</em>
              <br />
              Projects
            </h2>
          </div>

          <div
            className="cat-filter reveal"
            style={{ transitionDelay: '.15s' }}
          >
            <button type="button" className="cat-btn active" data-filter="all">
              全部
            </button>
            <button type="button" className="cat-btn" data-filter="project">
              项目
            </button>
            <button type="button" className="cat-btn" data-filter="skill">
              能力
            </button>
            <button type="button" className="cat-btn" data-filter="material">
              资源
            </button>
            <button type="button" className="cat-btn" data-filter="link">
              链接
            </button>
          </div>

          <div className="menu-grid" id="menuGrid">
            {/* Projects */}
            <div className="menu-card reveal" data-cat="project">
              <div className="card-img-wrap">
                <img
                  src={setbite.cardImage}
                  alt={setbite.shortTitle}
                  loading="lazy"
                />
                <span className="card-cat-badge">Project</span>
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-name">{setbite.title}</span>
                  <span className="card-price">{setbite.index}</span>
                </div>
                <p className="card-desc">{setbite.summary}</p>
                <div className="card-chips">
                  {setbite.tags.slice(0, 2).map((t) => (
                    <span key={t} className="card-chip chip-gf">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="card-footer">
                  <Link to={`/projects/${setbite.id}`} className="add-btn">
                    查看详情
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="menu-card reveal"
              data-cat="project"
              style={{ transitionDelay: '.07s' }}
            >
              <div className="card-img-wrap">
                <img
                  src={bilingualImg}
                  alt={bilingual.shortTitle}
                  loading="lazy"
                />
                <span className="card-cat-badge">Project</span>
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-name">{bilingual.title}</span>
                  <span className="card-price">{bilingual.index}</span>
                </div>
                <p className="card-desc">{bilingual.summary}</p>
                <div className="card-chips">
                  {bilingual.tags.slice(0, 2).map((t) => (
                    <span key={t} className="card-chip chip-gf">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="card-footer">
                  <Link to={`/projects/${bilingual.id}`} className="add-btn">
                    查看详情
                  </Link>
                </div>
              </div>
            </div>

            {/* Skills from profile — no invented metrics */}
            {site.profile.tags.map((tag, i) => (
              <div
                key={tag.text}
                className="menu-card reveal"
                data-cat="skill"
                style={{ transitionDelay: `${0.07 * (i + 1)}s` }}
              >
                <div
                  className="card-img-wrap"
                  style={{
                    background: 'linear-gradient(135deg,#E1F5EE,#F5EFE0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ fontSize: 28, fontWeight: 600, color: '#0f6e56' }}>
                    {tag.text.split(' ')[0]}
                  </div>
                  <span className="card-cat-badge">Skill</span>
                </div>
                <div className="card-body">
                  <div className="card-header">
                    <span className="card-name">{tag.text}</span>
                  </div>
                  <p className="card-desc">{site.profile.role}</p>
                </div>
              </div>
            ))}

            {/* Materials */}
            <div className="menu-card reveal" data-cat="material">
              <div className="card-img-wrap">
                <img
                  src="/images/setbite/01-eat-home.png"
                  alt="食练记画廊素材"
                  loading="lazy"
                />
                <span className="card-cat-badge">Gallery</span>
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-name">食练记 App Store 五屏</span>
                </div>
                <p className="card-desc">
                  详情页横向手机框合集（Eat / Train / Search / Recipes / Plan）。
                </p>
                <div className="card-footer">
                  <Link to="/projects/setbite" className="add-btn">
                    打开画廊
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="menu-card reveal"
              data-cat="material"
              style={{ transitionDelay: '.07s' }}
            >
              <div
                className="card-img-wrap"
                style={{
                  background: 'linear-gradient(135deg,#FFF3DC,#F5EFE0)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 600, color: '#2c2c2a' }}>
                  Resume PDF
                </div>
                <span className="card-cat-badge">Resume</span>
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-name">{site.profile.resumeLabel}</span>
                </div>
                <p className="card-desc">
                  投递用简历 PDF（本地 public/resume）。
                </p>
                <div className="card-footer">
                  <a href={site.profile.resumeHref} className="add-btn" download>
                    下载
                  </a>
                </div>
              </div>
            </div>

            {/* Links */}
            {site.profile.links.map((link, i) => (
              <div
                key={link.label}
                className="menu-card reveal"
                data-cat="link"
                style={{ transitionDelay: `${0.07 * (i + 1)}s` }}
              >
                <div
                  className="card-img-wrap"
                  style={{
                    background: 'linear-gradient(135deg,#E1F5EE,#9FE1CB)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#0f6e56' }}>
                    {link.label.replace(/ [↗]?$/, '').slice(0, 12)}
                  </div>
                  <span className="card-cat-badge">Link</span>
                </div>
                <div className="card-body">
                  <div className="card-header">
                    <span className="card-name">{link.label}</span>
                  </div>
                  <div className="card-footer">
                    <a
                      href={link.href}
                      className="add-btn"
                      {...(link.href.startsWith('http')
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                    >
                      打开
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="info-grid">
            <div className="reveal-left">
              <div className="info-logo">
                胡馨月<span> / Portfolio</span>
              </div>
              <p className="info-tagline">{site.profile.bio[0]}</p>
              <p className="info-tagline" style={{ marginTop: 12 }}>
                {site.profile.bio[1]}
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '.1s' }}>
              <div className="info-title">联系方式</div>
              <ul className="info-list">
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {site.footerNote}
                  <br />
                  目标城市：北京 / 上海 / 深圳 / 杭州 / 远程
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.8 19.8 0 013.08 4.18 2 2 0 015.07 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006.99 7l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  18536805799（电话 / 微信）
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  xihu0989@uni.sydney.edu.au
                </li>
              </ul>
            </div>
            <div className="reveal" style={{ transitionDelay: '.2s' }}>
              <div className="info-title">实习窗口</div>
              <div className="hours-row">
                <strong>可全职实习</strong>
                <span className="open">2026.12 – 2027.02</span>
              </div>
              <div className="hours-row">
                <strong>时长</strong>
                <span className="open">约 12 周</span>
              </div>
              <div className="hours-row">
                <strong>方向</strong>
                <span>AI 应用 / Agent 工程</span>
              </div>
              <div className="hours-row">
                <strong>简历</strong>
                <span>
                  <a href={site.profile.resumeHref} download>
                    PDF 下载
                  </a>
                </span>
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
            <Link to="/projects/setbite">食练记</Link>
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
