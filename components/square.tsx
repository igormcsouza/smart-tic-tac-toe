interface SquareType {
  value: string,
  onClick: () => void,
  isAiPiece?: boolean,
  isFaded?: boolean
}

export default function Square ({value, onClick, isAiPiece = false, isFaded = false}: SquareType) {
  const textColor = isAiPiece ? 'text-red-600' : 'text-white';
  const opacity = isFaded ? 'opacity-30' : 'opacity-100';
  
  return (
    <button 
      className={`w-full h-full text-center text-6xl max-[500px]:text-[32px] max-[500px]:p-0 max-[500px]:leading-none max-[500px]:h-[74px] max-[500px]:border-0 max-[500px]:flex max-[500px]:items-center max-[500px]:justify-center ${textColor} ${opacity} bg-transparent border-0 cursor-pointer hover:opacity-80 transition-opacity`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}