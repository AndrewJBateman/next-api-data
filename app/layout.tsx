import "@/styles/globals.css";
import NavHeader from "@/components/NavHeader";

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<head>
				<title>Next 13 - TailwindCSS Blog</title>
				<meta name="description" content="saas blog" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className='bg-gray-50 dark:bg-gray-900'>
				<NavHeader />
				<main className="flex flex-col text-center px-8">{children}</main>
			</body>
		</html>
	);
}
