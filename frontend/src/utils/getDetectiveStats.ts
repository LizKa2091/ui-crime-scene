import { type RootState } from '../store/store';
import { type ISceneProgress } from '../types/crimeTypes';

export const getDetectiveStats = (state: RootState) => {
   const scenes = state.crime.scenesProgress;
   const totalScenes = scenes.length;
   const completedAmount = scenes.filter((scene: ISceneProgress) => scene.status === 'complete').length;

   const progressPercent = totalScenes ? Math.round((completedAmount / totalScenes) * 100) : 0;

   const rank =
      completedAmount === 0 ? 'Новичок'
         : completedAmount === 1 ? 'Стажёр UX-отдела'
         : completedAmount === 2 ? 'Старший аналитик'
         : 'Главный инспектор';

   return { totalScenes, completedAmount, progressPercent, rank };
};
