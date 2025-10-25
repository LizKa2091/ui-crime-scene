const sceneIds: Record<string, number> = {
   login: 1,
   shop: 2,
   blog: 3,
   dashboard: 4,
   landing: 5
}

export const getSceneIdByName = (sceneName: string): number | null => {
   return sceneIds[sceneName] ?? null;
}