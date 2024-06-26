import React from 'react'
import { useState ,useRef } from 'react'
import {useClickAway} from 'react-use'

const Search = () => {
  const [query, setQuery] = useState('')
  const [focus, setFocus] = useState(false)
  const ref = useRef();
  useClickAway(ref, () => {
    setFocus(false)
  });
  return (
   <div ref={ref} className='min-h-[2rem] h-[3.313rem] mb-3 flex items-center relative sticky top-0 bg-black z-10'>
    <label className="h-[2.688rem] rounded-full bg-[#202327] w-full relative group border border-transparent focus-within:bg-black focus-within:border-[#1d9bf0]">
    <div className='text-[#71767b] flex items-center justify-center absolute w-[3.5rem] h-full top-0 left-0 pointer-events-none '>
        <svg
						viewBox="0 0 24 24"
						className="h-[1.125rem] min-w-[2rem]"
					>
						<path
							fill="currentColor"
							d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
						/>
					</svg>
      </div>
        <input placeholder='Ara' type="text"
          value={query}
          onFocus={()=>setFocus(true)}
          onChange={e=>setQuery(e.target.value)}
          className='w-full h-full rounded-full bg-transparent outline-none pl-[3.5rem] text-[0.938rem] text-[#C6C7C9] ' />
        {(query && focus )&&(
          <button onClick={()=>setQuery('')} className='w-[1.375rem] h-[1.375rem] flex items-center justify-center rounded-full bg-[#1d9bf0] text-[black] absolute min-w-[1.375rem] top-1/2 -translate-y-1/2 right-3 
           min-w-[1.375rem] absolute'>
            <svg height={10} width={10}  viewBox="0 0 15 15"><path fill='currentColor' d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path></svg>
          </button>
        )}
    </label>
    {focus && (
				<div
					className="absolute w-[21.875rem] top-full -left-px -translate-y-1 bg-[black] shadow-box max-h-[calc(80vh-3.313rem)] rounded-lg text-center min-h-[6.25rem]">
					<p className="p-3 pt-5 text-[#71767b] leading-5">
						Kişileri, listeleri veya anahtar kelimeleri aramayı dene
					</p>
				</div>
			)}
   </div>
  )
}

export default Search