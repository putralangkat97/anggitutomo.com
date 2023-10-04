import { Link } from "@inertiajs/react";

export default function PrimaryLinkButton({
  className = '',
  disabled,
  children,
  ...props
}) {
  return (
    <Link
      {...props}
      className={
        `inline-flex items-center px-4 py-2 bg-orange-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 transition ease-in-out duration-150 ${
          disabled && 'opacity-25'
        } ` + className
      }
      as="button"
      disabled={disabled}
    >
      {children}
    </Link>
  );
}
