const Temp = () => {
  return (
    <section
      // ref={me}
      className="flex h-screen w-full flex-col items-center justify-center gap-4"
    >
      <div className="group relative h-40 w-40 cursor-pointer">
        <img
          // src={Profile}
          alt="default"
          className="absolute inset-0 h-full w-full rounded-full object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          // src={data?.user?.avatarUrl}
          className="absolute inset-0 h-full w-full rounded-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          alt="hover"
        />
      </div>
      {/* <p className="font-bold text-2xl text-center">{data?.user?.name}</p> */}
      <p className="max-w-2/4 text-center text-gray-500">
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
