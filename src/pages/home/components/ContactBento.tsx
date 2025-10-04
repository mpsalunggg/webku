import {
  Mail,
  MapPin,
  GitCommit,
  GitPullRequest,
  Users,
  Github,
  Linkedin,
} from 'lucide-react'

interface GitHubStats {
  name: string
  avatarUrl: string
  totalRepositories: { totalCount: number }
  totalFollowers: { totalCount: number }
  totalCommit: { totalCommitContributions: number }
  totalPullRequest: { totalPullRequestContributions: number }
}

interface ContactBentoProps {
  githubStats?: GitHubStats
  username?: string
}

const ContactBento = ({
  githubStats,
  username = 'mpsalunggg',
}: ContactBentoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="md:col-span-2 md:row-span-2 bg-card border border-border rounded-2xl p-8"
      >
        <div className="flex items-center gap-4 mb-6">
          {githubStats?.avatarUrl && (
            <img
              src={githubStats.avatarUrl}
              alt={githubStats.name}
              className="w-16 h-16 rounded-full border-2 border-border"
            />
          )}
          <div>
            <Github className="w-8 h-8 mb-2 text-primary" />
            <h3 className="text-xl font-semibold">
              {githubStats?.name || 'GitHub'}
            </h3>
            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              @{username}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <GitCommit className="w-4 h-4" />
              <span className="text-xs">Commits</span>
            </div>
            <p className="text-2xl font-semibold">
              {githubStats?.totalCommit.totalCommitContributions.toLocaleString() ||
                '0'}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <GitPullRequest className="w-4 h-4" />
              <span className="text-xs">Pull Requests</span>
            </div>
            <p className="text-2xl font-semibold">
              {githubStats?.totalPullRequest.totalPullRequestContributions.toLocaleString() ||
                '0'}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Github className="w-2 h-2" />
              <span className="text-xs">Repositories</span>
            </div>
            <p className="text-2xl font-semibold">
              {githubStats?.totalRepositories.totalCount.toLocaleString() ||
                '0'}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-xs">Followers</span>
            </div>
            <p className="text-2xl font-semibold">
              {githubStats?.totalFollowers.totalCount.toLocaleString() || '0'}
            </p>
          </div>
        </div>
      </a>

      <div className="md:col-span-2 bg-card border border-border rounded-2xl p-6">
        <Mail className="w-6 h-6 mb-3 text-primary" />
        <h3 className="text-lg font-semibold mb-1">Email</h3>
        <a
          href="mailto:putrasatria893@gmail.com"
          className="text-muted-foreground group-hover:text-foreground transition-colors"
        >
          putrasatria893@gmail.com
        </a>
      </div>

      <a
        href="https://www.linkedin.com/in/mputrasatria"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-card border border-border rounded-2xl p-6"
      >
        <Linkedin className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-foreground transition-colors" />
        <h3 className="text-sm font-medium mb-1">LinkedIn</h3>
        <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
          Connect
        </p>
      </a>

      <div className="bg-card border border-border rounded-2xl p-6">
        <MapPin className="w-6 h-6 mb-3 text-primary" />
        <h3 className="text-sm font-medium mb-1">Location</h3>
        <p className="text-xs text-muted-foreground">Jakarta, Indonesia</p>
      </div>
    </div>
  )
}

export default ContactBento
