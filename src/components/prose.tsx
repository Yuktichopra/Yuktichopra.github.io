import clsx from 'clsx';

export function Prose({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(className, 'prose prose-slate max-w-3xl mx-auto dark:prose-invert')}
      {...props}
    />
  );
}
