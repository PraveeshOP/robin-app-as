export default function NavBar() {
  return (
    <div className="flex justify-between items-center w-full px-40">
      <div className="items-center justify-left flex h-20 mt-4">
        <h1 className="text-5xl font-bold">Robin App AS</h1>
      </div>
      <div className="items-center justify-right flex h-20 mt-4">
        <ul className="flex space-x-30">
          <li>
            <a href="/" className="text-lg font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-bold">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-bold">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
