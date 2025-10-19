const Background = () => {
  return (
    <div className="pointer-events-none inset-0 bg-white">
      <div className="absolute top-1/6 -left-20 h-96 w-96 rounded-full bg-yellow-500 opacity-30 blur-3xl"></div>
      <div className="absolute top-40 right-32 h-24 w-24 rounded-full bg-yellow-500 opacity-30 blur-2xl"></div>
      <div className="absolute -right-20 bottom-20 h-[400px] w-[400px] rounded-full bg-yellow-500 opacity-25 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-36 w-36 rounded-full bg-yellow-500 opacity-25 blur-3xl"></div>
    </div>
  )
}

export default Background
