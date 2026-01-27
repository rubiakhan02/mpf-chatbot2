import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata = {
    title: 'MyPropertyFact Chatbot',
    description: 'Your trusted real estate partner.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={outfit.className}>{children}</body>
        </html>
    );
}
