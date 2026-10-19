export type Equipment = 'Máquinas' | 'Poleas' | 'Mancuernas' | 'Barras' | 'Peso corporal';
export type Exercise = {
  id: string; name: string; primary: string; secondary: string[]; equipment: Equipment[];
  sets: number; reps: string; rest: number; technique: string; mistakes: string[];
  alternatives: string[]; link?: string; day?: number; category: string;
};
export type DayPlan = { day: number; title: string; groups: string[]; goal: string; warmup: string[]; cooldown: string[]; exerciseIds: string[]; };
export type SetLog = { done: boolean; weight: string; reps: string; };
export type SessionState = { date: string; day: number; startedAt: number; completedAt?: number; logs: Record<string, SetLog[]>; substitutions: Record<string, string>; };
export type HistoryEntry = { date: string; day: number; durationMin: number; completedSets: number; volume: number; logs: Record<string, SetLog[]>; };
export type AppData = { plans: DayPlan[]; sessions: Record<string, SessionState>; history: HistoryEntry[]; savedAt: string; };
