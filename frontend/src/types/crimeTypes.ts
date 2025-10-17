export type currScene = 'login' | 'shop' | 'blog' | null;

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
   status: 'new' | 'in progress' | 'complete';
}

export interface IErrorItem {
   id: number;
   element: string;
   description: string;
}
