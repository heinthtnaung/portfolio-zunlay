"use client";

import { PageList } from "@/dataset/pageList";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigaionMenu() {
  const pathname = usePathname();

  return (
    <aside className="fixed right-0 top-1/2 -translate-y-1/2">
      {PageList.map((pl, idx) => (
        <div key={`navi_${idx}`} className={`px-4 text-right`}>
          <Link href={pl.path}>
            <div className="flex justify-end items-center">
              <span
                className={`
                    px-4 py-1
                    ${pathname === pl.path ? " bg-pink-400 rounded-full" : ""}`}
              >
                {pl.title}
              </span>
              <div
                className={`
                 w-4 h-4 rounded-full ml-4
                 ${pathname === pl.path ? " bg-pink-400" : "bg-zinc-200"}
                `}
              ></div>
            </div>
          </Link>
        </div>
      ))}
    </aside>
  );
}
