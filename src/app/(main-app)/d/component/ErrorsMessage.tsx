"use client";
import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { useErrorMessage } from '@/hooks/error-message';
import useToast from '@/hooks/use-toast';

interface ErrorsMessageProps {
	isOpen: boolean;
	onClose: () => void;
	movieName: string;
	productId: string;
	setIsErrorModalOpen: (value: boolean) => void;
}

const ErrorsMessage: React.FC<ErrorsMessageProps> = ({
	isOpen,
	onClose,
	movieName,
	productId,
	setIsErrorModalOpen
}) => {
	const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
	const [comment, setComment] = useState('');
	const { submitReport, isLoading, isSuccess } = useErrorMessage();
	const toast = useToast();
	// Reset form khi modal đóng
	useEffect(() => {
		if (!isOpen) {
			setSelectedEmoji(null);
			setComment('');
		}
	}, [isOpen]);

	// Tự động đóng modal khi gửi thành công
	useEffect(() => {
		if (isSuccess) {
			onClose();
		}
	}, [isSuccess, onClose]);

	const reactions = [
		{ emoji: "😍", label: "Tuyệt vời" },
		{ emoji: "😊", label: "Phim hay" },
		{ emoji: "😌", label: "Khá ổn" },
		{ emoji: "😢", label: "Phim chán" },
		{ emoji: "🤮", label: "Dở tệ" },
	];

	const handleSubmit = async () => {
		if (!selectedEmoji) {
			toast.success("Vui lòng chọn đánh giá");
			return;
		}

		submitReport({
			productId,
			reaction: selectedEmoji,
			comment: comment.trim()
		});

	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
			<div className="bg-[#1f1f24] rounded-lg w-full max-w-md relative">
				{/* Header */}
				<div className="flex justify-between items-center p-4 border-b border-gray-700">
					<h3 className="text-lg font-semibold text-white">{movieName}</h3>
					<button
						onClick={onClose}
						disabled={isLoading}
						className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
					>
						<IoClose size={24} />
					</button>
				</div>

				{/* Content */}
				<div className="p-4">
					{/* Rating */}
					<div className="flex justify-between items-center mb-6">
						<div className="flex gap-4">
							{reactions.map((reaction) => (
								<button
									key={reaction.label}
									onClick={() => setSelectedEmoji(reaction.emoji)}
									disabled={isLoading}
									className={`flex flex-col items-center gap-1 transition-transform ${selectedEmoji === reaction.emoji ? 'transform scale-110' : ''
										} ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
								>
									<span className="text-2xl">{reaction.emoji}</span>
									<span className="text-xs text-gray-300">{reaction.label}</span>
								</button>
							))}
						</div>
					</div>

					{/* Comment */}
					<div className="space-y-2">
						<textarea
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							disabled={isLoading}
							placeholder="Báo lỗi về phim (tùy chọn)"
							className="w-full h-24 bg-[#26262c] text-white rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#FFD875] disabled:opacity-50 disabled:cursor-not-allowed"
						/>
					</div>
				</div>

				{/* Footer */}
				<div className="p-4 flex gap-3 border-t border-gray-700">
					<button
						onClick={handleSubmit}
						disabled={isLoading}
						className={`flex-1 bg-[#FFD875] text-black py-2 px-4 rounded-full font-medium transition-colors ${isLoading
								? 'opacity-50 cursor-not-allowed'
								: 'hover:bg-[#ffc107]'
							}`}
					>
						{isLoading ? 'Đang gửi...' : 'Báo lỗi'}
					</button>
					<button
						onClick={onClose}
						disabled={isLoading}
						className="flex-1 bg-[#26262c] text-white py-2 px-4 rounded-full font-medium hover:bg-[#2d2d33] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Đóng
					</button>
				</div>
			</div>
		</div>
	);
};

export default ErrorsMessage;
