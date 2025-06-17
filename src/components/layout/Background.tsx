const Background = () => {
  return (
    <div className="inset-0 bg-white pointer-events-none">
      <div className="absolute top-1/6 -left-20 w-96 h-96 bg-yellow-500 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-500 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-yellow-500 rounded-full opacity-25 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-yellow-500 rounded-full opacity-25 blur-3xl"></div>
    </div>
  )
}

export default Background
