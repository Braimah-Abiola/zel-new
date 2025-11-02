import { Button } from "@/components/ui/button";
import { SidebarMobile } from "@/sections/sidebar-mobile";
import { Slash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FiLink2 } from "react-icons/fi";
import { LuAtSign } from "react-icons/lu";

const AboutPage = () => {
    return (
        <div>
            <section className=" md:hidden sticky top-0 z-50">
                <div className=" w-full flex items-center justify-between px-4 py-2 bg-muted">
                    <Link href="/">
                        <div className="w-32 h-8 relative">
                            <Image
                                fill
                                src="/assets/logo.png"
                                alt="Zel Logo"
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    <SidebarMobile />
                </div>
            </section>
            <section className=" hidden md:block sticky top-0 z-20 text-sm">
                <div className=" w-full flex items-center justify-between px-4 bg-muted py-1.5">
                    <Link href="/">
                        <span className="flex items-center px-2 py-1 gap-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                            <p>Home</p>
                            <Slash className=" -rotate-24 size-4 opacity-50" />
                            <Image width={20} height={20} src="/assets/zel.png" alt="Denzel" />
                            <p>About</p>
                        </span>
                    </Link>

                    <Link href="#">
                        <span className="flex items-center px-2 py-1 gap-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                            <FiLink2 className=" size-4" />
                            <p>Copy Link</p>
                        </span>
                    </Link>
                </div>
            </section>

            <section>
                <div className=" relative w-full h-auto aspect-video md:aspect-auto md:h-[75dvh]">
                    <Image fill src="/assets/about.png" alt="About Banner" className=" object-cover object-bottom" />
                </div>
            </section>

            <section className=" px-4  md:px-20 pt-8 md:pt-12">
                <h6 className="  text-lg md:text-2xl font-semibold text-white tracking-tight">Background</h6>
                <div className="flex flex-col gap-2 text-sm opacity-80 mt-2">
                    <p>I’ve always loved creating things for as long as I can remember. When I was about eleven, drawing became my favorite way to express myself. I’d spend hours sketching ideas just to see them come to life, and it always made me happy when people connected with what I made. Over time, that passion grew into a love for design and visual storytelling.</p>

                    <p>In 2021, I came across UX design, and it just made sense to me. It combined everything I cared about—creativity, empathy, and technology. I became really interested in how design could solve problems and make digital experiences feel simple and meaningful for people.</p>

                    <p>Now, I focus on designing products and websites that make a real difference. My goal is to create things that feel thoughtful, useful, and intuitive for anyone who uses them.</p>
                </div>
            </section>

            <section className=" w-full px-4  md:px-20 py-6 mt-2">
                <span className=" opacity-50">Some extra facts</span>
                <p className=" mt-2">Recently, I&apos;ve been</p>
                <div className="flex flex-col text-sm font-medium mt-2">
                    <p>☕️ Drinking 2+ bottles of Storm Energy a day</p>
                    <p>🤩 Appreciating nature and colors</p>
                    <p>👟 Playing football more often</p>
                </div>
            </section>

            <section className=" w-full px-4  md:px-20 py-6">
                <span className=" opacity-50">Experience</span>

                <div>
                    <div className=" w-full border-b flex items-center justify-between py-2.5">
                        <div className=" flex items-center gap-1  md:gap-2">
                            <Image width={20} height={20} className=" object-contain" src="/assets/bhyte.png" alt="Bhyte" />
                            <div className=" inline-flex items-center gap-0.5">
                                <span className=" text-sm font-semibold text-white">Bhyte Studios</span>
                                <Slash className=" -rotate-20 size-4 opacity-50" />
                                <p className=" opacity-50">Lead Designer</p>
                            </div>
                        </div>
                        <p className=" text-xs md:text-sm opacity-50">2025</p>
                    </div>

                    <div className=" w-full border-b flex items-center justify-between py-2.5">
                        <div className=" flex items-center gap-1  md:gap-2">
                            <Image width={20} height={20} className=" object-contain" src="/assets/nativex.png" alt="NativeX" />
                            <div className=" inline-flex items-center gap-0.5">
                                <span className=" text-sm font-semibold text-white">NativeX AI</span>
                                <Slash className=" -rotate-20 size-4 opacity-50" />
                                <p className=" opacity-50">Lead Product Designer</p>
                            </div>
                        </div>
                        <p className=" text-xs md:text-sm opacity-50">2020</p>
                    </div>

                    <div className=" w-full flex items-center justify-between py-2.5">
                        <div className=" flex items-center gap-1  md:gap-2">
                            <Image width={20} height={20} className=" object-contain" src="/assets/studio-ix.png" alt="Studio IX" />
                            <div className=" inline-flex items-center gap-0.5">
                                <span className=" text-sm font-semibold text-white">Studio IX</span>
                                <Slash className=" -rotate-20 size-4 opacity-50" />
                                <p className=" opacity-50">UI/UX Designer</p>
                            </div>
                        </div>
                        <p className=" text-xs md:text-sm opacity-50">2020 – 2021</p>
                    </div>
                </div>
            </section>


            <section className=" w-full px-4  md:px-20 py-6">
                <span className=" opacity-50">Education</span>

                <div>
                    <div className=" w-full border-b flex items-center justify-between py-2.5">
                        <div className=" flex items-center gap-1  md:gap-2">
                            <Image width={20} height={20} className=" object-contain" src="/assets/uds.png" alt="UDS" />
                            <div className=" inline-flex items-center gap-0.5">
                                <span className=" text-sm font-semibold text-white md:hidden">UDS</span>
                                <span className=" text-sm font-semibold text-white hidden md:block">University of Developmental Studies</span>
                                <Slash className=" -rotate-20 size-4 opacity-50" />
                                <p className=" opacity-50">Computer Science</p>
                            </div>
                        </div>
                        <p className=" text-xs md:text-sm opacity-50">2020 – 2024</p>
                    </div>



                    <div className=" w-full flex items-center justify-between py-2.5">
                        <div className=" flex items-center gap-1  md:gap-2">
                            <Image width={20} height={20} className=" object-contain" src="/assets/agogo.png" alt="Agogo State College" />
                            <div className=" inline-flex items-center gap-0.5">
                                <span className=" text-sm font-semibold text-white">Agogo State College</span>
                                <Slash className=" -rotate-20 size-4 opacity-50" />
                                <p className=" opacity-50">Visual Arts</p>
                            </div>
                        </div>
                        <p className=" text-xs md:text-sm opacity-50">2017 - 2020</p>
                    </div>
                </div>
            </section>


            <section className=" w-full bg-muted p-4 md:p-8 mt-12">
                <h4 className=" text-base font-semibold text-white">Get in touch :–)</h4>
                <div className=" md:inline-flex items-center gap-1 text-sm">
                    <span className="opacity-70">I can be easily reached at your convenience via</span>
                    <div className=" inline-flex items-center gap-1">
                        <Link href="https://wa.me/233546153204" className=" opacity-100">
                            <p className=" underline underline-offset-2">WhatsApp</p>
                        </Link>
                        <p>or</p>
                        <Link href="mailto:denzelobeng421@gmail.com" className=" opacity-100">
                            <p className=" underline underline-offset-2">Email</p>
                        </Link>
                    </div>

                </div>
                <div className=" flex items-center gap-1  md:gap-2 mt-6">
                    <Link href="https://wa.me/233546153204">
                        <Button className=" bg-[#4A4A4A] text-white/90 hover:text-white hover:bg-[#4A4A4A]/90"><BiLogoWhatsapp />WhatsApp</Button>
                    </Link>
                    <Link href="mailto:denzelobeng421@gmail.com">
                        <Button className=" bg-[#4A4A4A] text-white/90 hover:text-white hover:bg-[#4A4A4A]/90"><LuAtSign /> Email</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;