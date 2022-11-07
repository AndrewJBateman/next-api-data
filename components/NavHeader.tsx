"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloudIcon } from "@heroicons/react/24/solid";
import MenuDialog from "@/components/MenuDialog";

type Props = {
  href: string;
  text: string;
};

export function NavItem({ href, text }: Props) {
  const path = usePathname();
  return (
    <Link href={href}>
      <span
        className={clsx(
          path === href
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        {text}
      </span>
    </Link>
  );
}

export default function NavHeader() {
  return (
    <nav className="flex items-center justify-between w-full max-w-2xl border-gray-200 dark:border-gray-700 mx-auto p-8 text-gray-900 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
      <div>
        <MenuDialog />
        <NavItem href="/" text="Home" />
        <NavItem href="/pricing" text="Pricing" />
        <NavItem href="/info" text="Info" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="/contact" text="Contact" />
      </div>
      <CloudIcon width={24} />
    </nav>
  );
}
