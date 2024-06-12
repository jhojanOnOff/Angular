// Desestructuración Objetos

// interface AudioPlayer{
//     audioVolume: number;
//     songDuration: number;
//     song: string;
//     details:Details;
// }

// interface Details{
//     author:string;
//     year: number;
// }


// const audioPlayer: AudioPlayer = {
//     audioVolume:90,
//     songDuration: 36,
//     song: "dont speak",
//     details:{
//         author: 'UB40',
//         year:2000
//     }
// }

// // const song = 'New Song';

// const {song:anotherSong, songDuration:duration, details:detail} = audioPlayer;

// const {author:aut}=detail;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', aut);

//-------------------------------------------------------------------------------------------------------

//Desestructuración Arrays

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks = 'Not Found']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 3:', dbz[2]);

console.log('Personaje 3:', trunks);


export{};