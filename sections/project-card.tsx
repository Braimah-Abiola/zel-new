import Image from "next/image";

const ProjectCard = ({ title, description, role, image }: { title: string, description: string, role: string, image: string }) => {
    return (
        <div>
            <div>
                <h2 className=" text-lg font-semibold">{title}</h2>
                <p className=" opacity-50">{role}</p>
            </div>
            <p className=" mt-2 opacity-70">{description}</p>
            <div className=" w-full h-auto aspect-video relative mt-6">
                <Image fill src={image} alt={title} className="rounded-xl object-cover" />
            </div>
        </div>
    );
}

export default ProjectCard;