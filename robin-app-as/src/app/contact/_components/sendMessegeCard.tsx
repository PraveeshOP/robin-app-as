export default function SendMessegeCard() {
  return (
    <div className="flex flex-col gap-4 w-full bg-gray-900 p-6 rounded-lg">
      <h1 className="text-2xl font-bold">Send us a message</h1>
      <p className="text-gray-400">
        Have a question or want to work together? Fill out the form below and
        we'll get back to you as soon as possible.
      </p>
      <form className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex-1">
            <input
              type="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 bg-black"
            />
          </div>
          <div className="flex-1">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 bg-black"
            />
          </div>
        </div>
        <input
          type="phone"
          placeholder="Phone Number"
          className="w-full p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 bg-black"
        />
        <input
          type="subject"
          placeholder="Subject"
          className="w-full p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 bg-black"
        />
        <textarea
          placeholder="Your Message ..."
          className="w-full p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none border border-gray-700 bg-black"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#42a9b8] text-white rounded-lg hover:bg-[#42a9b8]/90 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
