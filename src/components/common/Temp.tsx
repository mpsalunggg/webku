const Temp = () => {
  return (
    <section
      // ref={me}
      className="w-full h-screen flex items-center justify-center flex-col gap-4"
    >
      <div className="relative w-40 h-40 group cursor-pointer">
        <img
          // src={Profile}
          alt="default"
          className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-full"
        />
        <img
          // src={data?.user?.avatarUrl}
          className="absolute rounded-full inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          alt="hover"
        />
      </div>
      {/* <p className="font-bold text-2xl text-center">{data?.user?.name}</p> */}
      <p className="text-gray-500 text-center max-w-2/4">
        With over{' '}
        <span className="font-bold text-yellow-500">
          {/* {data?.user?.totalCommit?.totalCommitContributions} */}
        </span>{' '}
        commits across{' '}
        <span className="font-bold text-yellow-500">
          {/* {data?.user?.totalRepositories?.totalCount} */}
        </span>{' '}
        repositories, I actively contribute to both personal and open-so urce
        projects to sharpen my skills and support the developer community.
      </p>
      {/* <Menu /> */}
    </section>
  )
}

export default Temp
