import { useState } from 'react'
import { useQuery } from '@apollo/client/react'
import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react'
import { GET_USER_STATS } from '@/constants/query'
import SectionHeader from './SectionHeader'

const EMAIL = 'putrasatria893@gmail.com'
const GITHUB_USERNAME = 'mpsalunggg'
const LINKEDIN_URL = 'https://linkedin.com/in/muhamadputrasatria'

interface GitHubStats {
  user: {
    name: string
    avatarUrl: string
    totalRepositories: { totalCount: number }
    totalFollowers: { totalCount: number }
    totalCommit: { totalCommitContributions: number }
    totalPullRequest: { totalPullRequestContributions: number }
  }
}

const ContactSection = () => {
  const [copied, setCopied] = useState(false)
  const { data } = useQuery<GitHubStats>(GET_USER_STATS, {
    variables: { username: GITHUB_USERNAME },
  })

  function handleCopy() {
    navigator.clipboard?.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const stats = [
    { label: 'Repositories', value: data?.user.totalRepositories.totalCount },
    { label: 'Followers', value: data?.user.totalFollowers.totalCount },
    { label: 'Commits', value: data?.user.totalCommit.totalCommitContributions },
    {
      label: 'Pull Requests',
      value: data?.user.totalPullRequest.totalPullRequestContributions,
    },
  ]

  return (
    <section id="contact" className="flex flex-col gap-6">
      <SectionHeader
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s <span className="font-normal italic">Connect</span>
          </>
        }
        description="Always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
        className="mb-0"
      />

      <div className="border-border bg-card hover:border-primary/40 overflow-hidden rounded-2xl border transition-colors hover:shadow-sm">
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <div className="flex items-center gap-3">
            {data?.user.avatarUrl && (
              <img
                src={data.user.avatarUrl}
                alt={data.user.name}
                className="h-9 w-9 rounded-xl"
              />
            )}
            <div>
              <p className="text-foreground text-sm font-medium">
                {data?.user.name ?? 'GitHub'}
              </p>
              <p className="text-muted-foreground text-xs">
                @{GITHUB_USERNAME} · GitHub
              </p>
            </div>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground group hidden items-center gap-1 text-xs transition-colors sm:flex"
          >
            View profile
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        <div className="border-border grid grid-cols-2 border-t sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                'hover:bg-muted/50 px-4 py-4 text-center transition-colors',
                'border-border',
                index < 3 ? 'sm:border-r' : '',
                index % 2 === 0 ? 'border-r sm:border-r' : '',
                index < 2 ? 'border-b sm:border-b-0' : '',
              ].join(' ')}
            >
              <p className="text-foreground mb-1 text-xl leading-none font-semibold tabular-nums">
                {stat.value ?? '—'}
              </p>
              <p className="text-muted-foreground text-[10px] leading-tight tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <button
          onClick={handleCopy}
          className="border-border bg-card hover:border-primary/40 hover:bg-accent/30 flex cursor-pointer flex-col gap-4 rounded-2xl border p-5 text-left transition-colors hover:shadow-sm"
        >
          <div className="bg-muted text-muted-foreground flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
            <Mail className="h-4 w-4" />
          </div>
          <div>
            <p className="text-muted-foreground mb-1 text-[10px] tracking-widest uppercase">
              Email
            </p>
            <p className="text-foreground text-xs font-medium break-all">
              {EMAIL}
            </p>
            <p
              className={`mt-1.5 text-[10px] font-medium ${copied ? 'text-emerald-500' : 'text-muted-foreground/50'}`}
            >
              {copied ? '✓ Copied' : 'Click to copy'}
            </p>
          </div>
        </button>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border-border bg-card hover:border-primary/40 hover:bg-accent/30 flex flex-col gap-4 rounded-2xl border p-5 no-underline transition-colors hover:shadow-sm"
        >
          <div className="bg-muted text-muted-foreground flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
            <Linkedin className="h-4 w-4" />
          </div>
          <div>
            <p className="text-muted-foreground mb-1 text-[10px] tracking-widest uppercase">
              LinkedIn
            </p>
            <p className="text-foreground text-xs font-medium">
              Connect with me
            </p>
            <div className="mt-1.5 flex items-center gap-1">
              <p className="text-muted-foreground/50 text-[10px]">
                View profile
              </p>
              <ArrowUpRight className="text-muted-foreground/50 h-3 w-3" />
            </div>
          </div>
        </a>

        <div className="border-border bg-card flex flex-col gap-4 rounded-2xl border p-5">
          <div className="bg-muted text-muted-foreground flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <p className="text-muted-foreground mb-1 text-[10px] tracking-widest uppercase">
              Location
            </p>
            <p className="text-foreground text-xs font-medium">
              South Tangerang, Indonesia
            </p>
            <p className="text-muted-foreground/50 mt-1.5 text-[10px]">
              GMT +7
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
