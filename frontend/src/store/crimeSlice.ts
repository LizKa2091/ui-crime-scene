import { createSlice } from '@reduxjs/toolkit';
import type { ICrimeState } from '../types/crimeTypes';
import { crimeErrors } from '../data/crimeData';
import { loadCrimeProgress, saveCrimeProgress } from '../utils/crimeStorage';

const initialScenes = [
   { id: 1, sceneName: 'login', status: 'new' },
   { id: 2, sceneName: 'shop', status: 'new' },
   { id: 3, sceneName: 'blog', status: 'new' },
   { id: 4, sceneName: 'dashboard', status: 'new' },
   { id: 5, sceneName: 'landing', status: 'new' }
];

const savedScenes = loadCrimeProgress();

const initialState: ICrimeState = {
   currScene: null,
   errors: [],
   foundErrors: [],
   foundCount: 0,
   scenesProgress: savedScenes || initialScenes,
   isComplete: false
};

const crimeSlice = createSlice({
   name: 'crime',
   initialState: initialState,
   reducers: {
      setScene: (state, action) => {
         const { sceneId } = action.payload;

         state.currScene = sceneId;

         const sceneName = state.scenesProgress.find(scene => scene.id === sceneId)?.sceneName;
         state.errors = sceneName ? crimeErrors[sceneName] : [];

         state.foundErrors = [];
         state.foundCount = 0;
         state.isComplete = false;

         const scene = state.scenesProgress.find((scene) => scene.id === sceneId);

         if (scene) scene.status = 'in progress';

         saveCrimeProgress(state.scenesProgress);
      },
      markFoundError: (state, action) => {
         const { errorId } = action.payload;

         if (!state.foundErrors.includes(errorId)) {
            state.foundErrors.push(errorId);
            state.foundCount = state.foundErrors.length;

            const allFound =
               state.errors.length > 0 &&
               state.errors.every((err) => state.foundErrors.includes(err.id));

            if (allFound) {
               state.isComplete = true;

               const scene = state.scenesProgress.find(
                  (scene) => scene.id === state.currScene
               );
               if (scene) scene.status = 'complete';
            }
         }

         saveCrimeProgress(state.scenesProgress);
      },
      resetScene: (state) => {
         state.currScene = null;
         state.errors = [];
         state.foundErrors = [];
         state.isComplete = false;

         saveCrimeProgress(state.scenesProgress);
      }
   }
});

export const { setScene, markFoundError, resetScene } = crimeSlice.actions;
export default crimeSlice.reducer;
