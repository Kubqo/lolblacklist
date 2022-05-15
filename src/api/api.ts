import { ProfileCoreStructure } from "../types/enums";

const riotApiPrefix = (region: string) =>
  `https://${region}.api.riotgames.com/`;
const riotApiKey = process.env.REACT_APP_RIOT_API_KEY;

const getAccountByRiotId = (nick: string) =>
  `lol/summoner/v4/summoners/by-name/${nick}?api_key=${riotApiKey}`;

export const getProfile = async (name: string, region: string) => {
  const response = await fetch(
    riotApiPrefix(region) + getAccountByRiotId(name)
  );
  const data: ProfileCoreStructure = await response.json();
  return data;
};
