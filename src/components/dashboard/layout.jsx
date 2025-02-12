import Logo from "../Logo"

export default function Layout() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">

        <aside className="w-full flex-none md:w-64 bg-indigo-300">

            <div className="flex h-full flex-col px-3 py-4 md:px-2">

              <h1 href="/" className="mb-2 flex h-20 items-end justify-start md:h-40">
                <div className="w-32 text-white md:h-40">
                  <Logo/>
                </div>
              </h1>


            </div>
        </aside>
      
    </div>
  )
}
