import { dummyShowsData } from "../assets/assets"
import { BlurCircle } from "../components/BlurCircle"
import { MovieCard } from "../components/MovieCard"

export const Movies = () => {
  return dummyShowsData.length>0 ? (
    <div className="relative my-40 mb-40 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurCircle top="150px" left="0px"/>
      <h1 className="text-lg font-semibold my-4">Now Showing</h1>
      <div className="flex flex-wrap gap-8 max-sm:justify-center">
        {dummyShowsData.map((show)=>{
          return <MovieCard key={show._id} movie={show}/>
        })}
        <BlurCircle bottom="50px" right="50px"/>
      </div>
    </div>
  ) : (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-3xl font-bold text-center">No Movies available</h1>
  </div>
  )
}
