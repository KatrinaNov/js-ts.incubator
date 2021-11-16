import {CityType, GovernmentType, HouseType} from "../02/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
  city.houses = city.houses.filter(h => h.address.street.title !== street)
}
export function getBuildingWithStaffCountGreaterThen(buildings: Array<GovernmentType>, staff: number) {
  return buildings.filter(b => b.staffCount > staff)
}