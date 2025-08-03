import { UserCircle2 } from "lucide-react";

export default function EmployeeBtnLogin({
	onClick
}: {
	onClick: () => void;
}) {
	return <button
		onClick={onClick}
		className="flex items-center gap-2 px-4 py-2 bg-[#FFD875] text-black rounded-full hover:bg-[#ffc107] transition-colors text-sm font-medium"
	>
		<UserCircle2 className="w-5 h-5" />
		<span className="inline">Thành viên</span>
	</button>;
}

