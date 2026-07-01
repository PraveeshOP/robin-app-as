export default function DashboardH5() {
  return (
    <div className="flex w-full items-center justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-[1600px] flex-col justify-between gap-6 rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8 md:flex-row md:items-center lg:px-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">Ready to start your project?</h2>
          <p className="mt-2 text-[var(--muted)]">
            Let&apos;s turn your idea into a powerful digital solution.
          </p>
        </div>
        <div className="flex items-center">
          <a href="/contact">
            <button className="bg-[#42a9b8] text-white px-5 py-3 rounded-lg">
              Get in Touch →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
