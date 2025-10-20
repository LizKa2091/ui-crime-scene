export type currScene = 'login' | 'shop' | 'blog' | null;
export type sceneStatus = 'new' | 'in progress' | 'complete';

export interface ICrimeState {
   currScene: number | null;
   errors: IErrorItem[];
   foundErrors: number[];
   foundCount: number;
   scenesProgress: ISceneProgress[];
   isComplete: boolean;
}

export interface ISceneProgress {
   id: number;
   sceneName: string;
   status: sceneStatus;
}

export interface IErrorItem {
   id: number;
   element: string;
   description: string;
}