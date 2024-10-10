import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Vazi Center',
  description: 'Vazi Center website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
