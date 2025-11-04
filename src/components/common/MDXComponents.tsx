import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-foreground mb-6 mt-8 text-4xl font-bold first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-foreground mb-4 mt-8 text-3xl font-semibold">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-foreground mb-3 mt-6 text-2xl font-semibold">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-foreground mb-2 mt-4 text-xl font-semibold">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-muted-foreground mb-4 leading-7">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="text-muted-foreground mb-4 ml-6 list-disc space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-muted-foreground mb-4 ml-6 list-decimal space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-primary bg-muted mb-4 border-l-4 pl-4 py-2 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-muted text-foreground rounded px-1.5 py-0.5 text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-muted text-foreground mb-4 overflow-x-auto rounded-lg p-4">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="mb-4 rounded-lg w-full object-cover"
      loading="lazy"
    />
  ),
  hr: () => <hr className="border-border my-8 border-t" />,
  table: ({ children }) => (
    <div className="mb-4 overflow-x-auto">
      <table className="border-border w-full border">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-border bg-muted border px-4 py-2 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-border text-muted-foreground border px-4 py-2">
      {children}
    </td>
  ),
  strong: ({ children }) => (
    <strong className="text-foreground font-semibold">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
}
