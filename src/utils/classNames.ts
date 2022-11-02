/**
 * Helper for long className and conditional className
 */
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
