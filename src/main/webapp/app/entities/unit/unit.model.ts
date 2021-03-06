import { ILand } from 'app/entities/land/land.model';

export interface IUnit {
  id?: number;
  name?: string;
  conversionFactor?: number;
  lands?: ILand[] | null;
}

export class Unit implements IUnit {
  constructor(public id?: number, public name?: string, public conversionFactor?: number, public lands?: ILand[] | null) {}
}

export function getUnitIdentifier(unit: IUnit): number | undefined {
  return unit.id;
}
