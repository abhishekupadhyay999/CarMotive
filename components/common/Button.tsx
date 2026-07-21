interface Props {
  children: React.ReactNode;
}

export default function PrimaryButton({ children }: Props) {
  return (
    <button className="rounded-full bg-[#FF5A1F] px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E64A19] hover:shadow-lg">
      {children}
    </button>
  );
}