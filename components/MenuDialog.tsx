"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function MenuDialog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const path = usePathname();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <span>
      <div className="relative z-20 md:hidden">
        {isOpen ? (
          <XMarkIcon width={24} onClick={closeModal} />
        ) : (
          <Bars3BottomLeftIcon width={24} onClick={openModal} />
        )}
      </div>

      <Transition appear={true} show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 md:hidden" onClose={() => {}}>
          <div className="fixed inset-0 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col min-h-screen items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col transform overflow-hidden text-center transition-all">
                  <Link
                    href="/"
                    onClick={closeModal}
                    className={clsx(
                      path === "/"
                        ? "font-semibold text-gray-800 dark:text-gray-200"
                        : "font-normal text-gray-600 dark:text-gray-400",
                      "py-2"
                    )}
                  >
                    Home
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={closeModal}
                    className={clsx(
                      path === "/pricing"
                        ? "font-semibold text-gray-800 dark:text-gray-200"
                        : "font-normal text-gray-600 dark:text-gray-400",
                      "py-2"
                    )}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/info"
                    onClick={closeModal}
                    className={clsx(
                      path === "/info"
                        ? "font-semibold text-gray-800 dark:text-gray-200"
                        : "font-normal text-gray-600 dark:text-gray-400",
                      "py-2"
                    )}
                  >
                    Info
                  </Link>
                  <Link
                    href="/blog"
                    onClick={closeModal}
                    className={clsx(
                      path === "/blog"
                        ? "font-semibold text-gray-800 dark:text-gray-200"
                        : "font-normal text-gray-600 dark:text-gray-400",
                      "py-2"
                    )}
                  >
                    Blog
                  </Link>
									<Link
                    href="/contact"
                    onClick={closeModal}
                    className={clsx(
                      path === "/contact"
                        ? "font-semibold text-gray-800 dark:text-gray-200"
                        : "font-normal text-gray-600 dark:text-gray-400",
                      "py-2"
                    )}
                  >
                    Contact
                  </Link>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </span>
  );
}
