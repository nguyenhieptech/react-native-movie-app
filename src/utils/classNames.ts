/**
 * Helper for long className and conditional className
 *
 * @see https://tailwindui.com/components/marketing/elements/headers
 */
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
