import MVLink from "../Location/Link";
const SeriNumberMovie = ({ data, isLoading }: any) => {
  if (isLoading) {
    return <div className="seriLoading">Loading....</div>;
  }
  return (
    <>
      {data.isMovie == "drama" ? (
        <div className="scroll-container h-[174px]">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 pr-1">
            {data?.products?.map((item: any) => (
              <MVLink
                prefetch={false}
                to={`/d/${item.slug}`}
                key={item._id}
                className="block text-center"
              >
                <div
                  className={`bg-gray-800 hover:bg-gray-700 py-2 rounded sm:text-sm sm:px-5 sm:py-2 md:text-base font-bold md:px-5 md:py-2.5`}
                >
                  {item.seri}
                </div>
              </MVLink>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SeriNumberMovie;
