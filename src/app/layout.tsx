import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { auth } from "@/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className="h-screen grid grid-cols-12 grid-rows-12">

        <header className="col-start-2 col-span-9 row-start-1 row-span-1 flex items-center justify-between mr-3">
          <Link href={"/"} className="border border-black p-5 rounded-xl hover:bg-red-500 duration-300 delay-75 ease-in-out font-mono">QuoteVote</Link>
          <Image src={session?.user?.image!} alt="user logo" height={56} width={56} className="rounded-full border" />
        </header>

        <section className="col-start-11 col-span-2 row-start-1 row-span-10 border-l flex flex-col justify-between text-lg">

          <div>
            <Link href={'/dashboard'} className="flex items-center hover:bg-gray-200 duration-200 ease-in-out p-1 m-1 rounded-md font-light">
              <Image src={'/dashboard.svg'} alt="dashboard icon" height={32} width={32} />
              Dashboard
            </Link>

            <Link href={'/browse'} className="flex items-center hover:bg-gray-200 duration-200 ease-in-out p-1 m-1 rounded-md font-light">
              <Image src={'/browse.svg'} alt="dashboard icon" height={32} width={32} />
              Browse
            </Link>
          </div>

          <div>
            <Link href={'/settings'} className="flex items-center hover:bg-gray-200 duration-200 ease-in-out p-1 m-1 rounded-md font-light">
              <Image src={'/settings.svg'} alt="dashboard icon" height={32} width={32} />
              Settings
            </Link>

            <Link href={'/api/auth/signout'} className="flex items-center hover:bg-gray-200 duration-200 ease-in-out p-1 m-1 rounded-md font-light">
              <Image src={'/signout.svg'} alt="dashboard icon" height={32} width={32} />
              Sign Out
            </Link>
          </div>

        </section>

        <main className="col-start-2 col-span-9 row-start-2 row-span-9">
          {children}
        </main>

        <footer className="col-start-1 col-span-12 row-start-11 row-span-2 flex flex-col items-center justify-center gap-3 border-t font-mono">
          QuoteVote
          <div className="flex gap-2">
            <Link href={'https://www.github.com/bpsix/quotevote'} target="_blank" className="p-2 hover:bg-gray-200 duration-200 ease-in-out rounded-md">
              <Image src={'/github.svg'} alt="github logo" height={24} width={24} />
            </Link>

            <Link href={'https://www.linkedin.com/in/brady-six'} target="_blank" className="p-2 hover:bg-gray-200 duration-200 ease-in-out rounded-md">
              <Image src={'/linkedin.svg'} alt="github logo" height={24} width={24} />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
