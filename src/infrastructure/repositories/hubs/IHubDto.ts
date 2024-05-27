export default interface IHubsDto {
  id: string;
  hubCode: string;
  location: string;
  name: string;
  stateCode: string;
  state: string;
  createdOn: string | null;
  createdBy: string;
  updatedOn: string | null;
  updatedBy: string | null;
  isActive: string | null;
}
