interface Props {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FF5A1F]">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="text-[#FF5A1F]">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}