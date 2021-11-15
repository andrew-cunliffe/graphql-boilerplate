import '../styles/globals.css';

import * as NextImage from 'next/image';
import React from "react";
import { RouterContext } from  'next/dist/shared/lib/router-context';


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />,
});

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

/* Dont throw error when clicking Next <Link /> elements */
/* https://github.com/vercel/next.js/issues/16864#issuecomment-743743089 */
export const decorators = [
    (Story) => (
        <RouterContext.Provider value={{
            push: () => Promise.resolve(),
            replace: () => Promise.resolve(),
            prefetch: () => Promise.resolve()
        }}>
            <Story />
        </RouterContext.Provider>
    ),
];
