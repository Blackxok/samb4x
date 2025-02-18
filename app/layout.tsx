// 'use client' ni olib tashlaymiz
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main className='p-4'>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
