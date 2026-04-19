import { skillTiers } from '../../content/skills'
import { Section } from '../../shared/ui/Section'
import { Tag } from '../../shared/ui/Tag'
import { Card } from '../../shared/ui/Card'
import { Meter } from '../../shared/ui/Meter'
import styles from './HomePage.module.css'
import { LinkButton } from '../../shared/ui/LinkButton'
import { IconGitHub, IconLinkedIn, IconMail, IconPin } from '../../shared/ui/Icon'
import type { PortfolioData } from '../../types/portfolio'

export function HomePage({ data }: { data: PortfolioData }) {
  const { education, experience, profile, projects, skills } = data
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Intro">
        <div className={styles.heroLeft}>
          <div className={styles.badges}>
            <span className={styles.badge}>.NET</span>
            <span className={styles.badge}>Angular</span>
          </div>

          <h1 className={styles.title}>
            Building reliable enterprise software with <span className={styles.em}>.NET</span> and{' '}
            <span className={styles.em}>Angular</span>.
          </h1>

          <p className={styles.subtitle}>{profile.summary}</p>

          <div className={styles.metaRow}>
            <span className={styles.metaItem}>
              <IconPin />
              {profile.location}
            </span>
          </div>

          <div className={styles.ctas}>
            <LinkButton href={profile.contact.email} variant="primary">
              <IconMail />
              Email me
            </LinkButton>
            <LinkButton href={profile.contact.linkedin} variant="secondary" target="_blank" rel="noreferrer">
              <IconLinkedIn />
              LinkedIn
            </LinkButton>
            <LinkButton href={profile.contact.github} variant="ghost" target="_blank" rel="noreferrer">
              <IconGitHub />
              GitHub
            </LinkButton>
          </div>

        </div>

        <div className={styles.heroRight} aria-label="Profile photo">
          <div className={styles.avatarFrame}>
            <img
              className={styles.avatar}
              src={profile.photo.src}
              alt={profile.photo.alt}
              loading="eager"
            />
          </div>
        </div>
      </section>

      <Section id="strengths" title="Core strengths" subtitle="What you can rely on me for in large, real-world systems.">
        <div className={styles.strengthGrid}>
          <Card title="Backend engineering (.NET)">
            <ul className={styles.list}>
              <li>ASP.NET Core, MVC, Entity Framework, Clean Architecture</li>
              <li>Performance-focused data access (ADO.NET)</li>
              <li>Secure API design, validation, reliability</li>
            </ul>
          </Card>
          <Card title="Frontend delivery (Angular)">
            <ul className={styles.list}>
              <li>Angular / AngularJS with Kendo UI for enterprise admin systems</li>
              <li>Data-heavy UI with component-driven workflows</li>
              <li>Pragmatic UX + maintainable structure</li>
            </ul>
          </Card>
          <Card title="Data + integrations">
            <ul className={styles.list}>
              <li>MS SQL Server + Oracle (reporting, migrations)</li>
              <li>OAuth2, third-party APIs, schedulers</li>
              <li>Search at scale with Elasticsearch</li>
            </ul>
          </Card>
        </div>

        <div className={styles.skillBlock}>
          <div className={styles.skillHeader}>
            <div>
              <div className={styles.skillTitle}>Technical skills</div>
              <div className={styles.skillSubtitle}>Bars show practical confidence by stack depth and daily usage.</div>
            </div>
            <div className={styles.legend}>
              {Object.entries(skillTiers).map(([tier, info]) => (
                <span key={tier} className={styles.legendItem}>
                  <span className={styles.legendSwatch} style={{ width: 10, height: 10 }} data-tier={tier} />
                  {info.label}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.skillGrid}>
            {skills.map((s) => (
              <div key={s.name} className={styles.skillRow}>
                <div className={styles.skillName}>
                  <span>{s.name}</span>
                  {s.note ? <span className={styles.skillNote}>{s.note}</span> : null}
                </div>
                <Meter value={skillTiers[s.tier].meter} tier={s.tier} ariaLabel={`${s.name} — ${s.tier}`} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Focused on enterprise delivery, reliability, and outcomes.">
        <div className={styles.timeline}>
          {experience.map((item) => (
            <div key={`${item.company}-${item.start}`} className={styles.timelineItem}>
              <div className={styles.timeRail} aria-hidden="true">
                <span className={styles.timeDot} />
                <span className={styles.timeLine} />
              </div>
              <div className={styles.timelineBody}>
                <div className={styles.timelineTop}>
                  <div className={styles.timelineTitle}>
                    <span className={styles.timelineRole}>{item.title}</span>
                    <span className={styles.timelineCompany}>{item.company}</span>
                  </div>
                  <div className={styles.timelineDates}>
                    {item.start} — {item.end}
                  </div>
                </div>
                <ul className={styles.list}>
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="A selection of real systems I’ve shipped and improved.">
        <div className={styles.projectGrid}>
          {projects.map((p) => (
            <Card
              key={p.title}
              title={p.title}
              right={
                <div className={styles.tagRow}>
                  {p.domainTags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              }
            >
              <div className={styles.techRow}>
                {p.tech.map((t) => (
                  <Tag key={t} tone="muted">
                    {t}
                  </Tag>
                ))}
              </div>
              <ul className={styles.list}>
                {p.responsibilities.slice(0, 4).map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className={styles.eduGrid}>
          {education.map((e) => (
            <Card key={e.institution} title={e.degree}>
              <div className={styles.eduMeta}>
                <span>{e.institution}</span>
                <span className={styles.dot} aria-hidden="true">
                  •
                </span>
                <span>{e.year}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Fastest way to reach me is email.">
        <div className={styles.contactCard}>
          <div className={styles.contactLeft}>
            <div className={styles.contactTitle}>Let’s talk.</div>
            <div className={styles.contactText}>
              If you’re hiring for .NET / Angular roles (or a versatile engineer who learns fast), I’d love to connect.
            </div>
          </div>
          <div className={styles.contactRight}>
            <LinkButton href={profile.contact.email} variant="primary">
              <IconMail />
              Email
            </LinkButton>
            <LinkButton href={profile.contact.linkedin} variant="secondary" target="_blank" rel="noreferrer">
              <IconLinkedIn />
              LinkedIn
            </LinkButton>
            <LinkButton href={profile.contact.github} variant="ghost" target="_blank" rel="noreferrer">
              <IconGitHub />
              GitHub
            </LinkButton>
          </div>
        </div>
      </Section>
    </div>
  )
}

