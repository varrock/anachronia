<h1 align="center">Anachronia: Ranch Out of Time</h1>

<div align="center">
  <strong><i>A TypeScript implementation of the Ranch Out of Time's breed ticks, nicknamed <strong>Prehistoric Potterington</strong></i></strong>
  <br>
  <br>


  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node-12.16.2-brightgreen?style=for-the-badge&colorB=026e00" alt="Node" />
  </a>
  
  <a href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/badge/typescript-3.9.5-brightgreen?style=for-the-badge&colorB=2b7489" alt="TypeScript" />
  </a>

  <a href="http://discord.js.org">
    <img src="https://img.shields.io/badge/discord.js-12.2.0-brightgreen?style=for-the-badge&colorB=168eef" alt="Discord.js" />
  </a>

  <a href="https://github.com/varrock/anachronia/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/dragonite/djangohat.svg?style=for-the-badge&colorB=61829F" alt="LICENSE" />
  </a>
</div>
<br>

## Features
- Regex Matching on individual animal commands, i.e. ___!pav___ will match ___!pavosaurus___
- A summary command, ___!all___, that sorts all upcoming breeding ticks and displays them in a formatted embed.
- Customizable ___!me___ command based on assigned Discord roles to restrict animals.
- Cron jobs that occur at ___:10, :30, :50___, 10 minutes before breed ticks that ping users and their assigned roles as a reminder for breeding ticks.

## Requirements
_All of the following constants must be updated in_ `utils/constants.ts`.
- Prefix, i.e. the symbol before which a command is used.
- Main channel ID, where messages and timed reminders are sent.

## Custom Role Pinging
_This is required for timed reminders to ping a user with a given role. The following roles must be made with the exact following names:_
- Frog
- Salamander
- Jadinko
- Varanusaur
- Arcane/Brutish/Scimitops
- Asciatops/Bagrada/Corbicula/Spicati
- Malletops/Oculi
- Pavosaurus



## Installation

A `.env` file with your bot's token as the variable `TOKEN` must be stored at the root directory.

```
$ npm install
$ tsc
$ npm start
```

## Libraries
- [discord.js](https://discord.js.org/)
- [InversifyJS](http://inversify.io/)
- [moment.js](https://momentjs.com/)
- [node-cron](https://www.npmjs.com/package/node-cron)