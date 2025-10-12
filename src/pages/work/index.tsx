import { AnimatedLines } from '@/components/common/Background'

const WorkPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20">
        <section className="py-24 px-6 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <AnimatedLines className="opacity-30" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                Working Experience
              </h1>
              <p className="text-lg text-muted-foreground">
                Understanding the person behind the work
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default WorkPage
