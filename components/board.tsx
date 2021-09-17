import Square from "./square";

export default function Board () {
  return (
    <table>
      <tr>
        <td><Square /></td>
        <td className="vert"><Square /></td>
        <td><Square /></td>
      </tr>
      <tr>
        <td className="hori"><Square /></td>
        <td className="vert hori"><Square /></td>
        <td className="hori"><Square /></td>
      </tr>
      <tr>
        <td><Square /></td>
        <td className="vert"><Square /></td>
        <td><Square /></td>
      </tr>
    </table>
  )
}