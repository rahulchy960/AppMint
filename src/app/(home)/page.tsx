import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectList } from "@/modules/home/ui/components/projects-list";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      <section className="space-y-6 py-[10vh] 2xl:py-48" >
        <div className="flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="AppMint"
            width={48}
            height={48}
            className="hidden md:block"
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Build Something with AppMint
        </h1>
        <p className="text-lg text-muted-foreground text-center">
          Turn your ideas into code and build web apps with AI 
        </p>
        <div className="max-w-3xl mx-auto w-full">
          <ProjectForm />
        </div>
      </section>
      <ProjectList />
    </div>
  );
};

export default Page