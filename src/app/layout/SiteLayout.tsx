import type { ReactNode } from 'react'
import styles from './SiteLayout.module.css'
import { profile } from '../../content/profile'
import { IconGitHub, IconLinkedIn, IconMail } from '../../shared/ui/Icon'
import { LinkButton } from '../../shared/ui/LinkButton'

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.mark} aria-hidden="true">
            SK
          </div>
          <div>
            <div className={styles.name}>{profile.name}</div>
            <div className={styles.role}>{profile.role}</div>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          <a className={styles.navLink} href="#strengths">
            Strengths
          </a>
          <a className={styles.navLink} href="#experience">
            Experience
          </a>
          <a className={styles.navLink} href="#projects">
            Projects
          </a>
          <a className={styles.navLink} href="#contact">
            Contact
          </a>
        </nav>

        <div className={styles.actions}>
          <LinkButton href={profile.contact.email} variant="primary">
            <IconMail />
            Email
          </LinkButton>
          <LinkButton href={profile.contact.linkedin} variant="ghost">
            <IconLinkedIn />
          </LinkButton>
          <LinkButton href={profile.contact.github} variant="ghost">
            <IconGitHub />
          </LinkButton>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <span className={styles.footerName}>{profile.name}</span>
            <span className={styles.dot} aria-hidden="true">
              •
            </span>
            <span className={styles.footerMeta}>{profile.location}</span>
          </div>
          <div className={styles.footerRight}>
            <a className={styles.footerLink} href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className={styles.footerLink} href={profile.contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className={styles.footerLink} href={profile.contact.email}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

