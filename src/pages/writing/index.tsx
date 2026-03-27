import { AnimatedLines } from "@/components/common/Background"

const WritingPage = () => {
  return (
    <main className="bg-background min-h-screen">
        <div className="pt-20">
            <section className="relative px-6 py-12">
                <div className="absolute -top-12 left-1/2 w-full max-w-4xl -translate-x-1/2 transform">
                    <AnimatedLines className="opacity-30" />
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="mb-16">
                        <h1 className="mb-6 text-4xl font-light md:text-5xl">
                            Writing
                        </h1>
                    </div>

                    <p>Sooooon...</p>
                </div>
            </section>
        </div>
    </main>
  )
}

export default WritingPage