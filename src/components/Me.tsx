
export default function Me() {
  return (
    <div className="relative">
        <img src="/6.jpg" alt=""  className="w-full rounded-xl h-[650px] object-cover"/>
        <div className="absolute w-2/6 rounded-bl-xl top-0 right-0 bg-white h-[60px]">
            <div className='absolute w-[25px] h-[25px] rounded-full bg-transparent -left-[25px] top-0 shadow-[10px_-12px_0px_white]'></div>
            <div className='absolute w-[25px] h-[25px] rounded-full bg-transparent -bottom-[25px] right-0 shadow-[10px_-12px_0px_white]'></div>
        </div>
    </div>
  )
}
