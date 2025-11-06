import { useAppSelector } from "../store/store"
import type { ISceneProgress } from "../types/crimeTypes";

export const useScenesProgress = () => {
   const { scenesProgress } = useAppSelector((state) => state.crime);

   if (!scenesProgress || !scenesProgress.length) return null;

   const activeScenes: ISceneProgress[] = scenesProgress.filter((scene) => scene.status !== "complete");

   const hasProgress: boolean = activeScenes.some((scene) => scene.status !== 'new');

   if (!hasProgress) return activeScenes[0];

   const currentScene: ISceneProgress | undefined = activeScenes.find((scene) => scene.status === "in progress");
   if (currentScene) return currentScene;

   const nextScene: ISceneProgress | undefined = activeScenes.find((scene) => scene.status === "new");
   
   return nextScene || null;
}