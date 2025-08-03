const CommentSection = () => {
  return (
    <div className="bg-[#1a1a1f] text-white p-6 rounded-lg mt-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-bold text-[#FFD875]">Bình luận</h3>
        <span className="bg-[#26262c] text-sm text-gray-300 px-2 py-0.5 rounded-full">16</span>
      </div>

      <div className="flex gap-2 mb-4">
        <button className="px-4 py-1.5 text-sm font-medium bg-[#26262c] text-white rounded-full hover:bg-[#2d2d33] transition-colors">
          Bình luận
        </button>
        <button className="px-4 py-1.5 text-sm font-medium bg-[#26262c] text-white rounded-full hover:bg-[#2d2d33] transition-colors">
          Đánh giá
        </button>
      </div>

      <div className="bg-[#26262c] rounded-lg p-4">
        <p className="text-sm text-gray-300 text-center">
          Vui lòng{" "}
          <span className="text-[#FFD875] hover:underline">
            đăng nhập
          </span>{" "}
          để bình luận
        </p>
      </div>
    </div>
  );
};

export default CommentSection;