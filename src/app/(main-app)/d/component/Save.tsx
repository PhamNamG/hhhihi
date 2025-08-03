'use client';
import { useSavedStore } from '@/store/use-saved-store';

interface SaveProps {
	movieId: string;
	movieData: {
		id: string;
		name: string;
		thumbnail: string;
		slug: string;
	};
}

const Save = ({ movieId, movieData }: SaveProps) => {
	const { isLiked, toggleFavorite } = useSavedStore();
	return (
		<div className='flex items-center gap-2'>
			<button
				onClick={() => toggleFavorite(movieData)}
				className={`px-3 sm:px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex-1 sm:flex-none ${isLiked(movieId)
						? 'bg-[#ffc107] text-black'
						: 'bg-[#FFD875] text-black hover:bg-[#ffc107]'
					}`}
			>
				{isLiked(movieId) ? 'Đã yêu thích' : 'Yêu thích'}
			</button>
			<button
				className={`px-3 sm:px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex-1 sm:flex-none bg-[#26262c] text-white hover:bg-[#2f2f36]`}
			>
				Theo dõi
			</button>
		</div>
	);
};

export default Save;
