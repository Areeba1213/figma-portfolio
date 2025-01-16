import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react";
  

export const header = () => {
  return (
    <header className="w-full h-14  flex justify-between items-center bg-white">
        {/* logo */}
    <div>
     <h1 className="text-3xl font-bold pl-3">{"<AS/>"}</h1>
    </div>
    {/*nav links */}
     <ul className="hidden md:block">
        <li className="space-x-5 pr-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
            <Link href={"/projects"}>Project</Link>
            <button className="bg-gray-700 hover:bg-black text-white py-2 px-4 font-bold rounded-lg">Download CV</button>
        </li>
       
     </ul>
     <Sheet>
  <SheetTrigger className="text-xl md:hidden">
    <Menu/>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Areeba Shahid</SheetTitle>
      <SheetDescription>
      <ul>
        <li className="flex flex-col gap-y-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
            <Link href={"/projects"}>Project</Link>
            <button className="bg-gray-800 text-white py-2 px-4 font-bold rounded-lg">Download CV</button>
        </li>
       
     </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </header>
  )
}
export default header;