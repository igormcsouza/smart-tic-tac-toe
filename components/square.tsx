interface SquareType {
  value: string,
  onClick: () => void
}

export default function Square ({value, onClick}: SquareType) {
  return (
    <button 
      className="btn btn-overlay text-white square" 
      onClick={onClick}
    >
      {value}
    </button>
  )
}