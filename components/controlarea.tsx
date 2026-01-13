interface ControlAreaProps {
  opponentType: 'human' | 'ai';
  setOpponentType: (type: 'human' | 'ai') => void;
  gameState: 'idle' | 'playing' | 'ended';
}

export default function ControlArea({ opponentType, setOpponentType, gameState }: ControlAreaProps) {
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
    </div>
  )
}
