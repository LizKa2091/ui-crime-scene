import { createSlice } from '@reduxjs/toolkit';
import type { ICrimeState } from '../types/crimeTypes';
import { crimeErrors } from '../data/crimeData';

const initialState: ICrimeState = {
   currScene: null,
   errors: [],
   foundErrors: [],
   foundCount: 0,
   scenesProgress: [
      { id: 1, sceneName: 'login', status: 'new' },
      { id: 2, sceneName: 'shop', status: 'new' },
      { id: 3, sceneName: 'blog', status: 'new' },
      { id: 4, sceneName: 'dashboard', status: 'new' },
      { id: 5, sceneName: 'landing', status: 'new' },
   ],
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
      },
      resetScene: (state) => {
         state.currScene = null;
         state.errors = [];
         state.foundErrors = [];
         state.isComplete = false;
      }
   }
});

export const { setScene, markFoundError, resetScene } = crimeSlice.actions;
export default crimeSlice.reducer;
