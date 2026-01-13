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
    <div className="control-area">
      <h2 className="control-area-title">Manage your Game</h2>
      <div className="toggle-container">
        <label className="toggle-label">Opponent:</label>
        <div className={`toggle-switch ${!isToggleEnabled ? 'disabled' : ''}`}>
          <button
            className={`toggle-option ${opponentType === 'ai' ? 'active ai' : ''}`}
            onClick={() => isToggleEnabled && setOpponentType('ai')}
            disabled={!isToggleEnabled}
          >
            AI
          </button>
          <button
            className={`toggle-option ${opponentType === 'human' ? 'active human' : ''}`}
            onClick={() => isToggleEnabled && setOpponentType('human')}
            disabled={!isToggleEnabled}
          >
            Human
          </button>
        </div>
      </div>
      <div className="toggle-container">
        <label className="toggle-label">Starts with:</label>
        <div className={`toggle-switch ${!isStartsWithEnabled ? 'disabled' : ''}`}>
          <button
            className={`toggle-option ${startingPlayer === 'X' ? 'active player-x' : ''}`}
            onClick={() => isStartsWithEnabled && setStartingPlayer('X')}
            disabled={!isStartsWithEnabled}
          >
            X
          </button>
          <button
            className={`toggle-option ${startingPlayer === 'O' ? 'active player-o' : ''}`}
            onClick={() => isStartsWithEnabled && setStartingPlayer('O')}
            disabled={!isStartsWithEnabled}
          >
            O
          </button>
        </div>
      </div>
      <div className="slider-container">
        <label className="slider-label">
          Exploration Rate: <span className="slider-value">{explorationRate.toFixed(2)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={explorationRate}
          onChange={(e) => setExplorationRate(parseFloat(e.target.value))}
          disabled={!isSliderEnabled}
          className={`exploration-slider ${!isSliderEnabled ? 'disabled' : ''}`}
        />
      </div>
    </div>
  )
}
