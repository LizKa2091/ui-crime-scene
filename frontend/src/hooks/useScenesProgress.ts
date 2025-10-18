import { useAppSelector } from "../store/store"
import type { ISceneProgress } from "../types/crimeTypes";

export const useScenesProgress = () => {
   const { scenesProgress } = useAppSelector((state) => state.crime);

   if (Object.keys(scenesProgress).length) {
      let lastActiveScene: ISceneProgress | null = null;
      let isAllComplete: boolean = true;

      scenesProgress.forEach(scene => {
         if (scene.status !== 'complete') {
            isAllComplete = false;
         }

         if (scene.status === 'in progress') {
            lastActiveScene = scene;
         }
      });
      
      if (lastActiveScene) return lastActiveScene;
      else if (isAllComplete) return scenesProgress.at(-1);
      else return scenesProgress[0];
   }
}