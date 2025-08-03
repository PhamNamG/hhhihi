import { handleImage } from "../../../common/handleImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icommented } from "@/interfaces/comment";
type CommentListProps = {
  comments: Icommented[];
  userInfo: {
    user: {
      image: string;
      username: string;
    };
  };
  userLocal: any;
};
const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="overflow-y-auto bg-gray-900 rounded-lg p-4 mt-4 space-y-4 scroll-containers-comment">
      {comments?.map((item: any, index: number) => (
        <div key={index} className="bg-gray-800 rounded-lg p-4 space-y-3">
          <div className="">
            <div className="flex items-center space-x-3">
              <Avatar className="mt-5">
                <AvatarImage src={handleImage(item?.user?.image)} />
                <AvatarFallback>{item?.user?.username}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-gray-300 font-semibold">
                  {item?.user?.username}
                </p>
                <p className="text-xs text-gray-500">
                  <time title="February 8th, 2022">{item?.timeAgo}</time>
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-400">{item?.commentContent}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
