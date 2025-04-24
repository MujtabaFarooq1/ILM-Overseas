import { Home, Calendar } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="flex h-full w-63 flex-col border-r bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <div className="flex items-center gap-2">
          <img src="/images/ilmlogo.png" alt="" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-2">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-md bg-green-500 px-3 py-2 text-white"
        >
          <Home className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100"
        >
          <Calendar className="h-5 w-5" />
          <span>Meetings</span>
        </Link>
      </nav>

      {/* User */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-8 w-8 rounded-full bg-green-100">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="User"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
          </div>
          <div className="flex-1 truncate">
            <div className="text-sm font-medium">User Name</div>
          </div>
        </div>
      </div>
    </div>
  );
}
