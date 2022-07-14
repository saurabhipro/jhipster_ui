import { IProjectLand } from 'app/entities/project-land/project-land.model';
import { ICitizen } from 'app/entities/citizen/citizen.model';
import { IPaymentFile } from 'app/entities/payment-file/payment-file.model';
import { IPaymentAdvice } from 'app/entities/payment-advice/payment-advice.model';

export interface IKhatedar {
  id?: number;
  caseFileNo?: string;
  remarks?: string;
  khatedarStatus?: string | null;
  projectLand?: IProjectLand;
  citizen?: ICitizen;
  paymentFile?: IPaymentFile | null;
  paymentAdvice?: IPaymentAdvice | null;
}

export class Khatedar implements IKhatedar {
  constructor(
    public id?: number,
    public caseFileNo?: string,
    public remarks?: string,
    public khatedarStatus?: string | null,
    public projectLand?: IProjectLand,
    public citizen?: ICitizen,
    public paymentFile?: IPaymentFile | null,
    public paymentAdvice?: IPaymentAdvice | null
  ) {}
}

export function getKhatedarIdentifier(khatedar: IKhatedar): number | undefined {
  return khatedar.id;
}
