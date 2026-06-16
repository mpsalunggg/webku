'use client'

import type { MDXComponents } from 'mdx/types'
import { Link, Check, Copy } from 'lucide-react'
import { isValidElement, useState, type ReactNode } from 'react'

function slugifyHeading(text: React.ReactNode): string {
  const str = typeof text === 'string'
    ? text
    : Array.isArray(text)
      ? text.join('')
      : String(text ?? '')
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function HeadingAnchor({ id }: { id: string }) {
  return (
    <a
      href={`#${id}`}
      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
      aria-label="Link to section"
    >
      <Link className="inline h-4 w-4" />
    </a>
  )
}

function extractText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode }
    return extractText(props.children)
  }
  return ''
}

function CodeBlock({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'pre'>) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const text = extractText(children)
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <div className="group relative mb-4">
      <pre
        {...props}
        className={`${className ?? ''} text-foreground overflow-x-auto rounded-lg border border-border p-4 [&_code]:bg-transparent [&_code]:p-0`}
      >
        {children}
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Copied' : 'Copy code'}
        className="
          absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center
          rounded-md border border-border bg-background/80 text-muted-foreground
          opacity-0 backdrop-blur transition-opacity
          hover:text-foreground group-hover:opacity-100
        "
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  )
}

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => {
    const id = slugifyHeading(children)
    return (
      <h1 id={id} className="group text-foreground mb-6 mt-8 text-4xl font-bold first:mt-0 scroll-mt-24">
        {children}
        <HeadingAnchor id={id} />
      </h1>
    )
  },
  h2: ({ children }) => {
    const id = slugifyHeading(children)
    return (
      <h2 id={id} className="group text-foreground mb-4 mt-8 text-3xl font-semibold scroll-mt-24">
        {children}
        <HeadingAnchor id={id} />
      </h2>
    )
  },
  h3: ({ children }) => {
    const id = slugifyHeading(children)
    return (
      <h3 id={id} className="group text-foreground mb-3 mt-6 text-2xl font-semibold scroll-mt-24">
        {children}
        <HeadingAnchor id={id} />
      </h3>
    )
  },
  h4: ({ children }) => {
    const id = slugifyHeading(children)
    return (
      <h4 id={id} className="group text-foreground mb-2 mt-4 text-xl font-semibold scroll-mt-24">
        {children}
        <HeadingAnchor id={id} />
      </h4>
    )
  },
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
  pre: CodeBlock,
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