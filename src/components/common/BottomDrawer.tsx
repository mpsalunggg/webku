import type { ReactNode } from 'react'
import { X } from 'lucide-react'

interface BottomDrawerProps {
  open: boolean
  onClose: () => void
  title?: ReactNode
  children: ReactNode
}

/** A bottom sheet that slides up from the edge of the viewport. */
export function BottomDrawer({
  open,
  onClose,
  title,
  children,
}: BottomDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={`absolute inset-x-0 bottom-0 transition-transform duration-300 ease-out ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="mx-auto w-full max-w-md px-4">
          <div className="rounded-t-3xl border border-border bg-card p-4 pt-3 shadow-2xl">
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-border" />
            <div className="flex items-center justify-between px-1 pb-3">
              <div>{title}</div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="text-muted-foreground hover:text-foreground flex h-7 w-7 items-center justify-center rounded-full border border-border transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomDrawer
