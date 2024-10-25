import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";

import IconcHamburguer from "../../../public/icon/icon-hamburguer.png";
import LogoPetshop from "../../../public/img/logo.png";

import Image from "next/image";
import NavLink from "./NavLink";

import data from "@/message/data.json";

export default function MenuMobile() {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src={IconcHamburguer}
                        alt="Icon Hamburguer"
                        className="w-7 h-auto"
                    />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            <Image
                                src={LogoPetshop}
                                alt="Logo Petshop"
                                width={150}
                            />
                        </SheetTitle>
                    </SheetHeader>
                    <SheetDescription className="flex flex-col py-12">
                        {data.InfoNavLink.map((info, index) => (
                            <NavLink
                                className="text-lg mb-4"
                                key={index}
                                href={info.href}
                                name={info.name}
                            />
                        ))}
                    </SheetDescription>
                    <SheetDescription className="fixed bottom-8 right-8">
                        Redes Sociais
                    </SheetDescription>
                </SheetContent>
            </Sheet>
        </div>
    );
}
