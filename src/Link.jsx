import { navigate } from './router.js'

// Client-side link: swaps pages without a full reload, but still a real <a href> (open in new tab, copy link, etc.).
export default function Link({ to, children, ...props }) {
  const onClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} onClick={onClick} {...props}>
      {children}
    </a>
  )
}
