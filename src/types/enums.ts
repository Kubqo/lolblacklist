export enum regionsType {
  EUNE = "EUN1",
  BR = "BR1",
  EUW = "EUW1",
  JP = "JP1",
  LA = "LA1",
  NA = "NA1",
  OCE = "OC1",
  TR = "TR1",
  RU = "RU",
}

export const regions = [
  { name: "EUNE", value: regionsType.EUNE },
  { name: "BR", value: regionsType.BR },
  { name: "EUW", value: regionsType.EUW },
  { name: "JP", value: regionsType.JP },
  { name: "LA", value: regionsType.LA },
  { name: "NA", value: regionsType.NA },
  { name: "OCE", value: regionsType.OCE },
  { name: "TR", value: regionsType.TR },
  { name: "RU", value: regionsType.RU },
];

export type ProfileCoreStructure = {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};
