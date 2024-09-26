export default function page() {
  return (
    <div className="flex flex-col h-[760px] bg-background">

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Welcome to MyPaymentApp</h2>
            <p className="text-lg mb-6">Boost your productivity with our amazing features!</p>

          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://nextjs.org/icons/next.svg"
              width={300} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>

      <footer className="w-full px-4 py-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          © 2023 MyAwesomeApp. All rights reserved.
        </div>
      </footer>
    </div>
  )
}