"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  addCommentSlice,
  getAllCommentSlice,
} from "@/lib/features/comments/thunkActions";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CommentList from "./CommentList";
import { isGetValue } from "../../hooks/isGetValue";
import MVLink from "../Location/Link";
import { Spinner } from "@/components/ui/spinner";
import useToast from "@/hooks/use-toast";
const Comments = ({ id }: { id: string | any }) => {
  const toast = useToast();
  const user = isGetValue();
  const form = useForm({});
  const comment = useAppSelector((state) => state.comments.value);
  const commentLoaing = useAppSelector((state) => state.comments.isLoading);
  const userInfo = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCommentSlice(id));
  }, []);
  const onSubmit = async (data: any) => {
    const dataCm = {
      commentContent: data.commentContent,
      category: id,
      categoryId: id,
    };
    const res = await dispatch(addCommentSlice(dataCm));
    if (res.payload?.code == 200) {
      toast.success(res?.payload?.message);
    } else {
      toast.error(res?.payload?.message);
    }
  };
  return (
    <div className="mt-5">
      <section className="bg-gray-800 py-8 lg:py-5 antialiased rounded-sm">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-white">
              Bình luận ({comment?.length})
            </h2>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="commentContent"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Viết bình luận của bạn"
                        className="resize-none width-full text-black"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!user ? (
                <div className="relative my-5 text-center bg-gray-900 rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  <MVLink
                    prefetch={false}
                    className="hover:text-orange-500"
                    to="/login"
                  >
                    Đăng nhập để bình luận
                  </MVLink>
                </div>
              ) : (
                <Button className="hover:text-white bg-white text-gray-900 font-bold">
                  Bình Luận
                </Button>
              )}
            </form>
          </Form>

          {/* Khu vực bình luận với scroll */}
          {commentLoaing ? (
            <Spinner size="medium" />
          ) : (
            <CommentList
              comments={comment}
              userInfo={userInfo}
              userLocal={user}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Comments;
