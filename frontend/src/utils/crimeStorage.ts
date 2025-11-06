import type { ISceneProgress } from "../types/crimeTypes";

export const loadCrimeProgress = () => {
   const data = localStorage.getItem('crimeProgress');

   return data ? JSON.parse(data) : null;
}

export const saveCrimeProgress = (scenesProgress: ISceneProgress[]) => {
   localStorage.setItem('crimeProgress', JSON.stringify(scenesProgress));
}