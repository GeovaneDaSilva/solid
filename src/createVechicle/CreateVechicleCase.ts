import { Vehicle } from "../entities/IVehicle";
import { IVehicleRepository } from "../repositories/IVehicle";
import { CreateVehicleDTO } from "./CreateVechicleDTO";

export class CreateVehicle {

  constructor(private vehicleRepository: IVehicleRepository) {

  }

  async execut(data: CreateVehicleDTO) {
    const vehicleExists = await this.vehicleRepository.findById(data.id)

    if (vehicleExists) {
      throw new Error('Vehicle exists in data base')
    }

    const vehicle = new Vehicle(data)
    await this.vehicleRepository.save(vehicle)

  }
}