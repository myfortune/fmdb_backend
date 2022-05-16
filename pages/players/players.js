import {PlayersDB } from '../../db/playersDB.js';

export default function PlayersTable ({ allPlayers}) {
    return (
        <ul>
        {/*{allPlayers.map(player => <li>{player.displayName + " " + player.overall}</li>)}*/}
        <li> haha </li>
        </ul>

)}

export async function getAllPlayers(){
    const allPlayers = all();
    return {
        props: {
            allPlayers
        }
    }

}

