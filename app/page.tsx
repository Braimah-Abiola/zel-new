import { Button } from "@/components/ui/button";
import ProjectCard from "@/sections/project-card";
import { Slash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FiLink2 } from "react-icons/fi";
import { LuAtSign } from "react-icons/lu";
import { PiClock, PiMapPinAreaLight } from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";

const HomePage = () => {
  return (
    <div className=" text-sm">
      <section className=" sticky top-0 z-20">
        <div className=" w-full flex items-center justify-between px-4 bg-muted py-1.5">
          <Link href="#">
            <span className="flex items-center px-2 py-1 gap-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
              <RiHome5Line className=" size-4" />
              <p>Home</p>
            </span>
          </Link>

          <Link href="#">
            <span className="flex items-center px-2 py-1 gap-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
              <FiLink2 className=" size-4" />
              <p>Copy Link</p>
            </span>
          </Link>
        </div>

        <div className=" flex items-center justify-center text-white text-sm py-1 bg-[#399E03]">
          <p>Update coming soon.</p>
        </div>
      </section>


      <section className=" w-full px-20 py-12">
        <Image width={52} height={52} src="/assets/zel.png" alt="Denzel" />
        <h1 className=" mt-4 font-semibold text-lg md:text-2xl tracking-tighter">UI/UX designer with focus on product thinking and craft.</h1>

        <div className=" mt-2 opacity-80">
          <p>I design and prototype digital products & visual interfaces.</p>
          <p>Welcome to my small corner of web.</p>
        </div>
        <div className=" mt-2">
          <p>Prev. <span className=" font-semibold">Astrae Design, Meeting IQ</span></p>
        </div>

        <div className=" w-full flex flex-wrap gap-6 mt-4">
          <div className=" flex items-center gap-2 text-foreground opacity-70 hover:opacity-100">
            <PiMapPinAreaLight className=" size-4" />
            <p>Accra, Ghana</p>
          </div>

          <div className=" flex items-center gap-2 text-foreground opacity-70 hover:opacity-100">
            <PiClock className=" size-4" />
            <p>{new Date().toLocaleString('en-US', {
              timeZone: 'Africa/Accra',
              hour: 'numeric',
              minute: '2-digit',
              hour12: true
            })}</p>
          </div>
        </div>
      </section>

      <section className=" w-full px-20">
        <span className=" opacity-50">Team</span>

        <div>
          <div className=" w-full border-b flex items-center justify-between py-2.5">
            <div className=" flex items-center gap-2">
              <Image width={20} height={20} className=" object-contain" src="/assets/bhyte.png" alt="Bhyte" />
              <div className=" inline-flex items-center gap-0.5">
                <span className=" text-sm font-semibold text-white">Bhyte Studios</span>
                <Slash className=" -rotate-20 size-4 opacity-50" />
                <p className=" opacity-50">Lead Designer</p>
              </div>
            </div>
            <p className=" text-sm opacity-50">2025</p>
          </div>

          <div className=" w-full border-b flex items-center justify-between py-2.5">
            <div className=" flex items-center gap-2">
              <Image width={20} height={20} className=" object-contain" src="/assets/nativex.png" alt="NativeX" />
              <div className=" inline-flex items-center gap-0.5">
                <span className=" text-sm font-semibold text-white">NativeX AI</span>
                <Slash className=" -rotate-20 size-4 opacity-50" />
                <p className=" opacity-50">Lead Product Designer</p>
              </div>
            </div>
            <p className=" text-sm opacity-50">2024</p>
          </div>

          <div className=" w-full flex items-center justify-between py-2.5">
            <div className=" flex items-center gap-2">
              <Image width={20} height={20} className=" object-contain" src="/assets/studio-ix.png" alt="Studio IX" />
              <div className=" inline-flex items-center gap-0.5">
                <span className=" text-sm font-semibold text-white">Studio IX</span>
                <Slash className=" -rotate-20 size-4 opacity-50" />
                <p className=" opacity-50">UI/UX Designer</p>
              </div>
            </div>
            <p className=" text-sm opacity-50">2020 – 2021</p>
          </div>
        </div>
      </section>

      <section className=" w-full px-20 mt-12 flex flex-col gap-8">
        <Link href="/case-study/astrae">
          <ProjectCard image="/assets/astrae-showcase.png" title="Astrae Design" description="Revamped website and increased conversions" role="Lead Designer" />
        </Link>

        <ProjectCard image="/assets/meetingiq.png" title="Meeting IQ" description="Meeting IQ is an AI-powered insights for smarter sales prep." role="Web Designer" />
        <ProjectCard image="/assets/skillura.png" title="Skillura" description="Skillura is designed to simplify hiring and training process for agencies." role="UI/UX Designer" />
        <ProjectCard image="/assets/fetchtalent.png" title="FetchTalent AI" description="FetchTalent AI interviews candidates by phone or video 20/7. Career site AI chatbots. Conversation AI SMS. Instant interviews." role="Web Designer" />

      </section>

      <section className=" w-full bg-muted p-8 mt-12">
        <h4 className=" text-base font-semibold text-white">Get in touch :–)</h4>
        <div className=" inline-flex items-center gap-1 text-sm">
          <span className="opacity-70">I can be easily reached at your convenience via</span>
          <Link href="" className=" opacity-100">
            <p className=" underline underline-offset-2">WhatsApp</p>
          </Link>
          <p>or</p>
          <Link href="" className=" opacity-100">
            <p className=" underline underline-offset-2">Email</p>
          </Link>

        </div>
        <div className=" flex items-center gap-2 mt-6">
          <Button className=" bg-[#4A4A4A] text-white/90 hover:text-white hover:bg-[#4A4A4A]/90"><BiLogoWhatsapp />WhatsApp</Button>
          <Button className=" bg-[#4A4A4A] text-white/90 hover:text-white hover:bg-[#4A4A4A]/90"><LuAtSign /> Email</Button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;