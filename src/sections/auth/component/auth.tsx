// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Avatar } from "@/components/ui/avatar";
// import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
// import { handleImage } from "@/app/lib/handleImage";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { LogOut, User } from "lucide-react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import MVLink from "@/app/components/Location/Link";
// import { logout } from "@/lib/features/auth/auth";
// import { useAppDispatch } from "@/lib/hook";
// import { useToastMessages } from "../../../../../../hook/isToast";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { ChanngePassWord } from "@/app/components/ChangePassword";
// import ProfileForm from "./me/page";
// const AuthHeader = ({ userInfor }: any) => {
//   const dispath = useAppDispatch();
//   const { handleSuccess } = useToastMessages();

//   return (
//     <>
//       {userInfor?.isLogin ? (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Avatar>
//               <AvatarImage src={handleImage(userInfor?.user?.image)} />
//               <AvatarFallback>{userInfor?.user?.username}</AvatarFallback>
//             </Avatar>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent
//             className="bg-[#1a1a20] text-white"
//             side="bottom"
//             align="end"
//           >
//             <DropdownMenuLabel>{userInfor?.user?.username}</DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>
//               <Sheet>
//                 <SheetTrigger asChild>
//                   <button
//                     className="flex items-center gap-2 w-full"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <User />
//                     <span>Profile</span>
//                   </button>
//                 </SheetTrigger>
//                 <SheetContent onClick={(e) => e.stopPropagation()}>
//                   <SheetHeader>
//                     <SheetTitle>{"Sửa hồ sơ"}</SheetTitle>
//                     <Avatar className="mt-5">
//                       <AvatarImage src={handleImage(userInfor?.user?.image)} />
//                       <AvatarFallback>{userInfor?.user?.image}</AvatarFallback>
//                     </Avatar>
//                     <SheetDescription>
//                       {
//                         "Thực hiện thay đổi cho hồ sơ của bạn ở đây. Nhấp vào lưu khi bạn hoàn tất."
//                       }
//                     </SheetDescription>
//                   </SheetHeader>

//                   <Tabs defaultValue="account" className="w-full mt-5">
//                     <TabsList className="grid w-full grid-cols-2">
//                       <TabsTrigger value="account">Tài khoản</TabsTrigger>
//                       <TabsTrigger value="password">Mật khẩu</TabsTrigger>
//                     </TabsList>
//                     <TabsContent value="account">
//                       <Card>
//                         <CardHeader>
//                           <CardTitle>Tài khoản</CardTitle>
//                           <CardDescription>
//                             Thay đổi tài khoản của bạn.
//                           </CardDescription>
//                         </CardHeader>
//                         <CardContent className="space-y-2">
//                           <ProfileForm userId={userInfor} />
//                         </CardContent>
//                       </Card>
//                     </TabsContent>
//                     <TabsContent value="password">
//                       <Card>
//                         <CardHeader>
//                           <CardTitle>Mật khẩu</CardTitle>
//                           <CardDescription>
//                             Thay đổi mật khẩu của bạn.
//                           </CardDescription>
//                         </CardHeader>
//                         <CardContent className="space-y-2">
//                           <>
//                             <ChanngePassWord />
//                           </>
//                         </CardContent>
//                       </Card>
//                     </TabsContent>
//                   </Tabs>
//                 </SheetContent>
//               </Sheet>
//             </DropdownMenuItem>

//             <DropdownMenuItem>
//               <User />
//               <span>Support</span>
//             </DropdownMenuItem>
//             <DropdownMenuItem className="hover:cursor-pointer">
//               <LogOut />
//               <span
//                 onClick={() => {
//                   dispath(logout());
//                   handleSuccess("Đăng xuất thành công");
//                 }}
//               >
//                 Log out
//               </span>
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       ) : (
//         <MVLink prefetch={false} to="/login">
//           <Button className="lg:block bg-yellow-600 hover:bg-yellow-700 text-white font-bold">
//             Đăng Nhập
//           </Button>
//         </MVLink>
//       )}
//     </>
//   );
// };

// export default AuthHeader;
