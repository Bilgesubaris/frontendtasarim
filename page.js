import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Header Bileşeni */}
      <header className="bg-yellow-500 h-[50vh] flex flex-col items-center justify-center text-black text-center p-10">
        <h1 className="text-5xl font-bold">Let's create something</h1>
        <h1 className="text-5xl font-bold">Great together</h1>
      </header>

      {/* Ana İçerik */}
      <main className="flex justify-center items-center p-10">
        <h2 className="text-2xl text-gray-700">
          Start working on your Next.js and Tailwind CSS project!
        </h2>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-500 p-4 text-white text-center">
        <p className="text-white"> 350+   20 +</p>
      </footer>

      {/* İletişim Formu */}
      <footer className="bg-white p-10 shadow-lg">
      <div className="max-w-2xl text-left ml-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">We'd love to hear <br /> from you</h3>
          <form className="grid grid-cols-1 gap-4 w-full">
            <input type="text" placeholder="Name*" className="border p-4 rounded-md w-full text-lg" />
            <input type="email" placeholder="Email*" className="border p-4 rounded-md w-full text-lg" />
            <input type="url" placeholder="Website URL*" className="border p-4 rounded-md w-full text-lg" />
            <textarea placeholder="Project Details*" className="border p-4 rounded-md w-full h-32 text-lg"></textarea>
            <button type="submit" className="bg-black text-white font-bold py-3 rounded-md text-lg hover:bg-yellow-600">
              Send Proposal
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}
