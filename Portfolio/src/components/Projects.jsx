import Card from "../utils/Card";

export default function Projects() {
  return (
    <section className="w-full static min-h-full overflow-y-auto overflow-x-hidden bg-[#101922] p-2">
      <div className="h-1/3 flex flex-col justify-center">
        <p className="font-bold my-2">Projects I've Built</p>
        <p className="font-extralight my-2">
          Here are some of the projects I am proud to have worked on.
        </p>
      </div>

      <div className="flex flex-wrap  justify-evenly gap-x-4 gap-y-8 mt-6">
        <Card
          image="course_app.png"
          name="Course app"
          url="https://courseaapp.netlify.app/"
          description="lorem alj alkjf f a;kfj  slkdjfls slkdjl"
          techstack={[
            "React",
            "TailwindCSS",
            "JavaScript",
            "MongoDB",
            "node.js",
            "Express.js",
          ]}
        />
        <Card
          image="ReactMeals.png"
          name="Restaurant app"
          url="https://rrestaurant-app.netlify.app/"
          description="lorem alj alkjf f a;kfj  slkdjfls slkdjl"
          techstack={[
            "React",
            "TailwindCSS",
            "JavaScript",
            "MongoDB",
            "node.js",
            "Express.js",
          ]}
        />
        <Card
          image="portfolio.png"
          name="Portfolio Website"
          url="https://venukommineni.netlify.app/"
          description="lorem alj alkjf f a;kfj  slkdjfls slkdjl"
          techstack={[
            "React",
            "TailwindCSS",
            "JavaScript",
            "MongoDB",
            "node.js",
            "Express.js",
          ]}
        />
        <Card
          image="course_app.png"
          name="Course app"
          url="https://courseaapp.netlify.app/"
          description="lorem alj alkjf f a;kfj  slkdjfls slkdjl"
          techstack={[
            "React",
            "TailwindCSS",
            "JavaScript",
            "MongoDB",
            "node.js",
            "Express.js",
          ]}
        />
      </div>
    </section>
  );
}
