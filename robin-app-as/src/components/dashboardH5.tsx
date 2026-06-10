export default function DashboardH5() {
  return (
    <div className="flex flex-col gap-20 w-full items-center justify-center">
      <div className="flex justify-between w-[90%] bg-gray-900 p-8 rounded-lg gap-10">
        <div className="flex flex-col gap-4 ml-10">
          <h1 className="text-5xl">Ready to start your project?</h1>
          <p className="mt-2 text-gray-400">
            Let's turn your idea into a powerful digital solution.
          </p>
        </div>
        <div className="flex items-center justify-center mr-10">
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
