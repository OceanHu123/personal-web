import { Link } from 'react-router-dom'
import { site } from '../content/site'
import { useCodePenEffects } from '../hooks/useCodePenEffects'
import '../styles/codepen-KwNNyjg.css'

/**
 * CodePen KwNNyjg chrome (fixed nav + cursor) for the homepage only.
 * Project detail pages use the quieter Header/Footer instead.
 */
export function SiteChrome() {
  useCodePenEffects(true)

  return (
    <div className="codepen-home codepen-chrome">
      <div id="cur" aria-hidden="true" />
      <div id="cur-ring" aria-hidden="true" />

      <nav id="main-nav">
        <Link to="/" className="nav-logo">
          胡馨月<span> / Portfolio</span>
        </Link>
        <ul className="nav-cats" id="nav-cats">
          <li>
            <a href="/#menu" className="active" data-cat="projects">
              项目
            </a>
          </li>
          <li>
            <a href="/#special" data-cat="setbite">
              RepPlate食练记
            </a>
          </li>
          <li>
            <a href="/#menu" data-cat="bilingual">
              Bilingual
            </a>
          </li>
          <li>
            <a href="/#info" data-cat="contact">
              认识我
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
        <a href="/#menu">项目</a>
        <a href="/#special">RepPlate食练记</a>
        <a href="/#menu">Bilingual</a>
        <a href="/#info">认识我</a>
        <a href={site.profile.resumeHref} className="mob-cta" download>
          简历 PDF
        </a>
      </div>
    </div>
  )
}
