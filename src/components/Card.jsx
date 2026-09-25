export function Card({ as: Element = 'div', className = '', children }) {
  return <Element className={`card ${className}`}>{children}</Element>;
}
