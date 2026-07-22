"use client";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      {badge && (
        <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
          {badge}
        </span>
      )}

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg text-gray-600 leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}