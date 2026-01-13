interface ControlAreaProps {
  opponentType: 'human' | 'ai';
  setOpponentType: (type: 'human' | 'ai') => void;
  gameState: 'idle' | 'playing' | 'ended';
  startingPlayer: 'X' | 'O';
  setStartingPlayer: (player: 'X' | 'O') => void;
}

export default function ControlArea({ opponentType, setOpponentType, gameState, startingPlayer, setStartingPlayer }: ControlAreaProps) {
  const isToggleEnabled = gameState === 'idle' || gameState === 'ended';

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
        <div className={`toggle-switch ${!isToggleEnabled ? 'disabled' : ''}`}>
          <button
            className={`toggle-option ${startingPlayer === 'X' ? 'active player-x' : ''}`}
            onClick={() => isToggleEnabled && setStartingPlayer('X')}
            disabled={!isToggleEnabled}
          >
            X
          </button>
          <button
            className={`toggle-option ${startingPlayer === 'O' ? 'active player-o' : ''}`}
            onClick={() => isToggleEnabled && setStartingPlayer('O')}
            disabled={!isToggleEnabled}
          >
            O
          </button>
        </div>
      </div>
    </div>
  )
}
