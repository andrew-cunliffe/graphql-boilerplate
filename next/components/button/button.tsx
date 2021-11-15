import { ButtonHTMLAttributes, forwardRef } from 'react';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;
type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, Props>(({ children, ...props }, ref) => {
    return (
        <button
            {...props}
            ref={ref}
            data-cy="button"
            className="inline-block px-6 py-3 disabled:bg-opacity-50 rounded-sm bg-red-500 hover:bg-red-600 text-white font-semibold uppercase focus:outline-none ring-offset-current focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export { Button };
