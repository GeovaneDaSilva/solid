import { Vehicle } from "../entities/IVehicle";

export interface IVehicleRepository {
  findById(id: number): Promise<Vehicle>
  save(vehicle: Vehicle): Promise<void>
}