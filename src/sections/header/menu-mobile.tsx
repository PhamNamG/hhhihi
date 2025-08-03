'use client'

import React from 'react';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import EmployeeBtnLogin from '../emloyee-btn-login';
import { useAuthStore } from '@/store/use-auth-store';

interface MenuMobileProps {
	isOpen: boolean;
	onClose: () => void;
	menuItems: {
		name: string;
		slug: string;
	}[];
}

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, onClose, menuItems }) => {

	const { openLoginModal } = useAuthStore();
	return (
		<Dialog.Root open={isOpen} onOpenChange={onClose}>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 " />
				<Dialog.Content className="fixed inset-y-0 right-0 w-[300px] shadow-xl z-50 p-6  bg-[#1a1a20] transition-all duration-300">
				
					<div className="flex flex-col h-full ">
						{/* Header */}
						<div className="flex items-center justify-between mb-2">
							<h2 className="text-xl font-semibold text-white">Menu</h2>
							
							<Dialog.Close className="rounded-full hover:bg-zinc-800 p-2 transition-colors">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</Dialog.Close>
						</div>

						{/* Menu Items */}
						
						<nav className="h-full">
							<ul className="space-y-4">
								{menuItems.map((item) => (
									<li key={item.slug}>
										<Link
											href={item.slug}
											onClick={onClose}
											className="flex items-center space-x-4 px-4 py-3 rounded-lg text-white hover:text-white hover:bg-zinc-800/50 transition-colors"
										>
											<span className="font-medium">{item.name}</span>
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<div className="flex justify-center my-2">
						<EmployeeBtnLogin onClick={openLoginModal} />
					</div>
						{/* Footer */}
						<div className="mt-auto border-t border-zinc-800 text-white">
              <div className="flex items-center justify-center space-x-6">
                <button className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default MenuMobile;
