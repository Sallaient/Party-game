interface IconProps {
  className?: string
}

/**
 * Line icons on a 24px grid, 1.75 stroke. Drawn inline rather than pulled from
 * a font or a library so they stay consistent and work offline.
 */
function base(className?: string) {
  return {
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: className ?? 'h-5 w-5',
    'aria-hidden': true,
  }
}

export const ChevronLeft = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M14.5 5.5 8 12l6.5 6.5" />
  </svg>
)

export const Close = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const Plus = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const Minus = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M5 12h14" />
  </svg>
)

export const Check = ({ className }: IconProps) => (
  <svg {...base(className)} strokeWidth={2.25}>
    <path d="M4.5 12.5 9.5 17.5 19.5 7" />
  </svg>
)

export const Play = ({ className }: IconProps) => (
  <svg {...base(className)} fill="currentColor" stroke="none">
    <path d="M8 5.5v13l11-6.5z" />
  </svg>
)

export const People = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="9" cy="8" r="3.25" />
    <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path d="M16 5.5a3.25 3.25 0 0 1 0 6.5M17.5 14.8c2 .7 3.5 2.4 3.5 4.7" />
  </svg>
)

export const Cards = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="3.25" y="6.5" width="11" height="14" rx="2" />
    <path d="M8 4.6l6.9-1.4a2 2 0 0 1 2.4 1.6l2.4 12a2 2 0 0 1-1.6 2.3l-1.9.4" />
  </svg>
)

export const Pencil = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4 20h4l10-10a2.5 2.5 0 0 0-4-4L4 16z" />
    <path d="M13.5 6.5 17.5 10.5" />
  </svg>
)

/** Sliders, not a cog: a cog at 20px collapses into an indistinct blob. */
export const Settings = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4 7h9M17.5 7H20M4 17h3.5M12 17h8" />
    <circle cx="15.5" cy="7" r="2.5" />
    <circle cx="9.5" cy="17" r="2.5" />
  </svg>
)

export const Trash = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4 7h16M9.5 7V4.75h5V7M6.5 7l.9 12.2a1.5 1.5 0 0 0 1.5 1.3h6.2a1.5 1.5 0 0 0 1.5-1.3L17.5 7" />
  </svg>
)

export const Timer = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="13.5" r="7.5" />
    <path d="M12 9.75v3.75l2.5 2M9.5 2.5h5" />
  </svg>
)

export const Lock = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
  </svg>
)

export const Unlock = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
    <path d="M8 10.5V7.5a4 4 0 0 1 7.7-1.5" />
  </svg>
)

export const Download = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 3.5v11M7.5 10.5 12 15l4.5-4.5M4.5 19.5h15" />
  </svg>
)

export const Info = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5M12 7.75v.5" />
  </svg>
)
