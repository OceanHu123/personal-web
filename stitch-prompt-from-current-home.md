# Stitch Vision Prompt — Vision Draft 2 (from current homepage)

> 可直接整段复制到 Stitch。这是 **Vision Draft 2**，要求在 **当前已上线/本地可预览的首页风格** 上重生与细化，而不是从空白重做。  
> 配套参考：本地站点 `http://127.0.0.1:43127`（CodePen-integrated home）；可附现有首页截图作 layout 参考。

---

## Critical instruction (must follow)

**Regenerate BASED ON the current live homepage layout and style** — do **not** invent a brand-new visual system from scratch, and do **not** discard the existing CodePen-integrated home.

Treat the current site as the baseline:

- Warm cream / sand background (`#FDFAF5` / `#F0EAD8` / `#F5EFE0`) with teal accent (`#1D9E75` / soft living teal)
- Custom cursor (dot + lagging ring) on the homepage
- Fixed top nav: logo **胡馨月 / Portfolio**, category links, resume CTA, mobile hamburger
- Hero: large typography, badge, short body, meta row (status / location / email), scroll cue
- Teal → cream wave divider
- Horizontal marquee strip of skill/topic chips
- Featured “精选项目” block for **RepPlate食练记** (split copy + visual)
- Project grid with filter tabs: **全部 / RepPlate食练记 / Bilingual**
- “认识我” contact / background section + footer
- Overall feeling: bright, warm, personal “get to know me” — **not** internship urgency, **not** dark cyber, **not** stacked dashboard chrome

Your job: keep this DNA, then **ADD / REFINE** the items below into a coherent Vision Draft 2.

## Label

Present one coherent visual direction labeled **Vision Draft 2 (from current)**. Desktop reference viewport **1440×900**. Longer pages may extend downward — do not shrink type or hide primary regions to force one screen.

## Pages to design

### 1) Home (keep current CodePen-integrated structure)

Preserve top→bottom rhythm:

1. Fixed nav + custom cursor
2. Hero (headline / accent italic line / keywords / body / meta)
3. Wave + marquee
4. Featured RepPlate食练记 block
5. Selected Projects grid + tabs（全部 · RepPlate食练记 · Bilingual）
6. 认识我 / contact + light footer

Refine, do not replace: spacing, type scale consistency, featured visual treatment, card hierarchy.

### 2) Project Detail (clean full pages — priority refine)

Design **spacious, readable full pages** at `/projects/:id` — **not** a modal, **not** a piled-up stack of CodePen chrome + phone chrome + cards.

Required regions (clear hierarchy, generous whitespace):

- Quiet shared header / back to home
- Project title + short story / description
- Meta strip (role / timeline / stack / category)
- **Horizontal promo gallery** of App Store screens in simple phone frames
- Narrative breakdown (problem / built / outcome)
- Optional secondary gallery / deliverable links
- Bottom prev/next or back navigation

Detail pages should feel like calm editorial case studies that still belong to the same warm cream/teal family as the home.

### 3) Shared navigation (ADD / unify)

- **Shared nav on all pages**, visually consistent with the homepage CodePen nav (logo, 项目, RepPlate食练记, Bilingual, 认识我, 简历)
- On detail pages, nav should feel lighter / calmer than the home hero chrome — same identity, less visual noise
- Clear current-page / section state where useful

## Features to ADD or REFINE (do not discard the base)

1. **RepPlate食练记 showcase (home featured + optional detail hero accent)**  
   - Present as a **phone frame chrome** with **linked Apple Store promo images inside** (horizontal strip / swipeable phones)  
   - Product name must read **RepPlate食练记** (not old SetBite-only branding as primary)  
   - Avoid over-stacking: one clear phone showcase layer, not nested “app UI inside app UI inside card chrome”

2. **Personal tone**  
   - “认识我 / get to know me”  
   - No internship hard-sell pills, no “可全职实习 / hiring window” urgency badges  
   - Resume PDF may remain a quiet nav CTA

3. **Real content placeholders (use these — do not invent a different person)**  
   - Name: **胡馨月**  
   - School: 悉尼大学 BAC · Dalyell Scholar  
   - Contact placeholders OK: `xihu0989@uni.sydney.edu.au`, GitHub `OceanHu123`, 电话/微信 as muted contact line  
   - Projects: **RepPlate食练记** (iOS 饮食与训练), **Bilingual** (Chrome 双语对照)  
   - If assets missing: use clearly labeled placeholders; do **not** invent fake employers, awards, or shipped metrics

4. **Keep bilingual OK** — Chinese + English labels in UI copy are fine (e.g. 返回首页 / Back to Home)

## Visual rules (aligned with current site + Warm Clear Tech)

- Background: warm cream / ivory fields; soft stone surfaces
- Accent: soft living teal — sparingly for links, active nav, primary CTA
- Typography: strong but readable sans; hero can stay expressive; detail pages prefer calmer hierarchy
- Radius soft; shadows light; generous whitespace
- Motion: light reveal / hover only — do not let motion steal reading focus

### Avoid

- Dark cyber / neon purple / icy lab blue floods
- Stacked glassmorphism and double chrome (CodePen nav + heavy App UI frame + card borders fighting each other on detail)
- Internship urgency stickers / hiring countdown pills
- Blog, CMS, login, admin, payment, social-feed features

## Engineering notes (for later — design now)

Later implementation will use **React + TypeScript + Vite + Tailwind CSS**. Prefer Grid/Flex, tokenized color/type/spacing, narrowly scoped custom CSS for the CodePen-derived home. This round is **design only** — do not imply the Vision frames are already shipped features.

## Deliverable

Generate **Vision Draft 2 (from current)** desktop frames for:

1. Home (full scroll storyboard or key sections: hero, featured RepPlate, project grid+tabs, 认识我)
2. Project Detail — RepPlate食练记 (clean full page with horizontal promo gallery)
3. Project Detail — Bilingual (same clean template, different content)
4. Optional: shared nav states (home vs detail)

Favor finished visual frames over long analysis. After delivery, wait for plain-language feedback.

---

Generate Vision Draft 2 now, **regenerating based on the current live homepage layout/style** and applying the refinements above.
