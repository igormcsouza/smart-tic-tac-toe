import { useState } from "react";
import Square from "./square";

export default function Board () {
  const [turnPlayer, setTurnPlayer] = useState("X")

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td className="vert">
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td>
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
        </tr>
        <tr>
          <td className="hori">
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td className="vert hori">
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td className="hori">
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
        </tr>
        <tr>
          <td>
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td className="vert">
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td>
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
        </tr>
      </tbody>
    </table>
  )
}