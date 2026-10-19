import { describe, expect, it } from 'vitest';
import { defaultPlans, exercises } from './data';
describe('rutina semanal',()=>{
 it('define cinco sesiones de lunes a viernes',()=>{expect(defaultPlans.map(p=>p.day)).toEqual([1,2,3,4,5]);});
 it('todos los ejercicios de las sesiones existen en la biblioteca',()=>{for(const plan of defaultPlans)for(const id of plan.exerciseIds)expect(exercises.some(e=>e.id===id),`${id} missing`).toBe(true);});
 it('cada ejercicio tiene técnica, alternativas y series válidas',()=>{for(const e of exercises){expect(e.technique.length).toBeGreaterThan(20);expect(e.alternatives.length).toBeGreaterThan(0);expect(e.sets).toBeGreaterThan(0);expect(e.rest).toBeGreaterThan(0);}});
 it('viernes incluye trabajo de piernas y abdomen con volumen complementario',()=>{const friday=defaultPlans.find(p=>p.day===5)!;expect(friday.exerciseIds).toContain('dead-bug');expect(friday.exerciseIds).toContain('split-squat');expect(friday.exerciseIds).toContain('rdl-db');});
});
