import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header className="flex justify-center gap-4 py-6 text-gray-600 bg-gray-200">
			<Link href="/">
				<a className="text-4xl text-center">
					<h1 className="pt-2 m-2">Manga List</h1>
				</a>
			</Link>
		</header>
	);
}
