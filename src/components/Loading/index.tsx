import MVImage from "../MV/IMAGE";

const LoadingUsagyuuun = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full backdrop-blur-sm p-5 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <MVImage
          src="/images/loading.heart.gif"
          alt="Loading"
          className="h-20 w-20 sm:h-32 sm:w-32 animate-bounce opacity-80"
          width={32}
          height={32}
        />
        <div className="text-center sm:text-left">
          <div className="text-white/80 text-lg sm:text-xl font-semibold animate-pulse">
            Chờ xíu đang tải....
          </div>
          <p className="text-white/70 text-xs sm:text-sm font-medium mt-1 sm:mt-2 animate-pulse">
            Server cùi nên chờ xíu nha...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingUsagyuuun;
