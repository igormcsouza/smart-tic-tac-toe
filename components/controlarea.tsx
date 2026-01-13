interface ControlAreaProps {
  opponentType: 'human' | 'ai';
  setOpponentType: (type: 'human' | 'ai') => void;
  gameState: 'idle' | 'playing' | 'ended';
  startingPlayer: 'X' | 'O';
  setStartingPlayer: (player: 'X' | 'O') => void;
  explorationRate: number;
  setExplorationRate: (rate: number) => void;
}

export default function ControlArea({ opponentType, setOpponentType, gameState, startingPlayer, setStartingPlayer, explorationRate, setExplorationRate }: ControlAreaProps) {
  const isToggleEnabled = gameState === 'idle' || gameState === 'ended';
  const isStartsWithEnabled = isToggleEnabled && opponentType === 'ai';
  const isSliderEnabled = isStartsWithEnabled;

  return (
    <div className="min-w-[200px] min-h-[100px] max-[500px]:min-w-full text-white border-2 border-white rounded-lg p-4">
      <h2 className="text-center m-0 mb-4 text-xl">Manage your Game</h2>
      <div className="flex flex-col gap-2">
        <label className="text-base font-medium">Opponent:</label>
        <div className={`flex rounded-lg overflow-hidden border-2 border-white ${!isToggleEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <button
            className={`flex-1 py-3 px-4 border-0 text-base cursor-pointer transition-all duration-300 font-medium disabled:cursor-not-allowed ${opponentType === 'ai' ? 'bg-red-600 text-white' : 'bg-transparent text-white hover:bg-white/10 hover:enabled:bg-white/10'}`}
            onClick={() => isToggleEnabled && setOpponentType('ai')}
            disabled={!isToggleEnabled}
          >
            AI
          </button>
          <button
            className={`flex-1 py-3 px-4 border-0 text-base cursor-pointer transition-all duration-300 font-medium disabled:cursor-not-allowed ${opponentType === 'human' ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white/10 hover:enabled:bg-white/10'}`}
            onClick={() => isToggleEnabled && setOpponentType('human')}
            disabled={!isToggleEnabled}
          >
            Human
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-base font-medium">Starts with:</label>
        <div className={`flex rounded-lg overflow-hidden border-2 border-white ${!isStartsWithEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <button
            className={`flex-1 py-3 px-4 border-0 text-base cursor-pointer transition-all duration-300 font-medium disabled:cursor-not-allowed ${startingPlayer === 'X' ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white/10 hover:enabled:bg-white/10'}`}
            onClick={() => isStartsWithEnabled && setStartingPlayer('X')}
            disabled={!isStartsWithEnabled}
          >
            X
          </button>
          <button
            className={`flex-1 py-3 px-4 border-0 text-base cursor-pointer transition-all duration-300 font-medium disabled:cursor-not-allowed ${startingPlayer === 'O' ? 'bg-red-600 text-white' : 'bg-transparent text-white hover:bg-white/10 hover:enabled:bg-white/10'}`}
            onClick={() => isStartsWithEnabled && setStartingPlayer('O')}
            disabled={!isStartsWithEnabled}
          >
            O
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="text-base font-medium">
          Exploration Rate: <span className="font-bold text-[#28a745]">{explorationRate.toFixed(2)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={explorationRate}
          onChange={(e) => setExplorationRate(parseFloat(e.target.value))}
          disabled={!isSliderEnabled}
          className="exploration-slider"
        />
      </div>
    </div>
  )
}
