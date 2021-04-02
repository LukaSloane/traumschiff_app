export class Events {
  id: number;
  ship_id: number;
  connection_id: number;
  delete_flag: boolean;
  stay_from: Date;
  stay_to: Date;
  terminal: string;
  destinantion: string;
  start: string;
  type: string;
  ship_name: string;
  pictures: Array<string>;
}
