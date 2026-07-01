export default function StartProject() {
  return (
    <div className="flex w-full items-center justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-[1600px] flex-col justify-between gap-8 rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8 md:flex-row md:items-center lg:px-12">
        <div className="flex max-w-3xl flex-col gap-4">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Ready to start your next project?
          </h2>
          <p className="mt-2 text-[var(--muted)]">
            Let&apos;s discuss how we can help you turn your idea into a
            powerful digital solution.
          </p>
          <a href="/contact" className="self-start">
            <button className="bg-[#42a9b8] text-white px-5 py-3 rounded-lg">
              Get in Touch →
            </button>
          </a>
        </div>
        <div className="flex shrink-0 items-center justify-center">
          <img
            src="/LaptopCoding.webp"
            alt="Contact Us Image"
            className="h-auto max-h-52 w-full rounded-lg object-cover sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
