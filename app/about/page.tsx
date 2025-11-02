import { Slash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiLink2 } from "react-icons/fi";

const AboutPage = () => {
    return (
        <div>
            <section className=" sticky top-0 z-20 text-sm">
                <div className=" w-full flex items-center justify-between px-4 bg-muted py-1.5">
                    <Link href="#">
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

            <section></section>
        </div>
    );
}

export default AboutPage;