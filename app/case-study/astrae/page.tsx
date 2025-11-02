import { Button } from "@/components/ui/button";
import BeforeAndAfter from "@/sections/before-after";
import { BusinessImpactTable } from "@/sections/business-impact-table";
import { TransformationTable } from "@/sections/transformation-table";
import { Slash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FiLink2 } from "react-icons/fi";
import { LuAtSign } from "react-icons/lu";

const AstraeCaseStudyPage = () => {
    return (
        <div>
            <section className=" sticky top-0 z-50 text-sm">
                <div className=" w-full flex items-center justify-between px-4 bg-muted py-1.5">
                    <Link href="#">
                        <span className="flex items-center px-2 py-1 gap-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors">
                            <p>Home</p>
                            <Slash className=" -rotate-24 size-4 opacity-50" />
                            <p>Astrae Design</p>
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
                <div className=" relative w-full h-[75dvh]">
                    <Image fill src="/assets/astrae.png" alt="Astrae Cover" className=" object-cover object-top" />
                </div>
            </section>

            <section className=" px-20 pt-16">
                <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20">
                    <div className="w-full lg:w-2/3">
                        <div className=" mb-4 md:mb-10">
                            <h2 className="text-2xl font-semibold text-white tracking-tight">Challenge</h2>
                            <p className="text-foreground mt-0.5 opacity-70 mb-4 text-sm">
                                Astrae is a Next.js landing page template and component library. By the time they engaged Bhyte Software, the marketing site had grown organically but suffered from an outdated layout, inconsistent components, and no scalable blog CMS. Despite a strong content pipeline, mobile performance and conversions lagged behind benchmarks.
                            </p>
                            <p className="text-foreground mt-0.5 opacity-70 mb-4 text-sm">
                                Key challenges we identified:
                            </p>
                            <ul>
                                <li>
                                    ⬥ Slow load times and heavy assets causing high bounce rates; poor Core Web Vitals on mobile.
                                </li>
                                <li>
                                    ⬥ Inconsistent branding and fragmented component styles that reduced trust and readability.
                                </li>
                                <li>
                                    ⬥ No first-class blog CMS—content updates required code deploys; limited editorial workflow and preview.
                                </li>
                                <li>
                                    ⬥ Leaky conversion funnel: unclear CTAs, multi-step sign-up, and no affiliate tracking to attribute referrals.
                                </li>
                            </ul>

                            <p className="text-foreground mt-6 opacity-70 mb-4 text-sm">
                                Our goals were to elevate the user experience and growth engine with:
                            </p>
                            <ul>
                                <li>
                                    ⬥ A modern, responsive landing experience built from a cohesive component library.
                                </li>
                                <li>
                                    ⬥ A Sanity-powered blog CMS with content modeling, previews, and role-based workflows.
                                </li>
                                <li>
                                    ⬥ Conversion-optimized CTAs and a streamlined sign-up flow integrated with Lemonsqueezy.
                                </li>
                                <li>
                                    ⬥ Performance and SEO overhaul: image optimization, semantic markup, and measurable Core Web Vitals gains.
                                </li>
                            </ul>

                            <p className="text-foreground mt-4 opacity-70 mb-4 text-sm">
                                We also had to preserve SEO equity during migration—maintaining URL structures, mapping content 1:1, and shipping redirects to avoid ranking volatility.
                            </p>

                            <p className="text-foreground mt-0.5 opacity-70 mb-4 text-sm">
                                Team Astrae partnered with Bhyte for our blend of product-led design, high-performance Next.js builds, and pragmatic growth focus.
                            </p>
                        </div>


                        <div className="w-full h-auto aspect-video relative overflow-clip rounded-lg  mb-4 md:mb-10">
                            <Image
                                src="/assets/astrae-showcase.png"
                                alt="Astrae dashboard image"
                                fill
                                className=" object-cover object-top"
                            />
                        </div>

                        <div className=" mb-4 md:mb-10">
                            <h2 className=" text-2xl font-semibold text-white tracking-tight">Solution</h2>
                            <p className="text-foreground mt-0.5 opacity-70 mb-4 text-sm">
                                We began with a 2-week discovery sprint—analytics audit, content inventory, and IA mapping—then shipped a cohesive visual system: typography, spacing, and components that express Astrae’s brand with clarity and speed.
                            </p>
                            <p className="text-foreground mt-0.5 opacity-70 mb-4 text-sm">
                                On the build, we upgraded to Next.js App Router, implemented route-level caching and image optimization, and introduced Sanity as the CMS. Editors now draft, preview, and schedule posts without code changes; reusable MDX-style components handle callouts, embeds, and code snippets.
                            </p>

                            <p className="text-foreground mt-0.5 opacity-70 mb-4 text-sm">
                                For growth, we redesigned the pricing and sign-up journey, integrated Lemonsqueezy checkout and affiliate attribution, and instrumented events for end-to-end funnel visibility. Technical SEO (schema, sitemaps, meta) plus performance budgets brought Core Web Vitals comfortably within targets.
                            </p>

                            <p className="text-foreground mt-0.5 opacity-70 mb-4 text-sm">
                                Here’s a brief overview of the transformation we achieved for Astrae in each aspect:
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-32 flex flex-col gap-3 md:gap-4">
                            <div className="bg-muted border rounded-lg p-4 md:p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Image
                                        src="/assets/astrae-icon.png"
                                        alt="Astrae logo"
                                        width={40}
                                        height={40}
                                        className="object-cover rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-medium">Astrae Design</h3>
                                        <p className="text-sm text-foreground opacity-70">www.astrae.design</p>
                                    </div>
                                </div>

                                <p className="text-sm md:text-[15px] text-foreground text-balance">
                                    Ship Your Next.js Sites 10X Faster. Astrae is a landing page template and component library built with Next.js, Tailwind CSS, Shadcn and Framer Motion.
                                </p>
                            </div>
                            <div className="bg-muted border rounded-lg p-4 md:p-6">
                                <div className="space-y-3">
                                    <h4 className="font-medium">The Results</h4>
                                    <ul className="space-y-1.5 list-disc list-inside text-sm md:text-[15px] text-foreground opacity-70">
                                        <li>
                                            <span>Mobile Performance: 97/100 (from 44/100)</span>
                                        </li>
                                        <li>
                                            <span>Core Web Vitals: LCP 1.9s, CLS 0.07 (within targets)</span>
                                        </li>
                                        <li>
                                            <span>Conversion Rate: 5.4% (+184% improvement)</span>
                                        </li>
                                        <li>
                                            <span>Organic Traffic Growth: +172% in 6 months</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TransformationTable />

            <BeforeAndAfter />

            <BusinessImpactTable />

            <section className=" w-full px-20">
                <h3 className=" text-2xl font-semibold text-white tracking-tight mb-2">
                    Key Features Implemented
                </h3>

                <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-12 mt-4">
                    <div>
                        <span className="text-xl font-semibold tracking-tighter">
                            Modular Marketing UI Library
                        </span>
                        <p className="text-foreground mt-0.5 opacity-70 text-balance mb-4 text-sm">
                            Delivered a cohesive, reusable component library (hero, pricing, CTA, cards) that keeps Astrae’s brand consistent and ships new pages in hours—not weeks.
                        </p>
                    </div>

                    <div>
                        <span className="text-xl font-semibold tracking-tighter">
                            Sanity CMS + Editorial Workflow
                        </span>
                        <p className="text-foreground mt-0.5 opacity-70 text-balance mb-4 text-sm">
                            Modeled blog content in Sanity with previews, drafts, and scheduled publishing. Authors can compose rich articles using portable blocks (callouts, embeds, code snippets) without dev support.
                        </p>
                    </div>

                    <div>
                        <span className="text-xl font-semibold tracking-tighter">
                            Conversion-Optimized Sign-Up Flow
                        </span>
                        <p className="text-foreground mt-0.5 opacity-70 text-balance mb-4 text-sm">
                            Reworked pricing and sign-up with clear CTAs, fewer steps, and trust cues. Integrated analytics for event tracking and funnel visibility to guide experiment cycles.
                        </p>
                    </div>

                    <div>
                        <span className="text-xl font-semibold tracking-tighter">
                            Lemonsqueezy Affiliate Integration
                        </span>
                        <p className="text-foreground mt-0.5 opacity-70 text-balance mb-4 text-sm">
                            Implemented an affiliate program powered by Lemonsqueezy—referral attribution, payouts, and dashboards—unlocking scalable partner-led growth.
                        </p>
                    </div>
                </div>

                <div className="w-full h-auto aspect-video relative overflow-clip rounded-lg mt-10">
                    <Image
                        src="/assets/astrae-login.png"
                        alt="Astrae login image"
                        fill
                        className=" object-cover object-top"
                    />
                </div>
            </section >

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

export default AstraeCaseStudyPage;