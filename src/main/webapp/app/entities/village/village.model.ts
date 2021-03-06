import { ISubDistrict } from 'app/entities/sub-district/sub-district.model';
import { ILand } from 'app/entities/land/land.model';

export interface IVillage {
  id?: number;
  name?: string;
  subDistrict?: ISubDistrict;
  lands?: ILand[] | null;
}

export class Village implements IVillage {
  constructor(public id?: number, public name?: string, public subDistrict?: ISubDistrict, public lands?: ILand[] | null) {}
}

export function getVillageIdentifier(village: IVillage): number | undefined {
  return village.id;
}
