'use client'

import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function GlobalError({ error, reset }: { error: Error, reset: () => void }) {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
			<div className="max-w-md w-full mx-4 p-8 rounded-lg bg-gray-800 shadow-lg">
				<div className="flex flex-col items-center space-y-6">
					<div className="p-4 bg-red-500/20 rounded-full">
						<AlertTriangle className="w-12 h-12 text-red-500" />
					</div>

					<div className="text-center space-y-2">
						<h2 className="text-2xl font-bold">Đã xảy ra lỗi!</h2>
						<p className="text-gray-400">Phim không tồn tại, vui lòng thử lại sau!</p>
					</div>

					<button
						onClick={() => reset()}
						className="flex items-center space-x-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
					>
						<RefreshCw className="w-5 h-5" />
						<span>Thử lại</span>
					</button>
				</div>
			</div>
		</div>
	)
}