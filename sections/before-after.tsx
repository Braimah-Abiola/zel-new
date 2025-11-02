import { Compare } from "./compare";

const BeforeAndAfter = () => {
    return (
        <section className=" relative w-full px-4 md:px-20">
            <h3 className=" text-2xl font-semibold text-white tracking-tight mb-4">
                Before & After Design
            </h3>
            <Compare
                firstImage="/assets/astrae-before.png"
                secondImage="/assets/astrae-after.png"
                firstImageClassName="object-cover object-left-top"
                secondImageClassname="object-cover object-left-top"
                className=" w-full h-auto aspect-video"
                slideMode="drag"
            />
        </section>
    );
}

export default BeforeAndAfter;