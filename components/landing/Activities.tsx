import Image from "next/image";

const activities = [
  {
    name: "Train",
    detail: "Your way",
    image: "train",
    alt: "Athlete lifting a barbell in the gym",
  },
  {
    name: "Move",
    detail: "For what’s next",
    image: "move",
    alt: "Trail runner on an alpine mountain path",
  },
  {
    name: "Explore",
    detail: "Further",
    image: "explore",
    alt: "Hiker overlooking a mountain lake",
  },
];
export function Activities() {
  return (
    <section className="activities" aria-label="Energy for your lifestyle">
      {activities.map((activity) => (
        <article className="activity" key={activity.name}>
          <Image
            src={`/assets/${activity.image}.webp`}
            alt={activity.alt}
            fill
            sizes="(max-width: 600px) 100vw, 35vw"
          />
          <div className="activity-caption">
            <span className="red-rule" />
            <h2>{activity.name}</h2>
            <p>{activity.detail}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
