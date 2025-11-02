import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LuAtSign } from "react-icons/lu";
import { PiBinoculars, PiHandFist, PiHandshakeLight, PiLinkedinLogoLight, PiNotebook, PiPaintBrushLight, PiPencilCircleLight, PiSoccerBall } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";

const Sidebar = () => {
    return (
        <section className=" hidden md:block">
            <aside className="fixed left-0 top-0 h-screen w-60 bg-muted border-r border-r-white/10 z-40">
                <div className="flex flex-col h-full">
                    <Link href="/">
                        <div className="w-32 h-8 relative mx-6 my-4">
                            <Image
                                fill
                                src="/assets/logo.png"
                                alt="Zel Logo"
                                className="object-contain"
                            />
                        </div>
                    </Link>
                    <nav className="flex flex-col h-full  px-4 gap-4">
                        <Link href="/about">
                            <li className="flex items-center px-3 py-2 gap-2 text-sm rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                                <Image width={24} height={24} src="/assets/zel.png" alt="Denzel" />
                                <p>About</p>
                            </li>
                        </Link>
                        <ul className="flex flex-col">
                            <span className=" opacity-50 mb-2 px-3 text-xs">Interface</span>
                            <Link href="https://astrae.design">
                                <li className="flex items-center px-3 py-2 gap-2 text-sm rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                                    <PiPaintBrushLight className=" size-4 md:size-5" />
                                    <p>Astrae Design</p>
                                </li>
                            </Link>

                            <Link href="https://www.builtwithatlas.com/meeting-iq">
                                <li className="flex items-center px-3 py-2 gap-2 text-sm rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                                    <PiHandshakeLight className=" size-4 md:size-5" />
                                    <p>Meeting IQ</p>
                                </li>
                            </Link>
                            <Link href="https://www.skillura.com/">
                                <li className="flex items-center px-3 py-2 gap-2 text-sm rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                                    <PiHandFist className=" size-4 md:size-5" />
                                    <p>Skillura</p>
                                </li>
                            </Link>
                            <Link href="https://fetchtalent.ai/">
                                <li className="flex items-center px-3 py-2 gap-2 text-sm rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                                    <PiBinoculars className=" size-4 md:size-5" />
                                    <p>FetchTalent</p>
                                </li>
                            </Link>
                        </ul>

                        <ul className="flex flex-col">
                            <span className=" opacity-50 mb-2 px-3 text-xs">Design Lead</span>
                            <Link href="https://bhytesoftware.com/">
                                <li className="flex items-center px-3 py-2 gap-2 text-sm rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                                    <PiPencilCircleLight className=" size-4 md:size-5" />
                                    <p>Bhyte Studios</p>
                                </li>
                            </Link>
                        </ul>

                        <ul className="flex flex-col">
                            <span className=" opacity-50 mb-2 px-3 text-xs">Side Projects</span>
                            <Link href="https://stakenet.app/">
                                <li className="flex items-center px-3 py-2 gap-2 text-sm rounded-md text-foreground/30 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                                    <PiSoccerBall className=" size-4 md:size-5" />
                                    <p>Stakenet(wip)</p>
                                </li>
                            </Link>
                        </ul>

                        <ul className="flex flex-col">
                            <span className=" opacity-50 mb-2 px-3 text-xs">Contact</span>
                            <Link href="mailto:denzelobeng421@gmail.com">
                                <li className="flex items-center justify-between px-3 py-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                                    <div className=" inline-flex items-center gap-2">
                                        <LuAtSign className=" size-4 md:size-5" />
                                        <p>Email</p>
                                    </div>
                                    <ArrowUpRight className=" size-4 opacity-50" />
                                </li>
                            </Link>
                            <Link href="http://linkedin.com/in/alan-obeng-peprah-b8b360310">
                                <li className="flex items-center justify-between px-3 py-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                                    <div className=" inline-flex items-center gap-2">
                                        <PiLinkedinLogoLight className=" size-4 md:size-5" />
                                        <p>LinkedIn</p>
                                    </div>
                                    <ArrowUpRight className=" size-4 opacity-50" />
                                </li>
                            </Link>
                            <Link href="https://twitter.com/imdenze_l">
                                <li className="flex items-center justify-between px-3 py-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                                    <div className=" inline-flex items-center gap-2">
                                        <RiTwitterXFill className=" size-4 md:size-5" />
                                        <p>X</p>
                                    </div>
                                    <ArrowUpRight className=" size-4 opacity-50" />
                                </li>
                            </Link>
                            <Link href="https://drive.google.com/file/d/1YERrrrWqeSZZn3CaB_jXQJ0H-hPecbIG/view?usp=drive_link">
                                <li className="flex items-center justify-between px-3 py-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                                    <div className=" inline-flex items-center gap-2">
                                        <PiNotebook className=" size-4 md:size-5" />
                                        <p>Resume</p>
                                    </div>
                                    <ArrowUpRight className=" size-4 opacity-50" />
                                </li>
                            </Link>
                        </ul>
                    </nav>
                    <span className=" p-6 opacity-70 text-xs">© Denzel Obeng, 2025</span>
                </div>
            </aside>
        </section>
    );
}

export default Sidebar;